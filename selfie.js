// ─────────────────────────────────────────────────────────────
// selfie.js — Email gate (post stop-1) + Victory selfie border
// ─────────────────────────────────────────────────────────────

// ─── Stored crew data ────────────────────────────────────────
window.crewData = {
  email: '',
  residency: 'visitor',
  state: '',
  next_town: ''
};

// ─── Session storage helper (in-memory fallback for sandboxed contexts) ───
var _gpStore = (function () {
  var mem = {};
  var store = null;
  try { store = window['session' + 'Storage']; } catch (_) {}
  return {
    get: function (k) { try { return store ? store.getItem(k) : mem[k] || null; } catch (_) { return mem[k] || null; } },
    set: function (k, v) { try { if (store) store.setItem(k, v); else mem[k] = v; } catch (_) { mem[k] = v; } }
  };
})();

// ─── Check session — skip gate if already signed in ──────────
(function restoreSession () {
  try {
    var saved = _gpStore.get('gp_crew');
    if (saved) {
      window.crewData  = JSON.parse(saved);
      window._gateShown = true; // prevent gate re-showing on reload
    }
  } catch (_) {}
})();

// ─── SPLASH NAVIGATION (video → direction only) ──────────────

// Back from direction picker → intro
window.goBackToIntro = function () {
  const introPhase = document.getElementById('phase-intro');
  const dirPhase   = document.getElementById('phase-direction');
  dirPhase.style.transition  = 'opacity 400ms ease';
  dirPhase.style.opacity     = '0';
  setTimeout(() => {
    dirPhase.classList.add('hidden');
    dirPhase.style.opacity    = '';
    dirPhase.style.transition = '';
    introPhase.classList.remove('hidden');
    introPhase.style.opacity    = '0';
    introPhase.style.transition = 'opacity 400ms ease';
    requestAnimationFrame(() => requestAnimationFrame(() => { introPhase.style.opacity = '1'; }));
    setTimeout(() => { introPhase.style.transition = ''; introPhase.style.opacity = ''; }, 420);
  }, 420);
};

// ─── EMAIL GATE (shown as overlay on top of the running app) ─

window.showEmailGate = function () {
  // Already signed in this session
  if (window.crewData && window.crewData.email) return;

  const splash    = document.getElementById('splash');
  const gatePhase = document.getElementById('phase-gate');
  const dirPhase  = document.getElementById('phase-direction');
  const appEl     = document.getElementById('app');

  // Pause any background music / narration gracefully
  if (typeof duckMusic === 'function') duckMusic(true);

  // Show splash on top of app
  splash.classList.remove('hidden');
  appEl.classList.add('gated'); // dim the app behind

  // Show gate phase, hide direction phase
  dirPhase.classList.add('hidden');
  gatePhase.classList.remove('hidden');
};

// ─── TOGGLE HELPER (local / visitor) ─────────────────────────
window.selectToggle = function (btn, fieldId) {
  btn.closest('.crew-toggle-group')
     .querySelectorAll('.crew-toggle-btn')
     .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const hidden = document.getElementById(fieldId);
  if (hidden) hidden.value = btn.dataset.val;
  if (fieldId === 'gate-residency') {
    const stateField = document.getElementById('gate-state-field');
    if (stateField) stateField.style.display = btn.dataset.val === 'local' ? 'none' : '';
  }
};

