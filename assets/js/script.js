// ════════════════════════════════════════════════════════════════════
//  GALLERY DATA — ADD YOUR PHOTOS HERE
//
//  era      : 0–7  (see key below)
//  src      : "assets/filename.jpg" or full URL
//  title    : short title shown on hover & lightbox
//  date     : human-readable label  e.g. "JUNE 22, 2024"
//  rawDate  : "YYYY-MM-DD" for auto-sorting (no time needed)
//  by       : who took it — "Faiz4224" / "Dyno" / "Ikan" / etc.
//  desc     : caption shown in lightbox (optional)
//  span     : 1 = normal, 2 = wide (takes 2 columns)
//
//  ERA KEY:
//    0 = PRE-ERA     (before The Sus, 2020–early 2022)
//    1 = THE SUS     (2022–early 2023)
//    2 = GOLDEN ERA  (renamed to The LoL, 2023)
//    3 = ELECTION    (first election, May 6 2023)
//    4 = CHAOS       (conflict under UltraX2020, 2023)
//    5 = RESTORATION (Faiz4224 returns, late 2023)
//    6 = REBUILDING  (recovery + ISC, late 2023–mid 2024)
//    7 = FINAL ERA   (last server period, 2024 to Aug 24)
// ════════════════════════════════════════════════════════════════════
const GALLERY_DATA = [

// ── ERA 0: PRE-ERA — NEVERLAND (2020) ────────────────────────────
{
    era: 0,
    src: "https://drive.google.com/file/d/1Hx2TSA1FqfnHu0F74KpM8iaeyD2jM7ZZ/view?usp=drive_link",
    title: "Neverland — Group Selfie",
    rawDate: "2020",
    date: "2020",
    by: "Dyno",
    desc: "A group selfie from the Neverland days — before The Sus, before The LoL, before any nation existed. Just players and admin hanging out.",
    span: 1
},
{
    era: 0,
    src: "/thelol/gallery/assets/[1]_NEVERLAND_2020/byDYNO_maybe_BEFORE_THE_FLOWEY_BLOODMOON_EVENT.jpg",
    title: "The Flowey Bloodmoon Event",
    rawDate: "2020",
    date: "2020",
    by: "Dyno",
    desc: "Faiz4224 caught mid-combat during what may be the Flowey Bloodmoon server event. The blood-red sky over Neverland.",
    span: 1
},
{
    era: 0,
    src: "/thelol/gallery/assets/[1]_NEVERLAND_2020/IDK.jpg",
    title: "Skyxion — Early Server Days",
    rawDate: "2020",
    date: "2020",
    by: "Dyno",
    desc: "Early Skyxion server days. Rank: Rookie. The server that would one day become home to The Sus, and then The Legend of Legiona.",
    span: 1
},
{
    era: 0,
    src: "/thelol/gallery/assets/[1]_NEVERLAND_2020/sendbyDYNO.jpg",
    title: "Underground — Neverland",
    rawDate: "2020",
    date: "2020",
    by: "Dyno",
    desc: "A lone player in a boat inside an underground cave. Early Neverland days.",
    span: 1
},

// ── ERA 1: THE SUS ────────────────────────────────────────────────
{
    era: 1,
    src: "/thelol/gallery/assets/[2]_THE_SUS/byDYNO_FIRST_THE_SUS_BASE.jpg",
    title: "The First Sus Base",
    rawDate: "2022",
    date: "2022",
    by: "Dyno",
    desc: "The artificial island where it all began. Faiz4224, ItzDynozz, and Imii Kun built The Sus base here — farms, chests, furnaces, and all. This is the moment that started everything. EhekSquad saw what was being built and wanted in.",
    span: 2
},
// ── ERA 2: GOLDEN ERA — THE LOL FOUNDED & FIRST CITY ─────────────

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-02-20_BY_Faiz4224_FIRST_SPAWN_INTO_THE_SERVER_IN_WORLD_SPAWNPOINT.png",
  title:"First Spawn on the New Server",
  rawDate:"2023-02-20", date:"FEB 20, 2023", by:"Faiz4224",
  desc:"The very first moment Faiz4224 spawned into the new Skyxion server — a snow biome at night, empty inventory, and everything ahead of them.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023_02_21_‏‎7_12_04_ PM_byFaiz4224_THE_LOL_WAS_FOUNDED.png",
  title:"The LoL Was Founded",
  rawDate:"2023-02-21", date:"FEB 21, 2023 — 7:12 PM", by:"Faiz4224",
  desc:"The moment The Legend of Legiona was founded. The first signs placed, the first plots claimed. Imii Kun renamed The Sus, and history began.",
  span:2 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-02-21_9_38_58_PM_BY_Faiz4224_BEFORE_LEAVING_THE_SPAWNPOINT_TO_FIND_A_BETTER_PLACE_FOR_THE_LOL.png",
  title:"Before Leaving the Spawnpoint",
  rawDate:"2023-02-21", date:"FEB 21, 2023 — 9:38 PM", by:"Faiz4224",
  desc:"Standing in a ravine near the world spawn. Faiz4224 was about to leave and find the perfect land to build The LoL on.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-02-21_OTW_TO_THE_LOL_WITH_IMII.png",
  title:"On the Way — With Imii Kun",
  rawDate:"2023-02-21", date:"FEB 21, 2023", by:"Faiz4224",
  desc:"Imii Kun sailing across the open ocean at night in a wooden boat, iron sword in hand. The journey to find The LoL's founding land.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-02-22_BY_Faiz4224_EARLY.png",
  title:"The LoL — Early Settlement",
  rawDate:"2023-02-22", date:"FEB 22, 2023", by:"Faiz4224",
  desc:"The earliest view of The LoL settlement at night. Wooden structures, sandy paths, and the ocean surrounding the young nation.",
  span:2 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-02-22_BY_Faiz4224_PROJEK_MENAMBAK_LAUT.png",
  title:"Projek Menambak Laut",
  rawDate:"2023-02-22", date:"FEB 22, 2023", by:"Faiz4224",
  desc:"Land reclamation begins. Faiz4224 expanding The LoL's territory into the ocean — dirt by dirt, block by block.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-02-24_BY_Faiz4224_FIRST_FUNICULAR_RAILWAY_TO_THE_LOL_HILL.png",
  title:"First Funicular Railway to The LoL Hill",
  rawDate:"2023-02-24", date:"FEB 24, 2023", by:"Faiz4224",
  desc:"The first funicular railway ever built in The LoL — a minecart track climbing up the hill. The nation's first infrastructure project.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-03-02_BY_Faiz4224_VILLAGER_BREEDING_FARM.png",
  title:"Villager Breeding Farm",
  rawDate:"2023-03-02", date:"MAR 2, 2023", by:"Faiz4224",
  desc:"The underground villager breeding farm. The LoL was already investing in long-term economic infrastructure just weeks after founding.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-03-03_BY_Faiz4224_HIGHEST_STRUCTURED_IN_THE_LOL_AND_SKYXION.png",
  title:"Top of TLCC — Height Limit",
  rawDate:"2023-03-03", date:"MAR 3, 2023", by:"Faiz4224",
  desc:"Standing at Y=320 — the absolute height limit of Minecraft. TLCC was the tallest structure in The LoL and in all of Skyxion.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-03-03_BY_Faiz4224_THE_LOL_CITY_VIEW_FROM_TLCC.png",
  title:"The LoL City View from TLCC",
  rawDate:"2023-03-03", date:"MAR 3, 2023", by:"Faiz4224",
  desc:"The entire The LoL City seen from the top of TLCC. Snow mountains to the left, the city and farms below. The proudest view in the nation.",
  span:2 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-03-07_BY_Faiz4224_PROGRAM_PENANAMAN_SEMULA_POKOK.png",
  title:"Program Penanaman Semula Pokok",
  rawDate:"2023-03-07", date:"MAR 7, 2023", by:"Faiz4224",
  desc:"The LoL's tree replanting programme — a national environmental initiative.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-14 (1).png",
  title:"Plot Sign — Rumah Orang Paling Handsome",
  rawDate:"2023-04-14", date:"APR 14, 2023", by:"Faiz4224",
  desc:"A sign reads: 'Rumah orang paling handsome ★★★'. An empty plot in The LoL city, waiting to be developed. Classic The LoL energy.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-14 (2).png",
  title:"Early Resident — April 2023",
  rawDate:"2023-04-14", date:"APR 14, 2023", by:"Faiz4224",
  desc:"A player standing in the open land of The LoL, a nether portal behind them. The city was growing and new faces were arriving.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-14 (3).png",
  title:"The LoL Territory Map",
  rawDate:"2023-04-14", date:"APR 14, 2023", by:"Faiz4224",
  desc:"A Minecraft map displayed on a stone wall, showing the full extent of The LoL's territory — land, ocean, snow biome and all.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-15 (6).png",
  title:"View from Inside TLCC Elevator",
  rawDate:"2023-04-15", date:"APR 15, 2023", by:"Faiz4224",
  desc:"Looking down through the glass elevator shaft of TLCC. The city stretches below in the night sky. The mountain glows in the background.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-15_BY_Faiz4224_FIRST_ELEVATOR_INSIDE_TLCC_IN_THE_LOL.png",
  title:"First Elevator Inside TLCC",
  rawDate:"2023-04-15", date:"APR 15, 2023", by:"Faiz4224",
  desc:"The first elevator ever built inside TLCC — sign reads 'LIFT TINGKAT / FLOOR 2'. A major engineering milestone for The LoL.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-19 (4).png",
  title:"The LoL City Main Road",
  rawDate:"2023-04-19", date:"APR 19, 2023", by:"Faiz4224",
  desc:"Walking down the main road of The LoL City. TLCC towers overhead, bamboo farms line the sides, and the THE LOL globe structure is visible to the right.",
  span:2 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-20_BY_Faiz4224_FIRST_IRON_FARM_BY_IKAN.png",
  title:"First Iron Farm — Built by Ikan",
  rawDate:"2023-04-20", date:"APR 20, 2023", by:"Faiz4224",
  desc:"The first iron farm in The LoL, built by Ikan. Aerial view of the water platform surrounded by bamboo and crops.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-22 (1).png",
  title:"Faiz4224 — Surveying The LoL",
  rawDate:"2023-04-22", date:"APR 22, 2023", by:"Faiz4224",
  desc:"Faiz4224 standing on a pillar high above a massive flattened development area. 11 days, 16 hours of server playtime logged.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-29 (2).png",
  title:"TLCC Tower 2 — Groundbreaking",
  rawDate:"2023-04-29", date:"APR 29, 2023", by:"Faiz4224",
  desc:"Sign reads: 'TAPAK PROJEK PEMBINAAN MENARA 2 TLCC'. Imii Kun just joined the server. The second TLCC tower groundbreaking begins.",
  span:1 },
{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-29 (4).png",
  title:"TLCC — Street Level View",
  rawDate:"2023-04-29", date:"APR 29, 2023", by:"Faiz4224",
  desc:"Looking straight up at TLCC from the main road. Bamboo lines both sides, THE LOL globe structure visible to the right. The city at its most cinematic.",
  span:2 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-04-29_BY_Faiz4224_FIRST_EXPRESSWAY_AND_TUNNEL.png",
  title:"First Expressway & Tunnel — Groundbreaking",
  rawDate:"2023-04-29", date:"APR 29, 2023", by:"Faiz4224",
  desc:"Signs read: 'KAWASAN LETUPAN', 'DIJANGKA SIAP AKHIR TAHUN 2023', 'PROJEK PEMBINAAN TEROWONG THE LOL – OUTPOST'. The first expressway tunnel connecting The LoL to its Outpost — announced, not yet built.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-05-01 (2).png",
  title:"The LoL City — May Day",
  rawDate:"2023-05-01", date:"MAY 1, 2023", by:"Faiz4224",
  desc:"Standing beside the main road with TLCC soaring overhead and THE LOL globe in the background. The city was near its peak of development. A sign reads 'Faiz4224 & Imii Kun, 21/02/2023' — the founding date.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-05-01 (3).png",
  title:"TLCC Tower 2 — Under Construction",
  rawDate:"2023-05-01", date:"MAY 1, 2023", by:"Faiz4224",
  desc:"Looking up at TLCC Tower 2 rising alongside Tower 1. The golden scaffolding frames the structure. 10 days, 16 hours of playtime on the server clock.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/2023-05-12 (5).png",
  title:"The LoL City — Aerial from TLCC",
  rawDate:"2023-05-12", date:"MAY 12, 2023", by:"Faiz4224",
  desc:"Aerial view looking down from TLCC alongside the golden scaffolding. Cherry blossom trees, a pond, the main road and the mountain in the background. The most beautiful view of The LoL City.",
  span:2 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/byFAIZ_THE_LOL_MAP_INGAME.png",
  title:"The LoL — In-Game Territory Map",
  rawDate:"2023-05-12", date:"MAY 12, 2023", by:"Faiz4224",
  desc:"The expanded in-game map of The LoL's territory displayed on a stone wall — showing the full reach of the nation including cherry blossom zones and the river to the south.",
  span:1 },

