// Screecher Jones' GPS Pirate Tour App — multi-destination

// ──────────────────────────────────────────────
// DESTINATION CONFIG
// Reads ?dest= URL param. Defaults to 'lbi'.
// Supported: lbi | asbury | wildwood
// ──────────────────────────────────────────────
const _destParam = (function() {
  try { return new URLSearchParams(window.location.search).get('dest') || 'lbi'; } catch(_) { return 'lbi'; }
})();

const DESTINATION_CONFIG = {
  lbi: {
    id: 'lbi',
    title: 'Long Beach Island, New Jersey',
    shortTitle: 'Long Beach Island',
    locationLabel: 'LONG BEACH ISLAND, NEW JERSEY',
    heroHeadline: 'Follow the Treasure Map<br/>to <em>Long Beach Island</em>',
    heroTagline: 'Screecher Jones leads ye on an 18-mile GPS pirate tour of LBI\'s most legendary spots.',
    splashTagline: '18 miles of buried gold, sunken ships, and secrets — told by the saltiest pirate seagull to ever haunt the Jersey Shore.',
    dirNorthDesc: 'Barnegat Light → Holgate',
    dirSouthDesc: 'Holgate → Barnegat Light',
    selfieLocation: 'Long Beach Island',
    svgBadge: 'I plundered 25 stops on LBI 🏴\u200D☠️',
    svgLocation: 'LONG BEACH ISLAND, NJ',
    totalStops: 25,
    getStopsFn: function(dir) { return typeof getStops === 'function' ? getStops(dir) : []; }
  },
  asbury: {
    id: 'asbury',
    title: 'Asbury Park, New Jersey',
    shortTitle: 'Asbury Park',
    locationLabel: 'ASBURY PARK, NEW JERSEY',
    heroHeadline: 'Follow the Treasure Map<br/>to <em>Asbury Park</em>',
    heroTagline: 'Screecher Jones leads ye on a GPS walking tour of Asbury Park\'s most haunted history.',
    splashTagline: 'Music legends, Victorian ghosts, and boardwalk secrets — told by the saltiest pirate seagull on the Jersey Shore.',
    dirNorthDesc: 'Deal Lake Flume → Wesley Lake',
    dirSouthDesc: 'Wesley Lake → Deal Lake Flume',
    selfieLocation: 'Asbury Park',
    svgBadge: 'I plundered 18 stops in Asbury Park 🏴\u200D☠️',
    svgLocation: 'ASBURY PARK, NJ',
    totalStops: 18,
    getStopsFn: function(dir) { return typeof getAsburyStops === 'function' ? getAsburyStops(dir) : []; }
  },
  wildwood: {
    id: 'wildwood',
    title: 'Wildwood, New Jersey',
    shortTitle: 'The Wildwoods',
    locationLabel: 'THE WILDWOODS, NEW JERSEY',
    heroHeadline: 'Follow the Treasure Map<br/>to <em>The Wildwoods</em>',
    heroTagline: 'Screecher Jones leads ye on a GPS driving tour of Wildwood\'s Doo Wop shores and buried legends.',
    splashTagline: 'Doo Wop motels, sunken piers, and rock and roll history — told by the saltiest pirate seagull on the Jersey Shore.',
    dirNorthDesc: 'Hereford Inlet → Wildwood Crest',
    dirSouthDesc: 'Wildwood Crest → Hereford Inlet',
    selfieLocation: 'The Wildwoods',
    svgBadge: 'I plundered 18 stops in Wildwood 🏴\u200D☠️',
    svgLocation: 'THE WILDWOODS, NJ',
    totalStops: 18,
    getStopsFn: function(dir) { return typeof getWildwoodStops === 'function' ? getWildwoodStops(dir) : []; }
  },
  hopatcong: {
    id: 'hopatcong',
    title: 'Lake Hopatcong, New Jersey',
    shortTitle: 'Lake Hopatcong',
    locationLabel: 'LAKE HOPATCONG, NEW JERSEY',
    heroHeadline: 'Follow the Treasure Map<br/>to <em>Lake Hopatcong</em>',
    heroTagline: 'Screecher Jones leads ye on a boat or car tour of New Jersey\'s largest lake — 12,000 years of buried secrets.',
    splashTagline: 'Gilded Age hotels, dynamite factories, Prohibition rum-runners, and a celebrity piano — told by the saltiest pirate seagull in New Jersey.',
    dirNorthDesc: 'West Shore Clockwise (State Park → North)',
    dirSouthDesc: 'East Shore Counter-Clockwise (North → State Park)',
    selfieLocation: 'Lake Hopatcong',
    svgBadge: 'I plundered 20 stops on Lake Hopatcong 🏴\u200D☠️',
    svgLocation: 'LAKE HOPATCONG, NJ',
    totalStops: 20,
    getStopsFn: function(dir) { return typeof getHopatcongStops === 'function' ? getHopatcongStops(dir) : []; }
  }
};

const DEST = DESTINATION_CONFIG[_destParam] || DESTINATION_CONFIG.lbi;

let map = null;
let userMarker = null;
let watchId = null;
let currentStopIndex = 0;
let direction = null;
let stops = [];
let stopMarkers = [];
let visitedStops = new Set();
let panelOpen = false;
let userLat = null;
let userLng = null;
// One GPS arrival at a time. Overlapping stop radii used to mark every
// in-range stop visited in a single fix and skip their narration.
let arrivalLocked = false;
let arrivalCooldownUntil = 0;
let narrationPending = false;
let speechUtterance = null;

