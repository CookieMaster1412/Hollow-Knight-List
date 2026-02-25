const items = [
  {
    name: "Broken Vessel",
    location: "Ancient Basin",
    category: "Bosses",
    requirements: "None",
    image: "images/BrokenVessel.webp",
    mapImage: "images/BrokenVesselMap.webp"
  },
  {
    name: "Brooding Mawlek",
    location: "Forgotten Crossroads",
    category: "Bosses",
    requirements: "None",
    image: "images/BroodingMawlek.webp",
    mapImage: "images/BroodingMawlekMap.webp"
  },
  {
    name: "The Collector",
    location: "City of Tears",
    category: "Bosses",
    requirements: "Love Key",
    image: "images/TheCollector.webp",
    mapImage: "images/TheCollectorMap.webp"
  },
  {
    name: "Dung Defender",
    location: "Royal Waterways",
    category: "Bosses",
    requirements: "None",
    image: "images/DungDefender.webp",
    mapImage: "images/DungDefenderMap.webp"
  },
  {
    name: "False Knight",
    location: "Forgotten Crossroads",
    category: "Bosses",
    requirements: "None",
    image: "images/FalseKnight.webp",
    mapImage: "images/FalseKnightMap.webp"
  },
  {
    name: "Grimm",
    location: "Dirtmouth",
    category: "Bosses",
    requirements: "Grimm Troupe Quest",
    image: "images/Grimm.webp",
    mapImage: "images/GrimmMap.webp"
  },
  {
    name: "Gruz Mother",
    location: "Forgotten Crossroads",
    category: "Bosses",
    requirements: "None",
    image: "images/GruzMother.webp",
    mapImage: "images/GruzMotherMap.webp"
  },
  {
    name: "Hive Knight",
    location: "The Hive",
    category: "Bosses",
    requirements: "None",
    image: "images/HiveKnight.webp",
    mapImage: "images/HiveKnightMap.webp"
  },
  {
    name: "Hornet Protector",
    location: "Greenpath",
    category: "Bosses",
    requirements: "None",
    image: "images/HornetProtector.webp",
    mapImage: "images/HornetProtectorMap.webp"
  },
  {
    name: "Hornet Sentinel",
    location: "Kingdoms Edge",
    category: "Bosses",
    requirements: "None",
    image: "images/HornetProtector.webp",
    mapImage: "images/HornetSentinelMap.webp"
  },
  {
    name: "Mantis Lords",
    location: "Fungal Wastes",
    category: "Bosses",
    requirements: "None",
    image: "images/MantisLords.webp",
    mapImage: "images/MantisLordsMap.webp"
  },
  {
    name: "Nosk",
    location: "Deepnest",
    category: "Bosses",
    requirements: "None",
    image: "images/Nosk.webp",
    mapImage: "images/NoskMap.webp"
  },
  {
    name: "Soul Master",
    location: "City of Tears",
    category: "Bosses",
    requirements: "None",
    image: "images/SoulMaster.webp",
    mapImage: "images/SoulMasterMap.webp"
  },
  {
    name: "Traitor Lord",
    location: "Queens Gardens",
    category: "Bosses",
    requirements: "None",
    image: "images/TraitorLord.webp",
    mapImage: "images/TraitorLordMap.webp"
  },
  {
    name: "Uumuu",
    location: "Fog Canyon",
    category: "Bosses",
    requirements: "None",
    image: "images/Uumuu.webp",
    mapImage: "images/UumuuMap.webp"
  },
  {
    name: "Watcher Knights",
    location: "City of Tears",
    category: "Bosses",
    requirements: "None",
    image: "images/WatcherKnights.webp",
    mapImage: "images/WatcherKnightsMap.webp"
  },
  {
    name: "Wayward Compass",
    location: "Dirtmouth",
    category: "Charms",
    requirements: "220 Geo",
    image: "images/C1.webp",
    mapImage: "images/C1M.webp"
  },
  {
    name: "Gathering Swarm",
    location: "Dirtmouth",
    category: "Charms",
    requirements: "300 Geo",
    image: "images/C2.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Stalwart Shell",
    location: "Dirtmouth",
    category: "Charms",
    requirements: "200 Geo",
    image: "images/C3.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Soul Catcher",
    location: "Forgotten Crossroads",
    category: "Charms",
    requirements: "None",
    image: "images/C4.webp",
    mapImage: "images/C4M.webp"
  },
  {
    name: "Shaman Stone",
    location: "Forgotten Crossroads",
    category: "Charms",
    requirements: "220 Geo",
    image: "images/C5.webp",
    mapImage: "images/C5M.webp"
  },
  {
    name: "Soul Eater",
    location: "Resting Grounds",
    category: "Charms",
    requirements: "Desolate Dive / Descending Dark",
    image: "images/C6.webp",
    mapImage: "images/C6M.webp"
  },
  {
    name: "Dashmaster",
    location: "Fungal Wastes",
    category: "Charms",
    requirements: "None",
    image: "images/C7.webp",
    mapImage: "images/C7M.webp"
  },
  {
    name: "Sprintmaster",
    location: "Dirtmouth",
    category: "Charms",
    requirements: "400 Geo / Shopkeepers Key",
    image: "images/C8.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Grubsong",
    location: "Forgotten Crossroads",
    category: "Charms",
    requirements: "10 Grubs",
    image: "images/C9.webp",
    mapImage: "images/C9M.webp"
  },
  {
    name: "Grubberfly's Elegy",
    location: "Forgotten Crossroads",
    category: "Charms",
    requirements: "All 46 Grubs",
    image: "images/C10.webp",
    mapImage: "images/C10M.webp"
  },
  {
    name: "Fragile Heart",
    location: "Fungal Wastes",
    category: "Charms",
    requirements: "350 Geo",
    image: "images/C11.webp",
    mapImage: "images/C11M.webp"
  },
  {
    name: "Fragile Greed",
    location: "Fungal Wastes",
    category: "Charms",
    requirements: "250 Geo",
    image: "images/C12.webp",
    mapImage: "images/C11M.webp"
  },
  {
    name: "Fragile Strength",
    location: "Fungal Wastes",
    category: "Charms",
    requirements: "600 Geo",
    image: "images/C13.webp",
    mapImage: "images/C11M.webp"
  },
  {
    name: "Spell Twister",
    location: "City of Tears",
    category: "Charms",
    requirements: "None",
    image: "images/C14.webp",
    mapImage: "images/C14M.webp"
  },
  {
    name: "Steady Body",
    location: "Forgotten Crossroads",
    category: "Charms",
    requirements: "120 Geo",
    image: "images/C15.webp",
    mapImage: "images/C5M.webp"
  },
  {
    name: "Heavy Blow",
    location: "Dirtmouth",
    category: "Charms",
    requirements: "350 Geo / Shopkeepers Key",
    image: "images/C16.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Quick Slash",
    location: "Kingdoms Edge",
    category: "Charms",
    requirements: "Desolate Dive / Descending Dark",
    image: "images/C17.webp",
    mapImage: "images/C17M.webp"
  },
  {
    name: "Longnail",
    location: "Forgotten Crossroads",
    category: "Charms",
    requirements: "300 Geo",
    image: "images/C18.webp",
    mapImage: "images/C5M.webp"
  },
  {
    name: "Mark of Pride",
    location: "Fungal Wastes",
    category: "Charms",
    requirements: "Defeating Mantis Lords",
    image: "images/C19.webp",
    mapImage: "images/C19M.webp"
  },
  {
    name: "Furry of the Fallen",
    location: "Howling Cliffs",
    category: "Charms",
    requirements: "None",
    image: "images/C20.webp",
    mapImage: "images/C20M.webp"
  },
  {
    name: "Thorns of Agony",
    location: "Greenpath",
    category: "Charms",
    requirements: "Mothwing Cloak",
    image: "images/C21.webp",
    mapImage: "images/C21M.webp"
  },
  {
    name: "Baldur Shell",
    location: "Howling Cliffs",
    category: "Charms",
    requirements: "None",
    image: "images/C22.webp",
    mapImage: "images/C22M.webp"
  },
  {
    name: "Flukenest",
    location: "Royal Waterways",
    category: "Charms",
    requirements: "Defeating Flukemarm",
    image: "images/C23.webp",
    mapImage: "images/C23M.webp"
  },
  {
    name: "Defender's Crest",
    location: "Royal Waterways",
    category: "Charms",
    requirements: "Defeating Dung Defender",
    image: "images/C24.webp",
    mapImage: "images/C24M.webp"
  },
  {
    name: "Glowing Womb",
    location: "Forgotten Crossroads",
    category: "Charms",
    requirements: "Crystal Heart",
    image: "images/C25.webp",
    mapImage: "images/C25M.webp"
  },
  {
    name: "Quick Focus",
    location: "Forgotten Crossroads",
    category: "Charms",
    requirements: "800 Geo",
    image: "images/C26.webp",
    mapImage: "images/C5M.webp"
  },
  {
    name: "Deep Focus",
    location: "Crystal Peak",
    category: "Charms",
    requirements: "Crystal Heart",
    image: "images/C27.webp",
    mapImage: "images/C27M.webp"
  },
  {
    name: "Lifeblood Heart",
    location: "Forgotten Crossroads",
    category: "Charms",
    requirements: "250 Geo",
    image: "images/C28.webp",
    mapImage: "images/C5M.webp"
  },
  {
    name: "Lifeblood Core",
    location: "The Abyss",
    category: "Charms",
    requirements: "Lifeblood Heart / Joni's Blessing",
    image: "images/C29.webp",
    mapImage: "images/C29M.webp"
  },
  {
    name: "Joni's Blessing",
    location: "Howling Cliffs",
    category: "Charms",
    requirements: "None",
    image: "images/C30.webp",
    mapImage: "images/C30M.webp"
  },
  {
    name: "Hiveblood",
    location: "The Hive",
    category: "Charms",
    requirements: "Defeating Hive Knight",
    image: "images/C31.webp",
    mapImage: "images/C31M.webp"
  },
  {
    name: "Spore Shroom",
    location: "Fungal Wastes",
    category: "Charms",
    requirements: "Mantis Claw",
    image: "images/C32.webp",
    mapImage: "images/C32M.webp"
  },
  {
    name: "Sharp Shadow",
    location: "Deepnest",
    category: "Charms",
    requirements: "Shade Cloak",
    image: "images/C33.webp",
    mapImage: "images/C33M.webp"
  },
  {
    name: "Shape of Unn",
    location: "Greenpath",
    category: "Charms",
    requirements: "Isma's Tear",
    image: "images/C34.webp",
    mapImage: "images/C34M.webp"
  },
  {
    name: "Nailmaster's Glory",
    location: "Dirtmouth",
    category: "Charms",
    requirements: "Get all 3 Nail Arts",
    image: "images/C35.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Weaversong",
    location: "Deepnest",
    category: "Charms",
    requirements: "None",
    image: "images/C36.webp",
    mapImage: "images/C36M.webp"
  },
  {
    name: "Dream Wielder",
    location: "Resting Grounds",
    category: "Charms",
    requirements: "500 Essence",
    image: "images/C37.webp",
    mapImage: "images/C37M.webp"
  },
  {
    name: "Dreamshield",
    location: "Resting Grounds",
    category: "Charms",
    requirements: "None",
    image: "images/C38.webp",
    mapImage: "images/C38M.webp"
  },
  {
    name: "Grimmchild / Carefree Melody",
    location: "Dirtmouth",
    category: "Charms",
    requirements: "Grimm Troup Quest / Banning Grimm Troup",
    image: "images/C39.webp",
    mapImage: "images/C39M.webp"
  },
  {
    name: "Kingsoul / Void Heart",
    location: "The Abyss",
    category: "Charms",
    requirements: "None / Kingsoul",
    image: "images/C40.webp",
    mapImage: "images/C40M.webp"
  },
  {
    name: "Trial of the Warrior",
    location: "Kingdoms Edge",
    category: "Colosseum",
    requirements: "None",
    image: "images/TrialOfTheWarrior.webp",
    mapImage: "images/ColosseumMap.webp"
  },
  {
    name: "Trial of the Conqueror",
    location: "Kingdoms Edge",
    category: "Colosseum",
    requirements: "Trial of the Warrior",
    image: "images/TrialOfTheConqueror.webp",
    mapImage: "images/ColosseumMap.webp"
  },
  {
    name: "Trial of the Fool",
    location: "Kingdoms Edge",
    category: "Colosseum",
    requirements: "Trial of the Conqueror",
    image: "images/TrialOfTheFool.webp",
    mapImage: "images/ColosseumMap.webp"
  },
  {
    name: "Aquire the Dream Nail",
    location: "Resting Grounds",
    category: "Dream Nail",
    requirements: "None",
    image: "images/DN1.webp",
    mapImage: "images/DNMap.webp"
  },
  {
    name: "Awaken the Dream Nail",
    location: "Resting Grounds",
    category: "Dream Nail",
    requirements: "1800 Essence",
    image: "images/DN2.webp",
    mapImage: "images/MS15M.webp"
  },
  {
    name: "Hear the Seer's final Words",
    location: "Resting Grounds",
    category: "Dream Nail",
    requirements: "2400 Essence",
    image: "images/DN3.webp",
    mapImage: "images/MS15M.webp"
  },
  {
    name: "Lurien the Watcher",
    location: "City of Tears",
    category: "Dreamers",
    requirements: "Defeating the Watcher Knights",
    image: "images/Dream2.webp",
    mapImage: "images/Dream2Map.webp"
  },
  {
    name: "Monomon the Teacher",
    location: "Fog Canyon",
    category: "Dreamers",
    requirements: "Defeating Uumuu",
    image: "images/Dream1.webp",
    mapImage: "images/Dream1Map.webp"
  },
    {
    name: "Herrah the Beast",
    location: "Deepnest",
    category: "Dreamers",
    requirements: "None",
    image: "images/Dream3.webp",
    mapImage: "images/Dream3Map.webp"
  },
  {
    name: "Galien",
    location: "Deepnest",
    category: "Dreamers",
    requirements: "None",
    image: "images/Dream4.webp",
    mapImage: "images/Dream4Map.webp"
  },
  {
    name: "Marmu",
    location: "Queens Gardens",
    category: "Dreamers",
    requirements: "None",
    image: "images/Dream5.webp",
    mapImage: "images/Dream5Map.webp"
  },
  {
    name: "Markoth",
    location: "Kingdoms Edge",
    category: "Dreamers",
    requirements: "Shade Cloak",
    image: "images/Dream6.webp",
    mapImage: "images/Dream6Map.webp"
  },
  {
    name: "Xero",
    location: "Resting Grounds",
    category: "Dreamers",
    requirements: "None",
    image: "images/Dream7.webp",
    mapImage: "images/Dream7Map.webp"
  },
  {
    name: "No Eyes",
    location: "Greenpath",
    category: "Dreamers",
    requirements: "None",
    image: "images/Dream8.webp",
    mapImage: "images/Dream8Map.webp"
  },
  {
    name: "Elder Hu",
    location: "Fungal Wastes",
    category: "Dreamers",
    requirements: "None",
    image: "images/Dream9.webp",
    mapImage: "images/Dream9Map.webp"
  },
  {
    name: "Gorb",
    location: "Howling Cliffs",
    category: "Dreamers",
    requirements: "None",
    image: "images/Dream10.webp",
    mapImage: "images/Dream10Map.webp"
  },
  {
    name: "Nightmare King Grimm",
    location: "Dirtmouth",
    category: "Dreamers",
    requirements: "Grimm Troup Quest",
    image: "images/Dream11.webp",
    mapImage: "images/C39M.webp"
  },
  {
    name: "Mothwing Cloak",
    location: "Greenpath",
    category: "Equipment",
    requirements: "Defeating Hornet Protector",
    image: "images/MothwingCloak.webp",
    mapImage: "images/MothwingCloakMap.webp"
  },
  {
    name: "Mantis Claw",
    location: "Fungal Wastes",
    category: "Equipment",
    requirements: "None",
    image: "images/MantisClaw.webp",
    mapImage: "images/MantisClawMap.webp"
  },
  {
    name: "Crystal Heart",
    location: "Crystal Peak",
    category: "Equipment",
    requirements: "Mantis Claw",
    image: "images/CrystallHeart.webp",
    mapImage: "images/CrystallHeartMap.webp"
  },
  {
    name: "Isma's Tear",
    location: "Royal Waterways",
    category: "Equipment",
    requirements: "Crystall Heart & Defeating Dung Defender",
    image: "images/IsmasTear.webp",
    mapImage: "images/IsmasTearMap.webp"
  },
  {
    name: "King's Brand",
    location: "Kingdoms Edge",
    category: "Equipment",
    requirements: "Monarch Wings",
    image: "images/KingsBrand.webp",
    mapImage: "images/KingsBrandMap.webp"
  },
  {
    name: "Monarch Wings",
    location: "Ancient Basin",
    category: "Equipment",
    requirements: "Defeating Broken Vessel (& Crystal Heart)",
    image: "images/MonarchWings.webp",
    mapImage: "images/MonarchWingsMap.webp"
  },
  {
    name: "Shade Cloak",
    location: "The Abyss",
    category: "Equipment",
    requirements: "Kings Brand & Crystal Heart",
    image: "images/ShadeCloak.webp",
    mapImage: "images/ShadeCloakMap.webp"
  },
  {
    name: "Find Godhome",
    location: "Royal Waterways",
    category: "Godhome",
    requirements: "Simple Key",
    image: "images/GH1.webp",
    mapImage: "images/GH1Map.webp"
  },
  {
    name: "Pantheon of the Master",
    location: "Godhome",
    category: "Godhome",
    requirements: "None",
    image: "images/GH2.webp",
    mapImage: "images/"
  },
  {
    name: "Pantheon of the Artist",
    location: "Godhome",
    category: "Godhome",
    requirements: "None",
    image: "images/GH3.webp",
    mapImage: "images/"
  },
  {
    name: "Pantheon of the Sage",
    location: "Godhome",
    category: "Godhome",
    requirements: "None",
    image: "images/GH4.webp",
    mapImage: "images/"
  },
  {
    name: "Pantheon of the Knight",
    location: "Godhome",
    category: "Godhome",
    requirements: "None",
    image: "images/GH5.webp",
    mapImage: "images/"
  },
  {
    name: "Mask Shard #1",
    location: "Dirtmouth",
    category: "Mask Shard",
    requirements: "150 Geo",
    image: "images/MS.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Mask Shard #2",
    location: "Dirtmouth",
    category: "Mask Shard",
    requirements: "500 Geo",
    image: "images/MS.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Mask Shard #3",
    location: "Dirtmouth",
    category: "Mask Shard",
    requirements: "800 Geo & Shopkeepers Key",
    image: "images/MS.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Mask Shard #4",
    location: "Dirtmouth",
    category: "Mask Shard",
    requirements: "1500 Geo & Shopkeepers Key",
    image: "images/MS.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Mask Shard #5",
    location: "Forgotten Crossroads",
    category: "Mask Shard",
    requirements: "Defeating Brooding Mawlek",
    image: "images/MS.webp",
    mapImage: "images/MS5M.webp"
  },
  {
    name: "Mask Shard #6",
    location: "Forgotten Crossroads",
    category: "Mask Shard",
    requirements: "5 Grubs",
    image: "images/MS.webp",
    mapImage: "images/C9M.webp"
  },
  {
    name: "Mask Shard #7",
    location: "Forgotten Crossroads",
    category: "Mask Shard",
    requirements: "Mantis Claws",
    image: "images/MS.webp",
    mapImage: "images/MS7M.webp"
  },
  {
    name: "Mask Shard #8",
    location: "Fungal Wastes",
    category: "Mask Shard",
    requirements: "Mantis Claws",
    image: "images/MS.webp",
    mapImage: "images/MS8.webp"
  },
  {
    name: "Mask Shard #9",
    location: "Dirtmouth",
    category: "Mask Shard",
    requirements: "Rescuing Bretta",
    image: "images/MS.webp",
    mapImage: "images/MS9M.webp"
  },
  {
    name: "Mask Shard #10",
    location: "Greenpath",
    category: "Mask Shard",
    requirements: "Lumafly Lantern (Recommended)",
    image: "images/MS.webp",
    mapImage: "images/MS10M.webp"
  },
  {
    name: "Mask Shard #11",
    location: "Royal Waterways",
    category: "Mask Shard",
    requirements: "None",
    image: "images/MS.webp",
    mapImage: "images/MS11M.webp"
  },
  {
    name: "Mask Shard #12",
    location: "Deepnest",
    category: "Mask Shard",
    requirements: "Monarch Wings",
    image: "images/MS.webp",
    mapImage: "images/MS12M.webp"
  },
  {
    name: "Mask Shard #13",
    location: "Crystal Peak",
    category: "Mask Shard",
    requirements: "Monarch Wings & Defeating Enraged Guardian",
    image: "images/MS.webp",
    mapImage: "images/MS13M.webp"
  },
  {
    name: "Mask Shard #14",
    location: "The Hive",
    category: "Mask Shard",
    requirements: "None",
    image: "images/MS.webp",
    mapImage: "images/MS14M.webp"
  },
  {
    name: "Mask Shard #15",
    location: "Resting Grounds",
    category: "Mask Shard",
    requirements: "1500 Essence",
    image: "images/MS.webp",
    mapImage: "images/MS15M.webp"
  },
  {
    name: "Mask Shard #16",
    location: "Resting Grounds",
    category: "Mask Shard",
    requirements: "Delicate Flower Quest",
    image: "images/MS.webp",
    mapImage: "images/MS16M.webp"
  },
  {
    name: "Sharpened Nail",
    location: "City of Tears",
    category: "Nail",
    requirements: "250 Geo",
    image: "images/Nail1.webp",
    mapImage: "images/NailMap.webp"
  },
  {
    name: "Channelled Nail",
    location: "City of Tears",
    category: "Nail",
    requirements: "800 Geo & 1 Pale Ore",
    image: "images/Nail2.webp",
    mapImage: "images/NailMap.webp"
  },
  {
    name: "Coiled Nail",
    location: "City of Tears",
    category: "Nail",
    requirements: "2000 Geo & 2 Pale Ore",
    image: "images/Nail3.webp",
    mapImage: "images/NailMap.webp"
  },
  {
    name: "Pure Nail",
    location: "City of Tears",
    category: "Nail",
    requirements: "4000 Geo & 3 Pale Ore",
    image: "images/Nail4.webp",
    mapImage: "images/NailMap.webp"
  },
  {
    name: "Great Slash",
    location: "Greenpath",
    category: "Nail Arts",
    requirements: "Monarch Wings or Crystal Heart",
    image: "images/NA1.webp",
    mapImage: "images/NA1Map.webp"
  },
  {
    name: "Dash Slash",
    location: "Kingdoms Edge",
    category: "Nail Arts",
    requirements: "800 Geo",
    image: "images/NA2.webp",
    mapImage: "images/NA2Map.webp"
  },
  {
    name: "Cyclone Slash",
    location: "Howling Cliffs",
    category: "Nail Arts",
    requirements: "None",
    image: "images/NA3.webp",
    mapImage: "images/NA3Map.webp"
  },
  {
    name: "Vengeful Spirit",
    location: "Forgotten Crossroads",
    category: "Spells",
    requirements: "None",
    image: "images/Spell1.webp",
    mapImage: "images/Spell1Map.webp"
  },
  {
    name: "Shade Soul",
    location: "City of Tears",
    category: "Spells",
    requirements: "Vengeful Spirit & Elegant Key",
    image: "images/Spell2.webp",
    mapImage: "images/Spell2Map.webp"
  },
  {
    name: "Desolate Dive",
    location: "City of Tears",
    category: "Spells",
    requirements: "Defeating Soul Master",
    image: "images/Spell3.webp",
    mapImage: "images/Spell3Map.webp"
  },
  {
    name: "Descending Dark",
    location: "Crystal Peak",
    category: "Spells",
    requirements: "Desolate Dive & Lumafly Lantern (Recommended)",
    image: "images/Spell4.webp",
    mapImage: "images/Spell4Map.webp"
  },
  {
    name: "Howling Wraiths",
    location: "Fog Canyon",
    category: "Spells",
    requirements: "None",
    image: "images/Spell5.webp",
    mapImage: "images/Spell5Map.webp"
  },
  {
    name: "Abyss Shriek",
    location: "The Abyss",
    category: "Spells",
    requirements: "Howling Wraiths",
    image: "images/Spell6.webp",
    mapImage: "images/Spell6Map.webp"
  },
  {
    name: "Vessel Fragment #1",
    location: "Dirtmouth",
    category: "Vessel Fragments",
    requirements: "550 Geo",
    image: "images/VF.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Vessel Fragment #2",
    location: "Dirtmouth",
    category: "Vessel Fragments",
    requirements: "900 Geo & Shopkeepers Key",
    image: "images/VF.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Vessel Fragment #3",
    location: "Greenpath",
    category: "Vessel Fragments",
    requirements: "None",
    image: "images/VF.webp",
    mapImage: "images/VF3M.webp"
  },
  {
    name: "Vessel Fragment #4",
    location: "Forgotten Crossroads",
    category: "Vessel Fragments",
    requirements: "Unlocking the Lift in City of Tears",
    image: "images/VF.webp",
    mapImage: "images/VF4M.webp"
  },
  {
    name: "Vessel Fragment #5",
    location: "City of Tears",
    category: "Vessel Fragments",
    requirements: "None",
    image: "images/VF.webp",
    mapImage: "images/VF5M.webp"
  },
  {
    name: "Vessel Fragment #6",
    location: "Deepnest",
    category: "Vessel Fragments",
    requirements: "None",
    image: "images/VF.webp",
    mapImage: "images/VF6M.webp"
  },
  {
    name: "Vessel Fragment #7",
    location: "Howling Cliffs",
    category: "Vessel Fragments",
    requirements: "Unlock all Stag Stations",
    image: "images/VF.webp",
    mapImage: "images/VF7M.webp"
  },
  {
    name: "Vessel Fragment #8",
    location: "Resting Grounds",
    category: "Vessel Fragments",
    requirements: "700 Essence",
    image: "images/VF.webp",
    mapImage: "images/MS15M.webp"
  },
  {
    name: "Vessel Fragment #9",
    location: "Ancient Basin",
    category: "Vessel Fragments",
    requirements: "3000 Geo",
    image: "images/VF.webp",
    mapImage: "images/VF9M.webp"
  },
  {
    name: "Simple Key #1",
    location: "Dirtmouth",
    category: "Others",
    requirements: "950 Geo",
    image: "images/SK.webp",
    mapImage: "images/C2M.webp"
  },
  {
    name: "Simple Key #2",
    location: "City of Tears",
    category: "Others",
    requirements: "None",
    image: "images/SK.webp",
    mapImage: "images/SK2Map.webp"
  },
  {
    name: "Simple Key #3",
    location: "Ancient Basin",
    category: "Others",
    requirements: "None",
    image: "images/SK.webp",
    mapImage: "images/SK3Map.webp"
  },
  {
    name: "Simple Key #4",
    location: "Kingdoms Edge",
    category: "Others",
    requirements: "Defeating Pale Lurker",
    image: "images/SK.webp",
    mapImage: "images/SK4Map.webp"
  },
  {
    name: "Elegant Key",
    location: "Dirtmouth",
    category: "Others",
    requirements: "800 Geo & Shopkeepers Key",
    image: "images/EK.webp",
    mapImage: "images/EKMap.webp"
  },
  {
    name: "Love Key",
    location: "Queens Gardens",
    category: "Others",
    requirements: "Isma's Tear",
    image: "images/LK.webp",
    mapImage: "images/LKMap.webp"
  },
  {
    name: "Shopkeepers Key",
    location: "Crystal Peak",
    category: "Others",
    requirements: "None",
    image: "images/SKK.webp",
    mapImage: "images/SKKMap.webp"
  },
  {
    name: "Tram Pass",
    location: "Deepnest",
    category: "Others",
    requirements: "None",
    image: "images/TP.webp",
    mapImage: "images/TPMap.webp"
  },
  {
    name: "Pale Ore #1",
    location: "Ancient Basin",
    category: "Others",
    requirements: "Defeat two Lesser Mawleks",
    image: "images/PO.webp",
    mapImage: "images/OP1M.webp"
  },
  {
    name: "Pale Ore #2",
    location: "Resting Grounds",
    category: "Others",
    requirements: "300 Essence",
    image: "images/PO.webp",
    mapImage: "images/MS15M.webp"
  },
  {
    name: "Pale Ore #3",
    location: "Crystal Peak",
    category: "Others",
    requirements: "Mantis Claws & Monarch Wings & Crystal Heart",
    image: "images/PO.webp",
    mapImage: "images/PO3M.webp"
  },
  {
    name: "Pale Ore #4",
    location: "Deepnest",
    category: "Others",
    requirements: "Defeating Nosk",
    image: "images/PO.webp",
    mapImage: "images/PO4M.webp"
  },
  {
    name: "Pale Ore #5",
    location: "Forgotten Crossroads",
    category: "Others",
    requirements: "31 Grubs",
    image: "images/PO.webp",
    mapImage: "images/C9M.webp"
  },
  {
    name: "Pale Ore #6",
    location: "Kingdoms Edge",
    category: "Others",
    requirements: "Complete the Trial of Conqueror",
    image: "images/PO.webp",
    mapImage: "images/PO6M.webp"
  },
  {
    name: "Charm Notch #1",
    location: "Forgotten Crossroads",
    category: "Others",
    requirements: "120 Geo & 5 Charms",
    image: "images/CN.webp",
    mapImage: "images/C5M.webp"
  },
  {
    name: "Charm Notch #2",
    location: "Forgotten Crossroads",
    category: "Others",
    requirements: "500 Geo & 10 Charms",
    image: "images/CN.webp",
    mapImage: "images/C5M.webp"
  },
  {
    name: "Charm Notch #3",
    location: "Forgotten Crossroads",
    category: "Others",
    requirements: "900 Geo & 18 Charms",
    image: "images/CN.webp",
    mapImage: "images/C5M.webp"
  },
  {
    name: "Charm Notch #4",
    location: "Forgotten Crossroads",
    category: "Others",
    requirements: "1400 Geo & 25 Charms",
    image: "images/CN.webp",
    mapImage: "images/C5M.webp"
  },
  {
    name: "Charm Notch #5",
    location: "Fog Canyon",
    category: "Others",
    requirements: "Ismas Tear or Monarch Wings",
    image: "images/CN.webp",
    mapImage: "images/CN2M.webp"
  },
  {
    name: "Charm Notch #6",
    location: "Fungal Wastes",
    category: "Others",
    requirements: "Defeating 2 Shrumal Ogres",
    image: "images/CN.webp",
    mapImage: "images/CN3M.webp"
  },
  {
    name: "Charm Notch #7",
    location: "Kingdoms Edge",
    category: "Others",
    requirements: "Complete the Trial of the Warrior",
    image: "images/CN.webp",
    mapImage: "images/CN4M.webp"
  },
  {
    name: "Charm Notch #8",
    location: "Dirtmouth",
    category: "Others",
    requirements: "Defeating Grimm",
    image: "images/CN.webp",
    mapImage: "images/CN5M.webp"
  },
];