{ era:2, src:"/thelol/gallery/assets/[3]_FIRST_THE_LOL/THE_LOL_MAP.png",
  title:"The LoL — Official Seed Map (ChunkBase)",
  rawDate:"2023-05-12", date:"2023", by:"Faiz4224",
  desc:"The official ChunkBase map of The LoL's world — Seed 1371621129, Bedrock 1.19. Marked locations: The LoL City, The LoL Highlands, The LoL Hi-Tech, The LoL 2, Outpost, Flutopia, and Bandar The LoL. The full extent of the nation's sovereign territory.",
  span:2 },
// ── ERA 5: RESTORATION — NEW SERVER, TLSRL & TERMINAL ─────────────

{ era:5, src:"assets/2023-12-09.png",
  title:"TL$ Exchange Rate Board",
  rawDate:"2023-12-09", date:"DEC 9, 2023", by:"Faiz4224",
  desc:"The official TL Dollar noticeboard: 1 TL$ = 10 Emerald = 32 Iron Block = 5 Gold Ingot. Rooms also listed for sale. The LoL's economy was already formalised on the new server.",
  span:1 },

{ era:5, src:"assets/2024-01-06-2.png",
  title:"Under the Railway Viaduct",
  rawDate:"2024-01-06", date:"JAN 6, 2024", by:"Faiz4224",
  desc:"Standing beneath an early TLSRL viaduct bridge crossing a river valley. The railway was already reaching across the landscape.",
  span:1 },

