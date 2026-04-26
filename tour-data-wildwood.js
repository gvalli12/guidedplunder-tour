// Screecher Jones' Ghost Ship Tour of The Wildwoods — 18-Stop GPS Driving Tour
// North-to-South: Hereford Inlet Lighthouse (North Wildwood) → Wildwood Crest Southern Tip

const WILDWOOD_STOPS_NORTH_TO_SOUTH = [
  {
    id: 1,
    name: "The Sentinel's Graveyard",
    short: "Hereford Inlet Lighthouse",
    location: "North Wildwood, NJ",
    lat: 39.0076,
    lng: -74.8014,
    radius: 400,
    icon: "🏮",
    narration: `Arr, this be me personal favorite lighthouse — not because of its pretty gardens, though I do appreciate a good English cottage rose.

The Hereford Inlet Lighthouse was lit on May 11, 1874, designed in the unique Swiss Carpenter Gothic style by Paul J. Pelz — the same architect who later designed the Library of Congress in Washington. The very first keeper, John Marche, drowned when his rowboat capsized on a return trip from the mainland after only three months on the job. A drowned lighthouse keeper! That's practically a kin.

In August 1913, a severe storm undermined the foundation so badly that the entire structure had to be physically moved 150 feet westward, where it stands today.

The lighthouse was boarded up and left to rot for eighteen years after 1964. Eighteen years! Even ghosts need somewhere presentable to haunt.

This inlet was where we old sailors used to slip our vessels in from open water — the shifting sandbars could sink a careless ship faster than a broadside cannonball. And they did. Dozens of them. That's why they built this fancy wood-frame beacon.`,
    facts: [
      "Designed by Paul J. Pelz — the same architect who designed the Library of Congress",
      "First keeper John Marche drowned after only 3 months on the job in August 1874",
      "The entire lighthouse was physically relocated 150 feet westward in 1913 after storm damage",
      "It stood abandoned and boarded for 18 years after 1964 before being restored"
    ]
  },
  {
    id: 2,
    name: "The Wreck-Watcher's Lookout",
    short: "Life-Saving Station",
    location: "North Wildwood, NJ",
    lat: 39.0082,
    lng: -74.8022,
    radius: 350,
    icon: "⚓",
    narration: `The Life-Saving Service! In me day, if yer ship broke apart on a sandbar, ye had two choices: swim or drown. There was no fancy breeches buoy flung out to save ye.

But I will confess — these surfmen were brave, mad souls. Rowing out into crashing surf in open wooden boats to pull drowning sailors from the deep? That's pirate-level courage.

The U.S. Life-Saving Service established a station here in 1849 — one of 45 along the New Jersey coast — specifically because the shifting sandbars at Hereford Inlet's mouth caused constant groundings and shipwrecks. The building ye see with the lookout tower is the 1939 Coast Guard station.

During World War II, young men stood up in that cupola with binoculars, watching for the shadows of German submarines below the waves. German U-boats sank merchant ships RIGHT HERE — close enough that people on the Wildwood beach could see the fires at night.

Me own ghostly nerves were rattled, and I am already dead.`,
    facts: [
      "A Life-Saving Service station was established here in 1849 to rescue ships foundering on the inlet's sandbars",
      "German U-boats sank merchant ships so close to Wildwood that people on the beach could see the fires",
      "The 1939 Coast Guard station replaced the third (1888) Life-Saving Station on this site",
      "Whalers first used Hereford Inlet to haul catches ashore in the 17th century"
    ]
  },
  {
    id: 3,
    name: "The Village That Changed Its Name",
    short: "Anglesea Historic District",
    location: "North Wildwood, NJ",
    lat: 39.0027,
    lng: -74.8012,
    radius: 400,
    icon: "🏘️",
    narration: `Anglesea! Now THAT is a proper name for a settlement of seafaring folk. North Wildwood sounds like something a real estate developer invented — which, come to think of it, it was.

These Scandinavian fishermen were hard men. Norwegian and Swedish immigrants who followed the fish here after the Civil War, built their shacks on the dunes with no road in, no bridge, no train. The only way onto this island was by boat. They named the place after Wales, which tells ye something about the weather.

The borough of Anglesea was incorporated in 1885 — the first permanent European settlement on Five Mile Beach. When the neighboring resort of Wildwood began booming in the early 1900s, the town quietly renamed itself North Wildwood in 1906 to capitalize on the glamour.

Old-timers never fully accepted the change. The Anglesea Volunteer Fire Company No. 1, founded in 1897, still bears the original name today. In 1906 they traded in the name Anglesea for North Wildwood, like a pirate trading in his cutlass for a napkin. They call it civic ambition. I call it a betrayal of the sea.`,
    facts: [
      "Anglesea was the first permanent European settlement on Five Mile Beach, incorporated in 1885",
      "Scandinavian fishermen named it after Anglesey, Wales — the landscape reminded them of home",
      "The town renamed itself North Wildwood in 1906 to capitalize on Wildwood's tourist reputation",
      "The Anglesea Volunteer Fire Company No. 1, founded 1897, still uses the original name"
    ]
  },
  {
    id: 4,
    name: "The Wrecker's Crossroads",
    short: "Grassy Sound Marshes",
    location: "West Wildwood, NJ",
    lat: 39.0005,
    lng: -74.8310,
    radius: 450,
    icon: "🌿",
    narration: `These marshy channels! This is where the real Wildwood history lives, not on the boardwalk.

West Wildwood sits on the marsh between the barrier island and the mainland — the exact stretch of water that made Five Mile Beach an island fortress for centuries. Before the first bridge was built in 1902-1903, the only way onto the island was by ferry or flat-bottomed boat across these tidal channels.

The marshes of Grassy Sound were deeply familiar to Cape May County's wreckers — men who legally, and sometimes illegally, salvaged the cargo of ships that ran aground along the coast. The 1816 wreck of the brig Perseverance off Cape May produced a national scandal when locals refused to launch rescue boats for the drowning crew while openly stripping the ship's cargo.

The old railroad bridge that used to cross this channel was a rickety thing the locals called the Mud Hen, on account of it routinely washing out and leaving passengers stranded at high tide.

I am not saying anyone lit false fires on these beaches to lure ships onto the shoals. I am saying that I, in me day, would have absolutely done that.`,
    facts: [
      "Before the 1902-1903 bridge, the only access to Five Mile Beach was by flat-bottomed boat across these tidal channels",
      "Cape May County wreckers were infamous for stripping cargo while refusing to rescue drowning crews",
      "The 'Mud Hen' railroad bridge routinely washed out at high tide, stranding passengers",
      "West Wildwood was incorporated as a borough in 1920 — one of the smallest municipalities in New Jersey"
    ]
  },
  {
    id: 5,
    name: "The Holly Men's Secret Forest",
    short: "Holly Beach Historical Site",
    location: "Wildwood, NJ",
    lat: 38.9934,
    lng: -74.8127,
    radius: 400,
    icon: "🌲",
    narration: `Imagine this, if ye can: where chain-link fences and condo towers stand today, there was once a jungle. Holly trees twelve feet high. Vines so thick a man could hide a small fortune — or a stolen schooner's worth of rum — in the undergrowth.

When developers first arrived in the middle of Five Mile Beach in the early 1880s, they found a dense jungle of wild holly trees, scrub oak, and tangled vines. Three men formed the Holly Beach Improvement Company and began selling lots from this wilderness. Holly Beach was incorporated as a borough in 1885.

In 1883, the Baker Brothers arrived to explore development possibilities "in a wild jungle of trees and vines" north of Holly Beach and established the Wildwood Improvement Company. The name "Wildwood" itself was inspired by the literally wild, wooded character of the island.

They cut down every last tree. Every one. The ghosts of those holly trees are the ones rattling yer windows at night. Not me. Well. Sometimes me.`,
    facts: [
      "The island was covered in dense holly forest before developers arrived in the 1880s",
      "Holly Beach was incorporated in 1885 — eventually absorbed into Wildwood City in 1912",
      "The Baker Brothers described the landscape in 1883 as 'a wild jungle of trees and vines'",
      "The name 'Wildwood' literally describes what the island was before every tree was cut down"
    ]
  },
  {
    id: 6,
    name: "The Midnight Boardwalk Conspiracy",
    short: "Boardwalk Origins",
    location: "Wildwood, NJ",
    lat: 38.9930,
    lng: -74.8095,
    radius: 400,
    icon: "🌙",
    narration: `Commissioner Oliver Bright, 1919: hired an army of men to secretly destroy the entire boardwalk in a single night, purely to force the town council to rebuild it where HE wanted it.

That is not a civic action — that is a pirate action. That is exactly what Captain Black Sam Bellamy would have done if he'd been in local government.

The Wildwood Boardwalk's first section opened in 1894, laid directly on the sand — rudimentary boards connecting hotels and guesthouses. By 1919 it stood far from the waterline as Wildwood's beach grew wider every year. Commissioner Bright, frustrated the town council refused to move it closer to the ocean, secretly organized hundreds of workers. When dawn came, the boards were gone. The town had no choice but to rebuild — and they rebuilt it exactly where Bright wanted it, closer to the ocean in 1921.

Bright was voted out of office for his midnight vandalism. But the boardwalk ended up exactly where he wanted it.

Some say on quiet nights, ye can still hear the sound of boards being torn up and the laughter of two hundred conspirators. That would be me, recreating the scene.`,
    facts: [
      "The first Wildwood Boardwalk opened in 1894 — just boards laid directly on the sand",
      "Commissioner Oliver Bright secretly hired workers to tear up the entire boardwalk in a single night in 1919",
      "The town rebuilt the boardwalk where Bright wanted it — he was then voted out of office",
      "Today's boardwalk has more than 70,000 wooden planks and stretches nearly 2.5 miles"
    ]
  },
  {
    id: 7,
    name: "The Ballroom Where Rock Was Born",
    short: "HofBrau Hotel & Rock History",
    location: "Wildwood, NJ",
    lat: 38.9912,
    lng: -74.8152,
    radius: 400,
    icon: "🎸",
    narration: `Rock Around the Clock! Bill Haley! I was there in 1954, invisibly occupying a barstool in the HofBrau Hotel — and I can tell ye that the whole building was shaking. Not from the music. From ME.

On a Saturday night in May 1954, more than 500 people packed into the HofBrau Hotel to hear Bill Haley & His Comets debut "Rock Around the Clock" — now considered one of the first rock and roll records ever performed live. Wildwood claims the title of Birthplace of Rock and Roll on this basis.

Dick Clark held record hops at the Starlight Ballroom on the Surf Club section of the boardwalk during the summers, performing his television hit show American Bandstand on location. On December 18, 1957, the first national broadcast of American Bandstand was filmed right here in Wildwood — carried by 67 ABC affiliates nationwide.

Bobby Rydell, Chubby Checker — who introduced "The Twist" at Wildwood's Rainbow Club in 1960 — and dozens of the era's biggest stars performed here.

Five hundred warm bodies in 1954, all dancing to something that had never quite been done before. That is the energy of gold being struck.`,
    facts: [
      "Bill Haley debuted 'Rock Around the Clock' at the HofBrau Hotel in May 1954 to 500 people",
      "Wildwood officially claims the title 'Birthplace of Rock and Roll'",
      "The first nationally broadcast American Bandstand aired from Wildwood on December 18, 1957",
      "Chubby Checker introduced 'The Twist' at Wildwood's Rainbow Club in 1960"
    ]
  },
  {
    id: 8,
    name: "The Neon Palace of Madness",
    short: "Starlux Hotel — Doo Wop",
    location: "Wildwood, NJ",
    lat: 38.9890,
    lng: -74.8175,
    radius: 400,
    icon: "🌈",
    narration: `Can ye imagine it — after years of sailing under a sky full of stars with nothing but tarred wood and salt air — suddenly there are NEON SIGNS six stories tall, shaped like rockets and palm trees, blazing pink and turquoise against the night sky?

After World War II, the Garden State Parkway opened in 1955 and suddenly made the Jersey Shore reachable by car for millions of working-class families. The Wildwoods exploded with motel construction — over 200 motels went up in the 1950s and 60s, competing for attention with jutting rooflines, boomerang shapes, canted glass walls, plastic palm trees, kidney-shaped pools, and blazing neon signs. This style was later dubbed "Doo Wop."

A 1997 University of Pennsylvania study concluded that the Wildwoods had the largest collection of mid-century commercial architecture in the nation. In 2006, the National Trust for Historic Preservation declared these buildings among the Eleven Most Endangered Historic Sites in America.

They built them too well to abandon and too weird to save easily. A motel shaped like a boomerang! A swimming pool shaped like a kidney! I, a ghost pirate, found it completely dignified.`,
    facts: [
      "Over 200 motels were built in the Wildwoods in the 1950s-60s alone, all competing for road visibility",
      "A 1997 University of Pennsylvania study declared the Wildwoods had the largest Doo Wop collection in America",
      "The National Trust for Historic Preservation listed these motels among the 11 Most Endangered sites in 2006",
      "The 'Doo Wop' style is also known as 'Googie' or 'Populuxe' on the West Coast"
    ]
  },
  {
    id: 9,
    name: "Temple of the Neon Gods",
    short: "Doo Wop Experience Museum",
    location: "Wildwood, NJ",
    lat: 38.9872,
    lng: -74.8059,
    radius: 350,
    icon: "🏛️",
    narration: `A museum to neon signs and kidney-shaped pools. I love this century.

When I was haunting the waterfront in the 1700s, nobody built museums to preserve things. Ye just let them rot or burned them for lumber. But here — here they SAVED the neon! They RESCUED the flying roof!

The Doo Wop Preservation League was formed in 1997 after architect Steven Izenour led design workshops with architecture students from Penn, Yale, and Kent State, declaring Wildwood's motels nationally significant.

The Surfside Restaurant was physically taken apart bolt by bolt, stored in a warehouse for five years, then rebuilt on this site in 2007 — becoming the museum's home. That is a ghost's dream — to be disassembled, preserved, and put back together. They even call it the Doo Wop Experience, which sounds like something ye would order at a waterfront tavern in Port Royal.

Two Doo Wop Experiences and a plate of biscuits, please.`,
    facts: [
      "The museum was repeatedly voted among USA Today's 10Best Pop Culture Museums",
      "The 1963 Surfside Restaurant was physically disassembled, stored for 5 years, and rebuilt as the museum",
      "Architects from Penn, Yale and Kent State studied Wildwood's motels in a 1997 historic preservation survey",
      "The museum saved artifacts from approximately 90 surviving motels from the original 275+"
    ]
  },
  {
    id: 10,
    name: "The Pier of a Thousand Screams",
    short: "Hunt's Pier / Morey's",
    location: "Wildwood, NJ",
    lat: 39.0001,
    lng: -74.8044,
    radius: 400,
    icon: "🎡",
    narration: `Hunt's Pier. Oh, the screaming that has come off this spot over the decades — a pirate's lullaby, it is.

The Pirate Ship funhouse! I attempted to ride it myself in 1962, being a ghost and therefore eligible. Mechanical pirates leapt out from the darkness. Mirrors multiplied me into a legion. The tilted room made even a ghost feel unsteady. And the Golden Nugget Mine Ride — three stories of underground adventure in a mine car — was the finest dark ride on the Jersey Shore.

Hunt's Pier — originally Ocean Pier — was purchased in 1935 by Philadelphia theater mogul William C. Hunt. He converted it to an amusement park. On Christmas Day 1943, the entire original pier burned to the ground. Rather than surrender, Hunt rebuilt entirely in fire-resistant concrete and reopened on Memorial Day 1957.

The Morey brothers launched their pier empire in 1969 at 25th Avenue with a giant fiberglass slide. Other boardwalk operators laughed at them. Within a year, two competing slides had appeared. That is a pirate's business plan if I ever heard one: start with one ship. Take everything ye see.`,
    facts: [
      "Christmas Day 1943: the entire original Hunt's Pier burned to the ground",
      "Hunt rebuilt in fireproof concrete — reopened Memorial Day 1957, same year the Garden State Parkway opened",
      "The Golden Nugget Mine Ride and Pirate Ship funhouse were the pier's most celebrated attractions",
      "The Morey brothers started with a single fiberglass slide in 1969 — charging 25 cents in burlap sacks"
    ]
  },
  {
    id: 11,
    name: "The Dancing Planks",
    short: "Boardwalk & Tram Car",
    location: "Wildwood, NJ",
    lat: 38.9960,
    lng: -74.8065,
    radius: 400,
    icon: "🚃",
    narration: `The tram car! "Watch the tram car, PLEASE." I have been watching the tram car since 1949 and I still find it terrifying. It is a car without tracks that simply appears, slowly, from the mist, demanding ye move aside. Very pirate-like behavior.

Ocean Pier, right here where the boardwalk stretches out, was the original destination pier of the early resort era — opening in the early 1900s with a roller-skating rink, bowling alleys, a dance hall, and a 500-foot pier with a casino and 50-by-100-foot dance floor. It was here that Dick Clark hosted summer record hops and the first nationally broadcast American Bandstand episode was filmed.

In the 1950s, the Wildwoods were the center of the known cultural universe. Dick Clark chose THIS boardwalk, THIS ballroom, for the very first national broadcast. Not Atlantic City. Not New York. Wildwood.

The ghost of rock and roll lives here. Some of us never left.`,
    facts: [
      "The iconic Wildwood tram car has been running since 1949 — the pre-recorded 'Watch the tram car, please!' is legendary",
      "Ocean Pier opened in the early 1900s with a dance floor, roller-skating rink, and bowling alleys",
      "Dick Clark chose Wildwood's Starlight Ballroom for the first nationally broadcast American Bandstand (1957)",
      "The boardwalk stretches 2.5 miles and contains over 70,000 individual wooden planks"
    ]
  },
  {
    id: 12,
    name: "The Waikiki Dream",
    short: "Waikiki Motel",
    location: "Wildwood Crest, NJ",
    lat: 38.9820,
    lng: -74.8070,
    radius: 350,
    icon: "🌺",
    narration: `The South Pacific has always appealed to pirates. Something about the warmth, the palm trees, the abundance of rum.

The motel builders of Wildwood Crest — in their wisdom — brought the South Pacific to New Jersey. Plastic palm trees in the parking lot. A tiki face over the office door. A kidney pool full of chlorinated seawater under a plywood Diamond Head. It is NOT Hawaii.

But if ye squint, and if the neon is on at dusk, it is something better than Hawaii — it is the DREAM of Hawaii, which is a thing pure imagination can conjure out of cinder block and painted concrete.

Hawaii's statehood in 1959 inspired a whole category of motel builders: the Ala Moana, the Aloha, the Ala Kai, the Kona Kai, the Tahiti, the Waikiki — bringing the South Pacific to South Jersey at fifteen dollars a night with a pool. The motels were deliberately designed to face north, so that motorists driving south from Philadelphia and New York would see their best sides first.

I have haunted the South Pacific and I have haunted Wildwood Crest. They are more similar than ye would think.`,
    facts: [
      "Hawaii's 1959 statehood inspired an entire Polynesian/Tiki subcategory of Wildwood Doo Wop motels",
      "Motels were deliberately oriented to face north so motorists from Philadelphia would see them at their best",
      "By the early 1990s, Wildwood was down from 275 motels to fewer than 100 as condo developers moved in",
      "The Waikiki features a thatched roof canopy, Diamond Head mural, and lava rocks built into the walls"
    ]
  },
  {
    id: 13,
    name: "The Shifting Sands Conspiracy",
    short: "The Free Beach",
    location: "Wildwood Crest, NJ",
    lat: 38.9695,
    lng: -74.8025,
    radius: 450,
    icon: "🏖️",
    narration: `Free beach! No beach tags! This alone separates the Wildwoods from the rest of the Jersey Shore, where ye must PAY to stand on sand that God put there for free.

But here is the dirty secret of this magnificent wide beach: it was STOLEN.

Wildwood's beaches are the widest in New Jersey — in some sections over 1,600 feet from boardwalk to waterline, the equivalent of five football fields. In 1903-1911, engineers dug a harbor at Cape May, 10 miles south, building massive jetties 4,500 feet into the Atlantic. These jetties trapped sand that would naturally have drifted south — piling it up on Wildwood's beaches instead and starving Cape May's shores.

In 1922, Turtle Gut Inlet was closed off, releasing all the stored sand onto the beach. The sand that should have gone to Cape May was hijacked by jetties built to protect a harbor. Wildwood has been the beneficiary ever since.

Twelve billion pounds of sand have piled up here since 1950. TWELVE BILLION POUNDS. That is a significant amount of loot, even by pirate standards.`,
    facts: [
      "Wildwood's beaches are up to 1,600 feet wide — the widest on the New Jersey coast",
      "Cape May's 1903-1911 harbor jetties accidentally diverted sand northward to Wildwood",
      "The closure of Turtle Gut Inlet in 1922 released an enormous additional sand deposit",
      "NASA has tracked Wildwood's beach growth by satellite since the 1980s — it continues to expand"
    ]
  },
  {
    id: 14,
    name: "The Caribbean Palace",
    short: "Caribbean Motel",
    location: "Wildwood Crest, NJ",
    lat: 38.9806,
    lng: -74.8070,
    radius: 350,
    icon: "🌴",
    narration: `The first plastic palm tree in Wildwood history was planted RIGHT HERE. I was present for the installation. I did not help — I am a ghost, not a groundskeeper — but I watched.

The Caribbean Motel, built in 1957, was a revolution in motel design: a horseshoe-shaped pool, a levitating concrete ramp from the first floor to the second, canted glass walls, and — most importantly — the first full-size plastic palm trees ever installed at a Wildwood motel. Those plastic palms became the defining aesthetic symbol of Doo Wop culture, copied up and down the strip within years.

The motel owners of 1957 were building fantasies for people who could not afford real fantasies. A Philadelphia steelworker could not go to Cuba or Hawaii. But he could pull his Chevy Bel Air into this parking lot, look up at a palm tree backlit by neon, hear the splashing of the crescent pool, and for one week believe he was somewhere glamorous.

That is a form of magic more powerful than any I encountered in me actual pirate years. Also — a levitating concrete ramp. A RAMP that appears to float. Lou Morey was a sorcerer.`,
    facts: [
      "The Caribbean Motel introduced the first plastic palm trees to Wildwood — they became the Doo Wop symbol",
      "It is listed on both the National Register of Historic Places and Historic Hotels of America",
      "The 'levitating' concrete ramp connecting floors was a revolutionary design element for 1957",
      "Restored in 2004, it operates today as a living museum of the mid-century Doo Wop era"
    ]
  },
  {
    id: 15,
    name: "The Convention Hall and the Screaming Invasion",
    short: "Wildwoods Convention Center",
    location: "Wildwood, NJ",
    lat: 38.9874,
    lng: -74.8048,
    radius: 400,
    icon: "🎤",
    narration: `The Beatles came to these shores in 1964. Not to THIS hall — to the one in Atlantic City — but they stayed just down the road in Cape May, breathing the same salty air as these beaches.

Paul McCartney called Elvis Presley on the telephone from a Cape May hotel room, which is perhaps the single most magnificent phone call in human history. John Lennon and Paul McCartney wrote two songs for their next album while hiding from hysterical fans in New Jersey.

Dick Clark — who had built his career on THIS Wildwood boardwalk — was present in the crowd. The entire region hummed with Beatlemania that summer.

This region rattled with something that summer — not the ghost ships I'm used to rattling, but something equally powerful: the first wave of something entirely new.

Rock and roll had already been born here on this boardwalk a decade earlier. The Beatles came to confirm it.`,
    facts: [
      "Wildwood's first Convention Hall was built in 1927 — the current center opened in 2001-2002",
      "The Beatles played Convention Hall in Atlantic City on August 30, 1964, then retreated to Cape May",
      "McCartney reportedly called Elvis Presley from a Cape May hotel during the Beatles' New Jersey stay",
      "Dick Clark, who launched American Bandstand from Wildwood, was present at the 1964 Beatles concert"
    ]
  },
  {
    id: 16,
    name: "Morey's Kingdom of Screams",
    short: "Morey's Piers",
    location: "Wildwood, NJ",
    lat: 38.9924,
    lng: -74.8053,
    radius: 400,
    icon: "🎢",
    narration: `Will and Bill Morey started with a single fiberglass slide in 1969 and proceeded to conquer the entire boardwalk. That is a pirate's business plan if I ever heard one.

The Morey brothers drove to Fort Lauderdale in 1968 and saw a giant 12-lane fiberglass slide in a parking lot. They ordered one for Wildwood, named it the "Wipe Out," charged 25 cents a ride in burlap sacks, and opened in 1969. Other boardwalk operators laughed at them. Within a year, two competing slides had appeared on the boardwalk.

By 1976 the Moreys had a second pier. By the mid-1990s they controlled three piers and two water parks, becoming the dominant amusement operation on the entire Jersey Shore. The Great White wooden roller coaster alone — 100 feet tall, 3,300 feet long, built in 1995 — would have terrified me younger self. And my younger self was not easily terrified. He was, however, easily drowned.

A pirate who plunders the present AND preserves the past — the Moreys also co-founded the Doo Wop Preservation League. Magnificent.`,
    facts: [
      "Morey's empire started with a $0.25 fiberglass slide in 1969 — competitors laughed, then copied them",
      "Today Morey's Piers is one of the largest seaside amusement operations in the Western Hemisphere",
      "The Great White roller coaster (1995) is 100 feet tall and 3,300 feet long — entirely wood construction",
      "The Morey family also co-founded the Doo Wop Preservation League to save the historic motels"
    ]
  },
  {
    id: 17,
    name: "The Witch's Arch",
    short: "Wildwood Crest Gateway",
    location: "Wildwood Crest, NJ",
    lat: 38.9746,
    lng: -74.8065,
    radius: 400,
    icon: "🌟",
    narration: `A thirty-foot arch lit by a Pompeiian fire — that is how ye announce a new settlement. Not with a press release or a ribbon cutting, but with FIRE in the night.

In 1907, the Baker Brothers — the Vineland merchants who developed Wildwood and then turned south to build Wildwood Crest from scratch — erected a dramatic thirty-foot arch at this intersection. Every evening it was illuminated by a roaring "Pompeiian fire," marking the entrance to their new development with theatrical flair.

The arch declared that Wildwood Crest was not merely a continuation of the island, but a separate destination. The Crest's first house was built in 1906; by 1910 it was incorporated with 103 residents, 28 of whom voted in the first election.

The Baker Brothers gave a lot to the first baby born in Wildwood Crest — Baker Crest Thurber, born September 9, 1906. They named the very first streets after flowers: Morning Glory, Buttercup, Lavender, Heather. They were showmen.

The ghost of the arch still stands here, if ye know where to look. I can see it perfectly. It is spectacular. Also slightly on fire, which concerns me not at all.`,
    facts: [
      "The Baker Brothers erected a 30-foot arch illuminated nightly by 'Pompeiian fire' to announce Wildwood Crest in 1907",
      "The first baby born in Wildwood Crest received a land deed as a birth gift from the developers",
      "Wildwood Crest was incorporated in 1910 with just 103 residents — 28 voted in the first election",
      "The Baker Brothers named the first streets after flowers: Morning Glory, Buttercup, Lavender, Heather"
    ]
  },
  {
    id: 18,
    name: "The Sand That Ate the Pier",
    short: "Wildwood Crest Southern Tip",
    location: "Wildwood Crest, NJ",
    lat: 38.9665,
    lng: -74.8019,
    radius: 500,
    icon: "🗺️",
    narration: `And here we are — the end of the line. The southern tip of Five Mile Beach, where the sand has swallowed a fishing pier whole and the ocean looks like it might swallow the rest any day it pleases.

This is where the accumulated sand — millions of cubic yards diverted from its natural southerly drift by the Cape May jetties — has completely surrounded and land-locked what was once the Wildwood Crest fishing pier. The pier extended over open water when it was built. Today it sits surrounded by beach. Between 1985 and the present, portions of this beach have grown over 700 feet outward.

Twelve billion pounds of sand. TWELVE BILLION POUNDS. And it all shifted here because engineers built jetties in 1911 to protect a harbor. One decision, a hundred years of consequence. The beach grew so fast in the 1990s that the city had to buy beach taxis to carry visitors from the boardwalk to the waterline.

In me day, we just walked. But the beach was two hundred yards wide, not a thousand.

This island has been changing beneath the feet of everyone who ever stood on it — Lenape hunters, Scandinavian fishermen, Victorian vacationers, rock and roll teenagers, and at least one drowned pirate ghost who refuses to leave.

Welcome to the Wildwoods. I will be here forever. Watch the tram car, please.`,
    facts: [
      "The Wildwood Crest fishing pier is now completely surrounded by sand — it once extended into open water",
      "Portions of this beach have grown over 700 feet outward since 1985",
      "The city deployed 'beach taxis' in the 1990s because the waterline had moved so far from the boardwalk",
      "Total accumulated sand since 1950: approximately 12 billion pounds, per coastal geologists"
    ]
  }
];

// South-to-North reverses order, preserving originalId for audio lookup
const WILDWOOD_STOPS_SOUTH_TO_NORTH = [...WILDWOOD_STOPS_NORTH_TO_SOUTH].reverse().map((stop, i) => ({
  ...stop,
  originalId: stop.id,
  id: i + 1
}));

WILDWOOD_STOPS_NORTH_TO_SOUTH.forEach(stop => { stop.originalId = stop.id; });

function getWildwoodStops(direction) {
  return direction === 'north' ? WILDWOOD_STOPS_NORTH_TO_SOUTH : WILDWOOD_STOPS_SOUTH_TO_NORTH;
}
