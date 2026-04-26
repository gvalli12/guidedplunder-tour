// LBI Pirate Tour — Stop Data
// All stops ordered North to South (Barnegat Light → Holgate)
// Coordinates are real LBI locations

const TOUR_STOPS_NORTH_TO_SOUTH = [
  {
    id: 1,
    name: "Barnegat Lighthouse — 'Old Barney'",
    short: "Old Barney",
    location: "Barnegat Light, NJ",
    lat: 39.7577,
    lng: -74.1057,
    radius: 400,
    icon: "🏮",
    narration: `Arr, welcome aboard, ye brave soul! I be Screecher Jones, ghost of the Jersey Shore — and THIS be where the treasure hunt begins!\n\nCast yer eyes upon Old Barney — all 217 steps of her. Built in 1859 after the first lighthouse crumbled into the sea, this great tower has guided ships through Barnegat Inlet for over 160 years. But I'll tell ye what the tourist signs won't...\n\nBarnegat Inlet was once MY inlet. In the 1690s, pirates and privateers used these shoals like a fortress — the shifting sandbars that sent merchant ships to their doom were the very same bars we used to hide our sloops and escape the Crown's navy.\n\nAnd legend has it — though I neither confirm nor deny — that the great Captain Kidd himself buried a fortune worth TEN MILLION doubloons somewhere along these shores before his arrest in 1699. Old coins still wash up on the beach. Still.\n\nSo keep yer eyes low, landlubber. The treasure hunt has begun!`,
    facts: [
      "217 steps to the top — you can see Atlantic City on a clear day",
      "The original 1835 lighthouse was only 40 feet tall and deemed dangerously inadequate",
      "Captain Kidd treasure legends place buried gold somewhere near Barnegat Bay",
      "Built with 1 million bricks — it took 3 years to complete"
    ]
  },
  {
    id: 2,
    name: "Long Beach Island Massacre Site",
    short: "The Massacre",
    location: "Barnegat Light, NJ",
    lat: 39.7540,
    lng: -74.1080,
    radius: 350,
    icon: "⚔️",
    narration: `Aye, lower yer voice here, friend. The earth beneath yer feet remembers blood.\n\nIt was October 25th, 1782 — the dying days of the American Revolution. A crew of patriot sailors aboard the ship *Alligator*, led by Captain Andrew Steelman, had just captured a British vessel loaded with cargo. They came ashore RIGHT HERE to make camp for the night, celebrating their prize.\n\nBut a Loyalist cutthroat named Captain John Bacon had spies everywhere. He and his band of rogues crept through the moonlit dunes and — at the crack of dawn — fell upon the sleeping patriots with such savage fury that history came to call it the Long Beach Island Massacre.\n\nThe poor souls never had a chance. They were sleeping like babes.\n\nNow Bacon? He weren't no better than a pirate himself — worse, says I, for I at least gave fair warning before I took yer gold. But Bacon's end came swift. The patriots hunted him down and buried him in the pinelands, unmourned and unmarked.\n\nThe monument at the park entrance marks their sacrifice. Pay yer respects, matey.`,
    facts: [
      "Occurred October 25, 1782 — just months before the war's end",
      "Captain Bacon was a feared Loyalist raider along the Jersey Shore",
      "A monument stands at the entrance to Barnegat Lighthouse State Park",
      "The story is considered one of the last significant actions of the Revolution in NJ"
    ]
  },
  {
    id: 3,
    name: "Viking Village — The Fishing Docks",
    short: "Viking Village",
    location: "Barnegat Light, NJ",
    lat: 39.7512,
    lng: -74.1095,
    radius: 350,
    icon: "🎣",
    narration: `Sniff the air, landlubber! That's the smell of the sea's honest bounty — scallops, tuna, swordfish, pulled fresh from the deep.\n\nViking Village has been a working dock since the 1920s — and I say this place has the truest soul on all of Long Beach Island. These aren't pleasure boats. These be working vessels, same as the whaleboats that launched from these very shores in the late 1600s.\n\nAye, ye heard me right — WHALING. Before there were hotels and ice cream stands, the earliest settlers built whale watch towers on the dunes of this island and harpooned the great beasts from rowboats. The blubber rendered here lit the lamps of New York City.\n\nAnd during Prohibition — from 1920 to 1933 — these same docks were rather... busier than usual. Rum runners and bootleggers used the inlets and marshes of Barnegat Bay to smuggle whisky from ships anchored offshore, known as Rum Row. The Coast Guard was always one step behind, and sometimes... not even that close.\n\nA pirate by any other name, I say. Arr.`,
    facts: [
      "Viking Village is one of the largest commercial fishing docks on the East Coast",
      "Whale-watching towers were built on LBI dunes in the late 1600s",
      "During Prohibition, rum-running boats were common in Barnegat Bay",
      "Viking Village fish market has operated continuously since the 1920s"
    ]
  },
  {
    id: 4,
    name: "Harvey Cedars & Barnegat Bay",
    short: "Harvey Cedars",
    location: "Harvey Cedars, NJ",
    lat: 39.7144,
    lng: -74.1252,
    radius: 450,
    icon: "🌊",
    narration: `Pull over if ye can, and look WEST — across the bay. That flat, shimmering water stretching to the mainland is Barnegat Bay, and it has kept more secrets than ye can fathom.\n\nIn the 1700s, these waters were a highway for smugglers, privateers, and wreckers. The wreckers were a particularly nasty breed — locals who would deliberately lure ships onto the sandbars with false lights on dark and stormy nights. When the ships broke apart, they'd row out and help themselves to the cargo. Some say the lights in old Barnegat Lighthouse went dark on foggy nights... deliberately.\n\nHarvey Cedars itself is named for the ancient red cedar forests that once covered this island. The Lenape people crossed the bay every spring to harvest the abundant shellfish and fish from these very shores — centuries before any European set foot here.\n\nAnd somewhere beneath that bay — in the silt and the mud — lie the remnants of boats that never made it home. Some of them mine. I'll say no more.\n\nPress on, matey. The best clues be yet to come.`,
    facts: [
      "Barnegat Bay is 42 miles long and averages only 4.5 feet deep",
      "'Wreckers' who lured ships aground were known to operate along this shore in the 1800s",
      "The Lenape people used LBI as a seasonal fishing camp for thousands of years",
      "Harvey Cedars is named for cedar forests that once blanketed the island"
    ]
  },
  {
    id: 5,
    name: "The Long Beach Railroad — Yellow Jacket",
    short: "The Railroad",
    location: "Surf City, NJ",
    lat: 39.6835,
    lng: -74.1390,
    radius: 450,
    icon: "🚂",
    narration: `Look at the road ye're driving on. Notice how it's wide here, almost unnaturally so? And the land to either side — flatter than a doubloon?\n\nThat's no accident, matey. Ye're driving along the old RAILROAD BED of the Long Beach Railroad.\n\nFrom 1886 to 1935 — forty-nine years — a peculiar little one-car train called the Yellow Jacket chugged the entire length of Long Beach Island, from Barnegat City all the way down to Beach Haven. Ye could flag it down anywhere along the route and hop aboard, same as ye might wave down a cart in port.\n\nBefore that railroad, getting to this island was a full DAY's ordeal. Ye'd take a train to the mainland, then a coach to the bay shore, then a steamship across the water. It was a journey fit to exhaust even a pirate.\n\nThe Pennsylvania Railroad backed the venture — and when the train rolled in, so did Philadelphia's upper crust. Hotels shot up. Shops opened. The island transformed from a wild, windswept hideaway into a fashionable resort.\n\nThe Yellow Jacket ran her last trip in 1935. The automobile had won. But her ghost still runs beneath yer wheels every time ye drive the length of LBI.`,
    facts: [
      "The Long Beach Railroad ran from 1886 to 1935 — 49 years of service",
      "The 'Yellow Jacket' was a distinctive single-car engine known for its bright yellow color",
      "The wide, flat roads in Surf City follow the original railroad bed exactly",
      "The railroad was leased and operated by the Pennsylvania Railroad"
    ]
  },
  {
    id: 6,
    name: "Surf City — The Old Lifesaving Station",
    short: "Surf City",
    location: "Surf City, NJ",
    lat: 39.6730,
    lng: -74.1428,
    radius: 400,
    icon: "🚣",
    narration: `Now THESE are the real heroes of Long Beach Island — and I say that as a man whose soul was dragged to Davy Jones' locker by the New Jersey surf.\n\nThe United States Life-Saving Service built stations all along the Jersey Shore starting in 1871. The men who served them were called surfmen, and they were as fearless a crew as ever sailed these waters. Every night — especially in winter gales — they patrolled the beaches watching for ships in distress.\n\nWhen a ship ran aground, they'd fire a rope cannon — a Lyle gun — over the wreck, and haul the survivors to shore in a breeches buoy: a pair of canvas pants hung on a ring that slid along the rope. They saved THOUSANDS of lives.\n\nBut not all souls could be saved. The shores of Long Beach Island are a graveyard of ships going back to 1705, when the first recorded wreck — the schooner *Archibald Morris* — came to grief on these sands.\n\nAye. Every town on this island has a ghost story. Every one.`,
    facts: [
      "The Lyle gun fired a rope 700 feet to stranded ships",
      "Life-saving surfmen patrolled 2-mile beach beats every night in all weather",
      "Over 200 ships have been wrecked off Long Beach Island since the 1700s",
      "The first recorded LBI shipwreck was the schooner Archibald Morris in 1705"
    ]
  },
  {
    id: 7,
    name: "Ship Bottom — The Bridge Gateway",
    short: "Ship Bottom",
    location: "Ship Bottom, NJ",
    lat: 39.6458,
    lng: -74.1573,
    radius: 400,
    icon: "🌉",
    narration: `Ah, Ship Bottom — the gateway to the island! Just across that bridge lies the mainland. But did ye know that before the first bridge was built in 1914, the only way onto this island was by BOAT?\n\nAnd before THAT — before any bridge, any railroad, any road — Long Beach Island was as isolated as any deserted isle in the Caribbean. The only people here were fishermen, hunters, and those with reasons to stay hidden from the law.\n\nBut Ship Bottom was named — mark me well — for DEATH and RESCUE. In 1817, a terrible storm drove a vessel hard onto the bar offshore. All hands were lost, or so thought the rescuers — until they heard faint knocking from inside the overturned hull. They broke through and pulled free a lone survivor, a woman, who had survived for DAYS inside that dark wooden tomb.\n\nWhen asked her name and home, she could only repeat 'Ship bottom... ship bottom...' Whether from madness or language, no one knows. But the name stuck.\n\nThe Yellow Jacket railroad crossed to the mainland right here — a wooden trestle stretched over the bay from Manahawkin, all 2,500 feet of it, swaying in the sea wind. Now that was a crossing to test a man's courage.`,
    facts: [
      "Ship Bottom is the only town on LBI at the foot of the main bridge",
      "The first bridge to LBI opened in 1914, replacing ferry service",
      "The railroad trestle from Manahawkin to Ship Bottom was 2,500 feet long",
      "The name comes from the 1817 rescue of a survivor trapped inside a wrecked ship"
    ]
  },
  {
    id: 8,
    name: "Brant Beach — The Wreck of the Betsey",
    short: "Brant Beach",
    location: "Brant Beach, NJ",
    lat: 39.6277,
    lng: -74.1620,
    radius: 400,
    icon: "💰",
    narration: `Slow yer vessel, friend — for ye are sailing over TREASURE.\n\nIn 1778, during the thick of the Revolutionary War, the merchant ship *Betsey* was caught in a vicious nor'easter and sought shelter in the inlet near Beach Haven. She was never seen again — swallowed by the shifting sands and strong tides.\n\nFor nearly 200 years, she lay forgotten. Then — in the 1940s — beachcombers in this very stretch of beach began finding old silver coins washing up from the sea. Spanish pieces of eight, minted in the colonies, dated from the 18th century. They're still found occasionally today.\n\nBrant Beach was one of the finest natural harbors on the island. The Lenape had a favored camp right here, where the cove's shape created calm water for fishing. The early European settlers built whale watch towers on these dunes in the late 1600s — tall wooden platforms where men with spyglasses would scan the horizon for the spouts of right whales.\n\nAnd SOMEWHERE beneath the sand near here, the *Betsey* still rests. Her silver not fully spent. The ocean gives, and the ocean takes. Mostly takes. But today... who knows?`,
    facts: [
      "The ship Betsey wrecked near Beach Haven Inlet in 1778 during a nor'easter",
      "Silver coins attributed to the Betsey were found on beaches here in the 1940s",
      "The naturally curved cove of Brant Beach was a Lenape fishing camp for centuries",
      "Spanish pieces of eight still occasionally wash ashore along LBI beaches"
    ]
  },
  {
    id: 9,
    name: "Fantasy Island Amusement Park",
    short: "Fantasy Island",
    location: "Beach Haven, NJ",
    lat: 39.5710,
    lng: -74.2357,
    radius: 400,
    icon: "🎡",
    narration: `Ha! Now HERE is something to make a ghost pirate scratch his barnacled head.\n\nA pirate's life was all risk and reward — but these people? They've turned thrill and danger into a FAMILY OUTING. Fantasy Island Amusement Park has been spinning and screaming since 1984, built on the bones of the old Hartman's Amusement Park that came before it.\n\nBut mark me words — the real fantasy on this island was always the same dream: escape. Every Victorian family who rode the Yellow Jacket down from Philadelphia was chasing it. Every rum runner slipping through the bay inlets by moonlight was chasing it. Every pirate who dropped anchor in a hidden cove was chasing it.\n\nThe amusement park is free to enter, if ye can believe it — always has been. Ye only pay for what ye ride. That's a more honest arrangement than most I've encountered in my years on the account.\n\nAnd that Carousel — the one that's been spinning since 1988 — I've been known to watch it on quiet autumn mornings when the park is empty and the wind off the bay blows the music away. There's something deeply fine about a carousel that keeps turning long after the summer crowds have gone.\n\nNow get back in yer vessel. We've more history to find.`,
    facts: [
      "Fantasy Island opened in 1984, built on the site of the older Hartman's Amusement Park",
      "Always free to enter — guests only pay for rides and games",
      "The Carousel has been a fixture since 1988",
      "Hurricane Sandy in 2012 caused major damage — the park rebuilt and reopened in 2013"
    ]
  },
  {
    id: 10,
    name: "Beach Haven — The 1916 Shark Attacks",
    short: "The Jaws Attacks",
    location: "Beach Haven, NJ",
    lat: 39.5680,
    lng: -74.2377,
    radius: 500,
    icon: "🦈",
    narration: `We arrive now at Beach Haven — the grandest resort on Long Beach Island! Grand hotels! Fashionable promenades! And in the summer of 1916... TERROR from the deep.\n\nJuly 1st, 1916. A young Philadelphia man named Charles Vansant went for a swim in the ocean right here, near the old Engleside Hotel. The beach was crowded with summer visitors. And then — the screaming.\n\nA shark attacked him in shallow water, within sight of the shore, and he bled to death on the hotel manager's desk that very evening. The first confirmed fatal shark attack in American history.\n\nDespite the horror, the beaches STAYED OPEN. Just five days later, another man was killed 45 miles north. Then came the attacks in Matawan Creek — a CREEK, 30 miles inland — where a bull shark killed two more souls. In twelve days, four people died and one barely survived.\n\nThe country erupted in panic. The president convened his cabinet. Congress appropriated five thousand dollars to hunt sharks. And half a century later, a man named Peter Benchley, whose grandfather had fished these very shores, wrote a novel called... JAWS.\n\nAye. The ocean has more teeth than I do, and that's saying something.`,
    facts: [
      "Charles Vansant was killed July 1, 1916 — the first confirmed fatal US shark attack",
      "Four people died in 12 days along the NJ coast in summer 1916",
      "The attacks inspired Peter Benchley's 1974 novel Jaws",
      "The Engleside Hotel, site of Vansant's death, stood at Beach Avenue and Engleside Ave"
    ]
  },
  {
    id: 11,
    name: "Beach Haven Historic District",
    short: "Beach Haven Victorian",
    location: "Beach Haven, NJ",
    lat: 39.5653,
    lng: -74.2410,
    radius: 400,
    icon: "🏚️",
    narration: `Look around ye at these magnificent old houses — all Victorian gingerbread trim, wraparound porches, and painted ladies. This is the Beach Haven Historic District, and it tells the story of when this island became respectable.\n\nBefore the Civil War, this southern end of Long Beach Island was nothing but dunes and marsh grass. Then in 1874, Archelaus Pharo and a group of Philadelphia investors laid out the streets of Beach Haven — a planned resort town, built from scratch on bare sand. They modeled it on Cape May, the great Victorian seaside resort.\n\nThe old Engleside Hotel stood at the heart of it, host to presidents and society people. The Baldwin Hotel, the Parry House — Beach Haven became the playground of Philadelphia's elite.\n\nBut I know what these society people were really after: the same thing the pirates were after. The good life. Good food, good drink, the open sea, and freedom from the rules of the mainland.\n\nSome things never change, matey. We just dress it up different.\n\nThe Long Beach Island Historical Museum stands in the old Episcopal church built in 1882 — go inside and see what these civilized folk built upon these wild shores.`,
    facts: [
      "Beach Haven was founded in 1874 by Philadelphia investors as a planned resort",
      "The Historic District is on the National Register of Historic Places",
      "The LBI Historical Museum is housed in an 1882 Episcopal church",
      "Beach Haven's grand Victorian hotels rivaled those of Cape May"
    ]
  },
  {
    id: 12,
    name: "New Jersey Maritime Museum",
    short: "Maritime Museum",
    location: "Beach Haven, NJ",
    lat: 39.5641,
    lng: -74.2425,
    radius: 300,
    icon: "⚓",
    narration: `Now HERE — here is a place after me own heart. The New Jersey Maritime Museum at Beach Haven holds the greatest collection of shipwreck artifacts on the entire coast. Artifacts pulled from wrecks that went to their graves just offshore of where ye're standing.\n\nThe waters off New Jersey, ye see, were a graveyard long before anyone kept records. Merchant ships sailing between the Caribbean and New York ran the Outer Banks of Jersey every day — in all weather, in all seasons. And the sandbar that juts from Barnegat Inlet? That bar has claimed more ships than any storm.\n\nThe museum tells those stories — the diving, the discovery, the ghost ships still lying on the bottom just miles from where ye stand. There are original navigation tools, salvaged cargo, photographs of wrecks barely covered by the surf.\n\nAnd I'll tell ye a secret: the ocean floor off Long Beach Island is SO thick with wrecks that divers call it the Wreck Capital of the East Coast. Some are from the 1700s. Some from World War II — German U-boats sank more than 400 ships off the American coast in 1942, right here in these waters.\n\nThe sea is a library. And every wreck is a chapter.`,
    facts: [
      "NJ waters have over 3,000 documented shipwrecks from 1700s to WWII",
      "German U-boats sank over 400 Allied ships off the US East Coast in 1942",
      "The museum is free to enter and considered NJ's premiere maritime museum",
      "Divers regularly find colonial-era artifacts on the ocean floor near LBI"
    ]
  },
  {
    id: 13,
    name: "Surflight Theatre",
    short: "Surflight Theatre",
    location: "Beach Haven, NJ",
    lat: 39.5637,
    lng: -74.2438,
    radius: 300,
    icon: "🎭",
    narration: `Even a ghost pirate appreciates the arts, matey — and the Surflight Theatre has been putting on shows since 1950! It's on the National Register of Historic Places now, part of the Beach Haven Historic District.\n\nBut let me tell ye of something MORE theatrical than any show they've staged inside those walls.\n\nIn 1780, right near the beach at Beach Haven, American patriots staged an ambush on a British supply wagon. The Tories had been raiding the island's small settlements, taking what they pleased and leaving nothing. The patriots — farmers, fishermen, and privateers — waited in the dunes for three days before striking. They made off with the supplies and disappeared into the inlets before the British even knew what hit them.\n\nCleverness and patience, matey. The tools of every pirate and every playwright.\n\nThe theatre still runs seven months a year — live shows, children's theatre, and even ghost tours launched from the Historical Museum on summer Tuesday and Wednesday evenings. Ghost tours of Beach Haven! I ought to sign on as guide. The dead know far more than the living about what happened here.`,
    facts: [
      "Surflight Theatre has run since 1950 and is on the National Register of Historic Places",
      "Ghost tours of Beach Haven run Tuesday and Wednesday evenings in summer",
      "Beach Haven's streets were laid out in 1874 in a grid — still visible today",
      "The theatre offers productions for 7 months a year including children's theatre"
    ]
  },
  {
    id: 14,
    name: "Edwin B. Forsythe Wildlife Refuge — Holgate",
    short: "Forsythe Refuge",
    location: "Holgate, NJ",
    lat: 39.5230,
    lng: -74.2620,
    radius: 500,
    icon: "🦅",
    narration: `Slow to a stop, if ye would. Listen.\n\nHear that? The wind in the dune grass. The cry of the piping plover. The distant rumble of surf.\n\nBeyond this point lies one of the last wild stretches of the Jersey Shore — the Edwin B. Forsythe National Wildlife Refuge, Holgate Division. Over 48,000 acres of salt marsh, shallow bay, and undeveloped barrier beach, stretching south toward Atlantic City.\n\nSome of the rarest birds in the world nest here — the piping plover, the least tern, the bald eagle. The Atlantic Flyway, that great highway of migrating birds stretching from Canada to the Caribbean, passes directly overhead. In spring and fall, tens of thousands of birds stop here on their journeys north and south.\n\nAnd beneath their wings? The same bay the Lenape crossed by canoe. The same marshes where pirates hid their spoils. The same inlets that swallowed merchant ships whole.\n\nThink of it — everything on this island has been built, torn down, rebuilt. Only the refuge has been left alone. Only the birds remember what this coast truly looked like before we arrived.\n\nI envy them, if a ghost can envy. To see it as it was, in the beginning.`,
    facts: [
      "The Forsythe Refuge protects 48,000+ acres of coastal habitat in southern NJ",
      "Holgate is home to the federally threatened piping plover — beach access is often restricted during nesting season",
      "The Atlantic Flyway migration route carries millions of birds over LBI each spring and fall",
      "The refuge was named for Congressman Edwin B. Forsythe who helped pass the Marine Mammal Protection Act of 1972"
    ]
  },
  {
    id: 15,
    name: "Holgate — The End of the Island",
    short: "Journey's End",
    location: "Holgate, NJ",
    lat: 39.5127,
    lng: -74.2676,
    radius: 600,
    icon: "🗺️",
    narration: `Ye've done it, brave soul. Ye've sailed the full length of Long Beach Island — from the lighthouse at Barnegat Light to the wild, empty dunes of Holgate. Eighteen miles of history, mystery, and the salt-soaked spirit of this magnificent barrier island.\n\nHolgate is where the island ends — literally. Below this point lies the federally protected wilderness where no roads run and no buildings stand. Just dunes, birds, and the restless Atlantic. Just as it was when the Lenape first came here. Just as it was when my crew and I dropped anchor in the inlet and waded ashore by moonlight.\n\nI'll tell ye the truth now that ye've earned it, matey. The treasure I spoke of? Captain Kidd's buried gold, the silver from the *Betsey*, the sunken cargo of a hundred wrecked ships?\n\nThe real treasure is what ye carry now — the knowledge of this island's true story. Not the ice cream and the beach badges. The blood and the courage and the cunning of every soul who called these 18 miles home.\n\nBut keep yer eyes on the sand anyway. Old Spanish coins have a way of turning up when ye least expect them.\n\nFair winds, matey. Screecher Jones bids ye farewell — until the next tide.`,
    facts: [
      "Holgate marks the southern end of Long Beach Island — no road continues further",
      "The island is 18 miles long and only 2-6 blocks wide at most points",
      "LBI has been continuously inhabited since the 1690s",
      "Over 30,000 permanent residents call LBI home year-round"
    ]
  },

  // ─────────────── NEW STOPS (16–25) ───────────────

  {
    id: 16,
    name: "Tucker's Island — The Lighthouse That Drowned",
    short: "Tucker's Island",
    location: "Off Beach Haven Inlet, NJ",
    lat: 39.5590,
    lng: -74.2500,
    radius: 500,
    icon: "🌊",
    narration: "SQUAWK! Look out to sea — just beyond Beach Haven Inlet. See nothin' but water? GOOD. That's the point.\n\nThat, me feathered friend, is where Tucker's Island USED to be. An entire island — with a lighthouse, a hotel, a post office, a life-saving station, even a whole village — swallowed by the sea.\n\nTucker's Island sat just south of LBI for over 200 years. The lighthouse was built in 1848, stood 52 feet tall, guided ships through the inlet. The keeper and his family lived there. Children went to a one-room schoolhouse. People were BORN on that island and never left.\n\nThen the ocean decided it wanted it back. Storm by storm, year by year, erosion chewed the island away. By the 1920s the lighthouse keeper was writing desperate letters to Washington — the water was at his doorstep. In 1927 the lighthouse collapsed into the sea live on the front page of every newspaper on the East Coast.\n\nBy 1950 Tucker's Island was completely gone. Not abandoned. Not evacuated. GONE. Swallowed whole.\n\nSQUAWK! The sea giveth, and the sea taketh away. I should know — I've watched this coast for 300 years.",
    facts: [
      "Tucker's Island was a real, inhabited island that completely eroded into the sea by 1950",
      "Its lighthouse collapsed into the ocean in 1927 — the event was widely photographed",
      "The island had a hotel, post office, and life-saving station at its peak",
      "Tuckerton Seaport on the mainland has a replica of the 1848 Tucker's Island lighthouse"
    ]
  },
  {
    id: 17,
    name: "The Morro Castle Disaster",
    short: "Morro Castle",
    location: "Beach Haven, NJ",
    lat: 39.5600,
    lng: -74.2450,
    radius: 450,
    icon: "🔥",
    narration: "Now HERE be a tale that'll curl yer tail feathers.\n\nSeptember 8th, 1934. The SS Morro Castle — a luxury ocean liner sailing from Havana to New York — caught fire in the night just off this very coast. It was a Saturday. The summer season was ending. The ship was full of vacationers coming home.\n\nThe captain had died mysteriously the night before. The acting captain froze. The fire spread impossibly fast through the ship's ornate wooden interiors. And the radio operator — George Rogers, they called him the hero of the Morro Castle — stayed at his post broadcasting SOS until the flames drove him out.\n\nThe burning hulk drifted south and ran aground right at the Asbury Park boardwalk. One hundred and thirty-seven people perished. The wreck became a grotesque tourist attraction — Asbury Park charged ADMISSION to view it. Ten cents a look at 137 people's grave.\n\nBut here's the dark twist, matey: that heroic radio man, George Rogers? Years later he was convicted of MURDER. Some investigators believe he set the fire himself.\n\nThe sea, the shore, and the people on them... they'll never stop surprising ye. SQUAWK.",
    facts: [
      "The SS Morro Castle burned September 8, 1934 — 137 people died",
      "The burning ship drifted aground at Asbury Park, where it became a morbid tourist attraction",
      "Radio operator George Rogers was later convicted of an unrelated murder",
      "The NJ Maritime Museum in Beach Haven has a dedicated Morro Castle exhibit room"
    ]
  },
  {
    id: 18,
    name: "WWII Watch Tower — Eyes on the Sea",
    short: "WWII Watchtower",
    location: "Beach Haven Terrace, NJ",
    lat: 39.5950,
    lng: -74.2270,
    radius: 450,
    icon: "🔭",
    narration: "SQUAWK! I'll tell ye something no tour guide ever mentions — this peaceful beach were a WAR ZONE in 1942.\n\nAfter Pearl Harbor, the U.S. Army built a chain of concrete watchtowers up and down the Jersey Shore. Soldiers manned them 24 hours a day, scanning the horizon for German U-boats. And they were RIGHT to. In the first six months of 1942, German submarines sank over 400 Allied ships off the American East Coast — more tonnage than Pearl Harbor — in a campaign the Germans called Operation Drumbeat.\n\nAt night, the glow of shore towns silhouetted ships against the horizon, making them easy targets. The Navy begged shore towns to dim their lights. Some wouldn't — bad for business, they said. Ships kept burning.\n\nFishermen pulled bodies from the water. Tar and oil from torpedoed tankers washed up on LBI beaches. The war wasn't overseas — it was RIGHT HERE.\n\nLook along this stretch of coast and imagine a young soldier up in that concrete tower, binoculars pressed to his eyes, watching the dark Atlantic for a periscope. Three hundred years of pirates and smugglers on these shores — and then one day the enemy had engines and torpedoes.\n\nThe ocean doesn't change, matey. Only the ships do.",
    facts: [
      "German U-boats sank 400+ ships off the US East Coast in early 1942 — Operation Drumbeat",
      "Concrete observation towers were built on the Jersey Shore in 1942 and some still stand",
      "Shore town lights silhouetted Allied ships, making them easy U-boat targets",
      "Oil and wreckage from torpedoed ships regularly washed up on LBI beaches in 1942"
    ]
  },
  {
    id: 19,
    name: "The Causeway — Gateway Across the Bay",
    short: "LBI Causeway",
    location: "Manahawkin / Ship Bottom, NJ",
    lat: 39.6530,
    lng: -74.1700,
    radius: 600,
    icon: "🌉",
    narration: "SQUAWK! Every bird knows the best way to cross water is to FLY. But ye poor wingless landlubbers needed a bridge.\n\nThe causeway connecting the mainland to Long Beach Island is 2.1 miles long — one of the longest coastal causeways in New Jersey. But before it existed, this crossing was deadly serious business.\n\nThe first bridge opened in 1914 — a rickety wooden thing wide enough for one car. Before that, a steam ferryboat named the Pohatcong made the crossing. And before THAT — before the ferry, before the railroad trestle, before any of it — people crossed Barnegat Bay in open boats, praying the weather held.\n\nIn winter, the bay froze solid some years and people walked across on the ice. Other years, the ice broke in chunks that spun in the current and swamped boats. At least a dozen people drowned trying to cross this bay before the first bridge was built.\n\nHurricane Sandy in 2012 closed the causeway entirely — it was the ONLY road on or off the island, and 20,000 residents were trapped. First responders were stranded on the mainland. The island flooded. It was a dark reminder that for all our bridges and roads — this is still a barrier island, alone in the sea.\n\nYe can never fully tame a strip of sand surrounded by ocean. I've watched people try for 300 years.",
    facts: [
      "The Route 72 causeway is 2.1 miles long — the only road on or off the island",
      "Before the 1914 bridge, a steam ferry called the Pohatcong crossed Barnegat Bay",
      "Hurricane Sandy in October 2012 flooded and closed the causeway, trapping 20,000 residents",
      "In harsh winters, Barnegat Bay historically froze solid — people walked across on the ice"
    ]
  },
  {
    id: 20,
    name: "Barnegat Bay — The Disappearing Ecosystem",
    short: "Barnegat Bay Crisis",
    location: "Barnegat Bay, NJ",
    lat: 39.7000,
    lng: -74.1600,
    radius: 600,
    icon: "🦞",
    narration: "SQUAWK! Now I'm going to say something that'll surprise ye, coming from a pirate seagull: I CARE about this bay.\n\nI've flown over Barnegat Bay for 300 years. I've watched it teem with oysters, crabs, flounder, clams, striped bass, blue claw crabs as big as yer hand. The Lenape called it an inexhaustible garden. The whalers and fishermen who settled here called it their livelihood.\n\nBut since the 1970s? The bay has been choking. Too many nutrients — from lawn fertilizers, from septic tanks, from runoff — have been feeding massive algae blooms that suck the oxygen from the water. The eel grass, which used to carpet the bay bottom and shelter juvenile fish, has shrunk by 60 percent.\n\nThe crab population? Down 90 percent since 1990. The oysters — which once filtered the entire bay every few days — were commercially wiped out over a century ago. Without them, the water stays cloudy and choked.\n\nThis is the bay that built this island's soul. The bay that rum runners crossed by moonlight. The bay the Lenape fished for thousands of years. If we lose it — and we might — we lose something that can never come back.\n\nI'm a pirate seagull. I steal french fries and tell tall tales. But I'm also 300 years old, and I'm telling ye — PAY ATTENTION TO THIS BAY.",
    facts: [
      "Barnegat Bay's blue claw crab population has declined by 90% since 1990",
      "Eelgrass beds — critical nursery habitat — have shrunk by over 60% since the 1970s",
      "Oysters once filtered the entire bay every few days — they were commercially extinct by the early 1900s",
      "The Jacques Cousteau National Estuarine Research Reserve encompasses Barnegat Bay"
    ]
  },
  {
    id: 21,
    name: "Loveladies — The Artists' Colony",
    short: "Loveladies",
    location: "Loveladies, NJ",
    lat: 39.7310,
    lng: -74.1180,
    radius: 400,
    icon: "🎨",
    narration: "SQUAWK! Look around ye. Notice anything different about Loveladies? The houses here aren't the usual beach boxes. They're... ambitious. Angular. Dramatic. Some look like they came from outer space and landed on the dunes.\n\nLoveladies became a hotbed of modernist architecture in the 1960s when developers marketed it specifically to artists, architects, and New York intellectuals. The lots were big. The deed restrictions encouraged bold design. And so the architects came — and they built things that would have made the fishermen who named this place scratch their heads in confusion.\n\nThe name 'Loveladies' itself is a mystery. Some say it comes from 'love ladies harbor' — a colonial-era euphemism for a safe harbor where sailors could find... hospitality. Others say it was named for a gunning club in the 1800s. No one knows for certain.\n\nAnd speaking of gunning clubs — wealthy sportsmen from Philadelphia built hunting lodges all along this stretch of LBI starting in the 1870s. They came for the ducks, the geese, the snipe. They'd arrive by the Yellow Jacket railroad with their retrievers and their shotguns and spend weeks on the bay.\n\nBefore the artists came. Before the architects came. Before the summer people came. This was a hunter's paradise.\n\nNow it sells for three million a lot. Times change. SQUAWK.",
    facts: [
      "Loveladies became known for modernist architecture in the 1960s-70s, attracting New York architects",
      "The origin of the name 'Loveladies' is genuinely disputed — colonial harbor name or hunting club",
      "Wealthy Philadelphia sportsmen built duck hunting lodges along this stretch in the 1870s-1900s",
      "Hurricane Sandy flooded many of Loveladies' distinctive homes in 2012"
    ]
  },
  {
    id: 22,
    name: "Beach Haven Inlet — Graveyard of Ships",
    short: "Beach Haven Inlet",
    location: "Beach Haven, NJ",
    lat: 39.5580,
    lng: -74.2530,
    radius: 450,
    icon: "💀",
    narration: "SQUAWK! Slow down now. Look south. You're at Beach Haven Inlet, and I want ye to understand what lies beneath the water just offshore.\n\nThis inlet has claimed more ships than any storm — because it moves. Barrier island inlets wander. The sandbar shifts. The channels change. What was safe passage last year is a killing ground this year.\n\nIn 1854, the passenger ship Powhatan struck the bar just north of here in a gale. 311 people drowned. It remains one of the deadliest shipwrecks in American history, and it happened just miles from shore, in sight of land.\n\nAfter that disaster, Congress finally funded a proper expansion of the life-saving stations on LBI. The surfmen who dragged people to shore through roaring surf — they existed because of tragedies like the Powhatan.\n\nSPOT THE INLET. See how the water color changes from blue to brown? That's where the current runs fast and the sandbars shift. The old sailors called these inlets 'the graveyard coast' — not because they wanted to be dramatic, but because that's what it was.\n\nI've watched every one of those ships go down, matey. Every. Single. One.\n\nKeep yer vessel to safe harbor. SQUAWK.",
    facts: [
      "The Powhatan sank near Beach Haven Inlet in 1854 — 311 people drowned",
      "The Powhatan disaster was a major impetus for expanding the US Life-Saving Service on LBI",
      "Beach Haven Inlet's channel and sandbars constantly shift — historic charts become unreliable within years",
      "Over 40 documented wrecks lie within 3 miles of Beach Haven Inlet"
    ]
  },
  {
    id: 23,
    name: "The Decoy Carvers of Barnegat Bay",
    short: "Decoy Carvers",
    location: "Tuckerton / LBI, NJ",
    lat: 39.7200,
    lng: -74.1400,
    radius: 500,
    icon: "🦆",
    narration: "SQUAWK! Now here's a piece of Jersey Shore history that most people have never heard of — and it's every bit as remarkable as anything else on this island.\n\nStarting in the 1800s, the baymen of Barnegat Bay — the crabbers, clammers, and market hunters who worked these waters — carved wooden duck decoys to lure waterfowl during hunting season. But the decoys of Barnegat Bay weren't just functional tools. They were works of art.\n\nCarvers like Harry Shourds, Ira Hudson, and the Birdsall family developed a distinctive Barnegat Bay style — lightweight hollow-bodied birds with a high riding posture, designed to bob convincingly in the choppy bay chop. Each carver had his own signature shapes and paint patterns.\n\nBy the early 1900s, collectors in Philadelphia and New York were paying serious money for these decoys — not to hunt with, but to display. The Barnegat Bay decoy tradition is now considered one of the great American folk art forms. Museum-quality examples sell for tens of thousands of dollars.\n\nSQUAWK! As a bird myself, I find the whole business slightly alarming. But I can't deny the artistry. Some of those old carved ducks look more alive than the real thing.\n\nThe Tuckerton Seaport on the mainland preserves this tradition. Carvers still work there today.",
    facts: [
      "Barnegat Bay decoys are considered a major American folk art form",
      "Master carver Harry Shourds (1861-1920) was one of the most celebrated decoy makers in history",
      "Museum-quality Barnegat Bay decoys sell for $10,000-$50,000+ at auction",
      "The Tuckerton Seaport hosts live decoy carving demonstrations and houses a major collection"
    ]
  },
  {
    id: 24,
    name: "Hurricane Sandy — The Storm That Changed Everything",
    short: "Hurricane Sandy",
    location: "Ortley Beach / LBI, NJ",
    lat: 39.6600,
    lng: -74.1520,
    radius: 500,
    icon: "🌀",
    narration: "SQUAWK. I'm going to drop the jokes for a moment, matey.\n\nOctober 29th, 2012. Hurricane Sandy made landfall near Brigantine — just 30 miles south — with a 14-foot storm surge. Barnegat Bay filled to the brim and then OVERTOPPED, flooding the island from the bay side before the ocean waves even arrived. It was called a bay surge, and no one had seen anything like it in living memory.\n\nLong Beach Island flooded from curb to curb. Entire neighborhoods were buried under four feet of sand and water. The causeway — the ONLY road on or off the island — was destroyed. Thirty-five thousand people had evacuated. The ones who stayed... many had to be rescued by boat or helicopter.\n\nThe destruction was staggering. Hundreds of homes destroyed. The boardwalk in towns up and down the shore — gone. Roller coasters in the surf. Gas lines broken, fires burning in the flood water.\n\nLBI recovered. People came back. Houses were rebuilt higher. The boardwalks rose again. But the island is different now — you can see it in the raised houses on their new pilings, the reinforced dunes, the coastal resilience projects.\n\nThe ocean has always been in charge here. Sandy was just its way of reminding everyone.\n\nI've seen storms before. I'll see storms again. But that one... SQUAWK. That was something else.",
    facts: [
      "Hurricane Sandy struck October 29, 2012 with a 14-foot storm surge",
      "LBI flooded from the bay side first — a phenomenon called 'bay surge' — before the ocean waves arrived",
      "The Route 72 causeway was destroyed, cutting off the island entirely",
      "Recovery took years — many homes were rebuilt on new higher pilings to meet new flood requirements"
    ]
  },
  {
    id: 25,
    name: "The Lenape — First Keepers of the Island",
    short: "The Lenape",
    location: "Central LBI, NJ",
    lat: 39.6800,
    lng: -74.1470,
    radius: 600,
    icon: "🌿",
    narration: "SQUAWK. Before the pirates. Before the whalers. Before the life-savers and the rum runners and the railroad and the summer people — this island belonged to the Lenape.\n\nThe Lenape people — the Lenni-Lenape, the Original People — had lived along the Jersey Shore for at least 10,000 years before any European arrived. They called this island Popuessing — meaning 'place of the big shells.' It was a seasonal camp: they would cross Barnegat Bay in dugout canoes every spring, following the abundance of fish, clams, oysters, and crabs that made this coast one of the richest food sources on the Atlantic seaboard.\n\nThey didn't build permanent structures on the barrier island — they understood it. They knew barrier islands are temporary things, breathing in and out with the sea. They came when the island offered food and left when the season changed.\n\nWhen the Dutch arrived in the 1600s, they traded with the Lenape for beaver pelts, exchanging tools and cloth. For a few generations it worked. Then the European diseases hit — smallpox, measles — killing up to 90 percent of the Lenape in some communities. Within a century of European contact, the people who had kept this island for ten thousand years were gone from it.\n\nBut they left their mark. Every time ye eat a clam or pull a crab from this bay, ye are taking from the same abundance they lived by.\n\nSQUAWK. Remember who was here first.",
    facts: [
      "The Lenape called this barrier island 'Popuessing' — meaning 'place of the big shells'",
      "Lenape peoples inhabited the Jersey Shore for at least 10,000 years before European contact",
      "They used the island seasonally — crossing Barnegat Bay by dugout canoe each spring",
      "European diseases reduced Lenape populations by up to 90% within a century of first contact"
    ]
  }

];;

// South-to-North is just the reverse
// originalId always matches the audio file name (stop-01.mp3 … stop-25.mp3)
// id is the display position number shown in the UI
const TOUR_STOPS_SOUTH_TO_NORTH = [...TOUR_STOPS_NORTH_TO_SOUTH].reverse().map((stop, i) => ({
  ...stop,
  originalId: stop.id,  // preserve for audio lookup
  id: i + 1            // display order (1 = first stop in this direction)
}));

// Also tag north-to-south stops with originalId for consistency
TOUR_STOPS_NORTH_TO_SOUTH.forEach(stop => { stop.originalId = stop.id; });

let ACTIVE_STOPS = [];

function getStops(direction) {
  return direction === 'north' ? TOUR_STOPS_NORTH_TO_SOUTH : TOUR_STOPS_SOUTH_TO_NORTH;
}
