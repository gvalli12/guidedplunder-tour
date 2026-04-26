// Screecher Jones' Lake Hopatcong Treasure Tour
// New Jersey's Largest Lake — by Boat or Car
// 20 stops: Clockwise from State Park (south) to Prospect Point (north)
// Narrated by Screecher Jones, ghost pirate seagull

// NOTE: This is a lake tour — not a linear north-to-south shore.
// "North" route = clockwise (west shore first)
// "South" route = counter-clockwise (east shore first)
// Both routes cover the same 20 stops in reverse order.

const HOPATCONG_STOPS_CLOCKWISE = [
  {
    id: 1,
    originalId: 1,
    name: "Where the Lake Was Born",
    short: "State Park Dam",
    location: "Lake Hopatcong State Park, Landing, NJ",
    lat: 40.9396,
    lng: -74.6543,
    radius: 400,
    icon: "⚓",
    narration: `Squaaawk. So ye made it. Good. Most don't.

Ye're standin' at the birthplace of this entire lake. Twelve thousand years ago, glaciers ground these hills to powder and left two dark ponds — Great Pond and Little Pond — separated by swamp. The Lenape found them. They fished them. They called the water Huppakong — stone water — and left it mostly alone.

Then came the forge men. Around 1750, a New York merchant named Garret Rapalje threw a dam across the Musconetcong River right here and raised the water six feet for his iron furnace. The two ponds merged. Brookland Pond was born.

Then came the canal men. In 1831, the Morris Canal Company tore down Rapalje's dam and built their own — twelve feet higher. The lake swelled another twelve feet. The swamps flooded. The low hills became islands. The Lenape village to the north — dry land for twelve thousand years — slipped beneath the surface forever.

Every cove ye see today, every island, every inlet — all of it was created by that twelve-foot rise. This lake is as much a human invention as it is a natural one.

Ye're standing on top of all of it. So sail on, ye bold plunderer. History awaits.`,
    facts: [
      "Lake Hopatcong sits 924 feet above sea level — the highest lake in New Jersey",
      "The lake was formed from two glacial ponds joined by a forge dam around 1750, then raised 12 more feet by the Morris Canal dam in 1831",
      "A Scotch reaction turbine from the Morris Canal's Plane No. 3 is on display near the beach — one of the last surviving canal mechanical artifacts",
      "The submerged stone lock structure is still visible at the lake's edge near the dam"
    ]
  },
  {
    id: 2,
    originalId: 2,
    name: "The Keeper's House",
    short: "Historical Museum",
    location: "Lake Hopatcong State Park, Landing, NJ",
    lat: 40.9395,
    lng: -74.6543,
    radius: 400,
    icon: "🏛️",
    narration: `SQUAWK. Right here. Don't walk past.

That stone building — the old Morris Canal lock tender's house. A man lived here with his family to operate the canal lock, raisin' and lowerin' boats through a twelve-foot drop from the lake to the canal feeder. He earned about thirty-five dollars a year. Today it holds the Lake Hopatcong Historical Museum — and if ye skip it, ye're a fool.

Inside is a piano. Just a piano, at first glance. Then ye notice the signatures carved into it — Babe Ruth, Ginger Rogers, Jack Dempsey, Groucho Marx, Chico Marx, Frank Capra, Rube Goldberg. It was the guest book of the most outrageous celebrity summer home on the lake — Joe Cook's Sleepless Hollow.

There's also a hand-carved wooden horse from the Illions Supreme carousel at Bertrand Island Amusement Park. The museum holds over twelve thousand photographs. Twelve thousand windows into a world that is mostly gone.

The museum was founded by eight people who met at a restaurant in 1955. One of the best small history museums in New Jersey, and it's free. I'd say go in — but ye can't take me with ye.`,
    facts: [
      "The museum is housed in the original 1831 Morris Canal lock tender's cottage — the building itself is a historic artifact",
      "Joe Cook's celebrity-signed piano is inside: signatories include Babe Ruth, Ginger Rogers, Jack Dempsey, Groucho Marx, Chico Marx, Frank Capra, and Rube Goldberg",
      "The museum holds 12,000+ photographs and an Illions Supreme carousel horse from Bertrand Island",
      "Founded in 1955, it opened in the lock tender's house in 1965 and is free to visit"
    ]
  },
  {
    id: 3,
    originalId: 3,
    name: "The Canal That Climbed Mountains",
    short: "Morris Canal Feeder",
    location: "Landing Channel, Lakeside Boulevard, Landing, NJ",
    lat: 40.9340,
    lng: -74.6570,
    radius: 400,
    icon: "⛵",
    narration: `SQUAAAWK. Here's where the great gamble began.

In 1822, a Morristown gentleman named George MacCulloch came to the Great Pond — just a fishin' trip, as all great obsessions begin. He looked across this water and had a vision: use the lake as a summit reservoir for a canal that would cross all of New Jersey, climbing from the Delaware River to the Hudson.

They told him it couldn't be done. Hills too steep. Boats can't climb hills.

MacCulloch said: "Give me a hydraulic inclined plane." The Morris Canal became a hundred and seven miles of engineering audacity — twenty-three inclined planes using water-powered Scotch turbines to haul loaded canal boats bodily up the hillsides on rail cars. The American Society of Civil Engineers later called it "the greatest climber of the world's canals."

The canal used THIS lake as its water reservoir at the summit — 914 feet above sea level. The boats entered through a feeder channel right here, were raised through the Brooklyn Lock into the lake, crossed the lake, picked up ore at Nolan's Point, came back through the lock, and descended the eastern inclines to Newark and the harbor.

It ran from 1831 to 1924. Ninety-three years of boats climbing hills on water.`,
    facts: [
      "The Morris Canal ran 107 miles from the Delaware River at Phillipsburg to Newark Bay — the longest canal in New Jersey",
      "It used 23 hydraulic inclined planes powered by Scotch turbines to raise boats up to 100 feet in 12 minutes",
      "At peak in 1866, the canal carried 889,220 tons of freight — about 13,000 boatloads",
      "Canal boats were built in two hinged halves so they could flex over the humps of the inclined planes"
    ]
  },
  {
    id: 4,
    originalId: 4,
    name: "The Explosion Factory",
    short: "Forcite Powder Co.",
    location: "Shore Hills area, Landing/Roxbury Township, NJ",
    lat: 40.9280,
    lng: -74.6475,
    radius: 400,
    icon: "💥",
    narration: `SQUAWK. Easy now. Watch yer step.

Across the lake's southeastern shore — right where those quiet houses now stand — was one of the most dangerous industrial operations in New Jersey. The American Forcite Powder Company. They made dynamite. On the shore of a resort lake. One hundred and thirty buildings and sheds on four hundred acres. A railroad spur running in.

November 1886: an explosion killed workers at the mixing house.

April 18, 1892 — the New York Times headline: "SEVEN MEN BLOWN TO BITS — EXPLOSION OF POWDER WORKS ON LAKE HOPATCONG." The blast scattered debris over half a mile. A ten-foot crater where the plant had stood.

May 9, 1916: five more workers killed, fifteen injured.

The company renamed itself Atlas Powder Company and kept operating. They ramped back up for World War One. The concrete bunker walls are reportedly still visible along Shippensport Road — slabs of reinforced concrete thick enough to contain a dynamite blast, now covered in vines.

The tourist brochures never mentioned the bomb factory. But on a clear day, the resort guests could sometimes hear it.`,
    facts: [
      "The American Forcite Powder Company operated a dynamite plant on 400 acres along the southeastern shore starting around 1883",
      "The 1892 explosion killed 7 workers — reported on the front page of the New York Times",
      "A second explosion in 1916 killed 5 more workers and injured 15",
      "The concrete bunker walls of the renamed Atlas Powder Company are reportedly still visible on Shippensport Road"
    ]
  },
  {
    id: 5,
    originalId: 5,
    name: "Hotel on the Hill",
    short: "Hotel Breslin Site",
    location: "Edgemere Avenue, Mount Arlington, NJ",
    lat: 40.9225,
    lng: -74.6413,
    radius: 450,
    icon: "🏰",
    narration: `SQUAAAWK. This is where the Gilded Age arrived.

Before 1887, Lake Hopatcong was a working-class resort. Fishermen. Canal boatmen. Rough crowds at pavilions.

Then Garrett Hobart — future Vice President of the United States — and a group of Philadelphia investors hired architect Frank Furness to build the Hotel Breslin on eighteen acres above Chestnut Point. Four floors. One hundred rooms. The first building at the lake to have electricity.

A contemporary guidebook wrote: "The Hotel Breslin gave to Hopatcong its first decided boom, for it brought to the Lake the element of wealth and fashion, in the wake of which everything else follows."

By 1910, it had been expanded to two hundred rooms. A tango room added in 1914. Renamed the Alamac Hotel in 1918. World chess champion José Raúl Capablanca played a tournament here in 1926. Arthur Murray taught dancing in the ballroom. Milton Berle was a frequent guest.

February 21, 1948: the hotel burned to the ground during winter renovations.

The original stone exterior staircase still stands on the property. Thirty-three Edgemere Avenue — Lotta Crabtree's eighteen-room Frank Furness cottage, still standing. Still private. Still on the National Register of Historic Places. Look for it as ye pass.`,
    facts: [
      "The Hotel Breslin was designed by Philadelphia architect Frank Furness — the same architect who designed the Pennsylvania Academy of the Fine Arts",
      "Co-funded by Garrett Hobart, who became the 24th Vice President of the United States under President McKinley",
      "World chess champion José Raúl Capablanca competed in the 1926 Pan-American Chess Tournament here",
      "The hotel burned completely on February 21, 1948 — the symbolic end of the great hotel era"
    ]
  },
  {
    id: 6,
    originalId: 6,
    name: "The Amusement Graveyard",
    short: "Bertrand Island",
    location: "Bertrand Island Road, Mount Arlington, NJ",
    lat: 40.9329,
    lng: -74.6453,
    radius: 450,
    icon: "🎡",
    narration: `SQUAAAWK. That quiet peninsula ahead — that was a different world.

Bertrand Island Amusement Park. It opened in the 1910s as a small dance pavilion. By 1925, it had New Jersey's first roller coaster. On opening weekend, ten thousand people stormed the gates.

In 1937, the famous Illions Supreme carousel arrived — sixty-six hand-carved horses. That same summer, a seventeen-year-old girl named Bette Cooper won Miss Bertrand Island and went on to become Miss America 1937 — the only Miss America ever crowned at a lake resort. Sally Rand, the fan dancer and bubble dancer who scandalized America, performed here and drew enormous crowds.

In 1983, director Woody Allen filmed scenes for "The Purple Rose of Cairo" at the park — using it to evoke the glamour of a 1930s resort.

On Labor Day, 1983, the park closed forever. Seventy years of screams, music, and wet swimsuits on wooden benches, and then silence.

By 2001, townhouses stood where the roller coaster had been. A historical plaque was installed in 2008. The Lake Hopatcong Yacht Club clubhouse — opened 1910 — still stands inside the condominium complex. One wooden building surviving in a sea of vinyl siding.`,
    facts: [
      "Bertrand Island Amusement Park opened the first roller coaster in northern New Jersey in 1925, drawing 10,000 visitors on opening weekend",
      "Miss America 1937 Bette Cooper — at age 17 the youngest Miss America in history — was first crowned Miss Bertrand Island",
      "Woody Allen filmed scenes here for The Purple Rose of Cairo in 1983, the same year the park closed",
      "The Lake Hopatcong Yacht Club clubhouse, built in 1910, still stands inside the modern condominium development"
    ]
  },
  {
    id: 7,
    originalId: 7,
    name: "The Ice Palace",
    short: "Mountain Ice Co.",
    location: "Silver Springs / Mount Arlington Boulevard, Mount Arlington, NJ",
    lat: 40.9360,
    lng: -74.6490,
    radius: 450,
    icon: "🧊",
    narration: `SQUAWK. Before electric refrigeration, this lake was cold gold.

Every winter, armies of men cut enormous blocks of ice from the frozen surface of Lake Hopatcong and packed them into massive wooden storage buildings along the shore. Ice trains left Nolan's Point daily in the 1890s. In 1903, the largest train of ice ever pulled from the lake was thirty-six cars hauled by two engines.

Four major ice houses operated here. The Mountain Ice Company ran the largest at Silver Springs. In July 1912, it caught fire — a wooden building full of ice somehow burning, lit by the heat of summer. The flames lit up the sky all around the lake. Surviving postcards show the blaze from across the water, enormous and apocalyptic.

The replacement building, completed in 1913, was constructed of five million hollow ceramic tiles — fireproof. It stood fifty-six feet tall and could hold one hundred thousand tons of ice. It was the largest single-span construction in the United States until Radio City Music Hall was built in 1932. The tile building and the nearby Carey Cottage — also tile construction, at 285 Mount Arlington Boulevard — still stand.

The ice harvesting era ended in the 1930s as electric refrigeration spread. But the buildings remain.`,
    facts: [
      "Four major ice houses operated on Lake Hopatcong at peak; ice trains with 36 cars left Nolan's Point daily in the 1890s",
      "The Mountain Ice Company's 1912 fire lit up the sky across the entire lake — photographed from the opposite shore",
      "The 1913 replacement building of hollow ceramic tile was the largest single-span structure in the US until Radio City Music Hall",
      "The tile ice house at Silver Springs and the Carey Cottage (285 Mt. Arlington Blvd.) still stand today"
    ]
  },
  {
    id: 8,
    originalId: 8,
    name: "Rival Steamboats",
    short: "Landing Channel",
    location: "Landing Channel, Lakeside Boulevard, Landing, NJ",
    lat: 40.9340,
    lng: -74.6560,
    radius: 400,
    icon: "🚢",
    narration: `SQUAAAWK. Right here — the front lines of the great steamboat war.

When the tourist trains arrived, steamboats became essential. The lake's shore was undeveloped; the south end too shallow. Hotels were miles away by water.

Two lines fought for every passenger.

The Black Line — backed by the railroad and canal company money — used the Morris Canal feeder to bring passengers from the Landing station directly onto waiting boats. Fifty cents each way. A lot of money in 1890.

Then came Theodore King. He founded the White Line specifically to break the monopoly. Couldn't access the canal feeder — so he used small rowboats to ferry passengers to his bigger steamboats waiting in deeper water. The canal company struck back by lowering the lake level to strand his rowboats on mud.

King picked up a dredge and cut his own channel — "Landing Channel" — through the shallow south end of the lake. Deep enough for his big steamers to reach within one block of the station. He charged twenty-five cents. Half the Black Line fare.

Guests at lakeside hotels hoisted either a white flag or a black flag from their dock to summon their preferred company. The lake war was fought in colored cloth and dredge spoil.

Both lines survived. The steamboats outlasted the canal and barely outlasted the railroads.`,
    facts: [
      "The Black Line charged 50 cents per trip; the White Line undercut them at 25 cents outbound",
      "When the canal company lowered the lake to strand the White Line's small boats, Theodore King simply dredged his own channel",
      "Hotel guests hoisted white or black flags from their docks to summon their preferred steamboat company",
      "The White Line's flagship double-decker side-wheeler 'Hopatcong' carried 150 passengers and reportedly wasn't dismantled until the 1970s"
    ]
  },
  {
    id: 9,
    originalId: 9,
    name: "The Man Who Blew Things Up",
    short: "Hudson Maxim Estate",
    location: "Lakeside Boulevard, Sharp's Rock, Hopatcong Borough, NJ",
    lat: 40.9504,
    lng: -74.6570,
    radius: 400,
    icon: "💣",
    narration: `SQUAAAWK. Thomas Edison called him "the most versatile man in America."

Hudson Maxim came to Lake Hopatcong while working at the explosives factory on the lake's south shore. He liked it so much he bought a large parcel on the west shore, built a grand estate called Maximhurst, and proceeded to conduct explosives experiments in his backyard.

He lost his left hand in a laboratory explosion. This did not slow him down.

He once poured nitroglycerin from a teapot to entertain house guests, walked them to the backyard, flung it at a rock — and produced what one guest called "a terrific explosion." He was disappointed when they declined a second demonstration.

He invented smokeless gunpowder and sold his patents to DuPont in 1897 for a sum that made him independently wealthy. He served as Hopatcong Borough councilman from 1907 to 1923. He and his wife Lillian purchased over 650 acres of west shore, developing most of what is now the Borough of Hopatcong. Streets named Hudson, Maxim, and Durban — her maiden name — still bear witness.

In 1921 and 1922, dressed as King Neptune, he personally presented the trophies to the first two Miss Americas in Atlantic City.

The round stone tower — once an ice house and observatory — still stands off Lakeside Boulevard. His Venetian boathouse dominated the west shore for fifty years.`,
    facts: [
      "Hudson Maxim lost his left hand in a laboratory explosion — yet continued explosives experiments in his Lake Hopatcong backyard",
      "He sold his smokeless gunpowder patents to DuPont in 1897 and used the proceeds to build his Hopatcong estate",
      "Maxim and his wife owned over 650 acres on the west shore — developing much of what is now Hopatcong Borough",
      "As King Neptune, he presented Miss America trophies to the first two winners in 1921 and 1922"
    ]
  },
  {
    id: 10,
    originalId: 10,
    name: "The Bootlegger's Lake",
    short: "Byram Cove",
    location: "Byram Cove, Hopatcong Borough, NJ",
    lat: 40.9560,
    lng: -74.6640,
    radius: 450,
    icon: "🍾",
    narration: `SQUAAAWK. Now we're talkin'.

Prohibition, 1920 to 1933. The government banned liquor. Lake Hopatcong ignored this.

Morris County was one of the richest counties in the country. The wealthy visitors at the lake's hotels expected alcohol at their elaborate summer parties and were willing to pay handsomely for it. The newspaper "The Jerseyman" reported liquor busts at Lake Hopatcong so regularly that the lake became notorious.

Joe Cook — greatest entertainer on the lake — operated two full bars on his property during Prohibition. This from a man whose guests included Babe Ruth, the Marx Brothers, and Ginger Rogers. Not ginger ale being served, I'll wager.

The lake's geography was perfect for smugglers. Forty-five miles of coves and inlets. Private docks unreachable by road. Night deliveries by boat with no witnesses. Multiple coves like this one — Byram Cove — where a boat could pull in and unload in darkness with the shoreline trees blocking any view from across the water.

Distilleries operated throughout Morris County in the 1920s, many hidden in barns and boathouses. The cocktail culture that flourished at lake resorts — the fruity, flavored drinks — was born partly to mask the smell of amateur bootleg liquor.

Hudson Maxim himself, the Borough councilman, was actively and vocally anti-Prohibition. Even the local government had a taste for defiance.`,
    facts: [
      "Lake Hopatcong's resort economy made Prohibition enforcement politically inconvenient — liquor busts were reported so often the lake became notorious",
      "Joe Cook operated two bars at his estate during Prohibition, hosting celebrity guests including Babe Ruth and the Marx Brothers",
      "The lake's 45 miles of shoreline and private boat docks made it ideal for bootleg deliveries under cover of darkness",
      "Hudson Maxim, Hopatcong Borough councilman from 1907–1923, was on record as actively opposing Prohibition"
    ]
  },
  {
    id: 11,
    originalId: 11,
    name: "Sleepless Hollow",
    short: "Joe Cook Estate",
    location: "Davis Cove, Hopatcong Borough, NJ",
    lat: 40.9550,
    lng: -74.6550,
    radius: 400,
    icon: "🎭",
    narration: `SQUAAAWK. This cove — Davis Cove — this was the wildest address on the lake.

Joe Cook. You've never heard of him, and that is the great tragedy. Walter Winchell called him one of the musical theatre's three geniuses. Brooks Atkinson of the New York Times wrote: "Next to Leonardo da Vinci, Joe Cook is the most versatile man known to recorded times." He could juggle, walk a tightrope, ride a unicycle, play piano, violin, and ukulele, do mime, and tell absurdist stories. One-man vaudeville.

In 1924, he bought a lakeside property here in Davis Cove, built a nine-hole golf course — with the first tee on top of a water tower — and renamed the estate "Sleepless Hollow." Apt name. There were walls that moved. Chairs that sank into the floor. Two bars. A constant stream of celebrities arriving by boat.

Babe Ruth signed the piano. Ginger Rogers signed the piano. Jack Dempsey, Groucho Marx, Chico Marx, Rube Goldberg, Frank Capra — all signed the piano. The piano is now in the museum.

Joe Cook was also the grandfather of Joss Whedon — creator of Buffy the Vampire Slayer. The gene for outrageous creativity apparently runs deep.

He sold the house in 1941 when Parkinson's disease forced his retirement. Died 1959. The world got quieter.`,
    facts: [
      "Joe Cook's nine-hole golf course had a first tee on top of a water tower and a ninth hole engineered so any ball touching the green rolled into the cup",
      "His celebrity-signed piano — now at the Historical Museum — includes Babe Ruth, Ginger Rogers, Jack Dempsey, both Marx Brothers, Frank Capra, and Rube Goldberg",
      "Cook had two full bars operating at Sleepless Hollow during Prohibition",
      "Joe Cook was the grandfather of Joss Whedon, creator of Buffy the Vampire Slayer and director of The Avengers"
    ]
  },
  {
    id: 12,
    originalId: 12,
    name: "The Great Trains Arrive",
    short: "Nolan's Point Station",
    location: "Nolan's Point, Jefferson Township, NJ",
    lat: 40.9746,
    lng: -74.6347,
    radius: 450,
    icon: "🚂",
    narration: `SQUAAAWK. Nolan's Point — this was the entry gate to everything.

September 6, 1882. The first Central Railroad of New Jersey passenger excursion train pulled into a new station at Nolan's Point. The railroad had climbed four percent grades to get here — a steep and expensive engineering challenge. But it worked.

By 1883, regular service linked the lake to New York, Philadelphia, Newark, and Jersey City. By the 1890s, the CNJ was carrying fifty thousand visitors per summer to Nolan's Point alone. Fifty thousand people to one point on one lake — in an era before automobiles.

The Nolan's Point station stood just behind where the Windlass Restaurant now stands. The railroad tracks were torn up in 1941 and melted down for war metal.

Allen's Pavilion — the lake's first amusement pavilion — stood here from 1887. Orchestra, ice cream soda fountain, carousel, shooting range. It burned in 1894. They rebuilt it. Burned again in 1908. Rebuilt again. Burned in 1919. A third time rebuilt.

Turned into Nolan's Point Amusement Park in 1928, complete with roller coaster. Failed in the Depression. Closed 1933.

The Windlass Restaurant has stood on this ground since 1963. Some magic lingers in the waterfront even when the building over it has changed completely.`,
    facts: [
      "The first CNJ passenger excursion train arrived at Nolan's Point on September 6, 1882, climbing grades of up to 4%",
      "At peak in the 1890s, the CNJ carried 50,000 visitors per summer to Nolan's Point alone",
      "Allen's Pavilion burned in 1894, 1908, and 1919 — each time rebuilt larger; a 1924 ad called it 'the oldest amusement centre in Northern New Jersey'",
      "The CNJ station tracks were torn up in 1941 for wartime scrap metal; the Windlass Restaurant has occupied the site since 1963"
    ]
  },
  {
    id: 13,
    originalId: 13,
    name: "The Ore Railroad",
    short: "Ogden Mine Railroad",
    location: "Nolan's Point / North Shore, Jefferson Township, NJ",
    lat: 40.9746,
    lng: -74.6355,
    radius: 450,
    icon: "⛏️",
    narration: `SQUAAAWK. Before the tourists came — ore.

The Ogden Mine Railroad ran ten miles from the iron mines at Sparta Mountain to a transfer terminal right here at Nolan's Point. Iron ore arrived by narrow-gauge train. Steam tugs towed loaded canal boats across the lake to the Brooklyn Lock and down into the Morris Canal.

In 1880 — peak year — one hundred and eight thousand tons of iron ore moved across this lake. About five loaded canal boats every single operating day.

Thomas Edison himself set up an experimental ore concentration plant at the Ogden Mines around 1890 — his attempt to revive the failing New Jersey iron industry against competition from the high-grade Minnesota deposits. His plant ran for ten years and failed. Even Edison couldn't make low-grade ore profitable.

The Central Railroad of New Jersey leased the Ogden Mine Railroad for nine hundred and ninety-nine years in 1881 — a typical rail company optimism — and connected it to the main line. The railroad ended when the mines closed. The tracks were torn up in 1941 for wartime iron.

The stone ice house ruins from the ore transfer era are still visible in a small inlet at Nolan's Point if ye look close enough from the water.`,
    facts: [
      "The Ogden Mine Railroad ran 10 miles from Sparta Mountain iron mines to Nolan's Point, peaking at 108,000 tons of ore in 1880",
      "Thomas Edison operated an experimental ore concentration plant at the Ogden Mines from 1890–1900 — it ultimately failed against Minnesota competition",
      "The CNJ leased the railroad for 999 years in 1881; the tracks were scrapped for wartime iron in 1941",
      "Stone ruins of the ore-era ice house are still visible in a small inlet at Nolan's Point"
    ]
  },
  {
    id: 14,
    originalId: 14,
    name: "The Sunken Village",
    short: "Halsey Island",
    location: "Halsey Island, Jefferson Township, NJ",
    lat: 40.9810,
    lng: -74.6295,
    radius: 500,
    icon: "🏝️",
    narration: `SQUAAAWK. Look at that island. Private now. Houses on it. But twelve thousand years ago, it was just a hill.

The Nariticong clan — the Lenape people of this lake — built their largest village on the eastern shore, in the area that is now Halsey Island. When they lived here, around 1650 and before, it was not an island. It was a hill on the mainland, connected by low dry land.

Surveyors charting northern New Jersey around 1650 recorded the village name as Pechquakock. Later maps called it Araughcun. Explorer John Reading wrote in 1715 of staying in a "whigwam" at Huppakong — and historians believe that was this shore.

Then in 1831, the Morris Canal raised the lake twelve feet. The low land flooded. The village site — twelve thousand years of continuous habitation — slipped under water. The Lenape had been gone from the area by then, displaced by disease and dispossession. But their village floor is still down there, in the mud beneath this lake.

In the resort era, the Hoffman family built a summer villa on the newly-separated island. By 1920, it had become the Ardsley Hotel. Private homes fill the island today.

Arrowheads, points, and pottery shards from the Nariticong have been found across the shoreline. Some are at the museum. Some are still in the ground.`,
    facts: [
      "The Nariticong clan of the Lenape occupied the Lake Hopatcong area for approximately 12,000 years after the last glaciers retreated",
      "The Lenape village at Halsey Island — called Pechquakock by its inhabitants — was dry land connected to the mainland before the 1831 dam raised the lake 12 feet",
      "Explorer John Reading recorded the name 'Huppakong' in 1715 and reportedly stayed in a longhouse on this shore",
      "The name 'Hopatcong' likely derives from a Lenape word meaning 'pipestone' or 'stone water' — not the tourism-era claim of 'honey waters of many coves'"
    ]
  },
  {
    id: 15,
    originalId: 15,
    name: "The Island the Scouts Loved",
    short: "Lify Island",
    location: "Lify Island (Scout Island), Jefferson Township, NJ",
    lat: 40.9820,
    lng: -74.6380,
    radius: 500,
    icon: "🌲",
    narration: `SQUAAAWK. That wooded island ahead — Lify Island. Scout Island, some call it.

The Brady Brothers — operators of the Consumers Coal and Ice Company out of Bayonne — owned two thousand seven hundred acres around the northern lake and four ice houses on it. They kept Lify Island uncut except for some logging. A rarity: natural shoreline in an era of constant development.

In 1922, the Richmond Boy Scout Council bought seventy-seven acres and established Camp Aquehonga. War canoes. Sunday water meets. Treasure hunts. A peak registration of ninety-six scouts.

The Staten Island Scouts departed in 1928. The camp cook — a man named Pete Peterson — reportedly fell so in love with Lify Island that he returned every summer for fifty years after the scouts left. An island that inspires that kind of loyalty is a place worth knowing.

Jefferson Township acquired the island in the 1990s and preserved it as open space. Important fish breeding habitat. Lenape accounts suggest corn was grown on this island before the dam raised the lake — before it was even an island.

On the water, this is the most untouched stretch of the northern lake. The rest has been developed. This remains.`,
    facts: [
      "The Brady Brothers (Consumers Coal and Ice Company) owned 2,750 acres around the northern lake and four ice houses",
      "Camp Aquehonga operated on Lify Island from 1922 to 1928 with war canoes, water meets, and treasure hunts for up to 96 scouts",
      "The camp cook Pete Peterson reportedly returned to the island every summer for 50 years after the scouts departed",
      "Jefferson Township purchased the island in the 1990s to preserve it as natural open space and fish breeding habitat"
    ]
  },
  {
    id: 16,
    originalId: 16,
    name: "The Iron Men",
    short: "Brookland Forge",
    location: "Lake Hopatcong State Park (south end), Landing, NJ",
    lat: 40.9396,
    lng: -74.6543,
    radius: 400,
    icon: "⚒️",
    narration: `SQUAAAWK. Iron. Before tourism, before canals, before trains — iron.

Northern New Jersey sat atop enormous deposits of magnetite and hematite iron ore. The colonies were hungry for it. Around 1750, Garret Rapalje threw a dam across the Musconetcong River right here, built the Brookland Forge, and started working the ore from the surrounding hills.

During the Revolution, the Lake Hopatcong area produced cannonballs for General Washington's Continental Army.

Five miles southwest, at Andover Forge on the Musconetcong River — now the site of Waterloo Village — the great chain was reportedly forged that was stretched across the Hudson River to block British warships from sailing upriver to Albany. A half-inch of iron protecting the Continental Army's flank. Made in New Jersey. Pulled from this land.

In 1866, with the New Jersey iron industry beginning its long decline against Minnesota competition, the Ogden Mine Railroad was built to drag ore from the Sparta Mountain mines to the lake. It ran for seventy-five years. Thomas Edison tried to save the industry with technology around 1890 and failed.

The last ore train ran in the 1930s. The tracks were scrapped in 1941. The lake went back to being just a lake.`,
    facts: [
      "The Brookland Forge at this site, built around 1750, was one of the earliest iron operations in the region — its dam created the original Brookland Pond",
      "During the Revolutionary War, the area produced cannonballs for Washington's Continental Army",
      "Andover Forge, 5 miles southwest (now Waterloo Village), allegedly forged the Hudson River chain used to block British warships",
      "At peak, this region was the third-largest iron producer in America; decline began in 1866 when high-grade Minnesota ore was discovered"
    ]
  },
  {
    id: 17,
    originalId: 17,
    name: "The Raccoon Ferry",
    short: "Raccoon Island",
    location: "Raccoon Island, Jefferson Township / Hopatcong Borough, NJ",
    lat: 40.9760,
    lng: -74.6340,
    radius: 500,
    icon: "⛴️",
    narration: `SQUAAAWK. That island there — Raccoon Island. About fifty acres, private residential. The bridge connecting it to the mainland collapsed in 1899.

They proposed a new bridge in 1928. The Depression killed that project.

So in 1932, someone started running a small ferry service from Chincopee Road. It still runs today. One of the last lake ferry services in New Jersey. Nearly a century of carrying people back and forth because no one ever got around to building the bridge.

Before the Morris Canal raised the lake, Raccoon Island was connected to the mainland by low ground — like Halsey Island, it was simply a hill. The 1831 dam cut it off. Before the dam, the Lenape had reached the island on foot.

The lake itself was transformed by that dam. Twelve feet of water added to the surface level. Coves created. Islands made from hills. The whole geography of the modern lake is a human engineering decision from 1831, running on top of the glacial and Lenape geography underneath.

There's a metaphor in there somewhere about how most of what we think is natural was actually decided by someone with a dam and an agenda.

Squaaawk.`,
    facts: [
      "Raccoon Island's bridge to the mainland collapsed in 1899; a planned replacement in 1928 was canceled by the Depression",
      "A small ferry service began in 1932 from Chincopee Road and still operates today — nearly a century of service",
      "Like Halsey Island, Raccoon Island was connected to the mainland before the 1831 Morris Canal dam raised the lake 12 feet",
      "The island is approximately 50 acres and is entirely private residential today"
    ]
  },
  {
    id: 18,
    originalId: 18,
    name: "The Lake at the Summit",
    short: "Prospect Point",
    location: "Prospect Point, Jefferson Township, NJ",
    lat: 40.9830,
    lng: -74.6265,
    radius: 500,
    icon: "🌅",
    narration: `SQUAAAWK. Pull in here. Sit a moment. Look south down the length of the lake.

Nine miles of water. Nine hundred and twenty-four feet above sea level. New Jersey's largest lake — fifty-eight feet at its deepest, thirty-some miles of shoreline. On a clear day ye can see all the way to Mount Arlington from here.

That fisherman in a rowboat out on the southern end? That might as well be George MacCulloch in 1822. He came up here to fish. He looked at this water and thought: here is the summit. This is where the canal can refill itself. This is the hinge on which New Jersey turns.

One fishing trip. One idea. The canal. The ore. The railroad. The hotels. The steamboats. The amusement park. Babe Ruth at a piano. A teenage Miss America. A dynamite factory. Two bars during Prohibition.

The Lenape were here twelve thousand years before MacCulloch. The canal operators were here for ninety-three years. The hotel era lasted about sixty years. The amusement park, seventy. And now it's quiet.

The lake is quieter than it ever was during any of those eras. Houses line the shore. Boats pull afternoon wakes across water that once carried ore and celebrated champions.

Ye've seen the whole of it now. The ghost of every era is still out here, just beneath the surface.

Squaaawk. And well done, plunderer. Well done.`,
    facts: [
      "Lake Hopatcong is New Jersey's largest lake: 2,500+ acres of surface, 9 miles long, 58 feet at its deepest, approximately 30 miles of shoreline",
      "George MacCulloch's 1822 fishing trip to the Great Pond inspired the Morris Canal — setting in motion the entire history of the modern lake",
      "The lake sits at 924 feet elevation and discharges via the Musconetcong River to the Delaware River",
      "From Prospect Point on the north, on a clear day the full 9-mile length of the lake stretches to the south end at Mount Arlington"
    ]
  },
  {
    id: 19,
    originalId: 19,
    name: "Where the Trolley Rolled",
    short: "Morris County Trolley",
    location: "Landing / Bertrand Island trolley corridor, NJ",
    lat: 40.9385,
    lng: -74.6557,
    radius: 400,
    icon: "🚋",
    narration: `SQUAAAWK. Look at this bridge. The 1908 masonry bridge on Lakeside Boulevard — built the same year as the Lackawanna Cut-off railroad engineering marvel to the north. This stone arch has held the road over the water for over a century.

Two years after this bridge was built, the Morris County Traction Company extended its trolley line from Dover all the way to Bertrand Island Beach. More affordable than the train. Working families piled in.

Over seven million passengers in the first decade. The trolleys ran moonlight excursion trips — including a boat ride on the lake. Romance was very much part of the package.

The Lackawanna Railroad terminal at Landing — that 1886 station building, still standing on Landing Road today — handled the wealthier visitors. The trolley brought everyone else.

By February 1928, the trolley line was gone, replaced by a bus. The railroad passenger service ended in the late 1930s. The tracks were ripped up in 1941.

But this bridge is still here. This 1908 stone arch that both railroads, steamboats, and trolleys once converged around. The last solid thing from the transportation era that made this lake what it was.`,
    facts: [
      "The Morris County Traction Company trolley reached Lake Hopatcong in 1910, carrying over 7 million passengers in its first decade",
      "Trolley 'moonlight excursion' packages included a boat ride on the lake — one of the era's most popular summer activities",
      "The 1908 masonry bridge on Lakeside Boulevard still stands, a survivor of the transportation era that made the lake accessible",
      "The 1886 Lackawanna Railroad station building at Landing still stands on Landing Road as a historic structure"
    ]
  },
  {
    id: 20,
    originalId: 20,
    name: "Last Call on the Lake",
    short: "End of an Era",
    location: "Lake Hopatcong — general overview",
    lat: 40.9350,
    lng: -74.6510,
    radius: 600,
    icon: "🌊",
    narration: `SQUAAAWK. Almost time to make port.

The decline came slowly, then all at once. The Depression hit the hotels. World War Two took the young people and the railroad tracks. The post-war boom brought bungalows instead of grand hotels — families buying modest shoreline cottages and coming every summer, a democratic version of what the Gilded Age had kept exclusive.

Then Interstate 80 opened. Lake Hopatcong could no longer claim to be anyone's destination. It became someone's suburb.

The last operating hotel burned to the ground in 1972. Labor Day 1983, Bertrand Island Amusement Park closed. By 2001, townhouses stood where the roller coaster had screamed.

But here's what remains.

The lock tender's museum still stands in the State Park. Lotta Crabtree's eighteen-room Frank Furness cottage still stands at 33 Edgemere Avenue. The celebrity piano is at the museum. The 1910 yacht club clubhouse is still inside the condo development. The stone tower of Hudson Maxim still rises from the west shore. The 1908 masonry bridge still carries cars. The tile ice house still stands at Silver Springs. The Carey Cottage at 285 Mount Arlington Boulevard still stands. The Atlas Powder bunker walls are still in the brush on Shippensport Road.

The lake remembers. It always has.

Ye've plundered well, sailor. Screecher Jones bids ye farewell — and a dry harbor.`,
    facts: [
      "The last hotel on Lake Hopatcong burned in 1972; Bertrand Island Amusement Park — the last resort-era institution — closed Labor Day 1983",
      "More than a dozen physical survivors of the resort era still stand: the museum, Lotta Crabtree's cottage, Hudson Maxim's tower, the 1908 bridge, tile ice house, and more",
      "The lake's transition from resort to residential community took roughly 40 years — 1940s through 1980s",
      "Lake Hopatcong remains New Jersey's largest lake, today a residential community of approximately 15,000 year-round residents"
    ]
  }
];

// Counter-clockwise (east shore first)
const HOPATCONG_STOPS_COUNTER_CLOCKWISE = [...HOPATCONG_STOPS_CLOCKWISE].reverse().map((s, i) => ({
  ...s,
  id: i + 1
}));

function getHopatcongStops(direction) {
  // 'north' = clockwise (west shore first, south-to-north)
  // 'south' = counter-clockwise (east shore first, north-to-south)
  return direction === 'south'
    ? HOPATCONG_STOPS_COUNTER_CLOCKWISE
    : HOPATCONG_STOPS_CLOCKWISE;
}