const categoryWeights = {
  "Equipment": 2,
  "Bosses": 1,
  "Dream Nail": 1,
  "Nail": 1,
  "Nail Arts": 1,
  "Charms": 1,
  "Spells": 1,
  "Colosseum": 1,
  "Dreamers": 1,
  "Godhome": 1,
  "Vessel Fragments": 1/3,
  "Mask Shard": 1/4
};

const list = document.getElementById("list");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const locationFilter = document.getElementById("locationFilter");
const categoryFilter = document.getElementById("categoryFilter");
const openOnlyFilter = document.getElementById("openOnlyFilter");
const progressDiv = document.getElementById("progress");
const totalProgressDiv = document.getElementById("totalProgress");
const resetButton = document.getElementById("resetButton");

let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || {};

function renderList(displayItems = items) {
  list.innerHTML = "";

  displayItems.forEach((item, index) => {
    const li = document.createElement("li");

    // Checkbox oben rechts
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checkedItems[item.name] || false;
    checkbox.classList.add("item-checkbox");

    checkbox.addEventListener("click", (e) => {
      e.stopPropagation(); // Modal-Click nicht triggern
      checkedItems[item.name] = checkbox.checked;
      localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
      li.classList.toggle("done");
      updateProgress();
      updateTotalProgress();
      renderList(displayItems); // Optional: Karte neu rendern, falls nötig
    });

    if (checkbox.checked) li.classList.add("done");

    // Bild
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    // Name
    const span = document.createElement("span");
    span.textContent = item.name;

    // Elemente zur Karte hinzufügen
    li.appendChild(checkbox);
    li.appendChild(img);
    li.appendChild(span);

    li.addEventListener("click", () => openModal(item));

    list.appendChild(li);
  });

  updateProgress();
  updateTotalProgress();
}