// Audio state
let ttsEnabled = true;
let ttsSpeaking = false;
let narrationAudio = null;   // HTMLAudioElement for current stop narration
let introAudio = null;       // HTMLAudioElement for intro narration
let bgMusic = null;          // HTMLAudioElement for looping pirate music
let introPlayed = false;
const AUDIO_BASE = 'audio/stops/';  // relative to index.html
const AUDIO_VER  = '?v=13';          // cache-bust stop mp3s
const MUSIC_SRC  = 'audio/pirate-music.mp3?v=11';
const INTRO_SRC  = 'audio/intro.mp3?v=11';
const MUSIC_FULL_VOL  = 0.04;  // background music normal volume — very subtle
const MUSIC_DUCK_VOL  = 0.01;  // music volume during narration
const DUCK_SPEED_MS   = 600;   // how fast to fade in/out

// ──────────────────────────────────────────────
// STARTUP
// ──────────────────────────────────────────────

// ──────────────────────────────────────────────
// SPLASH FLOW
// Phase 1: Intro (auto-plays on load)
// Phase 2: Direction picker (after intro ends/skipped)
// Phase 3: Map
// ──────────────────────────────────────────────

// Called on page load — play intro immediately
function initSplash() {
  // Apply destination-specific text to all hardcoded strings
  _applyDestination();
  // Show intro phase, hide direction phase
  document.getElementById('phase-intro').classList.remove('hidden');
  document.getElementById('phase-direction').classList.add('hidden');
  // No auto-narration — user taps "Start the Tour" which opens the video modal.
  // Direction picker is shown after the video is dismissed (see selfie.js closeVideoModal).
}

function _applyDestination() {
  var d = DEST;
  // Page title
  document.title = 'Screecher Jones\' Treasure Tour \u2014 ' + d.title;
  // Hero splash
  var locEl = document.querySelector('.intro-location');
  if (locEl) locEl.textContent = d.locationLabel;
  var hdEl = document.querySelector('.intro-headline');
  if (hdEl) hdEl.innerHTML = d.heroHeadline;
  var tgEl = document.querySelector('.intro-tagline');
  if (tgEl) tgEl.textContent = d.heroTagline;
  // Direction picker
  var stEl = document.querySelector('.splash-tagline');
  if (stEl) stEl.textContent = d.splashTagline;
  var dnEls = document.querySelectorAll('.dir-desc');
  if (dnEls[0]) dnEls[0].textContent = d.dirNorthDesc;
  if (dnEls[1]) dnEls[1].textContent = d.dirSouthDesc;
  // Direction picker subtitle
  var subEl = document.querySelector('#phase-direction .splash-subtitle');
  if (subEl) subEl.textContent = d.title;
  // Payment gate perks — update stop count
  var perksEl = document.querySelector('.payment-perks li:first-child');
  if (perksEl) perksEl.innerHTML = '&#9875; ' + d.totalStops + ' GPS-triggered stops';
  // Selfie screen
  var selfieSubEl = document.getElementById('selfie-stop-count');
  if (selfieSubEl) selfieSubEl.textContent = d.totalStops + ' stops';
  var selfieSub = document.querySelector('.selfie-sub');
  if (selfieSub) selfieSub.innerHTML = 'Ye plundered <strong id="selfie-stop-count">' + d.totalStops + ' stops</strong> on ' + d.selfieLocation + '.<br/>Take a victory selfie to prove it.';
  // SVG selfie badge
  var svgBadge = document.getElementById('svg-stop-badge');
  if (svgBadge) svgBadge.textContent = d.svgBadge;
  var svgLoc = document.querySelector('#selfie-border-svg text[y="170"]');
  if (svgLoc) svgLoc.textContent = d.svgLocation;
}

function _onFirstTouch() {
  // Legacy — no-op in current flow
}

function playIntroSequence() {
  // Legacy — no-op in current flow (intro narration replaced by video modal)
}

// Toggle idle/talking pose images
function _setTalkingPose(talking) {
  const idle    = document.getElementById('intro-mascot-idle');
  const talking_ = document.getElementById('intro-mascot-talking');
  if (!idle || !talking_) return;
  if (talking) {
    idle.classList.add('hidden');
    talking_.classList.remove('hidden');
  } else {
    idle.classList.remove('hidden');
    talking_.classList.add('hidden');
  }
}

// Pause / resume intro narration
function toggleIntroPause() {
  if (!introAudio) return;
  if (introAudio.paused) {
    introAudio.play().catch(() => {});
    _setTalkingPose(true);
    _setIntroPauseUI(false);
  } else {
    introAudio.pause();
    _setTalkingPose(false);
    _setIntroPauseUI(true);
  }
}

function _setIntroPauseUI(isPaused) {
  const pauseIcon  = document.getElementById('intro-pause-icon');
  const playIcon   = document.getElementById('intro-play-icon');
  const label      = document.getElementById('intro-pause-label');
  if (!pauseIcon || !playIcon || !label) return;
  if (isPaused) {
    pauseIcon.classList.add('hidden');
    playIcon.classList.remove('hidden');
    label.textContent = 'Resume';
  } else {
    pauseIcon.classList.remove('hidden');
    playIcon.classList.add('hidden');
    label.textContent = 'Pause';
  }
}

// Seek the intro audio (separate from stop narration)
function seekIntroNarration(seconds) {
  if (introAudio) {
    introAudio.currentTime = Math.max(0, introAudio.currentTime + seconds);
  }
}

// Next button on phase-intro: go to direction picker (pauses audio, keeps position)
function goToDirectionPicker() {
  if (introAudio && !introAudio.paused) {
    introAudio.pause();
    _setTalkingPose(false);
    _setIntroPauseUI(true);
  }
  showDirectionPicker();
}