{ era:5, src:"assets/2024-01-13-1.png",
  title:"TLSRL — Riding the Line",
  rawDate:"2024-01-13", date:"JAN 13, 2024", by:"Faiz4224",
  desc:"Riding the TLSRL through an autumn forest valley. The fenced trackbed stretches into the distance alongside the road, with a floating island lake in the background.",
  span:2 },

{ era:5, src:"assets/2024-01-24.png",
  title:"The LoL Railway Station — Platform at Night",
  rawDate:"2024-01-24", date:"JAN 24, 2024", by:"Faiz4224",
  desc:"The LoL Railway Station platform lit up at night — lanterns, wooden beams, signage, and cherry blossom trees visible beyond the tracks. The first proper railway station in The LoL.",
  span:2 },

{ era:5, src:"assets/2024-01-27-1.png",
  title:"TLSRL — Track Laying in the Rain",
  rawDate:"2024-01-27", date:"JAN 27, 2024", by:"Faiz4224",
  desc:"Laying TLSRL track in the pouring rain at Block 3058, 65, 399. The railway was being extended block by block across open plains — this is how 4,800+ blocks gets built.",
  span:1 },

{ era:5, src:"assets/2024-01-30.png",
  title:"Night Patrol — Zombies on the Fence",
  rawDate:"2024-01-30", date:"JAN 30, 2024", by:"Faiz4224",
  desc:"A line of zombies crowding the fence at night near the TLSRL corridor. Block 3551, 66, 682 — far from the city core. Building a national railway comes with hazards.",
  span:1 },

{ era:5, src:"assets/2024-02-01.png",
  title:"Surveying New Territory",
  rawDate:"2024-02-01", date:"FEB 1, 2024", by:"Faiz4224",
  desc:"Faiz4224 on a stone path climbing a hill at Block 661, 76, 0. Scouting and surveying land for the expanding TLSRL route and new LoL districts.",
  span:1 },

{ era:5, src:"assets/2024-02-03-1.png",
  title:"Sunset Over the Jungle — TLSRL Route",
  rawDate:"2024-02-03", date:"FEB 3, 2024", by:"Faiz4224",
  desc:"Standing on a lamp post above a dense jungle canopy as the sun sets. Respawn point set. Block 1488, 92, 1 — deep in the TLSRL expansion corridor.",
  span:1 },

{ era:5, src:"assets/2024-02-04-1.png",
  title:"TLSRL — Jungle Viaduct Construction",
  rawDate:"2024-02-04", date:"FEB 4, 2024", by:"Faiz4224",
  desc:"On the stone viaduct deck crossing a jungle gorge at Block 1654, 93, 0. The TLSRL was being carved through dense terrain to connect The LoL's districts.",
  span:1 },

{ era:5, src:"assets/2024-02-04.png",
  title:"New Settlement — Lamp Post District",
  rawDate:"2024-02-04", date:"FEB 4, 2024", by:"Faiz4224",
  desc:"Open grassland at Block 2078, 66, 16 with stone lamp posts planted — a new district being marked out. A pig wanders nearby. The LoL was expanding its footprint.",
  span:1 },

{ era:5, src:"assets/2024-02-18.png",
  title:"TLSRL — Elevated Station at Block 4929",
  rawDate:"2024-02-18", date:"FEB 18, 2024", by:"Faiz4224",
  desc:"On an elevated railway platform at Y=124, Block 4929, 742 — cherry blossom above, brick buildings below, track running through. The TLSRL was reaching remarkable heights.",
  span:2 },

{ era:5, src:"assets/2024-02-23-1.png",
  title:"TLSRL — Grand Plaza & White Pillars",
  rawDate:"2024-02-23", date:"FEB 23, 2024", by:"Faiz4224",
  desc:"A vast stone plaza with white pillars and a single rail track running through. Block 503, 72, -7 — early construction of what would become the Terminal Bersepadu Spawn precinct.",
  span:1 },

{ era:5, src:"assets/2024-02-27-6.png",
  title:"TLSRL — Three-Way Junction & Station Arch",
  rawDate:"2024-02-27", date:"FEB 27, 2024", by:"Faiz4224",
  desc:"Standing at a three-way rail junction facing a station building with a grand arch entrance, lanterns and wooden detailing. Block 533, 71, 2 — the network was becoming a real system.",
  span:1 },