function openModal(item) {
  modalText.innerHTML = `
    <h2>${item.name}</h2>
    <p><b>Location:</b> ${item.location}</p>
    <p><b>Kategorie:</b> ${item.category}</p>
    <p><b>Anforderungen:</b> ${item.requirements}</p>
  `;

  
  document.getElementById("itemImage").src = item.image;
  document.getElementById("mapImage").src = item.mapImage;

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function applyFilter() {
  const loc = locationFilter.value;
  const cat = categoryFilter.value;
  const openOnly = openOnlyFilter.checked;

  const filtered = items.filter(item => {
    const matchesLocation = (loc === "all" || item.location === loc);
    const matchesCategory = (cat === "all" || item.category === cat);
    const isUnchecked = !checkedItems[item.name];

    return matchesLocation &&
           matchesCategory &&
           (!openOnly || isUnchecked);
  });

  renderList(filtered);
}

function updateProgress() {
  const categoryStats = {};
  const locationStats = {};

  items.forEach(item => {
    // Kategorie zählen
    if (!categoryStats[item.category]) {
      categoryStats[item.category] = { total: 0, done: 0 };
    }
    categoryStats[item.category].total++;
    if (checkedItems[item.name]) {
      categoryStats[item.category].done++;
    }

    // Location zählen
    if (!locationStats[item.location]) {
      locationStats[item.location] = { total: 0, done: 0 };
    }
    locationStats[item.location].total++;
    if (checkedItems[item.name]) {
      locationStats[item.location].done++;
    }
  });

  progressDiv.innerHTML = "<h3>Kategorien</h3>";

  for (const category in categoryStats) {
    const stat = categoryStats[category];
    const p = document.createElement("p");
    p.textContent = `${category}: ${stat.done} / ${stat.total}`;
    progressDiv.appendChild(p);
  }

  const locationTitle = document.createElement("h3");
  locationTitle.textContent = "Locations";
  locationTitle.style.marginTop = "15px";
  progressDiv.appendChild(locationTitle);

  for (const location in locationStats) {
    const stat = locationStats[location];
    const p = document.createElement("p");
    p.textContent = `${location}: ${stat.done} / ${stat.total}`;
    progressDiv.appendChild(p);
  }
}

function updateTotalProgress() {
  let total = 0;

  items.forEach(item => {
    if (checkedItems[item.name]) {
      const weight = categoryWeights[item.category] || 0;
      total += weight;
    }
  });

  // Rundungsfehler abfangen
  let displayValue;
  if (Math.abs(total - Math.round(total)) < 0.00001) {
    displayValue = Math.round(total);   // ganze Zahl anzeigen
  } else {
    displayValue = total.toFixed(2);    // sonst 2 Nachkommastellen
  }

  totalProgressDiv.textContent = `${displayValue}% / 112%`;
}

resetButton.addEventListener("click", () => {
  if (!confirm("Willst du wirklich alles zurücksetzen?")) return;

  checkedItems = {}; // alles leeren
  localStorage.removeItem("checkedItems");

  applyFilter();       // neu filtern & rendern
  updateProgress();    // Kategorie-Fortschritt
  updateTotalProgress(); // 112%-Anzeige
});

// Klick auf dunklen Hintergrund schließt Modal
modal.addEventListener("click", () => {
  closeModal();
});

// Klick im Fenster selbst soll NICHT schließen
document.getElementById("modalContent").addEventListener("click", (e) => {
  e.stopPropagation();
});

locationFilter.addEventListener("change", applyFilter);
categoryFilter.addEventListener("change", applyFilter);
openOnlyFilter.addEventListener("change", applyFilter);

renderList();