// ─── GATE FORM SUBMIT ────────────────────────────────────────
window.submitGateForm = function (e) {
  e.preventDefault();
  const email     = document.getElementById('gate-email').value.trim();
  const residency = document.getElementById('gate-residency')?.value || 'visitor';
  const state     = document.getElementById('gate-state')?.value    || '';
  const errorEl   = document.getElementById('gate-error');

  const emailValid  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const stateNeeded = residency === 'visitor' && !state;

  if (!emailValid || stateNeeded) {
    errorEl.classList.remove('hidden');
    errorEl.textContent = !emailValid
      ? '⚠ Enter a valid email to keep sailing, mate.'
      : '⚠ Tell Screecher where ye hail from.';
    return;
  }
  errorEl.classList.add('hidden');

  window.crewData = { email, residency, state: residency === 'visitor' ? state : 'Local', next_town: '' };
  _gpStore.set('gp_crew', JSON.stringify(window.crewData));

  // Log payload — TODO: swap for Supabase POST in Stage 2
  console.log('[ScreecherJones] Gate signup:', window.crewData);

  // Hide splash, restore app
  const splash = document.getElementById('splash');
  const appEl  = document.getElementById('app');
  splash.classList.add('hidden');
  appEl.classList.remove('gated');

  // Resume music
  if (typeof duckMusic === 'function') duckMusic(false);

  showToast('Welcome to the crew, ' + email.split('@')[0] + '! ⚓');
};

// ─── SELFIE VOTE ─────────────────────────────────────────────
window.selectSelfieVote = function (btn) {
  btn.closest('.selfie-vote-grid')
     .querySelectorAll('.crew-vote-btn')
     .forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  window.crewData.next_town = btn.dataset.val;
  console.log('[ScreecherJones] Next town vote:', btn.dataset.val);
};

// ─── SELFIE SCREEN ───────────────────────────────────────────
let cameraStream    = null;
let facingMode      = 'user';
let capturedDataURL = null;

window.showSelfieScreen = function (stopsVisited) {
  const countEl  = document.getElementById('selfie-stop-count');
  const svgBadge = document.getElementById('svg-stop-badge');
  const place = (typeof DEST !== 'undefined' && DEST && DEST.selfieLocation) ? DEST.selfieLocation : 'LBI';
  if (countEl)  countEl.textContent  = stopsVisited + ' stops';
  if (svgBadge) {
    if (typeof DEST !== 'undefined' && DEST && DEST.svgBadge) {
      svgBadge.textContent = DEST.svgBadge.replace(/\d+/, String(stopsVisited));
    } else {
      svgBadge.textContent = 'I plundered ' + stopsVisited + ' stops on ' + place + ' 🏴‍☠️';
    }
  }
  _showSelfieStep('selfie-step-prompt');
  document.getElementById('selfie-screen').classList.remove('hidden');
};

window.closeSelfieScreen = function () {
  stopCamera();
  document.getElementById('selfie-screen').classList.add('hidden');
};

// ─── CAMERA ──────────────────────────────────────────────────
window.startSelfieCamera = function () {
  _showSelfieStep('selfie-step-camera');
  _startStream();
};

window.flipCamera = function () {
  facingMode = facingMode === 'user' ? 'environment' : 'user';
  document.getElementById('selfie-video').classList.toggle('rear-cam', facingMode === 'environment');
  stopCamera();
  _startStream();
};

window.cancelCamera = function () {
  stopCamera();
  _showSelfieStep('selfie-step-prompt');
};

function _startStream () {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('SQUAWK! Camera is not available in this browser.');
    _showSelfieStep('selfie-step-prompt');
    return;
  }
  navigator.mediaDevices.getUserMedia({
    video: { facingMode, width: { ideal: 1080 }, height: { ideal: 1350 } },
    audio: false
  }).then(stream => {
    cameraStream = stream;
    const video  = document.getElementById('selfie-video');
    video.srcObject = stream;
  }).catch(err => {
    console.error('[Selfie] Camera error:', err);
    alert('SQUAWK! Camera access denied. Check browser permissions.');
    _showSelfieStep('selfie-step-prompt');
  });
}

function stopCamera () {
  if (cameraStream) { cameraStream.getTracks().forEach(t => t.stop()); cameraStream = null; }
  const v = document.getElementById('selfie-video');
  if (v) v.srcObject = null;
}