{ era:5, src:"assets/2024-03-06-1.png",
  title:"Pig on the TLSRL — Only in The LoL",
  rawDate:"2024-03-06", date:"MAR 6, 2024", by:"Faiz4224",
  desc:"A pig standing on the TLSRL track at night with lantern lamp posts lining the route. Bow Faiz4224 in the action bar. An iconic and very LoL moment.",
  span:1 },

{ era:5, src:"assets/2024-03-06-2.png",
  title:"TLSRL Corridor — Track & Farms",
  rawDate:"2024-03-06", date:"MAR 6, 2024", by:"Faiz4224",
  desc:"Along the TLSRL fenced corridor at Block 3034, 63, 385. Track, farmland and countryside — the railway passing through the agricultural heart of The LoL.",
  span:1 },

{ era:5, src:"assets/2024-04-05.png",
  title:"Terminal Bersepadu Spawn — Grand Hall",
  rawDate:"2024-04-05", date:"APR 5, 2024", by:"Faiz4224",
  desc:"The grand hall of Terminal Bersepadu Spawn (Spawn Integrated Terminal) — the centrepiece of TLSRL. Directional signs point to MRT Station, Platform 1&2, HSB Platform, Platform 3, Food Court, Hall, E-Chest, and Info. Artwork lines the walls.",
  span:2 },

{ era:5, src:"assets/2024-04-05-1.png",
  title:"Terminal Bersepadu Spawn — Hall View 2",
  rawDate:"2024-04-05", date:"APR 5, 2024", by:"Faiz4224",
  desc:"Second angle of the Terminal's grand hall. High ceilings, sandstone beams, honeycomb lanterns, and player portraits on the walls. The most ambitious interior build in The LoL.",
  span:1 },

{ era:5, src:"assets/2024-04-05-2.png",
  title:"Terminal — Platform 3 Arrivals",
  rawDate:"2024-04-05", date:"APR 5, 2024", by:"Faiz4224",
  desc:"Platform 3 arrivals side of Terminal Bersepadu Spawn — signs read 'PLATFORM 3 KETIBAAN ARRIVALS'. Glass shopfronts, portrait artwork, and directional signs to HSB Platform and Food Court.",
  span:1 },

{ era:5, src:"assets/2024-04-05-3.png",
  title:"Terminal — Lower Ground Floor (Level G)",
  rawDate:"2024-04-05", date:"APR 5, 2024", by:"Faiz4224",
  desc:"Level G (Ground/Lower Ground) of Terminal Bersepadu Spawn — glass shopfronts, player portrait displays, yellow platform edge markings, and retail signage. A full multi-level terminal.",
  span:1 },

{ era:5, src:"assets/2024-04-05-4.png",
  title:"Terminal — Information Counter",
  rawDate:"2024-04-05", date:"APR 5, 2024", by:"Faiz4224",
  desc:"The Information Counter of Terminal Bersepadu Spawn — a Creeper painting hangs above, signs read 'INFORMATION' and 'COUNTER'. The terminal had full passenger amenities, connecting MRT and HSB routes.",
  span:1 },
// ── ERA 7: FINAL ACTIVE ERA — JUNE 2024 ──────────────────────────

{ era:7, src:"assets/2024-06-14-4.png",
  title:"Cave Encounter — June 2024",
  rawDate:"2024-06-14", date:"JUNE 14, 2024", by:"Faiz4224",
  desc:"A zombie villager deep in a cave. Late-server resource hunting as The LoL continued operating in its final active months.",
  span:1 },

{ era:7, src:"assets/2024-06-15.png",
  title:"LonelyDynozz — Open Field",
  rawDate:"2024-06-15", date:"JUNE 15, 2024", by:"Faiz4224",
  desc:"LonelyDynozz spotted in a field — Dyno's new username in this server era. Two founders, still playing together.",
  span:1 },

{ era:7, src:"assets/2024-06-15-1.png",
  title:"Land Clearing — Water & Wood",
  rawDate:"2024-06-15", date:"JUNE 15, 2024", by:"Faiz4224",
  desc:"Clearing trees with a water bucket near a stone structure. Even in the final months, The LoL was still building and expanding.",
  span:1 },

{ era:7, src:"assets/2024-06-15-4.png",
  title:"LonelyDynozz & ikanuwu — In the Field",
  rawDate:"2024-06-15", date:"JUNE 15, 2024", by:"Faiz4224",
  desc:"LonelyDynozz and ikanuwu (Ikan) both online. Chat: 'ikanuwu whispers to you: -2007 64 303 normal'. Coordinates being shared between The LoL members.",
  span:1 },

{ era:7, src:"assets/2024-06-15-5.png",
  title:"Ancient City — Deep Underground",
  rawDate:"2024-06-15", date:"JUNE 15, 2024", by:"Faiz4224",
  desc:"Standing in a sculk-laden Ancient City deep underground with lava above. The dark atmosphere of deep cave exploration in The LoL's final era.",
  span:1 },

{ era:7, src:"assets/2024-06-16.png",
  title:"New Member Joins — lmoon ft twelve",
  rawDate:"2024-06-16", date:"JUNE 16, 2024", by:"Faiz4224",
  desc:"'lmoon ft twelve joined the Realm' — a new player arrives as The LoL continues receiving visitors. Faiz4224 standing at the riverside with the railway viaduct behind.",
  span:1 },

{ era:7, src:"assets/2024-06-20-3.png",
  title:"The Fishing Spot — Coral Cave",
  rawDate:"2024-06-20", date:"JUNE 20, 2024", by:"Faiz4224",
  desc:"Chat: 'dtang tempat mancing' (heading to fishing spot). A hidden underground coral and kelp cavern used as a fishing area. Only in The LoL.",
  span:1 },

{ era:7, src:"assets/2024-06-20.png",
  title:"\"bye thelol\" — The Last Flight",
  rawDate:"2024-06-20", date:"JUNE 20, 2024", by:"Faiz4224",
  desc:"Chat reads: 'bye thelol'. Faiz4224 flying above The LoL's cherry blossom hills on a strider over lava, looking down at the land. One of the most poignant screenshots in the archive.",
  span:2 },

