// Screecher Jones' Ho-Ho-Kus Treasure Tour
// Bergen County, New Jersey — walking / driving loop
// 10 stops: Borough Hall → east side & the old track → downtown brook → Hermitage
// Narrated by Screecher Jones, ghost pirate seagull
//
// "North" route = this clockwise order (starts at Borough Hall, ends at The Hermitage)
// "South" route = the same stops reversed
// Coordinates are public landmarks or the public road where you stand to see them.

const HOHOKUS_STOPS_CLOCKWISE = [
  {
    id: 1,
    originalId: 1,
    name: "Three Capitals and Two Hyphens",
    short: "Borough Hall",
    location: "333 Warren Avenue, Ho-Ho-Kus, NJ",
    lat: 40.99876,
    lng: -74.10938,
    radius: 80,
    icon: "🏛️",
    narration: `Squawk. Welcome to Ho-Ho-Kus — and if a neighbor corrects yer tongue, the last piece rhymes with kiss. Bergen County. A borough ye can walk before lunch, if ye don't stop to argue about the name.

This municipal complex went up in 1992: borough hall, police, firehouse, ambulance. The government it houses is older, and fussier about spelling, than the brick.

The place was Hoppertown when Hopper families clustered at Franklin Turnpike and Sheridan Avenue. Railroad men later called a station Undercliff. North of the mills, people said New Prospect. In 1905 the legislature cut a borough named Orvil out of Orvil Township — the township itself was named for Orville J. Victor, a historian who lived here. On October 12, 1908, the council sent the secretary of state a resolution with the words still on the books: that the borough known as Orvil be hereafter known as the Borough of Ho-Ho-Kus. Three capitals. Two hyphens. They have survived every attempt to tidy them.

Why the hyphens? Two theories, and neither is proved. One: so nobody would confuse this borough with Hohokus Township, the big northern township that kept the old spelling until it became Mahwah in 1944. The other: so postal clerks would stop sending the mail to Hoboken.

Before ye leave the lot, look at the firehouse. A brick school stood on this Sheridan and Warren corner from 1906. On March 1, 1937, the children walked out of it carrying their books, bound for a new school on Lloyd Road. We'll meet them there. First, the east side of town. The track is gone. The argument about the name is not.`,
    facts: [
      "Orvil borough was created March 8, 1905, from part of Orvil Township; on October 12, 1908, it was renamed Ho-Ho-Kus",
      "Orvil Township was named for Orville J. Victor, a historical writer who lived in Ho-Ho-Kus",
      "Earlier names for the settlement include Hoppertown, New Prospect, and Undercliff",
      "The 1992 municipal complex stands where the 1906 schoolhouse — and today's firehouse — share a corner"
    ]
  },
  {
    id: 2,
    originalId: 2,
    name: "The March to Lloyd Road",
    short: "Ho-Ho-Kus School",
    location: "Ho-Ho-Kus Public School, Lloyd Road, Ho-Ho-Kus, NJ",
    lat: 40.99982,
    lng: -74.10348,
    radius: 110,
    icon: "📚",
    narration: `Squawk. Park the longboat. This is a schoolyard, not a battlefield — though the march that filled it was a proud little parade.

Before any school stood in the village, Ho-Ho-Kus children walked the country roads to a schoolhouse near Paramus Church, over in what is now Ridgewood. The first school in Ho-Ho-Kus itself went up in the early 1800s. It was sold in 1856 to help pay for a tight twenty-by-thirty-foot schoolhouse on Franklin Turnpike. In 1906 the borough bonded fifteen thousand dollars for a two-story brick school at Sheridan and Warren, on the ground where the firehouse sits now.

By the 1930s that building was outgrown. Voters approved a new school on seven acres along Lloyd Road. The job cost $219,275. The cornerstone was laid June 27, 1936. On March 1, 1937, the children left the old school and walked here, each one carrying books.

That is the whole plunder at this stop, and it is enough. A town small enough that the students could change buildings on foot, and careful enough to write the day down. The school still teaches the borough's children through eighth grade. Northern Highlands, up the road, takes them after that.

The high school is Northern Highlands, shared with the neighboring boroughs. Fair warning, matey: the next stop is a neighborhood with a loud memory. The road is named for what used to be here. The speed limit is not a suggestion from 1938.`,
    facts: [
      "The Lloyd Road school was approved in the mid-1930s: seven acres, a cost of $219,275, cornerstone laid June 27, 1936",
      "On March 1, 1937, students walked here from the 1906 brick school at Sheridan and Warren, carrying their books",
      "Earlier Ho-Ho-Kus schooling was a trek to Paramus Church, then a small early-1800s schoolhouse sold in 1856",
      "Ho-Ho-Kus Public School still serves the borough through eighth grade"
    ]
  },
  {
    id: 3,
    originalId: 3,
    name: "The Oval That Became a Neighborhood",
    short: "The Old Track",
    location: "Race Track Road at Arbor Drive, Ho-Ho-Kus, NJ",
    lat: 40.99443,
    lng: -74.10195,
    radius: 160,
    icon: "🏁",
    narration: `Squawk. Ease off. Ye are on a public street in a neighborhood called Park Estates. The oval is under the houses. Do not go hunting it across somebody's lawn.

Some lubbers will tell ye Ho-Ho-Kus had a wooden board track, the kind they banked for the Indianapolis cars. It did not. This was a half-mile dirt oval. Horse track first. Automobiles later. The borough has looked for proof of a track before the Civil War and has not found it. What the record does support is a flat used for racing in the late 1860s, then a proper driving club in 1879. The Ho-Ho-Kus Valley Gentlemen's Driving Association leased level land from the Samuel Banta farm — today's West Race Track Road — and by Memorial Day 1880 the course was a full half mile, later widened and, in time, banked. The old entrance was at Arbor Drive. A marker stands on the Arbor side of 355 Race Track Road.

Trotting filled the grandstand into the 1910s. Then the cars came. One account gives the first automobile race to 1914. The borough's own track history says auto racing was introduced in 1919, after the war, on a surface still soft from horses. By the early 1930s the machines had pushed the horses aside.

July 4, 1938, ended it. In the last race of the day two cars locked wheels, left the oval, and went into a crowd reported at about six thousand. Robert Thompson, ten years old, from Ridgewood, was killed. Others were badly hurt. Racing did not return. In 1950 the grounds were sold, and within two years more than a hundred houses stood where the half-mile had been.

The name on the street sign is the relic. That, and the story. Keep yer bow off the driveways.`,
    facts: [
      "The Ho-Ho-Kus track was a half-mile dirt oval, not a wooden board track — horses from the late 1860s, organized as a driving park in 1879",
      "The entrance was at today's Arbor Drive; the course sat on the old Samuel Banta farm along West Race Track Road",
      "Automobile racing arrived in the 1910s; sources differ on 1914 or 1919 for the start of the car program",
      "On July 4, 1938, a crash into the crowd killed 10-year-old Robert Thompson of Ridgewood; the site was sold for Park Estates in 1950"
    ]
  },
  {
    id: 4,
    originalId: 4,
    name: "The Zabriskie House",
    short: "Ho-Ho-Kus Inn",
    location: "1 East Franklin Turnpike, Ho-Ho-Kus, NJ",
    lat: 40.99773,
    lng: -74.10981,
    radius: 70,
    icon: "🍽️",
    narration: `Squawk. The corner of Franklin Turnpike and Sheridan Avenue is old Hoppertown — the cluster of Hopper families, and then the tavern corner of a stagecoach road that ran from the Hudson toward Albany.

The stone house in front of ye is the Zabriskie House. The National Register and the inn's own history date it to 1796, built by Andrew Zabriskie as a home for his son John, called Jake. Andrew's line goes back to Albert Zaborowsky, who came into New Amsterdam in 1662 and was the first of that family to own land here. The spelling softened, over the generations, into Zabriskie. Ye will trip over that name for the rest of the loop.

The house has worn a lot of paint and a lot of names: a parsonage, the Villa Inn, the Mansion House, the Wayside Inn, the Washington Inn. It was a tavern by 1890. During the Second World War it was tired enough that the borough bought it, in 1941, rather than watch the next owner pull it down. The town has leased it as a restaurant ever since. Richard Nixon favored a table when the sign out front said Claude's.

It is on the New Jersey Register and, since January 10, 1983, the National Register of Historic Places. The rooms inside still carry the old family names. Eat if ye like. I don't get a plate. I get the story, which is the better bargain, and also free.

The brook that turned the family's mills is two blocks west. A lake they built with it is the next tale — and that one ends in a flood.`,
    facts: [
      "The Zabriskie House was built in 1796 by Andrew Zabriskie for his son John (\"Jake\")",
      "It became a tavern in 1890 and has also been called the Mansion House, the Wayside Inn, and the Washington Inn",
      "Ho-Ho-Kus bought the building in 1941 to keep it from being demolished, and still owns it",
      "Listed on the National Register of Historic Places on January 10, 1983 — Richard Nixon was a regular when it was Claude's"
    ]
  },
  {
    id: 5,
    originalId: 5,
    name: "The Lake That Broke",
    short: "Sylvan Lake Dam",
    location: "North Franklin Turnpike, across from the post office, Ho-Ho-Kus, NJ",
    lat: 40.99836,
    lng: -74.11117,
    radius: 70,
    icon: "💧",
    narration: `Squawk. Stand by the post office and look across North Franklin Turnpike. The brownstone in the brush is what is left of a dam.

In 1862 John Zabriskie — the borough's history calls him Jake — made a lake to turn his cotton mill. Sylvan Lake. About fifty acres, a resort stuck onto a factory pond. Swimming, boats, fishing, skating. A hotel and a dance pavilion on the west shore. On the east, Knollwood Park ran along this turnpike. The dam that held it was stone, built in a stair of cascades. The borough history gives the wall as sixty feet high and two hundred feet across.

On September 24, 1882, a storm broke it. The lake emptied. The flood took buildings, bridges, roads, fields, and livestock, and it finished both the lake and the Zabriskie cotton mill. The brownstone steps ye can still find are the corpse of that dam.

There is a colder line in the same story. The borough says that in 1876 John "Jake" Zabriskie came home on the train from New York, slipped, and drowned in the lake. The mill and the summer hotel did not last much longer. The dam went in 1882.

Farther east, along East Saddle River Road, the borough remembers a sawmill, a gristmill, and a cotton and wool mill. I have no honest pin for those. The buildings are gone, and I will not send ye up a stranger's drive to squint at a guess. The ruin that can still be seen is this one. Look across the road. Stay out of the watercourse.`,
    facts: [
      "Sylvan Lake was a roughly 50-acre mill pond, dug in 1862 by John Zabriskie to power his cotton mill",
      "The borough history describes the stone dam as about 60 feet high and 200 feet across, built in cascading steps",
      "The dam failed in a storm on September 24, 1882, destroying the lake and ending the Zabriskie cotton mill",
      "John \"Jake\" Zabriskie drowned in the lake in 1876; brownstone ruins remain across from the post office"
    ]
  },
  {
    id: 6,
    originalId: 6,
    name: "Red Cedar, or a Cleft in the Rock",
    short: "The Name",
    location: "Worth-Pinkham Memorial Library, 91 Warren Avenue, Ho-Ho-Kus, NJ",
    lat: 40.99904,
    lng: -74.11218,
    radius: 60,
    icon: "📜",
    narration: `Squawk. A pirate loves a disputed chart. This borough's name is one.

The people here before the Dutch deeds were Lenape. The borough remembers the Munsee in this northern part of New Jersey, and it names Wearimus, a chief remembered in Wearimus Road east of the Saddle River. The word Ho-Ho-Kus is theirs, worn down by Dutch pens. A 1698 Van Emburgh deed already spells a version of it: Hoghakas, on a purchase of half a five-hundred-acre patent.

What it meant is not settled, and I will not pretend it is. The borough's own history says the most accepted reading is a shortening of Mehokhokus, or Mah-Ho-Ho-Kus, a Delaware term for the red cedar — the first syllable worn off, the way many Lenape place-names lost a leading "meh" or "mah." That is the meaning the town itself puts first.

The same page lists the rivals, and they disagree with each other. Running water. A cleft in the rock, or under the rock, or hollow rock. Hohokes, the whistle of wind against bark. A people called the Chihohokies. Dutch Hoog Akers or Hoge Aukers — high acorns, or high oaks. Hoccus for fox, woakus for gray fox. Ho for joy or spirit, glued onto a word for bark. Later writers have also offered "place of many foxes." The borough counts as many as sixteen definitions. That is not a translation. It is an argument.

This library is the right room for an argument. The Woman's Club opened the first borough library in 1924, in a jail cell that had held women prisoners. In 1988 it moved to this corner of Warren Avenue and North Franklin Turnpike and took the name Worth-Pinkham. The local history is inside. I am not allowed past the door. Typical.

If ye want a landscape for the "cleft in the rock" theory, the railroad viaduct is ahead. The red cedar, if that reading is right, was a tree. It did not leave a plaque.`,
    facts: [
      "The borough treats \"red cedar\" — from Mehokhokus or Mah-Ho-Ho-Kus — as the most accepted meaning, and lists many rivals",
      "Other published guesses include cleft in the rock, running water, fox, gray fox, high oaks, and the sound of wind on bark",
      "A 1698 deed spells the place Hoghakas; the brook has carried the name at least that long",
      "Worth-Pinkham Memorial Library began in 1924 in a former jail cell and moved to 91 Warren Avenue in 1988"
    ]
  },
  {
    id: 7,
    originalId: 7,
    name: "The Brook Under Warren Avenue",
    short: "Warren Avenue Bridge",
    location: "Warren Avenue at Ho-Ho-Kus Brook, Ho-Ho-Kus, NJ",
    lat: 40.99831,
    lng: -74.11247,
    radius: 55,
    icon: "🌉",
    narration: `Squawk. Look down, not at the shops. The water under this bridge is the Ho-Ho-Kus Brook, and the brook is older than every hyphen in the town's name.

This is the Warren Avenue Bridge, about 1890, the way ye get from Franklin Turnpike over to the borough's train station. The borough calls it the oldest of the three truss bridges still standing in Bergen County, and the state plan marks both the bridge and the station as historic sites. It is a short span. It carried farm wagons, then the walk to the platform, and it is still the front door of the station.

The brook is why the mills came. Fast water, a turnpike beside it, and stone in the ground. Upstream it ran the Rosencrantz cotton works and, for twenty years, Jake Zabriskie's lake. Downstream it still finds the Saddle River. On a dry week it looks too small for all that labor. Floods have always known better. Ask the dam ye just left.

Stand on the sidewalk. The truss is the artifact — the metal and the date — not the streambed. I've watched a lot of crews pry souvenirs out of places that weren't theirs. Don't be that crew.

The station is just across. Trains have stopped in this village since 1848. The building ye are about to see is not the first one. It is the one that lasted.`,
    facts: [
      "The Warren Avenue Bridge, circa 1890, carries the road from Franklin Turnpike to the train station",
      "The borough describes it as the oldest of three truss bridges still standing in Bergen County",
      "Ho-Ho-Kus Brook powered the village mills and now passes under this span on its way toward the Saddle River",
      "Both the bridge and the station are flagged as historic sites in the borough's state-plan inventory"
    ]
  },
  {
    id: 8,
    originalId: 8,
    name: "From Undercliff to the Erie",
    short: "Ho-Ho-Kus Station",
    location: "Brookside Avenue & 1st Street, Ho-Ho-Kus, NJ",
    lat: 40.99698,
    lng: -74.11327,
    radius: 80,
    icon: "🚂",
    narration: `Squawk. October 19, 1848. The Paterson and Ramapo Railroad — soon enough the Erie — opened a station in a village that was still deciding what to call itself. One track, then more. By 1902 the Erie wanted four through here, and Elijah Rosencrantz sold the railroad a strip of land to do it.

The depots came and went. A one-room brick station in 1850. A two-room station house in 1860. In 1887 a new building the timetable listed as Undercliff. When Undercliff burned, the railroad parked a car on the siding and called that Undercliff too. Both names, Undercliff and Ho-Ho-Kus, show up in the Erie timetable of 1889. The house ye see now was built in 1908 by a local man, John McGee: one story, boulder stone, a hip roof. The borough calls the style Richardson Boulder. NJ Transit still stops here, on the Main Line and the Bergen County Line, a short walk from the turnpike.

Two older things sit in the same glance. Down in the lower parking lot, the borough says, was the Zabriskie cotton mill — the one Sylvan Lake was built to turn, until the dam let go. And on First Street, beside the commuter lot, the Hopper-Zabriskie family cemetery has been here since 1790. It is a small burying ground with a large claim: it is one of the documents of the first settlement, written in stone instead of deeds.

Mind the third rail and the timetable. The plunder is on the platform and in the lot, not on the tracks. Next we go upstream, where the railroad had to jump the brook on a pile of Palisades rock.`,
    facts: [
      "The station opened October 19, 1848, on the Paterson and Ramapo Railroad, later the Erie",
      "The 1908 boulder-stone depot was built by resident John McGee after earlier stations, including one called Undercliff, burned or were replaced",
      "NJ Transit Main Line and Bergen County Line trains still stop here",
      "The Zabriskie mill site is the lower parking lot; the Hopper-Zabriskie cemetery on First Street dates to 1790"
    ]
  },
  {
    id: 9,
    originalId: 9,
    name: "The Stone Cut",
    short: "Railroad Viaduct",
    location: "View from Hollywood Avenue at the railroad — do not enter the right-of-way, Ho-Ho-Kus, NJ",
    lat: 41.00132,
    lng: -74.11515,
    radius: 140,
    icon: "🪨",
    narration: `Squawk. Stop on Hollywood Avenue where the road meets the railroad, and look south along the stonework. That is as close as ye come. The right-of-way is not a footpath, and I have no interest in fishing a plunderer off the ballast.

The railroad and the Ho-Ho-Kus Brook cross here on a stone viaduct. The borough history says it rises about seventy feet over the water, built of Palisades cut stone, blocks on the order of a ton. An older county telling calls the cleft a hundred feet. I won't referee the tape measure. Both agree it is a gorge, and the railroad has lived in it since the line arrived in 1848. When the Erie spread to four tracks in 1902, the viaduct was widened with them. NJ Transit still rides it toward Hoboken and the city.

This is the landscape people point at when they say the name means "a cleft in the rock." Maybe. The borough still puts red cedar first, and a gorge does not settle a lexicon. It does explain why a railroad needed a viaduct instead of a culvert.

Along this same Hollywood Avenue corridor, the Rosencrantz cotton mill grew up into the Ho-Ho-Kus Bleachery. The borough says those mill buildings are still there, reused as the Dalebrook Park offices and shops. That is private property with a public history. Ye can see the mass of it from the road. Ye cannot wander the loading docks as if they were a park.

The great house that owned the first of those mills is up the turnpike. National Historic Landmark. A wedding ye have heard of, and a general who should, by any ordinary rule, have been the enemy of the woman who asked him in.`,
    facts: [
      "The stone railroad viaduct carries the line over Ho-Ho-Kus Brook; the borough says it rises about 70 feet, of Palisades blocks",
      "It dates to the railroad's arrival in 1848 and was widened when the Erie added tracks in 1902",
      "\"Cleft in the rock\" is one proposed meaning of Ho-Ho-Kus; the borough still ranks \"red cedar\" as more likely",
      "View it from Hollywood Avenue. The right-of-way is not part of the tour"
    ]
  },
  {
    id: 10,
    originalId: 10,
    name: "Where Burr Was Married",
    short: "The Hermitage",
    location: "335 North Franklin Turnpike, Ho-Ho-Kus, NJ",
    lat: 41.00714,
    lng: -74.11773,
    radius: 150,
    icon: "🏰",
    narration: `Squawk. Here is the chest.

The Hermitage. A National Historic Landmark, the Gothic house ye see shaped in 1847 and 1848 from designs by William H. Ranlett, dropped onto a colonial estate that is older than the gables. Ann Bartow DeVisme bought the property in 1767 and brought her children out from Manhattan. One daughter was Theodosia Bartow Prevost. Her husband, James Marcus Prevost, was an officer in the British army, and in the war he was off fighting in the South.

In July 1778, after the Battle of Monmouth, George Washington and his officers came through on the way toward the Hudson. Theodosia invited them to stay. They did — several days. Some guides count four. The invitation is the part the museum, the borough, and the histories agree on: a British officer's wife, alone with the children, opening the door to the commander of the army her husband was fighting. Alexander Hamilton came through this house. So did the Marquis de Lafayette, James Monroe, and Aaron Burr. The borough's history also counts William Paterson and Lord Stirling among the guests.

Prevost died in the war. In July 1782 Theodosia married Aaron Burr at the Hermitage. They lived for a time in a small house on the place. That marriage, and the week with Washington, are why a quiet Bergen County museum is in the national story.

In 1807 a doctor, Elijah Rosencrantz, bought it. Four generations stayed until 1970. On the brook behind the house they ran a cotton mill — the marker on the grounds tells it — from the 1830s until past the Civil War. Mary Elizabeth Rosencrantz, Elijah's granddaughter, kept the house through thin years and willed it to the State of New Jersey so it would not be broken up. The Friends of the Hermitage run it as a museum. The Gothic skin is Victorian. The bones are Revolutionary. Check the hours before ye assume the door is open. The grounds are the stop either way.

So. No doubloons in the garden. I don't bury those in a borough that keeps its minutes. The plunder is the contradiction: the hyphenated name nobody can translate cleanly, the mill dam that failed, the dirt oval now tiled with houses, and this doorway, where the war sat down to supper.

Ye've sailed the loop, from the firehouse corner to the wedding. Fair winds, matey. Screecher Jones bids Ho-Ho-Kus good night.`,
    facts: [
      "The Hermitage is a National Historic Landmark; the Gothic Revival house was designed by William H. Ranlett and built in 1847–48",
      "In July 1778 Theodosia Prevost, wife of a British officer, hosted George Washington and his staff here after the Battle of Monmouth",
      "She married Aaron Burr at the Hermitage in July 1782, after James Marcus Prevost died in the war",
      "The Rosencrantz family owned it from 1807 to 1970, ran a cotton mill on the brook, and willed the house to New Jersey"
    ]
  }
];

const HOHOKUS_STOPS_COUNTERCLOCKWISE = [...HOHOKUS_STOPS_CLOCKWISE].reverse().map((stop, i) => ({
  ...stop,
  originalId: stop.originalId || stop.id,
  id: i + 1
}));

function getHohokusStops(direction) {
  // 'north' = clockwise: Borough Hall → old track → The Hermitage
  // 'south' = counter-clockwise
  return direction === 'south'
    ? HOHOKUS_STOPS_COUNTERCLOCKWISE
    : HOHOKUS_STOPS_CLOCKWISE;
}