// ─── CAPTURE ─────────────────────────────────────────────────
window.capturePhoto = function () {
  const video  = document.getElementById('selfie-video');
  const canvas = document.getElementById('selfie-canvas');
  if (!video || !canvas) return;
  const W = 1080, H = 1350;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.save();
  if (facingMode === 'user') { ctx.translate(W, 0); ctx.scale(-1, 1); }
  const vW = video.videoWidth || W, vH = video.videoHeight || H;
  const scale = Math.max(W / vW, H / vH);
  ctx.drawImage(video, (W - vW * scale) / 2, (H - vH * scale) / 2, vW * scale, vH * scale);
  ctx.restore();
  const svgEl   = document.getElementById('selfie-border-svg');
  const svgBlob = new Blob([new XMLSerializer().serializeToString(svgEl)], { type: 'image/svg+xml;charset=utf-8' });
  const url     = URL.createObjectURL(svgBlob);
  const img     = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, W, H);
    URL.revokeObjectURL(url);
    capturedDataURL = canvas.toDataURL('image/jpeg', 0.92);
    _showPreview(capturedDataURL);
    stopCamera();
  };
  img.onerror = () => {
    URL.revokeObjectURL(url);
    capturedDataURL = canvas.toDataURL('image/jpeg', 0.92);
    _showPreview(capturedDataURL);
    stopCamera();
  };
  img.src = url;
};

function _showPreview (dataURL) {
  const p = document.getElementById('selfie-preview-img');
  if (p) p.src = dataURL;
  _showSelfieStep('selfie-step-share');
}

// ─── SHARE ───────────────────────────────────────────────────
window.sharePhoto = async function () {
  if (!capturedDataURL) return;
  const blob = await (await fetch(capturedDataURL)).blob();
  const place = (typeof DEST !== 'undefined' && DEST && DEST.shortTitle) ? DEST.shortTitle : 'the Jersey Shore';
  const file = new File([blob], 'screecher-jones-tour.jpg', { type: 'image/jpeg' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: "Screecher Jones' Treasure Tour",
        text:  "I just plundered " + place + " with Screecher Jones 🏴‍☠️ GPS pirate tour — follow the treasure map!"
      });
    } catch (err) {
      if (err.name !== 'AbortError') _fallbackDownload(capturedDataURL);
    }
  } else {
    _fallbackDownload(capturedDataURL);
  }
};

function _fallbackDownload (dataURL) {
  const a = document.createElement('a');
  a.href = dataURL; a.download = 'screecher-jones-tour.jpg'; a.click();
}

window.retakePhoto = function () {
  capturedDataURL = null;
  _showSelfieStep('selfie-step-camera');
  _startStream();
};

function _showSelfieStep (id) {
  ['selfie-step-prompt', 'selfie-step-camera', 'selfie-step-share']
    .forEach(s => document.getElementById(s)?.classList.toggle('hidden', s !== id));
}

// ─── VIDEO MODAL ─────────────────────────────────────────────
window.openVideoModal = function () {
  const modal = document.getElementById('intro-modal');
  const video = document.getElementById('intro-modal-video');
  if (!modal || !video) return;
  // Kill any lingering intro narration audio
  if (window.introAudio) {
    window.introAudio.pause();
    window.introAudio = null;
  }
  modal.classList.remove('hidden');
  video.play().catch(() => {}); // catch if browser blocks autoplay
};

window.closeVideoModal = function () {
  const modal = document.getElementById('intro-modal');
  const video = document.getElementById('intro-modal-video');
  if (!modal || !video) return;
  video.pause();
  video.currentTime = 0;
  modal.classList.add('hidden');
  // Play intro in this tap. A delayed play() loses the user-gesture token and is blocked.
  showDirectionPicker();
  if (typeof playIntro === 'function') playIntro();
};

// ─── PAYMENT GATE ────────────────────────────────────────────

// Access codes — add promo/comp codes here (swap for server-side check in Stage 2)
var ACCESS_CODES = ['SCREECHER2025', 'PLUNDER25', 'LBIFREE'];

// Pending direction — set when user picks direction before paying
window._pendingDirection = null;