{ era:7, src:"assets/2024-06-22-1.png",
  title:"Diamond Sword Faiz4224 — Cave Clearing",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"The legendary 'Diamond Sword Faiz4224' — Fire Aspect II, Unbreaking III, Sharpness IV, Looting III, Knockback II, Mending I. Day 908 of server playtime. Creepers in a cave.",
  span:1 },

{ era:7, src:"assets/2024-06-22-2.png",
  title:"Survey Flight — Day 913",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"Faiz4224 flying above the landscape holding a map. Chat: 'syazieyvki: termasuk center'. Day 913. Surveying The LoL's territory from above.",
  span:1 },

{ era:7, src:"assets/2024-06-22-3.png",
  title:"Stronghold — Ready?",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"In the stronghold with LonelyDynozz. Chat: 'LonelyDynozz: ready? / Faiz4224: yea / LonelyDynozz: 3'. Day 935. The countdown before facing the Ender Dragon together.",
  span:1 },

{ era:7, src:"assets/2024-06-22-4.png",
  title:"Ender Dragon Fight — Day 936",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"The Ender Dragon's health bar at the top. Chat: 'LonelyDynozz: minions / LonelyDynozz: tonight we steal za moon / Faiz4224: hancurkan end crystal'. Day 936. The founding duo, still taking on dragons together.",
  span:2 },

{ era:7, src:"assets/2024-06-22-5.png",
  title:"The End Poem — Faiz4224?",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"Minecraft's title screen shows: 'I see the player you mean. Faiz4224?' The game itself acknowledging The LoL's First President after defeating the Ender Dragon.",
  span:1 },

{ era:7, src:"assets/2024-06-22-6.png",
  title:"The End Poem — Full Text",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"The End Poem continues: 'Yes. Take care. It has reached a higher level now. It can read our thoughts... I like this player. It played well. It did not give up.' Written for Faiz4224.",
  span:1 },

{ era:7, src:"assets/2024-06-22-7.png",
  title:"End City — Diamond Sword Faiz4224",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"Inside an End City chest room, the 'Diamond Sword Faiz4224' displayed with full enchantments. Day 958. The sword that carried The LoL through its final months.",
  span:1 },

{ era:7, src:"assets/2024-06-22-8.png",
  title:"End City — Elytra Flying",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"Flying between End City islands using an Elytra with Mana system active. Day 958. End dimension exploration after defeating the dragon.",
  span:1 },

{ era:7, src:"assets/2024-06-22-9.png",
  title:"Selling Stronghold Coordinates",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"Chat: 'coor stronghold dijual dengan 50 dm'. Faiz4224 selling stronghold coordinates for 50 diamonds — underwater at XYZ 8558, 47, 4354. Day 960. The LoL economy still active in the final weeks.",
  span:1 },

{ era:7, src:"assets/2024-06-22.png",
  title:"Ocean Floor Exploration",
  rawDate:"2024-06-22", date:"JUNE 22, 2024", by:"Faiz4224",
  desc:"Exploring the ocean floor — seagrass, fish, and a red tropical fish. A quiet underwater moment in the server's final active weeks.",
  span:1 },

{ era:7, src:"assets/2024-06-23-1.png",
  title:"New District Survey — Day 1023",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"Standing on a stone pillar at XYZ 5601, 78, 5306. Day 1023. Surveying a new valley far from the city — still planning and building even in the server's final months.",
  span:1 },

{ era:7, src:"assets/2024-06-23-2.png",
  title:"Enchanting Setup — Day 1040",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"Enchanting table setup surrounded by bookshelves at XYZ 5955, 69, 5328. Day 1040 of server playtime. Deep in the final era — still preparing, still going.",
  span:1 },
{ era:7, src:"assets/2024-06-23.png",
  title:"Spawner Found — Day 1015",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"A mob spawner and chest discovered in a cave at XYZ 5164, 61, 5173. Day 1015. Resource hunting in the final months.",
  span:1 },

{ era:7, src:"assets/2024-06-23-3.png",
  title:"Terminal — Pedang Faiz4224",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"Inside Terminal Bersepadu Spawn wielding the 'Pedang Faiz4224' — Sharpness V, Unbreaking III, Looting III, Fire Aspect II, Mending I. The netherite upgrade of the legendary sword.",
  span:1 },

{ era:7, src:"assets/2024-06-23-4.png",
  title:"Bad Omen — Dark Corridor",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"Chat: 'LonelyDynozz: dgn bad omen'. Standing in a pitch-black corridor — a raid is about to begin. Faiz4224 and Dyno coordinating an intentional village raid.",
  span:1 },

{ era:7, src:"assets/2024-06-23-5.png",
  title:"Raid — Dark Encounter",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"A raid illager mob visible in the darkness of the corridor. Low health, high tension. The bad omen raid was in full effect.",
  span:1 },

{ era:7, src:"assets/2024-06-23-6.png",
  title:"Horror Survival Event — Random Effects",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"[Horror Survival] You have gained some random effects! — repeated in the chat. LonelyDynozz: 'bottle o enchanting ada x'. XP bottles flying everywhere inside the terminal. Chaotic server event.",
  span:1 },

{ era:7, src:"assets/2024-06-23-7.png",
  title:"Horror Survival — Tinted Screen",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"The screen tinted red and distorted from Horror Survival random effects. Still barely alive with 2 hearts. The most chaotic server event in the final era.",
  span:1 },

{ era:7, src:"assets/2024-06-23-8.png",
  title:"Horror Survival — \"Pergh Semua Effect\"",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"Chat: 'Faiz4224: pergh semua effect dpt' (wow got every effect). Monster Essence item in hand. The Horror Survival event was something else.",
  span:1 },

{ era:7, src:"assets/2024-06-23-9.png",
  title:"Bandar The LoL Has Moved",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"A noticeboard reads: 'BANDAR THE LOL DAH PINDAH KE (coords)'. Chat: 'Faiz4224: 29 februari'. Pedang Faiz4224 shown — Sharpness V. The LoL's capital district relocated in the final months.",
  span:2 },

{ era:7, src:"assets/2024-06-23-10.png",
  title:"New District — Night",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"A new settlement at night — glass-enclosed pool, purple amethyst structure wall, crimson mushroom tree looming above. XYZ 5103, 102, 569. Still building in the final weeks.",
  span:1 },