// Back button on phase-direction: return to intro
function goBackToIntro() {
  // Stop music that faded in
  if (bgMusic) { bgMusic.pause(); bgMusic.currentTime = 0; bgMusic.volume = 0; }

  const introPhase = document.getElementById('phase-intro');
  const dirPhase   = document.getElementById('phase-direction');

  dirPhase.style.transition = 'opacity 400ms ease';
  dirPhase.style.opacity = '0';
  setTimeout(() => {
    dirPhase.classList.add('hidden');
    dirPhase.style.opacity = '';
    dirPhase.style.transition = '';
    introPhase.classList.remove('hidden');
    introPhase.style.opacity = '0';
    introPhase.style.transition = 'opacity 400ms ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { introPhase.style.opacity = '1'; });
    });
    setTimeout(() => { introPhase.style.transition = ''; introPhase.style.opacity = ''; }, 420);
  }, 420);
}

function showDirectionPicker() {
  // Swap to idle pose
  _setTalkingPose(false);

  // Fade out intro phase
  const introPhase = document.getElementById('phase-intro');
  const dirPhase   = document.getElementById('phase-direction');

  introPhase.style.transition = 'opacity 500ms ease';
  introPhase.style.opacity = '0';

  setTimeout(() => {
    introPhase.classList.add('hidden');
    introPhase.style.opacity = '';
    introPhase.style.transition = '';
    // Fade in direction picker
    dirPhase.classList.remove('hidden');
    dirPhase.style.opacity = '0';
    dirPhase.style.transition = 'opacity 500ms ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { dirPhase.style.opacity = '1'; });
    });
    setTimeout(() => { dirPhase.style.transition = ''; dirPhase.style.opacity = ''; }, 520);
  }, 520);
}

// Unlock audio context with a silent play on the direction-pick tap
// This gesture token is reused for all subsequent auto-plays in the session
let _audioUnlocked = false;
function _unlockAudio() {
  if (_audioUnlocked) return;
  _audioUnlocked = true;
  // Play a silent 0.001-second buffer through an AudioContext to unlock it
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const buf = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
    ctx.resume();
  } catch(e) {}
  // Also pre-load a silent audio element to unlock HTMLAudio autoplay
  const silent = new Audio();
  silent.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
  silent.volume = 0;
  silent.play().catch(() => {});
}

function startTour(dir) {
  _unlockAudio(); // called synchronously inside the tap gesture
  direction = dir;
  stops = DEST.getStopsFn(dir);
  ACTIVE_STOPS = stops;

  document.getElementById('splash').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  initMap();
  buildStopsList();
  showStop(0);
  startGPS();
  updateProgress();
  initTTS();
}

function resetTour() {
  stopNarration();
  if (watchId !== null && navigator.geolocation) navigator.geolocation.clearWatch(watchId);
  if (window._accuracyCircle) {
    try { window._accuracyCircle.remove(); } catch (_) {}
    window._accuracyCircle = null;
  }
  // map.remove() clears the container's Leaflet id. Wiping innerHTML
  // without that leaves _leaflet_id set and the next L.map() throws
  // "Map container is already initialized."
  if (map) {
    map.remove();
    map = null;
  }
  userMarker = null;
  watchId = null;
  currentStopIndex = 0;
  direction = null;
  stops = [];
  stopMarkers = [];
  visitedStops = new Set();
  panelOpen = false;
  userLat = null;
  userLng = null;
  arrivalLocked = false;
  arrivalCooldownUntil = 0;
  document.getElementById('app').classList.add('hidden');
  document.getElementById('splash').classList.remove('hidden');
  const mapEl = document.getElementById('map');
  if (mapEl) mapEl.innerHTML = '';
  toggleMenu(true);
  // Go straight to direction picker and replay intro voice
  introPlayed = false;
  showDirectionPicker();
  // Same turn as the tap so autoplay is still allowed.
  if (typeof playIntro === 'function') playIntro();
}

// ──────────────────────────────────────────────
// MAP
// ──────────────────────────────────────────────

function initMap() {
  if (map) return;
  if (typeof L === 'undefined') {
    showToast('Map failed to load. Check your connection and reload.');
    return;
  }

  const first = stops[0];
  const center = first ? [first.lat, first.lng] : [39.632, -74.175];
  map = L.map('map', { center: center, zoom: first ? 14 : 12, zoomControl: true });
  // Move zoom control to bottom-right (away from header)
  map.zoomControl.setPosition('bottomright');

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  stops.forEach((stop, i) => {
    const marker = L.marker([stop.lat, stop.lng], {
      icon: createStopIcon(i + 1, stop.icon)
    })
    .addTo(map)
    .on('click', () => { showStop(i); openPanel(); });
    stopMarkers.push(marker);
  });

  const latlngs = stops.map(s => [s.lat, s.lng]);
  L.polyline(latlngs, {
    color: '#c8a84b',
    weight: 3,
    dashArray: '8, 8',
    opacity: 0.7
  }).addTo(map);
}