// Check if user already paid this session
(function restorePayment() {
  try {
    var paid = _gpStore.get('gp_paid');
    if (paid === '1') window._hasPaid = true;
  } catch (_) {}
})();

// Called when user taps a direction button
window.pickDirection = function(dir) {
  _unlockAudio();
  window._pendingDirection = dir;

  // Already paid — go straight to tour
  if (window._hasPaid) {
    startTour(dir);
    return;
  }

  // Show payment gate
  var dirPhase     = document.getElementById('phase-direction');
  var paymentPhase = document.getElementById('phase-payment');

  dirPhase.style.transition  = 'opacity 350ms ease';
  dirPhase.style.opacity     = '0';
  setTimeout(function() {
    dirPhase.classList.add('hidden');
    dirPhase.style.opacity    = '';
    dirPhase.style.transition = '';
    paymentPhase.classList.remove('hidden');
    paymentPhase.style.opacity    = '0';
    paymentPhase.style.transition = 'opacity 350ms ease';
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { paymentPhase.style.opacity = '1'; });
    });
    setTimeout(function() {
      paymentPhase.style.transition = '';
      paymentPhase.style.opacity    = '';
    }, 370);
  }, 370);
};

// Back from payment → direction picker
window.goBackToDirection = function() {
  var paymentPhase = document.getElementById('phase-payment');
  var dirPhase     = document.getElementById('phase-direction');
  paymentPhase.style.transition = 'opacity 350ms ease';
  paymentPhase.style.opacity    = '0';
  setTimeout(function() {
    paymentPhase.classList.add('hidden');
    paymentPhase.style.opacity    = '';
    paymentPhase.style.transition = '';
    dirPhase.classList.remove('hidden');
    dirPhase.style.opacity    = '0';
    dirPhase.style.transition = 'opacity 350ms ease';
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { dirPhase.style.opacity = '1'; });
    });
    setTimeout(function() {
      dirPhase.style.transition = '';
      dirPhase.style.opacity    = '';
    }, 370);
  }, 370);
};

// Stripe payment handler — replace STRIPE_PAYMENT_LINK with your actual Stripe link
window.handlePayment = function() {
  var btn = document.getElementById('payment-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Redirecting…'; }

  // TODO: Replace this URL with your actual Stripe Payment Link
  // Create at dashboard.stripe.com → Payment Links → $10 one-time
  var STRIPE_URL = 'https://buy.stripe.com/REPLACE_WITH_YOUR_LINK';

  // Pass success_url back to your tour app with ?paid=1
  // Set that in your Stripe dashboard as the success URL:
  //   https://www.perplexity.ai/computer/a/lbi-pirate-tour-HF5izDTrSD6wOTkNUo0JBQ?paid=1
  window.location.href = STRIPE_URL;
};

// Check for ?paid=1 return from Stripe on page load
(function checkStripeReturn() {
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get('paid') === '1') {
      _gpStore.set('gp_paid', '1');
      window._hasPaid = true;
      // Drop only the payment flag. Replacing the whole query used to
      // erase ?dest= and start the LBI tour after an Asbury/Wildwood checkout.
      params.delete('paid');
      if (window.history && window.history.replaceState) {
        var qs = params.toString();
        window.history.replaceState({}, '', window.location.pathname + (qs ? '?' + qs : '') + window.location.hash);
      }
    }
  } catch(_) {}
})();

// Access code redemption
window.redeemCode = function() {
  var input = document.getElementById('payment-code');
  var errorEl = document.getElementById('payment-code-error');
  if (!input) return;
  var code = input.value.trim().toUpperCase();
  if (ACCESS_CODES.indexOf(code) !== -1) {
    errorEl.classList.add('hidden');
    _gpStore.set('gp_paid', '1');
    window._hasPaid = true;
    // Unlock and launch tour
    if (window._pendingDirection) {
      startTour(window._pendingDirection);
    }
  } else {
    errorEl.classList.remove('hidden');
  }
};