{ era:7, src:"assets/2024-06-23-11.png",
  title:"The Presidential Home Office",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"Inside a wooden house — a Minecraft in-game computer setup complete with keyboard, gaming PC, and RGB monitor. Day 1077. XYZ 5929, 71, 5389. Ocean view through the window.",
  span:1 },

{ era:7, src:"assets/2024-06-23-12.png",
  title:"In-Game Email — Netherite Trade",
  rawDate:"2024-06-23", date:"JUNE 23, 2024", by:"Faiz4224",
  desc:"A Minecraft mod computer shows an in-game email. Subject: Netherite. From: syazieyvki. 'aq ada 1 netherite.. utk 5 diamond' — the server had a functioning in-game email economy.",
  span:1 },

{ era:7, src:"assets/2024-06-26.png",
  title:"Day 1380 — LonelyDynozz: Kenapa?",
  rawDate:"2024-06-26", date:"JUNE 26, 2024", by:"Faiz4224",
  desc:"Flying over a deep gorge at XYZ 7628, 98, 4523 with a Totem of Undying in hand. Chat: 'LonelyDynozz: kenapa?' (why?). Day 1380 of total server days played.",
  span:1 },

{ era:7, src:"assets/2024-06-29.png",
  title:"Nether Fortress — Day 1495",
  rawDate:"2024-06-29", date:"JUNE 29, 2024", by:"Faiz4224",
  desc:"Inside a Nether Fortress corridor with a dead blaze below at XYZ 417, 50, 831. Day 1495. Hunting blaze rods in the Nether — The LoL still grinding resources deep into June 2024.",
  span:1 },

{ era:7, src:"assets/2024-06-29-1.png",
  title:"Upgrading Gear — Item Faiz",
  rawDate:"2024-06-29", date:"JUNE 29, 2024", by:"Faiz4224",
  desc:"The 'Upgrade Gear' smithing table UI open, upgrading armour. A sign in the background reads 'item faiz'. The custom gear system of the server at peak.",
  span:1 },

{ era:7, src:"assets/2024-06-29-2.png",
  title:"Netherite Boots Faiz4224 — Full Stats",
  rawDate:"2024-06-29", date:"JUNE 29, 2024", by:"Faiz4224",
  desc:"'Netherite Boots Faiz4224' — Spire Armor Trim, Redstone Material, Depth Strider III, Feather Falling IV, Protection IV, Thorns II, Soul Speed III, Unbreaking III, Mending I, +1 Knockback Resistance. The pinnacle of Faiz4224's gear.",
  span:1 },

{ era:7, src:"assets/2024-06-29-3.png",
  title:"Nether — Bed Bombing",
  rawDate:"2024-06-29", date:"JUNE 29, 2024", by:"Faiz4224",
  desc:"Explosion aftermath in a Nether cave — beds detonating to mine ancient debris at XYZ 648, 15, 639. Day 1518. White bed in hand, fire everywhere. The classic netherite hunting method.",
  span:1 },

{ era:7, src:"assets/2024-06-29-4.png",
  title:"New Biome — Day 1531",
  rawDate:"2024-06-29", date:"JUNE 29, 2024", by:"Faiz4224",
  desc:"Standing in a flower-filled meadow with tall dark oak trees and purple chorus-like structures at XYZ 5960, 70, 5295. Day 1531. Exploring new terrain in The LoL's final weeks.",
  span:1 },

{ era:7, src:"assets/2024-06-30.png",
  title:"New Build — Valley Pool",
  rawDate:"2024-06-30", date:"JUNE 30, 2024", by:"Faiz4224",
  desc:"Building beside a valley pool at XYZ 5909, 61, 5399. Day 1556. A nether portal and water bucket in hand — new construction even as the server's final days approached.",
  span:1 },

{ era:7, src:"assets/2024-07-01.png",
  title:"Sky Build — Purpur Platform",
  rawDate:"2024-07-01", date:"JULY 1, 2024", by:"Faiz4224",
  desc:"A purpur block sky platform with glass panes and a minecart/chest setup, high above the clouds. Day 1630. The highest builds in The LoL's history.",
  span:1 },

{ era:7, src:"assets/2024-07-06.png",
  title:"Trial Chamber — Gold Everywhere",
  rawDate:"2024-07-06", date:"JULY 6, 2024", by:"Faiz4224",
  desc:"The floor of a Trial Chamber completely carpeted in gold nuggets and items from vault rewards. Dozens of gold pieces scattered across the stone tile floor. The most loot from any single screenshot in the archive.",
  span:2 },
{ era:7, src:"/thelol/gallery/assets/[5]_THE_LOL_LATEST_2024/2024-07-12.png",
  title:"The Empty Room",
  rawDate:"2024-07-12", date:"JULY 12, 2024", by:"Faiz4224",
  desc:"An empty underground chamber — stone brick walls, wooden ceiling, a single torch in the centre. No coordinates. No day counter. Just silence. One of the most atmospheric screenshots in the entire archive.",
  span:2 },

{ era:7, src:"/thelol/gallery/assets/[5]_THE_LOL_LATEST_2024/2024-07-13.png",
  title:"New District Gate — Day 2446",
  rawDate:"2024-07-13", date:"JULY 13, 2024", by:"Faiz4224",
  desc:"Faiz4224 at a stone gate structure at XYZ 5839, 81, 5407 — night, moonlight, ocean visible in the distance. Day 2446 of total server days played. Still building, still expanding.",
  span:1 },

{ era:7, src:"/thelol/gallery/assets/[5]_THE_LOL_LATEST_2024/2024-07-14.png",
  title:"TobeyMaguire900 — Day 2493",
  rawDate:"2024-07-14", date:"JULY 14, 2024", by:"Faiz4224",
  desc:"TobeyMaguire900 spotted near the bamboo district at XYZ 5945, 71, 5387. Day 2493. New players were still arriving in The LoL's final weeks.",
  span:1 },

{ era:7, src:"/thelol/gallery/assets/[5]_THE_LOL_LATEST_2024/2024-07-14__1_.png",
  title:"On the Tower — Day 2504",
  rawDate:"2024-07-14", date:"JULY 14, 2024", by:"Faiz4224",
  desc:"Standing atop a deep slate tower at Y=115 under the full moon. XYZ 5871, 115, 5391. Day 2504. The entire new district visible below — bamboo farms, lakes, cherry blossoms. The last great aerial view of The LoL.",
  span:2 },

