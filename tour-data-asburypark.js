// Screecher Jones' Haunted Shores of Asbury Park — 18-Stop GPS Walking Tour
// North-to-South: Deal Lake Flume → Wesley Lake (Ocean Grove border)

const ASBURY_STOPS_NORTH_TO_SOUTH = [
  {
    id: 1,
    name: "The Northern Gate",
    short: "Deal Lake Flume",
    location: "Asbury Park, NJ",
    lat: 40.2262,
    lng: -74.0035,
    radius: 350,
    icon: "🌊",
    narration: `Arr, so ye've found yer way to Asbury Park. Smart soul.

This channel beneath yer feet — the Deal Lake Flume — is where I used to slip in, barrels below the waterline, past the Methodist noses. Before Bradley's temperance town existed, this inlet was a smugglers' haunt. Rum-runners and small-boat operators knew these shoals better than any coast guard chart.

James Bradley sealed off his little paradise at this very lake. Thought a body of water could keep the wicked out. It cannot. The sea belongs to no man, and no man can legislate the tide.

So here we begin, ye and I — on the northern edge of the most magnificent, battered, reborn town on the Jersey Shore. Follow me south. Every board of this boardwalk has a story.`,
    facts: [
      "Deal Lake forms Asbury Park's northern border and drains to the Atlantic through this stone flume",
      "Before Bradley's resort, this inlet was used by smugglers who knew the shoals better than any chart",
      "Striped bass still queue outside the flume every spring, chasing herring from the sea",
      "James Bradley bought 500 acres here in 1871 for $90,000 and named the town after Methodist bishop Francis Asbury"
    ]
  },
  {
    id: 2,
    name: "Palace of Tillie's Grin",
    short: "Palace Amusements",
    location: "Asbury Park, NJ",
    lat: 40.2178,
    lng: -74.0035,
    radius: 350,
    icon: "🎡",
    narration: `That grin — I've seen it in fog and in daylight for nigh on a century. A leering face on a wall, laughing at everything that came and went.

Palace Amusements stood here from 1888 to 2004 — a labyrinth of funhouses, roller coasters, and pinball machines, all presided over by a giant grinning face named "Tillie." When the building was finally demolished, volunteers mounted a desperate rescue: they cut the massive Tillie mural off the wall with a crane in eight agonizing minutes and drove it in a makeshift parade up Ocean Avenue past the Casino, the Stone Pony, Madam Marie's.

Bruce Springsteen was photographed beneath Tillie's grin for one of the most famous images in rock-and-roll history.

As of this day, Tillie is locked in a shed somewhere while developers argue. She knows what I know: this town eats its own history alive.`,
    facts: [
      "Palace Amusements opened in 1888 and operated for exactly one century before closing in 1988",
      "The 'Tillie' face was named after Coney Island showman George C. Tilyou",
      "Tillie is still listed among New Jersey's Ten Most Endangered historic treasures",
      "Springsteen's famous photograph beneath Tillie became one of rock-and-roll's most iconic images"
    ]
  },
  {
    id: 3,
    name: "Springsteen's Cradle",
    short: "The Student Prince",
    location: "Asbury Park, NJ",
    lat: 40.2155,
    lng: -74.0124,
    radius: 350,
    icon: "🎸",
    narration: `Every harbor has its proving grounds — the rough water where captains are made before the open sea. This block was Springsteen's rough water.

Before the Stone Pony ever opened, the sound that became the E Street Band was forged in two now-vanished rooms. The Upstage Club above a shoe store at 700 Cookman Avenue was an after-hours laboratory where a teenage Springsteen would play until 5 a.m., jamming with Steve Van Zandt, Garry Tallent, Danny Federici, and Clarence Clemons.

When the Upstage closed, Springsteen took up residence at the Student Prince on Ocean Avenue, playing for 150 people on the same weekend Woodstock was happening. He later said: "I was among the 150 people at the Student Prince, watching my band play, making a few bucks."

The Student Prince is gone. The Upstage is gone. Only the music remains.`,
    facts: [
      "The Upstage Club at 700 Cookman Avenue was where Springsteen assembled what became the E Street Band",
      "The club was an after-hours spot — shows ran from midnight to 5 a.m.",
      "Springsteen played the Student Prince bar the same weekend as Woodstock",
      "Steve Van Zandt, Garry Tallent, Danny Federici and Clarence Clemons all met here"
    ]
  },
  {
    id: 4,
    name: "Madam Marie's Temple of Knowledge",
    short: "Madam Marie's",
    location: "Asbury Park, NJ",
    lat: 40.2195,
    lng: -74.0042,
    radius: 300,
    icon: "🔮",
    narration: `Now here's a woman who understood the real commerce of the boardwalk: not cotton candy and salt water taffy, but the future. She traded in what every pirate truly wants — to know what's coming over the horizon.

From 1932 until her death in 2008 at age 93, Marie Castello told fortunes from this tiny shack she called her Temple of Knowledge. Performers heading into Convention Hall next door made it a ritual to stop: Judy Garland, Ray Charles, Frank Sinatra all reportedly sought her counsel.

A seventeen-year-old Springsteen used to play guitar outside her booth for spare change. When she told his fortune, she reportedly said it looked "pretty good." It was.

Springsteen immortalized her in the 1973 song Sandy: "Did you hear the cops finally busted Madam Marie / For tellin' fortunes better than they do."

Her granddaughter Dainzie still operates from this spot today. Seventy-six years. That's a longer career than most admirals.`,
    facts: [
      "Madam Marie told fortunes at this boardwalk booth for 76 years — from 1932 to 2008",
      "Judy Garland, Ray Charles, and Frank Sinatra reportedly all visited her booth",
      "Springsteen played guitar outside her booth for spare change as a teenager",
      "Her granddaughter Dainzie now operates the booth, continuing the tradition"
    ]
  },
  {
    id: 5,
    name: "The Hall of Storms",
    short: "Convention Hall",
    location: "Asbury Park, NJ",
    lat: 40.2236,
    lng: -73.9982,
    radius: 350,
    icon: "🏛️",
    narration: `A burning ship, 137 souls lost, and what does the city do? Charge admission. If that isn't the pirate spirit, I don't know what is.

Convention Hall was built by the same architects who designed Grand Central Terminal — Warren & Wetmore — and it sits literally on the ocean, extending 215 feet over the beach on steel-encased pilings. 

On September 8, 1934, as an SOS crackled from the radio studio inside, the announcer cried on live air: "She's here! The Morro Castle is coming right toward our studio!" The burning luxury liner SS Morro Castle, returning from Havana with 549 passengers, had caught fire. One hundred thirty-seven people died. Its burning hull drifted onto the sandbar directly in front of this building — and became a Great Depression tourist attraction, with the city charging five dollars to ride a breeches buoy onto the smoldering deck.

During World War II, the British Royal Navy requisitioned this hall and renamed it HMS Asbury. I watched that hulk smolder for six months from this very rail.`,
    facts: [
      "Built by Warren & Wetmore — the same architects as Grand Central Terminal in New York",
      "Convention Hall extends 215 feet over the beach on steel-encased concrete pilings",
      "The SS Morro Castle burned September 8, 1934 — 137 people died before the hull beached here",
      "During WWII, the Royal Navy took over the building and renamed it HMS Asbury"
    ]
  },
  {
    id: 6,
    name: "The Phantom Theatre",
    short: "Paramount Theatre",
    location: "Asbury Park, NJ",
    lat: 40.2235,
    lng: -74.0000,
    radius: 300,
    icon: "🎭",
    narration: `A hall built so the very walls would sing. When the Warren & Wetmore architects laid this place out, they said they wanted the building itself to be part of the instrument.

The Paramount Theatre opened on New Year's Day, 1930, with a showing of the 1927 silent film Wings — and its grand opening in July brought the Marx Brothers, Ginger Rogers, Fredric March, and Carole Lombard to this boardwalk.

The 1,600-seat house, with its gold, black, and purple interior and giant ceiling rosette, is on the National Register of Historic Places. Its acoustics — shaped to carry the sound of a Wurlitzer pipe organ through the entire building — give the space an almost supernatural resonance.

I have heard echoes in this arcade that shouldn't be there — midnight harmonics from bands long disbanded, from singers long dead. Theatres are the most haunted buildings on earth, and the Paramount earns every ghost it carries.`,
    facts: [
      "The Paramount Theatre opened January 1, 1930 — designed by the architects of Grand Central Terminal",
      "Opening night featured the Marx Brothers, Ginger Rogers, Fredric March and Carole Lombard",
      "The 1,600-seat house is on the National Register of Historic Places",
      "Its original Wurlitzer pipe organ shaped the acoustics of the entire building"
    ]
  },
  {
    id: 7,
    name: "Bradley's Statue: The Founder's Bargain",
    short: "Bradley Park",
    location: "Asbury Park, NJ",
    lat: 40.2232,
    lng: -74.0008,
    radius: 300,
    icon: "🗿",
    narration: `There he stands. The man who banned rum, women in revealing bathing dress, hot dogs — and eventually, Black folks from his own beach.

James Adam Bradley, a New York brush manufacturer, bought 500 acres of coastal wilderness in 1871 for $90,000, named it after a Methodist bishop, and built a dry, curfewed, temperance resort. He was the city's first postmaster, first newspaper editor, and first mayor.

But by 1887, he was banning Black beachgoers from the water, enforcing segregation at pavilions, posting signs forbidding entry to "members of the colored race," and arguing it was a "business decision." The Asbury Park Historical Society has stated that Bradley's segregation legacy should never be forgotten.

This statue was erected in 1921, three weeks after he died at age 91 — he never saw it unveiled. The tension still stands here, in bronze.

A man of such extraordinary contradictions deserves a statue, I suppose, if only so we know who built the prison we're walking through.`,
    facts: [
      "Bradley bought 500 acres in January 1871 for $90,000 and named the town after Methodist bishop Francis Asbury",
      "By 1887 he was enforcing segregation policies barring Black beachgoers from most of the shore",
      "He was simultaneously the city's first mayor, first postmaster, and first newspaper editor",
      "The statue was erected three weeks after his death in 1921 — he never saw it unveiled"
    ]
  },
  {
    id: 8,
    name: "The Grand Ship of State",
    short: "Berkeley Carteret Hotel",
    location: "Asbury Park, NJ",
    lat: 40.2243,
    lng: -74.0025,
    radius: 300,
    icon: "🏨",
    narration: `A luxury hotel turned into barracks by the King's Navy — that's my kind of commandeering.

The Berkeley Carteret Hotel opened in 1925 in full Beaux-Arts grandeur, rising eight stories above this boardwalk as the crown jewel of Jersey Shore society. Babe Ruth and Lou Gehrig dined here in the 1920s. Frank Sinatra, Judy Garland, and Marilyn Monroe all slept here. In 1934 and 1935, the hotel hosted the Miss America Pageant.

But its most dramatic chapter came during World War II, when the British Royal Navy requisitioned the entire building, renamed it HMS Asbury, and used it as a receiving station and hospital for naval officers — the grand ballrooms stripped and fitted with cots, the chandeliers dark.

HMS Asbury. Sinatra's suite becomes a bunk room for Royal Navy surgeons. The ballroom where Babe Ruth ate becomes a ward. War does to grand hotels what time does to everything else — strips them down to their bones.

The Berkeley survived it all. A ship that wouldn't sink.`,
    facts: [
      "Opened in 1925, the Berkeley Carteret was the crown jewel of Jersey Shore society",
      "Babe Ruth, Lou Gehrig, Frank Sinatra, Judy Garland, and Marilyn Monroe all visited",
      "Hosted the Miss America Pageant in 1934 and 1935",
      "The Royal Navy commandeered the entire building during WWII and renamed it HMS Asbury"
    ]
  },
  {
    id: 9,
    name: "The Casino: Cathedral of the Carousel",
    short: "Casino Building",
    location: "Asbury Park, NJ",
    lat: 40.2196,
    lng: -74.0030,
    radius: 300,
    icon: "🎠",
    narration: `Winged seahorses on an arch over the boardwalk — there's a pirate's emblem if ever I saw one.

In the Victorian age, a "casino" meant a public hall for pleasure — not gambling. The original Asbury Park Casino was built in 1904, burned to the ground in a devastating fire in January 1928 — destroying the radio station, the orchestra's instruments, and $300,000 worth of infrastructure — and was rebuilt in 1929-1930 by Warren & Wetmore as an even grander structure: brick and limestone with copper trim, crowned by an archway of winged seahorses paying tribute to Poseidon.

The 1928 fire? I was nearby that night, and let me just say the wind was peculiar.

The eastern wing once jutted out over the beach on a pier, reaching the ocean at high tide. It collapsed and was demolished in 2006 after decades of neglect. A mural of two giant oceanic sirens now gazes from its boardwalk-facing wall. The carousel house — a five-thousand-square-foot copper-clad rotunda — still stands.`,
    facts: [
      "In Victorian usage, 'casino' meant a public hall for entertainment — not gambling",
      "The original 1904 Casino burned in a devastating boardwalk fire in January 1928",
      "Rebuilt by Warren & Wetmore in 1929-1930 with winged seahorses honoring Poseidon on the archway",
      "The eastern wing once extended over the beach on a pier — it collapsed and was demolished in 2006"
    ]
  },
  {
    id: 10,
    name: "The Stone Pony: Anchor of the Sound",
    short: "The Stone Pony",
    location: "Asbury Park, NJ",
    lat: 40.2200,
    lng: -74.0006,
    radius: 300,
    icon: "🎵",
    narration: `Every port needs a tavern where the real business gets done. The Stone Pony is Asbury Park's port tavern.

On a snowy February night in 1974, Jack Roig and Butch Pielka opened a rock club here in the shell of an old bar called Mrs. Jay's — a former beer garden that had been a biker bar with go-go dancers. On opening night, one person showed up.

Within two years, the Stone Pony became the most important music venue on the Jersey Shore, maybe the East Coast. Southside Johnny took a three-night-a-week residency. Springsteen began dropping in to jam, unannounced, sometimes playing for three hours. Jon Bon Jovi played one of his first shows here as a teenager. Springsteen met his wife, Patti Scialfa, here.

When Epic Records staged a live radio broadcast across the country, Springsteen wouldn't sign a contract to appear. He came anyway.

The Pony has closed and reopened multiple times, surviving developers, financial ruin, and Hurricane Sandy. The music never really stops, even when the lights go down.`,
    facts: [
      "The Stone Pony opened February 8, 1974 — on opening night, one person showed up",
      "Springsteen began dropping in unannounced, sometimes playing for three hours straight",
      "Jon Bon Jovi played one of his first professional shows here as a teenager",
      "Springsteen met his wife, Patti Scialfa, at the Stone Pony"
    ]
  },
  {
    id: 11,
    name: "Morro Castle's Grave",
    short: "Morro Castle Memorial",
    location: "Asbury Park, NJ",
    lat: 40.2238,
    lng: -73.9985,
    radius: 300,
    icon: "🔥",
    narration: `I know fires at sea. I know what 137 lost souls feel like when they're taken all at once — the ocean swells for hours after, disturbed at its deepest level.

A black marble monument embedded in this boardwalk marks the spot where one of America's deadliest peacetime maritime disasters made its final landing. At 2:50 a.m. on September 8, 1934, fire broke out in the First Class Writing Room of the SS Morro Castle — a luxury liner returning from Havana. The captain had died mysteriously the night before. His replacement froze. An SOS wasn't sent until 3:25 a.m. By then the ship was a torch.

One hundred and thirty-seven people died in the water, some so close to shore that lifeguards could see them from the beach. The burned hulk drifted onto the sandbar directly in front of Convention Hall.

The cause was never conclusively determined. Radio operator George Rogers — hailed as a hero — was later convicted of murder and died in prison, stoking theories he started the fire himself.

The Morro Castle brought those souls to Asbury Park's doorstep, and the town charged admission to see the wreck. I am a pirate and even I found that unseemly. Stand here a moment. The water remembers.`,
    facts: [
      "The SS Morro Castle fire on September 8, 1934 killed 137 of the 549 people aboard",
      "The SOS wasn't transmitted until 35 minutes after fire was discovered — critical time lost",
      "'Hero' radio operator George Rogers was later convicted of an unrelated murder",
      "The wreck became a tourist attraction — the city charged admission to view it from close range"
    ]
  },
  {
    id: 12,
    name: "The Writer's Ghost",
    short: "Stephen Crane House",
    location: "Asbury Park, NJ",
    lat: 40.2236,
    lng: -74.0069,
    radius: 350,
    icon: "📖",
    narration: `A minister's son who became a war novelist without fighting a single battle — that takes imagination I respect.

Stephen Crane — author of The Red Badge of Courage, the defining American novel of Civil War combat, written by a man who had never seen battle — spent much of his boyhood at this brown-and-white Victorian cottage. His father was a Methodist minister; his mother became president of the Asbury Park Women's Christian Temperance Union.

From this house of piety, young Stephen went the other direction entirely. As a cub reporter at 18, he covered the boardwalk, chronicled the hypocrisy of the Victorian resort town, and was effectively run out of Asbury Park before writing Maggie: A Girl of the Streets — a brutal novel about poverty rejected by every publisher and self-published in 1893. He died of tuberculosis at age 28.

The house nearly met a wrecking ball in 1995 but was saved and restored. It is now the headquarters of the Asbury Park Historical Society. He saw through the respectability at seventeen. They ran him out of town for the telling. They usually do.`,
    facts: [
      "Stephen Crane wrote The Red Badge of Courage without ever having seen combat",
      "His mother was president of the Asbury Park Women's Christian Temperance Union",
      "He was fired from the Asbury Park Daily Press after mocking a labor parade — effectively exiled",
      "The house, built in 1871, was nearly demolished in 1995 before being saved and restored"
    ]
  },
  {
    id: 13,
    name: "The Iron Preacher's Beach",
    short: "The Segregated Beach",
    location: "Asbury Park, NJ",
    lat: 40.2210,
    lng: -73.9990,
    radius: 350,
    icon: "🌊",
    narration: `The sea is the one thing that belongs to everyone equally — she doesn't care who you are or what you're worth. But men will fence even the ocean if you let them.

Between the 1880s and the 1960s, this stretch of beach was the only section of the Asbury Park waterfront where Black residents and visitors were permitted to swim. James Bradley began restricting Black beachgoers by 1887, under pressure from white hoteliers who complained that the presence of Black workers was bad for business.

Reverend J. Francis Robinson of the St. Stephen A.M.E. Zion Church led what may have been the country's earliest organized beach protests: "wade-ins" in the 1880s and 1890s — nearly eight decades before the sit-ins of the Civil Rights Movement. The good Reverend understood what I understand: rules are made by those who hold the land, but the water has its own law.

They held their wade-ins right here. A century before anyone called it civil disobedience.`,
    facts: [
      "Bradley enforced beach segregation by 1887 — the 'colored beach' relocated multiple times",
      "Reverend Robinson led wade-in protests in the 1880s-1890s — decades before the Civil Rights era",
      "The Asbury Park Daily Journal, which Bradley owned, called Black bathers a 'nuisance'",
      "Access to the boardwalk pools was still contested until those pools finally closed in 1971"
    ]
  },
  {
    id: 14,
    name: "Greetings from Asbury Park",
    short: "Springsteen's Boardwalk",
    location: "Asbury Park, NJ",
    lat: 40.2205,
    lng: -73.9995,
    radius: 350,
    icon: "🎶",
    narration: `When a young man walks a waterfront and the whole sea seems to speak to him — that is what happened to Springsteen on these boards. He was listening when most people were just strolling.

This stretch of boardwalk, between the Stone Pony and Convention Hall, is where Bruce Frederick Joseph Springsteen spent the formative hours of his artistic life. He wandered this boardwalk as a teenager, hanging around outside Madam Marie's booth, watching crowds outside Convention Hall for shows he couldn't afford — the Temptations, the Rolling Stones, the Doors, the Who all played there.

He processed all of it into Greetings from Asbury Park, N.J. and The Wild, the Innocent & the E Street Shuffle — two records that were, as he later said, "all about my days in Asbury and on the East Coast and in this little blue-collar, sort of run-down amusement town."

The song Sandy paints this exact stretch of boardwalk in vivid specificity: the fireworks, the Tunnel of Love, Madam Marie's booth, the carnival sounds fading out.

A pirate listens to the sea for messages, for weather, for opportunity. That boy heard something in these planks that became a thirty-million-album career.`,
    facts: [
      "Springsteen moved to the Asbury Park area around 1968, living in boarding houses and a surfboard shop",
      "He watched the Temptations, Rolling Stones, Doors and Who perform at Convention Hall — shows he often couldn't afford to attend",
      "Greetings from Asbury Park, N.J. (1973) was directly inspired by this boardwalk",
      "The song Sandy paints this exact stretch with geographic specificity — Madam Marie's, the Tunnel of Love, Convention Hall"
    ]
  },
  {
    id: 15,
    name: "The Riot Road",
    short: "Springwood Avenue",
    location: "Asbury Park, NJ",
    lat: 40.2193,
    lng: -74.0157,
    radius: 400,
    icon: "🔥",
    narration: `This is where the long reckoning came due. Decades of wrong, stacked up like debt — and debt always collects with interest.

Springwood Avenue was the commercial and cultural heart of Asbury Park's Black West Side — a neighborhood built by African American workers kept off the white beachfront by Bradley's segregation policies. On July 4, 1970, frustration that had been building for decades erupted. High unemployment among Black youth, city contracts routinely given to white workers from surrounding towns, no recreational programs, no political representation.

A late-night dance broke up, bottles and rocks flew, police arrived. Over the next seven days, Springwood Avenue became a war zone: fires, looting, sustained confrontations with state troopers. On July 7, police fired warning shots that ricocheted and wounded 44 civilians, including 14 children. Governor Cahill requested President Nixon declare Asbury Park a disaster area.

When the seven days ended: 180 people injured, $5.6 million in damages, and a city left permanently scarred.

The papers called it riots. The people who lived here called it an uprising. Both are true, and neither is the full truth.`,
    facts: [
      "The 1970 uprising lasted seven days starting July 4th — it was the hinge on which Asbury Park's golden age snapped shut",
      "Police fired warning shots on July 7th that ricocheted and wounded 44 civilians including 14 children",
      "Governor Cahill requested Nixon declare Asbury Park a federal disaster area",
      "The West Side's displacement after the uprising permanently changed the city's demographics"
    ]
  },
  {
    id: 16,
    name: "The Ghost Arcade",
    short: "Grand Arcade",
    location: "Asbury Park, NJ",
    lat: 40.2234,
    lng: -73.9998,
    radius: 300,
    icon: "🎰",
    narration: `A covered street where the sea wind still finds ye — that is the genius of this arcade. The architects threaded the ocean air through a marble corridor and called it civilization.

The Grand Arcade connecting Convention Hall and the Paramount Theatre was designed by Warren & Wetmore as a covered promenade over the boardwalk. Through the 1930s, 40s, and 50s, up to 600,000 people a year walked this arcade, past saltwater taffy vendors, novelty shops, and the window of the WCAP radio studio from which the municipal organist played free concerts for boardwalk strollers — sometimes broadcast live.

By the 1970s, following the riots and white flight, the arcade fell into disrepair. Shops closed, windows boarded, the pipe organ silenced in 1984. In the darkest years, the Convention Hall complex stood largely empty, its ornamental terra cotta crumbling into the sea below.

In the empty years I used to walk the full length at midnight: nothing but my boots on the boards, a few pigeons, and the memory of 600,000 revelers. An empty tavern is the saddest thing in the world. An empty arcade is the second saddest.`,
    facts: [
      "At its peak the Grand Arcade drew up to 600,000 visitors per year",
      "The WCAP radio studio broadcast live concerts from inside the arcade to boardwalk strollers",
      "The pipe organ was silenced in 1984 as the complex declined after the 1970 uprising",
      "An $11.5 million rehabilitation in the early 2000s brought the Paramount back to life"
    ]
  },
  {
    id: 17,
    name: "Bones of Empire",
    short: "Cookman Avenue",
    location: "Asbury Park, NJ",
    lat: 40.2195,
    lng: -74.0100,
    radius: 350,
    icon: "🏛️",
    narration: `Every great port city has a merchant street where the real plunder changes hands — not at sword-point but by ledger. Cookman was Asbury Park's counting house.

At its peak in the mid-twentieth century, Cookman Avenue was the "Fifth Avenue of the Shore," lined with Steinbach's Department Store, the Saint James Theatre, Woolworth's, and dozens of specialty shops drawing crowds from across Monmouth County. When the city fell after 1970, the counting house fell with it. By the 1990s, Cookman was a ghost of itself — boarded storefronts, vacant lots, rising crime.

The 2000s revival transformed it again: independent restaurants, boutique shops, and music venues colonized the old Victorian commercial buildings, and Cookman Avenue now hosts the Silverball Retro Arcade — which has Tillie's original Palace Amusements photo booth.

The bones of empire are still visible in the ornate cornices above every shop. When the city fell, the counting house fell with it. When the city rose again, the merchants came back. They always come back. Commerce is the cockroach of civilization — it survives everything.`,
    facts: [
      "At its peak Cookman Avenue was called the 'Fifth Avenue of the Shore' and rivaled any mainland shopping district",
      "Steinbach's Department Store owner Arthur Steinbach also built the Berkeley Carteret Hotel",
      "After the 1970 uprising and white flight, Cookman Avenue collapsed into abandonment within a decade",
      "The Silverball Museum Retro Arcade now operates on Cookman with Tillie's original photo booth"
    ]
  },
  {
    id: 18,
    name: "Southern Waters",
    short: "Wesley Lake",
    location: "Asbury Park, NJ",
    lat: 40.2130,
    lng: -74.0060,
    radius: 400,
    icon: "🗺️",
    narration: `Here we stop, mates. Wesley Lake: named for the man who started the whole Methodist business, dug as a moat between sinner and saint.

Asbury Park on one side — all that fire and music and grief and glory ye've just walked through. Ocean Grove on the other — tents and hymns and Sunday bans on automobiles. Ocean Grove is arguably the most intact Victorian planned community in America. Its great auditorium and tent city of canvas tabernacles still operate today. Cars are still banned on Sundays. Bradley dreamed the two would coexist. They have, in the manner of oil and water: adjacent, unmixed, each defining the other by contrast.

At this southern end, where the fresh water meets the sea channel, the divide between Asbury Park's wild century of riots, rock-and-roll, rum-running, and revival — and Ocean Grove's buttoned Victorian piety — is as clear as the line where a river meets the sea.

What he built instead was a city of magnificent contradictions. And me? I'll haunt the contradictions forever. That's where the real life is.

Now: shall we go round again, from the other end?`,
    facts: [
      "Wesley Lake forms the border between Asbury Park and Ocean Grove, named for Methodist founder John Wesley",
      "Ocean Grove is one of the most intact Victorian planned communities in America",
      "Ocean Grove still bans automobiles on Sundays — a practice dating to its 1869 Methodist founding",
      "The 'ocean grove tent city' — canvas tabernacles used for religious meetings — still operates today"
    ]
  }
];

// South-to-North reverses order, preserving originalId for audio lookup
const ASBURY_STOPS_SOUTH_TO_NORTH = [...ASBURY_STOPS_NORTH_TO_SOUTH].reverse().map((stop, i) => ({
  ...stop,
  originalId: stop.id,
  id: i + 1
}));

ASBURY_STOPS_NORTH_TO_SOUTH.forEach(stop => { stop.originalId = stop.id; });

function getAsburyStops(direction) {
  return direction === 'north' ? ASBURY_STOPS_NORTH_TO_SOUTH : ASBURY_STOPS_SOUTH_TO_NORTH;
}