function createStopIcon(num, emoji) {
  const isVisited = visitedStops.has(num - 1);
  const isCurrent = num - 1 === currentStopIndex;
  const bgColor = isCurrent ? '#c8a84b' : isVisited ? '#5a4a1a' : '#2a1f06';
  const textColor = isCurrent ? '#1a1208' : '#c8a84b';
  const border = isCurrent ? '3px solid #f0d080' : '2px solid #c8a84b';

  return L.divIcon({
    className: '',
    html: `<div style="
      width:36px;height:36px;border-radius:50%;
      background:${bgColor};border:${border};
      display:flex;align-items:center;justify-content:center;
      font-size:14px;font-weight:700;color:${textColor};
      box-shadow:0 2px 8px rgba(0,0,0,0.5);cursor:pointer;
    ">${num}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
}

function refreshMarkers() {
  stopMarkers.forEach((marker, i) => {
    marker.setIcon(createStopIcon(i + 1, stops[i].icon));
  });
}

function panMapToStop(stopIndex) {
  const stop = stops[stopIndex];
  if (map) map.flyTo([stop.lat, stop.lng], 14, { duration: 1.2 });
}

// ──────────────────────────────────────────────
// GPS
// ──────────────────────────────────────────────

function startGPS() {
  if (!navigator.geolocation) {
    setGPSStatus('unsupported');
    showToast("⚠️ GPS not available on this device");
    return;
  }
  if (watchId !== null) navigator.geolocation.clearWatch(watchId);
  setGPSStatus('searching');
  watchId = navigator.geolocation.watchPosition(
    onGPSSuccess, onGPSError,
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
  );
}

function onGPSSuccess(pos) {
  userLat = pos.coords.latitude;
  userLng = pos.coords.longitude;
  setGPSStatus('active');

  // Update or create accuracy circle
  const acc = pos.coords.accuracy;
  if (!window._accuracyCircle) {
    window._accuracyCircle = L.circle([userLat, userLng], {
      radius: acc,
      color: '#4a9eff',
      fillColor: '#4a9eff',
      fillOpacity: 0.08,
      weight: 1,
      opacity: 0.35,
      interactive: false
    }).addTo(map);
  } else {
    window._accuracyCircle.setLatLng([userLat, userLng]);
    window._accuracyCircle.setRadius(acc);
  }

  if (!userMarker) {
    userMarker = L.marker([userLat, userLng], {
      icon: L.divIcon({
        className: 'user-location-marker',
        html: `
          <div class="loc-pulse-ring"></div>
          <div class="loc-dot"></div>
        `,
        iconSize: [40, 40], iconAnchor: [20, 20]
      }),
      zIndexOffset: 1000,
      interactive: false
    }).addTo(map);
  } else {
    userMarker.setLatLng([userLat, userLng]);
  }
  checkProximity(userLat, userLng, pos.coords.accuracy);
}

function onGPSError(err) {
  // A timeout after a good fix is not "GPS off" — the watch is still active.
  if (err && err.code === 3 && userLat != null) return;
  setGPSStatus('error');
  if (err && err.code === 1) {
    showToast("⚠️ Location access denied. Enable GPS for auto-triggers.");
  }
}

function setGPSStatus(status) {
  const dot = document.getElementById('gps-dot');
  const label = document.getElementById('gps-label');
  if (dot) dot.className = 'gps-indicator ' + status;
  const labels = { searching: 'Searching…', active: 'GPS Active', error: 'GPS Off', unsupported: 'No GPS' };
  if (label) label.textContent = labels[status] || '';
}

function isEmailGateOpen() {
  const splash = document.getElementById('splash');
  const gate = document.getElementById('phase-gate');
  if (!splash || !gate) return false;
  return !splash.classList.contains('hidden') && !gate.classList.contains('hidden');
}

function checkProximity(lat, lng, accuracy) {
  if (arrivalLocked) return;
  if (Date.now() < arrivalCooldownUntil) return;
  // Don't consume stops while the email gate is covering the tour.
  if (isEmailGateOpen()) return;
  // A coarse first fix (often 1km+) would false-trigger and permanently skip stops.
  if (typeof accuracy === 'number' && isFinite(accuracy) && accuracy > 200) return;

  let best = -1;
  let bestDist = Infinity;
  for (let i = 0; i < stops.length; i++) {
    if (visitedStops.has(i)) continue;
    const dist = getDistanceMeters(lat, lng, stops[i].lat, stops[i].lng);
    if (dist < stops[i].radius && dist < bestDist) {
      best = i;
      bestDist = dist;
    }
  }
  if (best < 0) return;
  visitedStops.add(best);
  arrivalLocked = true;
  triggerStopArrival(best);
}

function getDistanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 +
    Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function triggerStopArrival(stopIndex) {
  const stop = stops[stopIndex];
  showStop(stopIndex);
  showTreasureAnimation(stop.short);
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
  // Auto-play once. dismissTreasure used to call playNarration again,
  // and that second call treated "already speaking" as a stop.
  if (ttsEnabled) setTimeout(() => ensureNarration(), 800);
}

// ──────────────────────────────────────────────
// TREASURE ANIMATION
// ──────────────────────────────────────────────

function showTreasureAnimation(stopName) {
  const overlay = document.getElementById('treasure-overlay');
  const nameEl = document.getElementById('treasure-stop-name');
  nameEl.textContent = stopName;
  overlay.classList.add('visible');

  // Animate coins burst
  const burst = document.getElementById('coins-burst');
  burst.innerHTML = '';
  for (let i = 0; i < 18; i++) {
    const coin = document.createElement('div');
    coin.className = 'coin-particle';
    const angle = (i / 18) * 360;
    const dist = 60 + Math.random() * 60;
    const delay = Math.random() * 0.3;
    const size = 8 + Math.random() * 10;
    coin.style.cssText = `
      --angle: ${angle}deg;
      --dist: ${dist}px;
      --delay: ${delay}s;
      width: ${size}px;
      height: ${size}px;
    `;
    burst.appendChild(coin);
  }
}

function dismissTreasure() {
  const overlay = document.getElementById('treasure-overlay');
  overlay.classList.remove('visible');
  openPanel();
  // Allow the next overlapping stop only after this one is dismissed,
  // with a short gap so the next GPS tick doesn't immediately cover the tale.
  arrivalLocked = false;
  arrivalCooldownUntil = Date.now() + 2500;
  // Same turn as the tap so speech (and mp3 play) still has a user gesture.
  if (ttsEnabled) ensureNarration();
}

// ──────────────────────────────────────────────
// AUDIO ENGINE (MP3 narration + background music)
// ──────────────────────────────────────────────

function initTTS() {
  // Music already started after intro — just update UI
  updateTTSUI();
}

// ── Background music ──────────────────────────
function ensureBgMusic() {
  if (bgMusic) return bgMusic;
  bgMusic = new Audio(MUSIC_SRC);
  bgMusic.loop = true;
  bgMusic.volume = MUSIC_FULL_VOL;
  return bgMusic;
}

function resumeBgMusic() {
  if (!ttsEnabled) return;
  const music = ensureBgMusic();
  music.volume = MUSIC_FULL_VOL;
  const pending = music.play();
  if (pending && pending.catch) {
    pending.catch(() => {
      document.addEventListener('pointerdown', () => {
        if (ttsEnabled && bgMusic) bgMusic.play().catch(() => {});
      }, { once: true });
    });
  }
}

function startBgMusic() {
  resumeBgMusic();
}

function stopBgMusic() {
  if (!bgMusic) return;
  bgMusic.pause();
  bgMusic.currentTime = 0;
}

let _duckInterval = null;
function duckMusic(duck) {
  if (!bgMusic) return;
  if (_duckInterval) clearInterval(_duckInterval);
  const target = duck ? MUSIC_DUCK_VOL : MUSIC_FULL_VOL;
  const step = (target - bgMusic.volume) / (DUCK_SPEED_MS / 50);
  _duckInterval = setInterval(() => {
    const next = bgMusic.volume + step;
    if ((step > 0 && next >= target) || (step < 0 && next <= target)) {
      bgMusic.volume = target;
      clearInterval(_duckInterval);
      _duckInterval = null;
    } else {
      bgMusic.volume = Math.max(0, Math.min(1, next));
    }
  }, 50);
}

// ── Intro narration ────────────────────────────
function playIntro() {
  if (!ttsEnabled) {
    introPlayed = true;
    return;
  }
  introPlayed = true;
  stopStopNarration();
  // intro.mp3 is the LBI script (25 stops, Barnegat Light → Holgate).
  // Playing it on another destination tells the sailor the wrong tour.
  if (DEST.id !== 'lbi') {
    resumeBgMusic();
    return;
  }
  if (bgMusic) bgMusic.pause();
  const audio = new Audio(INTRO_SRC);
  introAudio = audio;
  audio.volume = 1;
  const finish = () => {
    if (introAudio !== audio) return;
    ttsSpeaking = false;
    updatePlayButton(false);
    _setTalkingPose(false);
    _setIntroPauseUI(true);
    introAudio = null;
    resumeBgMusic();
  };
  audio.onended = finish;
  audio.onerror = () => {
    if (introAudio !== audio) return;
    ttsSpeaking = false;
    updatePlayButton(false);
    _setTalkingPose(false);
    introAudio = null;
    resumeBgMusic();
  };
  // play() must run inside the tap that opened this, not after canplaythrough.
  ttsSpeaking = true;
  _setTalkingPose(true);
  audio.play().catch(() => {
    if (introAudio !== audio) return;
    ttsSpeaking = false;
    _setTalkingPose(false);
    resumeBgMusic();
  });
}

function stopIntroNarration() {
  if (introAudio) {
    const audio = introAudio;
    introAudio = null;
    audio.onended = null;
    audio.onerror = null;
    audio.pause();
    ttsSpeaking = false;
    updatePlayButton(false);
    if (ttsEnabled) resumeBgMusic();
  }
}

// Recorded stop mp3s exist only for the LBI tour (stop-01 … stop-25).
// Other destinations number their own stories from 1, so those files are the wrong tale.
function recordedStopSrc(stop) {
  if (!stop || DEST.id !== 'lbi') return null;
  const audioId = Number(stop.originalId || stop.id);
  if (!Number.isInteger(audioId) || audioId < 1 || audioId > 25) return null;
  return `${AUDIO_BASE}stop-${String(audioId).padStart(2, '0')}.mp3${AUDIO_VER}`;
}

function maybeShowEmailGate() {
  if (currentStopIndex === 0 && !window._gateShown) {
    window._gateShown = true;
    setTimeout(() => { if (typeof showEmailGate === 'function') showEmailGate(); }, 800);
  }
}

function stopSpeech() {
  speechToken++;
  const had = speechUtterance;
  speechUtterance = null;
  narrationPending = false;
  // cancel() is only needed when an utterance is queued. Calling it before
  // every speak() makes Chrome drop the next utterance.
  if (!had) return;
  try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (_) {}
}

let speechToken = 0;

function whenVoicesReady(cb) {
  const synth = window.speechSynthesis;
  if (!synth) { cb(false); return; }
  if (synth.getVoices().length) { cb(true); return; }
  let done = false;
  const finish = (ok) => {
    if (done) return;
    done = true;
    synth.removeEventListener('voiceschanged', onChange);
    cb(ok);
  };
  const onChange = () => finish(synth.getVoices().length > 0);
  synth.addEventListener('voiceschanged', onChange);
  // Chrome leaves getVoices() empty until this call, then fires voiceschanged.
  synth.getVoices();
  setTimeout(() => finish(synth.getVoices().length > 0), 800);
}

function speakNarration(text) {
  if (!window.speechSynthesis || !text) {
    showToast('🔇 No recorded audio for this stop yet');
    narrationPending = false;
    return;
  }
  const token = ++speechToken;
  narrationPending = true;
  whenVoicesReady((ok) => {
    if (token !== speechToken) return;
    if (!ok) {
      narrationPending = false;
      ttsSpeaking = false;
      updatePlayButton(false);
      showToast('🔇 Narration could not play on this device');
      return;
    }
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1;
    speechUtterance = u;
    ttsSpeaking = true;
    updatePlayButton(true);
    duckMusic(true);
    u.onend = () => {
      if (speechUtterance !== u) return;
      speechUtterance = null;
      ttsSpeaking = false;
      narrationPending = false;
      updatePlayButton(false);
      duckMusic(false);
      maybeShowEmailGate();
    };
    u.onerror = (ev) => {
      if (speechUtterance !== u) return;
      const reason = ev && ev.error;
      speechUtterance = null;
      ttsSpeaking = false;
      narrationPending = false;
      updatePlayButton(false);
      duckMusic(false);
      if (reason !== 'canceled' && reason !== 'interrupted') {
        showToast('🔇 Narration could not play on this device');
      }
    };
    const start = () => {
      if (speechUtterance !== u) return;
      window.speechSynthesis.speak(u);
    };
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
      setTimeout(start, 60);
    } else {
      start();
    }
  });
}

// Start narration only if nothing is already playing. Used by GPS arrival
// and the treasure button so they cannot cancel each other.
function ensureNarration() {
  if (!ttsEnabled || narrationPending) return;
  if (speechUtterance) return;
  // Leave a tale the sailor paused; only start when nothing is loaded.
  if (narrationAudio && !narrationAudio.ended) return;
  // Arrival should tell this stop's tale, not keep playing the LBI intro.
  if (introAudio) stopIntroNarration();
  playNarration();
}

// ── Per-stop narration ─────────────────────────
function playNarration() {
  if (speechUtterance || narrationPending) {
    stopNarration();
    return;
  }
  // The button is labeled Pause while a tale is playing — pause in place.
  if (narrationAudio && !narrationAudio.paused && !narrationAudio.ended) {
    narrationAudio.pause();
    ttsSpeaking = false;
    narrationPending = false;
    updatePlayButton(false);
    duckMusic(false);
    return;
  }
  if (narrationAudio && narrationAudio.paused && !narrationAudio.ended && narrationAudio.currentTime > 0) {
    duckMusic(true);
    ttsSpeaking = true;
    updatePlayButton(true);
    narrationAudio.play().catch(() => {
      ttsSpeaking = false;
      updatePlayButton(false);
      duckMusic(false);
    });
    return;
  }
  startStopNarration();
}

function startStopNarration() {
  const stop = stops[currentStopIndex];
  if (!stop) return;

  stopIntroNarration();
  stopStopNarration();
  narrationPending = true;

  const src = recordedStopSrc(stop);
  if (!src) {
    speakNarration((stop.narration || '').replace(/\*/g, ''));
    return;
  }

  const audio = new Audio();
  narrationAudio = audio;
  audio.preload = 'auto';
  audio.volume = 1;
  duckMusic(true);

  audio.onended = () => {
    if (narrationAudio !== audio) return;
    ttsSpeaking = false;
    narrationPending = false;
    updatePlayButton(false);
    duckMusic(false);
    narrationAudio = null;
    maybeShowEmailGate();
  };
  audio.onerror = () => {
    if (narrationAudio !== audio) return;
    ttsSpeaking = false;
    narrationPending = false;
    updatePlayButton(false);
    duckMusic(false);
    narrationAudio = null;
    showToast('🔇 Audio not found for this stop');
  };

  const start = () => {
    if (narrationAudio !== audio) return;
    ttsSpeaking = true;
    narrationPending = false;
    updatePlayButton(true);
    audio.play().catch(() => {
      if (narrationAudio !== audio) return;
      ttsSpeaking = false;
      updatePlayButton(false);
      duckMusic(false);
    });
  };

  // Bind canplay before src so a cached file cannot finish loading first.
  // Do not call load() again — a second load() aborts the play that just started.
  audio.addEventListener('canplay', start, { once: true });
  audio.src = src;
}

// Stop only the per-stop narration (used internally)
function stopStopNarration() {
  stopSpeech();
  if (narrationAudio) {
    const audio = narrationAudio;
    narrationAudio = null;
    audio.onended = null;
    audio.onerror = null;
    audio.pause();
  }
  ttsSpeaking = false;
  narrationPending = false;
  updatePlayButton(false);
}

// Stop ALL narration audio (intro + stop) — used by toggle button & panel close
function stopNarration() {
  stopIntroNarration();
  stopStopNarration();
  duckMusic(false);
}

function toggleTTS() {
  ttsEnabled = !ttsEnabled;
  if (!ttsEnabled) {
    stopNarration();
    stopBgMusic();
  } else {
    startBgMusic();
  }
  updateTTSUI();
  showToast(ttsEnabled ? '🔊 Audio on' : '🔇 Audio off');
}

function updateTTSUI() {
  const toggle = document.getElementById('tts-toggle');
  const iconOn = document.getElementById('tts-icon-on');
  const iconOff = document.getElementById('tts-icon-off');
  if (ttsEnabled) {
    toggle.classList.add('active');
    iconOn?.classList.remove('hidden');
    iconOff?.classList.add('hidden');
  } else {
    toggle.classList.remove('active');
    iconOn?.classList.add('hidden');
    iconOff?.classList.remove('hidden');
  }
}

function updatePlayButton(playing) {
  const playIcon  = document.getElementById('tts-play-icon');
  const pauseIcon = document.getElementById('tts-pause-icon');
  const label     = document.getElementById('tts-play-label');
  const stopBtn   = document.getElementById('tts-stop-btn');
  const rewindBtn = document.getElementById('tts-rewind-btn');
  const fwdBtn    = document.getElementById('tts-forward-btn');
  if (playing) {
    playIcon?.classList.add('hidden');
    pauseIcon?.classList.remove('hidden');
    if (label) label.textContent = 'Pause';
    stopBtn?.classList.remove('hidden');
    rewindBtn?.classList.remove('hidden');
    fwdBtn?.classList.remove('hidden');
  } else {
    playIcon?.classList.remove('hidden');
    pauseIcon?.classList.add('hidden');
    if (label) label.textContent = 'Hear the Tale';
    stopBtn?.classList.add('hidden');
    rewindBtn?.classList.add('hidden');
    fwdBtn?.classList.add('hidden');
  }
}

function seekNarration(seconds) {
  const audio = narrationAudio || introAudio;
  if (!audio) return;
  audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + seconds));
}

// ──────────────────────────────────────────────
// STOP DISPLAY
// ──────────────────────────────────────────────

function showStop(index) {
  if (index < 0 || index >= stops.length) return;

  // Stop narration if we switch stops mid-speech
  stopNarration();
  currentStopIndex = index;
  const stop = stops[index];

  document.getElementById('panel-stop-num').textContent = `STOP ${stop.id}`;
  document.getElementById('panel-title').textContent = stop.name;
  document.getElementById('panel-location').textContent = stop.location;

  const narrationEl = document.getElementById('panel-narration');
  const paragraphs = (stop.narration || '').split('\n\n').map(p =>
    `<p>${p.replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`
  ).join('');
  narrationEl.innerHTML = paragraphs;

  const factsEl = document.getElementById('panel-facts');
  const facts = Array.isArray(stop.facts) ? stop.facts : [];
  factsEl.innerHTML = `
    <div class="facts-header">⚓ The Booty of Knowledge</div>
    <ul class="facts-list">
      ${facts.map(f => `<li>${f}</li>`).join('')}
    </ul>
  `;

  const card = document.getElementById('stop-card-content');
  card.innerHTML = `
    <div class="card-stop-num">${stop.icon} Stop ${stop.id}</div>
    <div class="card-stop-name">${stop.short}</div>
    <button class="card-read-btn" onclick="openPanel()">Read the Tale ▶</button>
  `;

  document.getElementById('btn-prev-stop').disabled = index === 0;
  const nextBtn = document.getElementById('btn-next-stop');
  // Keep the last-stop button enabled — it opens the victory selfie.
  // Disabling it made "Journey Complete!" unreachable.
  nextBtn.disabled = false;
  nextBtn.textContent = index === stops.length - 1 ? '🗺️ Journey Complete!' : 'Next Stop ▶';

  panMapToStop(index);
  refreshMarkers();
  updateProgress();
  updateStopsList();


}

function navigateStop(delta) {
  const target = currentStopIndex + delta;
  if (target >= stops.length) {
    const seen = visitedStops.size || stops.length;
    if (typeof showSelfieScreen === 'function') showSelfieScreen(seen);
    return;
  }
  if (target < 0) return;
  showStop(target);
}

function updateProgress() {
  const pct = stops.length > 1 ? (currentStopIndex / (stops.length - 1)) * 100 : 0;
  const fill = document.getElementById('progress-fill');
  const text = document.getElementById('progress-text');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = `Stop ${currentStopIndex + 1} of ${stops.length}`;
}

// ──────────────────────────────────────────────
// PANEL
// ──────────────────────────────────────────────

function openPanel() {
  panelOpen = true;
  document.getElementById('stop-panel').classList.add('open');
}

function closePanel() {
  stopNarration();
  panelOpen = false;
  document.getElementById('stop-panel').classList.remove('open');
}

// Swipe-down to dismiss panel
// Only triggers when panel scroll is at the very top — prevents conflict with inner scroll
let touchStartY = 0;
let touchStartScrollTop = 0;
let _panelSwipeActive = false;

document.addEventListener('touchstart', e => {
  const panel = document.getElementById('stop-panel');
  if (!panel || !panel.contains(e.target)) return;
  const scroll = panel.querySelector('.panel-scroll');
  touchStartY = e.touches[0].clientY;
  touchStartScrollTop = scroll ? scroll.scrollTop : 0;
  _panelSwipeActive = (touchStartScrollTop === 0); // only arm swipe if at top
}, { passive: true });

document.addEventListener('touchmove', e => {
  const panel = document.getElementById('stop-panel');
  if (!panel || !panel.classList.contains('open') || !panel.contains(e.target)) return;
  if (!_panelSwipeActive) return;
  const dy = e.touches[0].clientY - touchStartY;
  if (dy > 80) {
    _panelSwipeActive = false;
    closePanel();
  }
}, { passive: true });

// ──────────────────────────────────────────────
// STOPS MENU
// ──────────────────────────────────────────────

function buildStopsList() {
  const list = document.getElementById('stops-list');
  if (!list) return;
  list.innerHTML = stops.map((stop, i) => `
    <li class="stop-item ${i === currentStopIndex ? 'active' : ''}" id="stop-item-${i}" onclick="goToStop(${i})">
      <div class="stop-item-num">${i + 1}</div>
      <div class="stop-item-info">
        <div class="stop-item-icon">${stop.icon}</div>
        <div>
          <div class="stop-item-name">${stop.short}</div>
          <div class="stop-item-loc">${stop.location}</div>
        </div>
      </div>
      <div class="stop-item-check ${visitedStops.has(i) ? 'visited' : ''}">
        ${visitedStops.has(i) ? '✓' : ''}
      </div>
    </li>
  `).join('');
}

function updateStopsList() {
  const items = document.querySelectorAll('.stop-item');
  items.forEach((item, i) => {
    item.classList.toggle('active', i === currentStopIndex);
    const check = item.querySelector('.stop-item-check');
    if (check) {
      check.classList.toggle('visited', visitedStops.has(i));
      check.textContent = visitedStops.has(i) ? '✓' : '';
    }
  });
}

function goToStop(index) {
  showStop(index);
  openPanel();
  toggleMenu(true);
}

let menuOpen = false;
function toggleMenu(forceClose = false) {
  menuOpen = forceClose ? false : !menuOpen;
  document.getElementById('stops-menu').classList.toggle('open', menuOpen);
  document.getElementById('menu-overlay').classList.toggle('visible', menuOpen);
}

// ── (Deals/loot integration reserved for Stage 2) ──

// ──────────────────────────────────────────────
// TOAST
// ──────────────────────────────────────────────

let toastTimer = null;
function showToast(msg, duration = 3500) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('visible');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), duration);
}

// ──────────────────────────────────────────────
// PWA
// ──────────────────────────────────────────────

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

// ──────────────────────────────────────────────
// CREW SIGN-UP OVERLAY
// ──────────────────────────────────────────────

function showCrewOverlay() {
  const el = document.getElementById('crew-overlay');
  if (el) el.classList.remove('hidden');
}

function skipCrewForm() {
  const el = document.getElementById('crew-overlay');
  if (el) el.classList.add('hidden');
  showToast('Safe travels, lone sailor. ⚓');
}

function selectToggle(btn, fieldId) {
  const group = btn.closest('.crew-toggle-group');
  if (group) group.querySelectorAll('.crew-toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Gate markup uses id "gate-residency"; the unused crew form used "crew-residency".
  // Looking up only the crew-prefixed id threw and left Local sailors stuck as visitors.
  const hidden = document.getElementById(fieldId) || document.getElementById('crew-' + fieldId);
  if (hidden) hidden.value = btn.dataset.val;
  const isResidency = fieldId === 'residency' || fieldId === 'gate-residency';
  if (!isResidency) return;
  const stateField = document.getElementById(fieldId === 'gate-residency' ? 'gate-state-field' : 'crew-state-field');
  if (stateField) stateField.style.display = btn.dataset.val === 'local' ? 'none' : '';
}

function selectVote(btn) {
  btn.closest('.crew-vote-grid').querySelectorAll('.crew-vote-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const otherInput = document.getElementById('crew-vote-other-text');
  if (btn.dataset.val === 'other') {
    otherInput.classList.remove('hidden');
    otherInput.focus();
    document.getElementById('crew-vote').value = '';
  } else {
    otherInput.classList.add('hidden');
    document.getElementById('crew-vote').value = btn.dataset.val;
  }
}

// Sync other text input → hidden field
document.addEventListener('DOMContentLoaded', () => {
  const otherText = document.getElementById('crew-vote-other-text');
  if (otherText) {
    otherText.addEventListener('input', () => {
      document.getElementById('crew-vote').value = otherText.value;
    });
  }
});

function submitCrewForm(e) {
  e.preventDefault();
  const email = document.getElementById('crew-email').value.trim();
  const residency = document.getElementById('crew-residency').value;
  const state = document.getElementById('crew-state') ? document.getElementById('crew-state').value : '';
  const nextTown = document.getElementById('crew-vote').value.trim();
  const errorEl = document.getElementById('crew-error');

  // Validate
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid || !nextTown) {
    errorEl.classList.remove('hidden');
    return;
  }
  if (residency === 'visitor' && !state) {
    errorEl.classList.remove('hidden');
    return;
  }
  errorEl.classList.add('hidden');

  // Payload — log for now, ready for Supabase / webhook later
  const payload = {
    email,
    residency,
    state: residency === 'visitor' ? state : 'N/A (local)',
    next_town: nextTown,
    tour_direction: direction || 'unknown',
    stops_visited: visitedStops ? visitedStops.size : 0,
    submitted_at: new Date().toISOString()
  };
  console.log('[GuidedPlunder] Crew signup:', payload);

  // TODO Stage 2: POST to Supabase / webhook
  // fetch('https://YOUR_SUPABASE_URL/rest/v1/signups', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json', 'apikey': 'YOUR_KEY' },
  //   body: JSON.stringify(payload)
  // });

  // Show confirmation
  const content = document.querySelector('.crew-content');
  content.innerHTML = `
    <div class="crew-confirm">
      <div class="crew-confirm-icon">⚓</div>
      <div class="crew-badge">CREW MEMBER</div>
      <div class="crew-confirm-title">Ye're on the manifest!</div>
      <p class="crew-confirm-sub">Screecher Jones will send word when the next treasure map drops. Fair winds, ${email.split('@')[0]}.</p>
      <button class="action-btn primary" style="margin-top:1rem;" onclick="skipCrewForm()">Close</button>
    </div>
  `;
}