{ era:7, src:"/thelol/gallery/assets/[5]_THE_LOL_LATEST_2024/2024-07-14__2_.png",
  title:"Custom Mobs — Day 2507",
  rawDate:"2024-07-14", date:"JULY 14, 2024", by:"Faiz4224",
  desc:"A cluster of custom red mushroom creatures with heart particles deep underground at XYZ 5934, -59, 5171. Day 2507. The server's custom mob system still producing surprises right to the end.",
  span:1 },

{ era:7, src:"/thelol/gallery/assets/[5]_THE_LOL_LATEST_2024/2024-08-24.png",
  title:"The Last Day — Aug 24, 2024",
  rawDate:"2024-08-24", date:"AUG 24, 2024", by:"Faiz4224",
  desc:"Day 2729. A custom wyvern dragon soars through a clear blue sky above the district at XYZ 5842, 81, 5410. The last screenshot ever taken on this server. The end of an era that began in 2020 — from Neverland, to The Sus, to The Legend of Legiona. The LoL stands strong.",
  span:2 },
];

const ERA_CONFIG = [
    { era:0, label:"Pre-Era",          tag:"BEFORE THE SUS",      date:"2020 – EARLY 2022"    },
    { era:1, label:"The Sus",          tag:"ORIGIN ERA",           date:"2022 – EARLY 2023"    },
    { era:2, label:"Golden Era",       tag:"RENAMING & EXPANSION", date:"2023"                 },
    { era:3, label:"First Election",   tag:"DEMOCRATIC MILESTONE", date:"MAY 6, 2023"          },
    { era:4, label:"Chaos Era",        tag:"CONFLICT & CRISIS",    date:"2023"                 },
    { era:5, label:"Restoration",      tag:"FAIZ4224 RETURNS",     date:"LATE 2023"            },
    { era:6, label:"Rebuilding",       tag:"RECOVERY & ISC",       date:"LATE 2023 – MID 2024" },
    { era:7, label:"Final Active Era", tag:"LAST SERVER PERIOD",   date:"2024 — TO AUG 24"     },
];

GALLERY_DATA.sort((a,b) => (a.rawDate||'').localeCompare(b.rawDate||''));

let activeEra='all', activeBy='all', searchTerm='';
let lbPool=[], lbIdx=0;

// Counts
ERA_CONFIG.forEach(ec => {
    const c = GALLERY_DATA.filter(p=>p.era===ec.era).length;
    const el = document.getElementById('cnt-'+ec.era);
    if(el) el.textContent = c ? `(${c})` : '';
});
document.getElementById('cnt-all').textContent = `(${GALLERY_DATA.length})`;
document.getElementById('totalCount').textContent = GALLERY_DATA.length;

// Build contributor buttons dynamically
(function(){
    const names = [...new Set(GALLERY_DATA.map(p=>p.by).filter(Boolean))].sort();
    const row = document.getElementById('byFilterRow');
    names.forEach(name => {
        const btn = document.createElement('button');
        btn.className='filt'; btn.dataset.by=name;
        const c = GALLERY_DATA.filter(p=>p.by===name).length;
        btn.innerHTML = `${name.toUpperCase()} <span class="fc">(${c})</span>`;
        row.appendChild(btn);
    });
    row.querySelectorAll('.filt').forEach(btn => btn.addEventListener('click', ()=>{
        row.querySelectorAll('.filt').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active'); activeBy=btn.dataset.by; renderGallery();
    }));
})();

function getFiltered(){
    return GALLERY_DATA.filter(p=>{
        const eOk = activeEra==='all' || p.era===parseInt(activeEra);
        const bOk = activeBy==='all'  || p.by===activeBy;
        const q   = searchTerm.toLowerCase();
        const sOk = !q || [p.title,p.desc,p.date,p.by].some(s=>s&&s.toLowerCase().includes(q));
        return eOk && bOk && sOk;
    });
}

function renderGallery(){
    const wrap = document.getElementById('galleryWrap');
    wrap.innerHTML = '';
    const filtered = getFiltered();
    document.getElementById('visibleCount').textContent = filtered.length;
    document.getElementById('noResults').classList.toggle('show', filtered.length===0);
    const erasToShow = activeEra==='all' ? ERA_CONFIG.map(e=>e.era) : [parseInt(activeEra)];

    erasToShow.forEach(eIdx => {
        const ec = ERA_CONFIG[eIdx];
        const photos = filtered.filter(p=>p.era===eIdx);
        if(photos.length===0 && activeEra!=='all') return;

        const section = document.createElement('div');
        section.className='era-section reveal'; section.dataset.era=eIdx;
        section.innerHTML = `
            <div class="era-header">
                <div class="era-num">${String(eIdx).padStart(2,'0')}</div>
                <div class="era-meta">
                    <div class="era-tag">${ec.tag}</div>
                    <div class="era-title">${ec.label}</div>
                    <div class="era-date">${ec.date}</div>
                </div>
                <div class="era-photo-count">${photos.length} PHOTOS</div>
            </div>
            <div class="photo-grid"></div>`;

        const grid = section.querySelector('.photo-grid');
        if(photos.length===0){
            grid.innerHTML='<div class="era-empty"><div class="eei">📷</div><p>NO PHOTOS YET — UNCOMMENT ENTRIES IN GALLERY_DATA</p></div>';
        } else {
            photos.forEach(photo => {
                const card = document.createElement('div');
                card.className='photo-card'+(photo.span===2?' span-2':'');
                card.dataset.gidx = GALLERY_DATA.indexOf(photo);
                const safeTitle = (photo.src||'').split('/').pop();
                card.innerHTML = `
                    <img src="${photo.src}" alt="${photo.title||''}" loading="lazy"
                        onerror="this.closest('.photo-card').classList.add('ph-card');this.remove();this.closest('.photo-card').innerHTML='<div class=phi>🖼</div><span>NOT FOUND<br><small style=opacity:.5>${safeTitle}</small></span>';">
                    <div class="card-ov">
                        <div class="ov-title">${photo.title||''}</div>
                        <div class="ov-meta">${photo.date||''}${photo.by?' · '+photo.by:''}</div>
                    </div>
                    ${photo.by?`<div class="card-by">${photo.by}</div>`:''}
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                            <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
                        </svg>
                    </div>`;
                card.addEventListener('click', ()=>openLightbox(parseInt(card.dataset.gidx)));
                grid.appendChild(card);
            });
        }
        wrap.appendChild(section);
    });

    wrap.querySelectorAll('.era-section').forEach((s,i)=>{ if(i>0) s.style.marginTop='4rem'; });

    const ro = new IntersectionObserver(entries=>{
        entries.forEach((e,i)=>{ if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),i*55);ro.unobserve(e.target);} });
    },{threshold:0.04});
    wrap.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
    lbPool = filtered;
}

// Era filter
document.querySelectorAll('#eraFilterRow .filt').forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelectorAll('#eraFilterRow .filt').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active'); activeEra=btn.dataset.era; renderGallery();
        window.scrollTo({top:document.getElementById('filterBar').offsetTop-10,behavior:'smooth'});
    });
});

// Search
const si=document.getElementById('searchInput'), sc=document.getElementById('searchClear');
let st;
si.addEventListener('input',()=>{
    searchTerm=si.value.trim(); sc.classList.toggle('visible',searchTerm.length>0);
    clearTimeout(st); st=setTimeout(renderGallery,220);
});
sc.addEventListener('click',()=>{ si.value=''; searchTerm=''; sc.classList.remove('visible'); renderGallery(); });

// Lightbox
function openLightbox(gidx){
    const photo=GALLERY_DATA[gidx];
    lbIdx=lbPool.indexOf(photo);
    if(lbIdx<0){lbPool=[...GALLERY_DATA];lbIdx=gidx;}
    showPhoto();
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow='hidden';
}
function showPhoto(){
    const p=lbPool[lbIdx]; if(!p) return;
    const ec=ERA_CONFIG[p.era];
    const img=document.getElementById('lbImg');
    img.classList.add('fading');
    setTimeout(()=>{ img.src=p.src; img.alt=p.title||''; img.onload=img.onerror=()=>img.classList.remove('fading'); },180);
    document.getElementById('lbEraTag').textContent = ec?ec.tag:'';
    document.getElementById('lbTitle').textContent  = p.title||'';
    document.getElementById('lbDate').textContent   = p.date||'';
    document.getElementById('lbDesc').textContent   = p.desc||'';
    document.getElementById('lbBy').textContent     = p.by?'PHOTO BY '+p.by.toUpperCase():'';
    document.getElementById('lbCounter').textContent= `${lbIdx+1} / ${lbPool.length}`;
    document.getElementById('lbChapter').textContent= ec?ec.label.toUpperCase():'';
    document.getElementById('lbPrev').disabled = lbIdx===0;
    document.getElementById('lbNext').disabled = lbIdx===lbPool.length-1;
}
function closeLB(){ document.getElementById('lightbox').classList.remove('open'); document.body.style.overflow=''; }
document.getElementById('lbClose').addEventListener('click',closeLB);
document.getElementById('lightbox').addEventListener('click',e=>{ if(e.target===document.getElementById('lightbox')) closeLB(); });
document.getElementById('lbPrev').addEventListener('click',()=>{ if(lbIdx>0){lbIdx--;showPhoto();} });
document.getElementById('lbNext').addEventListener('click',()=>{ if(lbIdx<lbPool.length-1){lbIdx++;showPhoto();} });
document.addEventListener('keydown',e=>{
    const lb=document.getElementById('lightbox');
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') closeLB();
    if(e.key==='ArrowLeft'&&lbIdx>0){lbIdx--;showPhoto();}
    if(e.key==='ArrowRight'&&lbIdx<lbPool.length-1){lbIdx++;showPhoto();}
});
let lbTx=0;
document.getElementById('lightbox').addEventListener('touchstart',e=>{lbTx=e.touches[0].clientX;},{passive:true});
document.getElementById('lightbox').addEventListener('touchend',e=>{
    const d=lbTx-e.changedTouches[0].clientX;
    if(Math.abs(d)>48){if(d>0&&lbIdx<lbPool.length-1){lbIdx++;showPhoto();}if(d<0&&lbIdx>0){lbIdx--;showPhoto();}}
},{passive:true});

// Nav/scroll
const nav=document.getElementById('sitenav'), nb=document.getElementById('netbar'), fb=document.getElementById('filterBar'), pb=document.getElementById('scroll-progress');
window.addEventListener('scroll',()=>{
    const y=window.scrollY, dH=document.documentElement.scrollHeight-window.innerHeight;
    pb.style.transform=`scaleX(${dH>0?y/dH:0})`;
    nav.classList.toggle('scrolled',y>60);
    const hide=y>32; nb.classList.toggle('hidden',hide); nav.classList.toggle('nb-hidden',hide); fb.classList.toggle('nb-hidden',hide);
},{passive:true});

const hb=document.getElementById('hamburger'), mm=document.getElementById('mobileMenu');
hb.addEventListener('click',()=>{ const o=mm.classList.toggle('open'); hb.classList.toggle('open',o); hb.setAttribute('aria-expanded',o); });
function closeMobile(){ mm.classList.remove('open'); hb.classList.remove('open'); hb.setAttribute('aria-expanded','false'); }
document.addEventListener('click',e=>{ if(!hb.contains(e.target)&&!mm.contains(e.target)) closeMobile(); });

// Cursor
if(window.matchMedia('(hover:hover)and(pointer:fine)').matches){
    const dot=document.getElementById('cur-dot'), ring=document.getElementById('cur-ring');
    let mx=-100,my=-100,rx=-100,ry=-100;
    document.addEventListener('mousemove',e=>{ mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';dot.style.opacity='1';ring.style.opacity='0.8'; });
    (function ar(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(ar);})();
    const IE='a,button,.photo-card,input,[role=button]';
    document.addEventListener('mouseover',e=>{ if(e.target.closest(IE)){dot.classList.add('active');ring.classList.add('active');} });
    document.addEventListener('mouseout', e=>{ if(e.target.closest(IE)){dot.classList.remove('active');ring.classList.remove('active');} });
    document.addEventListener('mouseleave',()=>{ dot.style.opacity='0';ring.style.opacity='0'; });
    document.addEventListener('mouseenter',()=>{ dot.style.opacity='1';ring.style.opacity='0.8'; });
}

renderGallery();
