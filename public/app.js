// Enhanced India Travel Website JavaScript with GPS and Booking functionality

// Enhanced Global & India Travel Website JavaScript with GPS, World Destinations, and Booking functionality

// GPS coordinates data - India & Worldwide Destinations
const citiesCoordinates = {
  // --- India Top Destinations ---
  "Mumbai": {"lat": 19.076090, "lng": 72.877426, "state": "Maharashtra", "country": "India"},
  "Delhi": {"lat": 28.679079, "lng": 77.069710, "state": "Delhi", "country": "India"},
  "Bangalore": {"lat": 12.971599, "lng": 77.594566, "state": "Karnataka", "country": "India"},
  "Chennai": {"lat": 13.067439, "lng": 80.237617, "state": "Tamil Nadu", "country": "India"},
  "Jaipur": {"lat": 26.907524, "lng": 75.739639, "state": "Rajasthan", "country": "India"},
  "Goa": {"lat": 15.299326, "lng": 74.123993, "state": "Goa", "country": "India"},
  "Kolkata": {"lat": 22.572646, "lng": 88.363895, "state": "West Bengal", "country": "India"},
  "Hyderabad": {"lat": 17.387140, "lng": 78.491684, "state": "Telangana", "country": "India"},
  "Udaipur": {"lat": 24.571270, "lng": 73.691544, "state": "Rajasthan", "country": "India"},
  "Agra": {"lat": 27.176670, "lng": 78.008072, "state": "Uttar Pradesh", "country": "India"},
  "Varanasi": {"lat": 25.317644, "lng": 82.973915, "state": "Uttar Pradesh", "country": "India"},
  "Manali": {"lat": 32.243187, "lng": 77.189176, "state": "Himachal Pradesh", "country": "India"},
  "Shimla": {"lat": 31.104829, "lng": 77.173424, "state": "Himachal Pradesh", "country": "India"},
  "Leh Ladakh": {"lat": 34.152588, "lng": 77.577057, "state": "Ladakh", "country": "India"},
  "Srinagar": {"lat": 34.083656, "lng": 74.797282, "state": "Jammu & Kashmir", "country": "India"},
  "Gulmarg": {"lat": 34.048370, "lng": 74.380470, "state": "Jammu & Kashmir", "country": "India"},
  "Kochi": {"lat": 9.931233, "lng": 76.267303, "state": "Kerala", "country": "India"},
  "Munnar": {"lat": 10.088933, "lng": 77.059525, "state": "Kerala", "country": "India"},
  "Alleppey": {"lat": 9.498067, "lng": 76.338848, "state": "Kerala", "country": "India"},
  "Amritsar": {"lat": 31.633980, "lng": 74.872261, "state": "Punjab", "country": "India"},
  "Rishikesh": {"lat": 30.086927, "lng": 78.267612, "state": "Uttarakhand", "country": "India"},
  "Mysore": {"lat": 12.295810, "lng": 76.639381, "state": "Karnataka", "country": "India"},
  "Hampi": {"lat": 15.335013, "lng": 76.460024, "state": "Karnataka", "country": "India"},
  "Coorg": {"lat": 12.337494, "lng": 75.806917, "state": "Karnataka", "country": "India"},
  "Ooty": {"lat": 11.410204, "lng": 76.695034, "state": "Tamil Nadu", "country": "India"},
  "Jodhpur": {"lat": 26.238947, "lng": 73.024309, "state": "Rajasthan", "country": "India"},
  "Jaisalmer": {"lat": 26.915749, "lng": 70.908344, "state": "Rajasthan", "country": "India"},
  "Ranthambore": {"lat": 26.017329, "lng": 76.502574, "state": "Rajasthan", "country": "India"},
  "Coimbatore": {"lat": 11.016845, "lng": 76.955833, "state": "Tamil Nadu", "country": "India"},
  "Havelock": {"lat": 12.009910, "lng": 92.961632, "state": "Andaman & Nicobar", "country": "India"},
  "Darjeeling": {"lat": 27.041000, "lng": 88.266300, "state": "West Bengal", "country": "India"},
  "Gangtok": {"lat": 27.338900, "lng": 88.606500, "state": "Sikkim", "country": "India"},
  "Pondicherry": {"lat": 11.941600, "lng": 79.808300, "state": "Puducherry", "country": "India"},
  "Khajuraho": {"lat": 24.831800, "lng": 79.919900, "state": "Madhya Pradesh", "country": "India"},

  // --- Asia & Middle East ---
  "Tokyo": {"lat": 35.676192, "lng": 139.650311, "state": "Kanto", "country": "Japan"},
  "Kyoto": {"lat": 35.011636, "lng": 135.768029, "state": "Kansai", "country": "Japan"},
  "Osaka": {"lat": 34.693738, "lng": 135.502165, "state": "Kansai", "country": "Japan"},
  "Sapporo": {"lat": 43.061800, "lng": 141.354500, "state": "Hokkaido", "country": "Japan"},
  "Dubai": {"lat": 25.204849, "lng": 55.270783, "state": "Dubai", "country": "UAE"},
  "Abu Dhabi": {"lat": 24.453884, "lng": 54.377344, "state": "Abu Dhabi", "country": "UAE"},
  "Singapore": {"lat": 1.352083, "lng": 103.819836, "state": "Central", "country": "Singapore"},
  "Bangkok": {"lat": 13.756331, "lng": 100.501765, "state": "Bangkok", "country": "Thailand"},
  "Phuket": {"lat": 7.880448, "lng": 98.392250, "state": "Phuket", "country": "Thailand"},
  "Chiang Mai": {"lat": 18.788300, "lng": 98.985300, "state": "Chiang Mai", "country": "Thailand"},
  "Bali": {"lat": -8.409518, "lng": 115.188916, "state": "Bali", "country": "Indonesia"},
  "Jakarta": {"lat": -6.208800, "lng": 106.845600, "state": "Java", "country": "Indonesia"},
  "Yogyakarta": {"lat": -7.795600, "lng": 110.369500, "state": "Java", "country": "Indonesia"},
  "Seoul": {"lat": 37.566535, "lng": 126.977969, "state": "Gyeonggi", "country": "South Korea"},
  "Busan": {"lat": 35.179600, "lng": 129.075600, "state": "Yeongnam", "country": "South Korea"},
  "Kuala Lumpur": {"lat": 3.139003, "lng": 101.686855, "state": "Federal Territory", "country": "Malaysia"},
  "Penang": {"lat": 5.416400, "lng": 100.332700, "state": "Penang", "country": "Malaysia"},
  "Kathmandu": {"lat": 27.717245, "lng": 85.323960, "state": "Bagmati", "country": "Nepal"},
  "Pokhara": {"lat": 28.209600, "lng": 83.985600, "state": "Gandaki", "country": "Nepal"},
  "Colombo": {"lat": 6.927079, "lng": 79.861243, "state": "Western", "country": "Sri Lanka"},
  "Kandy": {"lat": 7.290600, "lng": 80.633700, "state": "Central", "country": "Sri Lanka"},
  "Male": {"lat": 4.175496, "lng": 73.509347, "state": "Kaafu", "country": "Maldives"},
  "Hanoi": {"lat": 21.028511, "lng": 105.854167, "state": "Hanoi", "country": "Vietnam"},
  "Da Nang": {"lat": 16.054400, "lng": 108.202200, "state": "Da Nang", "country": "Vietnam"},
  "Doha": {"lat": 25.285447, "lng": 51.531040, "state": "Ad Dawhah", "country": "Qatar"},
  "Beijing": {"lat": 39.904211, "lng": 116.407395, "state": "Beijing", "country": "China"},
  "Shanghai": {"lat": 31.230400, "lng": 121.473700, "state": "Shanghai", "country": "China"},
  "Hong Kong": {"lat": 22.319303, "lng": 114.169361, "state": "Hong Kong", "country": "Hong Kong"},
  "Taipei": {"lat": 25.033000, "lng": 121.565400, "state": "Northern", "country": "Taiwan"},
  "Amman": {"lat": 31.945400, "lng": 35.928400, "state": "Amman", "country": "Jordan"},
  "Petra": {"lat": 30.328500, "lng": 35.444400, "state": "Ma'an", "country": "Jordan"},

  // --- Europe ---
  "Paris": {"lat": 48.856614, "lng": 2.352222, "state": "Île-de-France", "country": "France"},
  "Nice": {"lat": 43.710173, "lng": 7.261953, "state": "Provence-Alpes-Côte d'Azur", "country": "France"},
  "Lyon": {"lat": 45.764000, "lng": 4.835700, "state": "Auvergne-Rhône-Alpes", "country": "France"},
  "London": {"lat": 51.507351, "lng": -0.127758, "state": "Greater London", "country": "United Kingdom"},
  "Edinburgh": {"lat": 55.953252, "lng": -3.188267, "state": "Scotland", "country": "United Kingdom"},
  "Rome": {"lat": 41.902783, "lng": 12.496366, "state": "Lazio", "country": "Italy"},
  "Venice": {"lat": 45.440847, "lng": 12.315515, "state": "Veneto", "country": "Italy"},
  "Florence": {"lat": 43.769560, "lng": 11.255814, "state": "Tuscany", "country": "Italy"},
  "Milan": {"lat": 45.464200, "lng": 9.190000, "state": "Lombardy", "country": "Italy"},
  "Amalfi": {"lat": 40.634032, "lng": 14.602677, "state": "Campania", "country": "Italy"},
  "Zurich": {"lat": 47.376887, "lng": 8.541694, "state": "Zurich", "country": "Switzerland"},
  "Geneva": {"lat": 46.204400, "lng": 6.143200, "state": "Geneva", "country": "Switzerland"},
  "Interlaken": {"lat": 46.686300, "lng": 7.863200, "state": "Bern", "country": "Switzerland"},
  "Zermatt": {"lat": 45.976316, "lng": 7.749117, "state": "Valais", "country": "Switzerland"},
  "Amsterdam": {"lat": 52.367573, "lng": 4.904139, "state": "North Holland", "country": "Netherlands"},
  "Barcelona": {"lat": 41.385064, "lng": 2.173404, "state": "Catalonia", "country": "Spain"},
  "Madrid": {"lat": 40.416775, "lng": -3.703790, "state": "Madrid", "country": "Spain"},
  "Seville": {"lat": 37.389100, "lng": -5.984500, "state": "Andalusia", "country": "Spain"},
  "Athens": {"lat": 37.983810, "lng": 23.727539, "state": "Attica", "country": "Greece"},
  "Santorini": {"lat": 36.393156, "lng": 25.461509, "state": "South Aegean", "country": "Greece"},
  "Mykonos": {"lat": 37.446700, "lng": 25.328900, "state": "South Aegean", "country": "Greece"},
  "Istanbul": {"lat": 41.008238, "lng": 28.978359, "state": "Marmara", "country": "Turkey"},
  "Cappadocia": {"lat": 38.643100, "lng": 34.828900, "state": "Nevşehir", "country": "Turkey"},
  "Vienna": {"lat": 48.208174, "lng": 16.373819, "state": "Vienna", "country": "Austria"},
  "Salzburg": {"lat": 47.809500, "lng": 13.055000, "state": "Salzburg", "country": "Austria"},
  "Prague": {"lat": 50.075538, "lng": 14.437800, "state": "Prague", "country": "Czech Republic"},
  "Berlin": {"lat": 52.520007, "lng": 13.404954, "state": "Berlin", "country": "Germany"},
  "Munich": {"lat": 48.135100, "lng": 11.582000, "state": "Bavaria", "country": "Germany"},
  "Lisbon": {"lat": 38.722300, "lng": -9.139300, "state": "Lisboa", "country": "Portugal"},
  "Porto": {"lat": 41.157900, "lng": -8.629100, "state": "Porto", "country": "Portugal"},
  "Oslo": {"lat": 59.913900, "lng": 10.752200, "state": "Oslo", "country": "Norway"},
  "Bergen": {"lat": 60.391300, "lng": 5.322100, "state": "Vestland", "country": "Norway"},
  "Tromso": {"lat": 69.649200, "lng": 18.955300, "state": "Troms", "country": "Norway"},
  "Reykjavik": {"lat": 64.146582, "lng": -21.942635, "state": "Capital", "country": "Iceland"},

  // --- Americas ---
  "New York": {"lat": 40.712775, "lng": -74.005973, "state": "New York", "country": "USA"},
  "Los Angeles": {"lat": 34.052234, "lng": -118.243685, "state": "California", "country": "USA"},
  "San Francisco": {"lat": 37.774929, "lng": -122.419416, "state": "California", "country": "USA"},
  "Las Vegas": {"lat": 36.169900, "lng": -115.139800, "state": "Nevada", "country": "USA"},
  "Miami": {"lat": 25.761680, "lng": -80.191790, "state": "Florida", "country": "USA"},
  "Chicago": {"lat": 41.878100, "lng": -87.629800, "state": "Illinois", "country": "USA"},
  "Honolulu": {"lat": 21.306944, "lng": -157.858337, "state": "Hawaii", "country": "USA"},
  "Toronto": {"lat": 43.653226, "lng": -79.383184, "state": "Ontario", "country": "Canada"},
  "Vancouver": {"lat": 49.282700, "lng": -123.120700, "state": "British Columbia", "country": "Canada"},
  "Banff": {"lat": 51.178363, "lng": -115.570769, "state": "Alberta", "country": "Canada"},
  "Montreal": {"lat": 45.501700, "lng": -73.567300, "state": "Quebec", "country": "Canada"},
  "Cancun": {"lat": 21.161908, "lng": -86.851528, "state": "Quintana Roo", "country": "Mexico"},
  "Mexico City": {"lat": 19.432600, "lng": -99.133200, "state": "CDMX", "country": "Mexico"},
  "Rio de Janeiro": {"lat": -22.906847, "lng": -43.172896, "state": "Rio de Janeiro", "country": "Brazil"},
  "Sao Paulo": {"lat": -23.550500, "lng": -46.633300, "state": "Sao Paulo", "country": "Brazil"},
  "Buenos Aires": {"lat": -34.603684, "lng": -58.381559, "state": "Capital", "country": "Argentina"},
  "Cusco": {"lat": -13.531950, "lng": -71.967463, "state": "Cusco", "country": "Peru"},
  "Lima": {"lat": -12.046400, "lng": -77.042800, "state": "Lima", "country": "Peru"},

  // --- Africa & Oceania ---
  "Cairo": {"lat": 30.044420, "lng": 31.235712, "state": "Cairo", "country": "Egypt"},
  "Luxor": {"lat": 25.687243, "lng": 32.639637, "state": "Luxor", "country": "Egypt"},
  "Aswan": {"lat": 24.088900, "lng": 32.899800, "state": "Aswan", "country": "Egypt"},
  "Cape Town": {"lat": -33.924869, "lng": 18.424055, "state": "Western Cape", "country": "South Africa"},
  "Johannesburg": {"lat": -26.204100, "lng": 28.047300, "state": "Gauteng", "country": "South Africa"},
  "Nairobi": {"lat": -1.292066, "lng": 36.821946, "state": "Nairobi", "country": "Kenya"},
  "Maasai Mara": {"lat": -1.406100, "lng": 35.139600, "state": "Narok", "country": "Kenya"},
  "Serengeti": {"lat": -2.333300, "lng": 34.833300, "state": "Mara", "country": "Tanzania"},
  "Zanzibar": {"lat": -6.165900, "lng": 39.202600, "state": "Unguja", "country": "Tanzania"},
  "Marrakech": {"lat": 31.629472, "lng": -7.981084, "state": "Marrakech-Safi", "country": "Morocco"},
  "Casablanca": {"lat": 33.573100, "lng": -7.589800, "state": "Casablanca-Settat", "country": "Morocco"},
  "Sydney": {"lat": -33.868820, "lng": 151.209296, "state": "New South Wales", "country": "Australia"},
  "Melbourne": {"lat": -37.813628, "lng": 144.963058, "state": "Victoria", "country": "Australia"},
  "Cairns": {"lat": -16.918551, "lng": 145.778055, "state": "Queensland", "country": "Australia"},
  "Brisbane": {"lat": -27.469800, "lng": 153.025100, "state": "Queensland", "country": "Australia"},
  "Auckland": {"lat": -36.848460, "lng": 174.763332, "state": "Auckland", "country": "New Zealand"},
  "Queenstown": {"lat": -45.031162, "lng": 168.662643, "state": "Otago", "country": "New Zealand"},
  "Rotorua": {"lat": -38.136800, "lng": 176.249700, "state": "Bay of Plenty", "country": "New Zealand"}
};

// Places & Attractions Data
const placesData = [
  // India
  {
    name: "Taj Mahal",
    city: "Agra",
    country: "India",
    category: "Heritage & Architecture",
    description: "One of the Seven Wonders of the World, an ivory-white marble mausoleum on the Yamuna river.",
    highlight: "Sunset & sunrise views, exquisite Mughal marble inlay",
    bestTime: "October to March (Early morning 6:00 AM)",
    coordinates: { lat: 27.175144, lng: 78.042142 }
  },
  {
    name: "Amber Palace & Fort",
    city: "Jaipur",
    country: "India",
    category: "Heritage & Architecture",
    description: "Opulent Rajput palace fortress perched on high hills with the Sheesh Mahal (Mirror Palace).",
    highlight: "Light & sound show, Elephant view, Maota Lake",
    bestTime: "8:00 AM - 5:30 PM",
    coordinates: { lat: 26.9855, lng: 75.8513 }
  },
  {
    name: "Dal Lake & Shikara Houseboats",
    city: "Srinagar",
    country: "India",
    category: "Natural Wonders & Landscapes",
    description: "The jewel of Kashmir, famous for wooden carved houseboats and vibrant floating flower markets.",
    highlight: "Sunrise shikara ride, floating market, Pir Panjal mountains",
    bestTime: "April to October",
    coordinates: { lat: 34.1135, lng: 74.8700 }
  },
  {
    name: "Varanasi Ghats & Ganga Aarti",
    city: "Varanasi",
    country: "India",
    category: "Spiritual & Ancient Sites",
    description: "Ancient spiritual riverside steps along the sacred Ganges with nightly oil lamp ceremonies at Dashashwamedh Ghat.",
    highlight: "Evening Ganga Aarti ceremony, dawn boat ride",
    bestTime: "5:30 PM - 7:30 PM",
    coordinates: { lat: 25.3082, lng: 83.0117 }
  },
  {
    name: "Gateway of India & Marine Drive",
    city: "Mumbai",
    country: "India",
    category: "Iconic Skylines",
    description: "Historic basalt arch monument overlooking Mumbai Harbour and the Arabian Sea.",
    highlight: "Queen's Necklace night promenade, Elephanta ferry",
    bestTime: "Sunset 5:00 PM - 9:00 PM",
    coordinates: { lat: 18.9220, lng: 72.8347 }
  },
  {
    name: "Rohtang Pass & Solang Valley",
    city: "Manali",
    country: "India",
    category: "Natural Wonders & Landscapes",
    description: "High mountain pass at 3,978 meters offering year-round snow peaks and adventure paragliding.",
    highlight: "Snow activities, panoramic Pir Panjal Himalayan vista",
    bestTime: "May to October",
    coordinates: { lat: 32.3716, lng: 77.2466 }
  },
  {
    name: "Alleppey Backwaters & Canal Cruise",
    city: "Alleppey",
    country: "India",
    category: "Natural Wonders & Landscapes",
    description: "Venice of the East, a tranquil labyrinth of palm-fringed lagoons, paddy fields, and traditional kettuvallam houseboats.",
    highlight: "Overnight houseboat cruise, local toddy shop cuisine",
    bestTime: "September to March",
    coordinates: { lat: 9.4981, lng: 76.3388 }
  },
  {
    name: "Golden Temple (Harmandir Sahib)",
    city: "Amritsar",
    country: "India",
    category: "Spiritual & Ancient Sites",
    description: "The holiest Sikh Gurudwara adorned with pure gold foil surrounded by the sacred Amrit Sarovar tank.",
    highlight: "Langar community kitchen (100k daily free meals), nighttime illumination",
    bestTime: "Open 24 hours (Best early morning 4:00 AM)",
    coordinates: { lat: 31.6200, lng: 74.8765 }
  },

  // Europe
  {
    name: "Eiffel Tower & Champ de Mars",
    city: "Paris",
    country: "France",
    category: "Iconic Skylines",
    description: "The world's most recognizable wrought-iron lattice tower standing 330 meters over Paris.",
    highlight: "Hourly sparkling night illuminations, summit panoramic views",
    bestTime: "Sunset 6:00 PM - 10:00 PM",
    coordinates: { lat: 48.8584, lng: 2.2945 }
  },
  {
    name: "Louvre Museum & Glass Pyramid",
    city: "Paris",
    country: "France",
    category: "Heritage & Architecture",
    description: "The world's largest art museum, home to the Mona Lisa and Venus de Milo in a historic royal palace.",
    highlight: "Mona Lisa, Winged Victory, I.M. Pei glass pyramid",
    bestTime: "Wednesday & Friday night openings",
    coordinates: { lat: 48.8606, lng: 2.3376 }
  },
  {
    name: "Colosseum & Roman Forum",
    city: "Rome",
    country: "Italy",
    category: "Heritage & Architecture",
    description: "The monumental 2,000-year-old gladiatorial amphitheater at the heart of Ancient Rome.",
    highlight: "Underground hypogeum tour, Arch of Constantine",
    bestTime: "Morning 8:30 AM to beat midday sun",
    coordinates: { lat: 41.8902, lng: 12.4922 }
  },
  {
    name: "Big Ben & Palace of Westminster",
    city: "London",
    country: "United Kingdom",
    category: "Iconic Skylines",
    description: "Iconic neo-Gothic clock tower and Houses of Parliament along the River Thames.",
    highlight: "Westminster Bridge photo spot, Thames river cruises",
    bestTime: "Daytime and twilight golden hour",
    coordinates: { lat: 51.5007, lng: -0.1246 }
  },
  {
    name: "Matterhorn & Alpine Glaciers",
    city: "Zermatt",
    country: "Switzerland",
    category: "Natural Wonders & Landscapes",
    description: "The legendary pyramid-shaped mountain peak soaring 4,478 meters above Zermatt.",
    highlight: "Gornergrat cogwheel train, glacier paradise cable car",
    bestTime: "June to September (Hiking) or Dec to April (Skiing)",
    coordinates: { lat: 45.9763, lng: 7.7491 }
  },
  {
    name: "Santorini Oia Caldera & Sunset Cliffs",
    city: "Santorini",
    country: "Greece",
    category: "Natural Wonders & Landscapes",
    description: "Whitewashed cubist houses and blue-domed churches clinging to volcanic caldera cliffs.",
    highlight: "World-famous sunset over the Aegean Sea, catamaran tours",
    bestTime: "6:30 PM - 8:30 PM",
    coordinates: { lat: 36.4618, lng: 25.3753 }
  },
  {
    name: "Sagrada Família",
    city: "Barcelona",
    country: "Spain",
    category: "Heritage & Architecture",
    description: "Antoni Gaudí's soaring modernist basilica with kaleidoscopic stained-glass light.",
    highlight: "Nativity facade, interior tree-like stone columns",
    bestTime: "Morning 9:00 AM for vivid sunlight streaming through glass",
    coordinates: { lat: 41.4036, lng: 2.1744 }
  },

  // Asia & Middle East
  {
    name: "Burj Khalifa & Dubai Mall Fountains",
    city: "Dubai",
    country: "UAE",
    category: "Iconic Skylines",
    description: "The tallest building in the world at 828 meters with 148th-floor observation sky decks.",
    highlight: "At The Top observation deck, choreographed fountain shows",
    bestTime: "Sunset 5:30 PM - 8:00 PM",
    coordinates: { lat: 25.1972, lng: 55.2744 }
  },
  {
    name: "Fushimi Inari-taisha Shrine",
    city: "Kyoto",
    country: "Japan",
    category: "Spiritual & Ancient Sites",
    description: "Famous Shinto shrine renowned for thousands of vermilion torii gates winding up Mount Inari.",
    highlight: "Torii tunnel walk, mountain forest views, fox statues",
    bestTime: "Early morning 6:30 AM before crowds",
    coordinates: { lat: 34.9671, lng: 135.7727 }
  },
  {
    name: "Gardens by the Bay & Supertree Grove",
    city: "Singapore",
    country: "Singapore",
    category: "Iconic Skylines",
    description: "Futuristic botanical park featuring 50-meter solar Supertrees and the Cloud Forest indoor waterfall.",
    highlight: "Nightly Garden Rhapsody light show, OCBC Skyway",
    bestTime: "7:45 PM & 8:45 PM for light shows",
    coordinates: { lat: 1.2816, lng: 103.8636 }
  },
  {
    name: "Ubud Sacred Monkey Forest & Rice Terraces",
    city: "Bali",
    country: "Indonesia",
    category: "Natural Wonders & Landscapes",
    description: "Lush green emerald rice terraces and ancient moss-covered temples populated by Balinese macaques.",
    highlight: "Jungle swings, stepped paddy terraces, temple shrines",
    bestTime: "Morning 8:00 AM - 11:00 AM",
    coordinates: { lat: -8.5188, lng: 115.2584 }
  },

  // Americas
  {
    name: "Statue of Liberty & Ellis Island",
    city: "New York",
    country: "USA",
    category: "Iconic Skylines",
    description: "Universal symbol of freedom standing proud in New York Harbor gifted by France in 1886.",
    highlight: "Pedestal & Crown views, immigration museum ferry",
    bestTime: "Morning ferry 9:00 AM from Battery Park",
    coordinates: { lat: 40.6892, lng: -74.0445 }
  },
  {
    name: "Golden Gate Bridge & Marin Headlands",
    city: "San Francisco",
    country: "USA",
    category: "Iconic Skylines",
    description: "World-famous 2.7 km orange suspension bridge spanning the entrance to San Francisco Bay.",
    highlight: "Walk or bike across, panoramic view from Hawk Hill",
    bestTime: "Late afternoon for sunset over the Pacific",
    coordinates: { lat: 37.8199, lng: -122.4783 }
  },
  {
    name: "Machu Picchu Incan Citadel",
    city: "Cusco",
    country: "Peru",
    category: "Heritage & Architecture",
    description: "15th-century Incan citadel set high in the Andes mountains above the Urubamba River valley.",
    highlight: "Sun Gate sunrise, Huayna Picchu hike, ancient stone masonry",
    bestTime: "May to October (Dry Andean season)",
    coordinates: { lat: -13.1631, lng: -72.5450 }
  },
  {
    name: "Christ the Redeemer (Cristo Redentor)",
    city: "Rio de Janeiro",
    country: "Brazil",
    category: "Iconic Skylines",
    description: "Colossal Art Deco statue of Jesus Christ atop Corcovado mountain overlooking Guanabara Bay.",
    highlight: "Panoramic 360° views of Copacabana and Sugarloaf Mountain",
    bestTime: "Morning 8:30 AM to beat cloud cover",
    coordinates: { lat: -22.9519, lng: -43.2105 }
  },

  // Africa & Oceania
  {
    name: "Pyramids of Giza & The Great Sphinx",
    city: "Cairo",
    country: "Egypt",
    category: "Heritage & Architecture",
    description: "The last remaining wonder of the ancient world, erected over 4,500 years ago on the Giza plateau.",
    highlight: "Great Pyramid of Khufu, Sphinx photo op, camel desert trek",
    bestTime: "Early morning 8:00 AM - 11:00 AM",
    coordinates: { lat: 29.9792, lng: 31.1342 }
  },
  {
    name: "Sydney Opera House & Harbour Bridge",
    city: "Sydney",
    country: "Australia",
    category: "Iconic Skylines",
    description: "Architectural masterpiece by Jørn Utzon with iconic white sail-shaped shells on Sydney Harbour.",
    highlight: "Harbour Bridge climb, Opera Bar cocktails, ferry to Manly",
    bestTime: "Twilight 5:30 PM - 8:00 PM",
    coordinates: { lat: -33.8568, lng: 151.2153 }
  },
  {
    name: "Jungfraujoch - Top of Europe",
    city: "Interlaken",
    country: "Switzerland",
    category: "Natural Wonders & Landscapes",
    description: "Highest railway station in Europe at 3,454m nestled between the Mönch and Jungfrau peaks.",
    highlight: "Aletsch Glacier Ice Palace, Sphinx Observatory, panoramic snow peaks",
    bestTime: "Morning cogwheel train 8:00 AM - 1:00 PM",
    coordinates: { lat: 46.5475, lng: 7.9825 }
  },
  {
    name: "Duomo di Milano & Galleria",
    city: "Milan",
    country: "Italy",
    category: "Heritage & Architecture",
    description: "Vast Gothic cathedral with intricate spires and rooftop terraces adjacent to historic luxury arcades.",
    highlight: "Rooftop walk amongst marble statues, glass vaulted galleria",
    bestTime: "9:00 AM - 5:00 PM",
    coordinates: { lat: 45.4641, lng: 9.1919 }
  },
  {
    name: "Positano Cliffside Village",
    city: "Amalfi",
    country: "Italy",
    category: "Natural Wonders & Landscapes",
    description: "Pastel houses cascading vertically down dramatic Mediterranean limestone cliffs into sapphire waters.",
    highlight: "Spiaggia Grande beach, Path of the Gods hike, lemon granita",
    bestTime: "May to October (Late afternoon golden hour)",
    coordinates: { lat: 40.6281, lng: 14.4850 }
  },
  {
    name: "Goreme Fairy Chimneys & Hot Air Balloons",
    city: "Cappadocia",
    country: "Turkey",
    category: "Natural Wonders & Landscapes",
    description: "Surreal lunar volcanic landscape dotted with rock-cut cave dwellings and hundreds of dawn hot air balloons.",
    highlight: "Sunrise hot air balloon flight over Rose Valley, subterranean cities",
    bestTime: "Dawn 5:00 AM - 7:30 AM",
    coordinates: { lat: 38.6431, lng: 34.8289 }
  },
  {
    name: "Al-Khazneh (The Treasury) & Siq",
    city: "Petra",
    country: "Jordan",
    category: "Heritage & Architecture",
    description: "Nabataean royal tomb carved directly into rose-red sandstone canyon walls over two millennia ago.",
    highlight: "Walking the narrow winding Siq canyon, Petra by Night candle ceremony",
    bestTime: "Early morning 6:30 AM before heat and crowds",
    coordinates: { lat: 30.3222, lng: 35.4516 }
  },
  {
    name: "Great Migration & Mara River",
    city: "Maasai Mara",
    country: "Kenya",
    category: "Natural Wonders & Landscapes",
    description: "One of the greatest natural spectacles on Earth: millions of wildebeest, zebras, and predators.",
    highlight: "River crossing spectacle, big cat sightings, sunrise game drives",
    bestTime: "July to October for migration, early dawn safari",
    coordinates: { lat: -1.4061, lng: 35.1396 }
  },
  {
    name: "Table Mountain Aerial Cableway",
    city: "Cape Town",
    country: "South Africa",
    category: "Natural Wonders & Landscapes",
    description: "Flat-topped mountain overlooking the Atlantic Ocean and Cape peninsula with 360-degree rotating cable cars.",
    highlight: "Tabletop plateau hiking, sweeping sunset ocean vistas, dassies",
    bestTime: "Early morning or late afternoon for clear weather",
    coordinates: { lat: -33.9573, lng: 18.4031 }
  },
  {
    name: "The Las Vegas Strip & Fountains",
    city: "Las Vegas",
    country: "USA",
    category: "Iconic Skylines",
    description: "Four-mile boulevard renowned for extravagant neon architecture, world-class entertainment, and luxury casinos.",
    highlight: "Bellagio water fountain dance, High Roller observation wheel",
    bestTime: "Night 8:00 PM - 1:00 AM",
    coordinates: { lat: 36.1147, lng: -115.1728 }
  },
  {
    name: "Lake Louise & Moraine Lake",
    city: "Banff",
    country: "Canada",
    category: "Natural Wonders & Landscapes",
    description: "Glacier-fed alpine lakes famed for electric turquoise waters surrounded by rugged Canadian Rocky summits.",
    highlight: "Canoeing on crystal waters, Valley of the Ten Peaks photo point",
    bestTime: "June to September (Sunrise 6:00 AM for glass-like reflections)",
    coordinates: { lat: 51.4254, lng: -116.1773 }
  },
  {
    name: "Tiger Hill & Toy Train",
    city: "Darjeeling",
    country: "India",
    category: "Natural Wonders & Landscapes",
    description: "Scenic Himalayan ridge renowned for breathtaking sunrises illuminating Mount Kanchenjunga.",
    highlight: "Kanchenjunga pink dawn glow, Darjeeling Himalayan Railway UNESCO train",
    bestTime: "Dawn 4:30 AM - 6:00 AM",
    coordinates: { lat: 27.0142, lng: 88.2435 }
  },
  {
    name: "Virupaksha Temple & Stone Chariot",
    city: "Hampi",
    country: "India",
    category: "Spiritual & Ancient Sites",
    description: "UNESCO World Heritage site with boulder-strewn ruins of the grand 14th-century Vijayanagara Empire.",
    highlight: "Stone Chariot at Vittala Temple, sunset from Matanga Hill",
    bestTime: "November to February (Morning & Sunset)",
    coordinates: { lat: 15.3350, lng: 76.4600 }
  },
  {
    name: "Mysore Royal Palace",
    city: "Mysore",
    country: "India",
    category: "Heritage & Architecture",
    description: "Indo-Saracenic royal residence of the Wadiyar dynasty glowing with nearly 100,000 light bulbs on weekend evenings.",
    highlight: "Sunday evening illumination, Golden Throne, Durbar Hall mirrors",
    bestTime: "Sunday & festive evenings 7:00 PM - 8:00 PM for illumination",
    coordinates: { lat: 12.3052, lng: 76.6552 }
  },
  {
    name: "Laxman Jhula & Triveni Ghat Aarti",
    city: "Rishikesh",
    country: "India",
    category: "Spiritual & Ancient Sites",
    description: "The Yoga Capital of the World where the emerald Ganga emerges from Himalayan foothills.",
    highlight: "Evening Triveni Ghat Maha Aarti, Ganga river rafting, suspension bridges",
    bestTime: "October to April (Evening 5:30 PM for Aarti)",
    coordinates: { lat: 30.1245, lng: 78.3278 }
  }
];

// Hotels & Lodges data with GPS coordinates (India & Global Stays)
const hotelsData = {
  "lodges": [
    {"name": "Mahali Mzuri Luxury Safari Camp", "city": "Nairobi", "rating": 5, "price_range": "45000-90000", "amenities": ["Wildlife Safari", "Infinity Pool", "Private Decks", "All-Inclusive Dining"], "coordinates": {"lat": -1.312000, "lng": 35.250000}, "address": "Motorogi Conservancy, Maasai Mara, Kenya"},
    {"name": "The Omnia Alpine Mountain Lodge", "city": "Zermatt", "rating": 5, "price_range": "35000-75000", "amenities": ["Matterhorn View", "Indoor/Outdoor Pool", "Spa & Sauna", "Fireplace Lounge"], "coordinates": {"lat": 45.976500, "lng": 7.749000}, "address": "Auf dem Fels, 3920 Zermatt, Switzerland"},
    {"name": "Victoria-Jungfrau Alpine Grand Lodge", "city": "Interlaken", "rating": 5, "price_range": "38000-80000", "amenities": ["Jungfrau View", "5500m² Spa", "Private Balconies", "Gourmet Dining"], "coordinates": {"lat": 46.686500, "lng": 7.858000}, "address": "Höheweg 41, 3800 Interlaken, Switzerland"},
    {"name": "Museum Hotel Cappadocia Cave Lodge", "city": "Cappadocia", "rating": 5, "price_range": "30000-65000", "amenities": ["Heated Cave Pool", "Balloon Sunrise View", "Antique Museum Rooms", "Terrace Dining"], "coordinates": {"lat": 38.629500, "lng": 34.805500}, "address": "Tekelli Mah. No.1, Uchisar, Cappadocia, Turkey"},
    {"name": "Angama Mara Safari Lodge", "city": "Maasai Mara", "rating": 5, "price_range": "50000-98000", "amenities": ["Great Rift Valley View", "Glass Front Tents", "Private Safari Vehicles", "Fitness Pool"], "coordinates": {"lat": -1.270000, "lng": 34.980000}, "address": "Siria Escarpment, Maasai Mara, Kenya"},
    {"name": "Matakauri Luxury Lake Lodge", "city": "Queenstown", "rating": 5, "price_range": "42000-85000", "amenities": ["Lake Wakatipu View", "Infinity Pool", "Alpine Spa", "Private Fireplace"], "coordinates": {"lat": -45.060000, "lng": 168.590000}, "address": "569 Glenorchy-Queenstown Rd, Closeburn, Queenstown, New Zealand"},
    {"name": "Glenburn Tea Estate & Heritage Lodge", "city": "Darjeeling", "rating": 5, "price_range": "28000-55000", "amenities": ["Kanchenjunga Vista", "Tea Tasting Tour", "River Camping", "Colonial Verandahs"], "coordinates": {"lat": 27.085000, "lng": 88.310000}, "address": "Glenburn Tea Estate, Darjeeling, West Bengal, India"},
    {"name": "Chamba Camp Thiksey Luxury Glamping", "city": "Leh Ladakh", "rating": 5, "price_range": "35000-70000", "amenities": ["Monastery Views", "Heated Luxury Tents", "Private Butler", "Stargazing Deck"], "coordinates": {"lat": 34.058000, "lng": 77.667000}, "address": "Kipling Camp, Thiksey, Leh Ladakh, India"},
    {"name": "Bambu Indah Jungle Eco-Lodge", "city": "Bali", "rating": 5, "price_range": "25000-50000", "amenities": ["Ayung River Natural Pool", "Antique Javanese Houses", "Organic Farm Dining", "Yoga Pavilion"], "coordinates": {"lat": -8.508000, "lng": 115.241000}, "address": "Jl. Baung, Sayan, Ubud, Bali, Indonesia"},
    {"name": "Suján The Serai Luxury Desert Camp", "city": "Jaisalmer", "rating": 5, "price_range": "32000-65000", "amenities": ["Tented Suites", "Thar Desert Stargazing", "Spa", "Plunge Pool"], "coordinates": {"lat": 26.850000, "lng": 71.300000}, "address": "Bherwa, Jaisalmer, Rajasthan, India"},
    {"name": "Sher Bagh Ranthambore Jungle Lodge", "city": "Ranthambore", "rating": 5, "price_range": "30000-60000", "amenities": ["Tiger Safari", "Jungle Dining", "Luxury Tents", "Campfire"], "coordinates": {"lat": 26.015000, "lng": 76.480000}, "address": "Sherpur, Khilchipur, Ranthambore, Rajasthan, India"},
    {"name": "Wildflower Hall Himalayan Mountain Lodge", "city": "Shimla", "rating": 5, "price_range": "24000-50000", "amenities": ["Outdoor Heated Whirlpool", "Pine Forest View", "Spa", "Fine Dining"], "coordinates": {"lat": 31.120000, "lng": 77.250000}, "address": "Chharabra, Shimla, Himachal Pradesh, India"},
    {"name": "The Khyber Himalayan Resort & Ski Lodge", "city": "Gulmarg", "rating": 5, "price_range": "25000-52000", "amenities": ["Ski-In/Ski-Out", "Gondola Steps", "Heated Pool", "Pir Panjal View"], "coordinates": {"lat": 34.050000, "lng": 74.390000}, "address": "Near Gondola, Gulmarg, Jammu & Kashmir, India"},
    {"name": "Fairmont Banff Springs Mountain Lodge", "city": "Banff", "rating": 5, "price_range": "35000-70000", "amenities": ["Rocky Mountain View", "Thermal Springs Spa", "Golf Course", "Fine Dining"], "coordinates": {"lat": 51.164000, "lng": -115.562000}, "address": "405 Spray Ave, Banff, AB T1L 1J4, Canada"},
    {"name": "Silky Oaks Rainforest Eco-Lodge", "city": "Cairns", "rating": 5, "price_range": "28000-55000", "amenities": ["Mossman River Treehouses", "Rainforest Spa", "River Swimming", "Fine Dining"], "coordinates": {"lat": -16.480000, "lng": 145.420000}, "address": "Finlayvale Rd, Mossman QLD 4873, Australia"},
    {"name": "Evolve Back Kuruba Safari Lodge", "city": "Coorg", "rating": 5, "price_range": "22000-45000", "amenities": ["Kabini River Safari", "Private Pool Villas", "Ayurvedic Spa", "Boating"], "coordinates": {"lat": 11.950000, "lng": 76.250000}, "address": "Beeramballi, Kabini, Karnataka, India"}
  ],
  "luxury": [
    {"name": "The Ritz Paris", "city": "Paris", "rating": 5, "price_range": "45000-95000", "amenities": ["Eiffel View", "Spa", "Michelin Dining", "Historic Palace"], "coordinates": {"lat": 48.868153, "lng": 2.329244}, "address": "15 Place Vendôme, 75001 Paris, France"},
    {"name": "Burj Al Arab Jumeirah", "city": "Dubai", "rating": 5, "price_range": "60000-120000", "amenities": ["Helipad", "Private Beach", "Spa", "Butler Service"], "coordinates": {"lat": 25.141198, "lng": 55.185247}, "address": "Umm Suqeim 3, Dubai, UAE"},
    {"name": "The Bellagio Resort & Casino", "city": "Las Vegas", "rating": 5, "price_range": "32000-75000", "amenities": ["Fountain View", "Casino", "Pool Courtyard", "Fine Dining"], "coordinates": {"lat": 36.112600, "lng": -115.176700}, "address": "3600 S Las Vegas Blvd, Las Vegas, NV 89109, USA"},
    {"name": "Hotel Danieli, Venice", "city": "Venice", "rating": 5, "price_range": "48000-92000", "amenities": ["Grand Canal Views", "Historic Doge Palace", "Rooftop Restaurant", "Private Gondola Dock"], "coordinates": {"lat": 45.434200, "lng": 12.341800}, "address": "Riva degli Schiavoni 4196, 30122 Venice, Italy"},
    {"name": "The Plaza New York", "city": "New York", "rating": 5, "price_range": "50000-100000", "amenities": ["Central Park View", "Historic Landmark", "Spa", "Fine Dining"], "coordinates": {"lat": 40.764834, "lng": -73.974449}, "address": "768 5th Ave, New York, NY 10019, USA"},
    {"name": "Marina Bay Sands", "city": "Singapore", "rating": 5, "price_range": "40000-80000", "amenities": ["Infinity SkyPool", "Casino", "Rooftop Bar", "Observation Deck"], "coordinates": {"lat": 1.283840, "lng": 103.859080}, "address": "10 Bayfront Ave, Singapore"},
    {"name": "Aman Tokyo", "city": "Tokyo", "rating": 5, "price_range": "55000-110000", "amenities": ["Mt Fuji View", "Onsen Spa", "Fine Dining", "Zen Garden"], "coordinates": {"lat": 35.687220, "lng": 139.765500}, "address": "Otemachi Tower, Chiyoda City, Tokyo, Japan"},
    {"name": "Taj Lake Palace", "city": "Udaipur", "rating": 5, "price_range": "15000-30000", "amenities": ["Spa", "Lake View", "Restaurant", "Pool"], "coordinates": {"lat": 24.576340, "lng": 73.678581}, "address": "Lake Pichola, Udaipur, Rajasthan, India"},
    {"name": "The Oberoi Udaivilas", "city": "Udaipur", "rating": 5, "price_range": "20000-40000", "amenities": ["Pool", "Spa", "Lake View", "Fine Dining"], "coordinates": {"lat": 24.576500, "lng": 73.680000}, "address": "Haridasji Ki Magri, Udaipur, Rajasthan, India"},
    {"name": "Taj Falaknuma Palace", "city": "Hyderabad", "rating": 5, "price_range": "30000-60000", "amenities": ["Nizam Heritage", "Horse Carriage Arrival", "Royal Dining", "Jade Room"], "coordinates": {"lat": 17.331400, "lng": 78.467400}, "address": "Engine Bowli, Fatima Nagar, Falaknuma, Hyderabad, Telangana, India"},
    {"name": "Taj Mahal Palace", "city": "Mumbai", "rating": 5, "price_range": "20000-45000", "amenities": ["Heritage", "Multiple Restaurants", "Spa", "Sea View"], "coordinates": {"lat": 18.921984, "lng": 72.833130}, "address": "Apollo Bunder, Colaba, Mumbai, Maharashtra, India"},
    {"name": "The Oberoi Amarvilas", "city": "Agra", "rating": 5, "price_range": "25000-50000", "amenities": ["Taj Mahal View", "Pool", "Spa", "Fine Dining"], "coordinates": {"lat": 27.171210, "lng": 78.042070}, "address": "Taj East Gate Road, Agra, Uttar Pradesh, India"},
    {"name": "Rambagh Palace", "city": "Jaipur", "rating": 5, "price_range": "18000-35000", "amenities": ["Heritage Palace", "Gardens", "Spa", "Pool"], "coordinates": {"lat": 26.885800, "lng": 75.810470}, "address": "Bhawani Singh Road, Jaipur, Rajasthan, India"},
    {"name": "Four Seasons Resort Bali", "city": "Bali", "rating": 5, "price_range": "35000-75000", "amenities": ["Ayung River View", "Private Villas", "Holistic Spa", "Infinity Pool"], "coordinates": {"lat": -8.490800, "lng": 115.244300}, "address": "Sayan, Ubud, Bali, Indonesia"},
    {"name": "The Savoy London", "city": "London", "rating": 5, "price_range": "45000-90000", "amenities": ["Thames View", "Afternoon Tea", "Historic Bar", "Pool"], "coordinates": {"lat": 51.510300, "lng": -0.120500}, "address": "Strand, London WC2R 0EZ, United Kingdom"},
    {"name": "Park Hyatt Sydney", "city": "Sydney", "rating": 5, "price_range": "50000-95000", "amenities": ["Opera House View", "Rooftop Pool", "Spa", "Harbour Dining"], "coordinates": {"lat": -33.856600, "lng": 151.209600}, "address": "7 Hickson Rd, The Rocks NSW 2000, Australia"}
  ],
  "midrange": [
    {"name": "Boutique Hotel Glacier", "city": "Interlaken", "rating": 4, "price_range": "14000-24000", "amenities": ["Eiger Mountain View", "Outdoor Jacuzzi", "Alps Sauna", "Boutique Restaurant"], "coordinates": {"lat": 46.625000, "lng": 8.035000}, "address": "Dammweg 55, 3818 Grindelwald near Interlaken, Switzerland"},
    {"name": "Hotel Santa Maria Trastevere", "city": "Rome", "rating": 4, "price_range": "12000-22000", "amenities": ["Orange Garden Cloister", "Bike Rental", "Historic Center", "Complimentary Breakfast"], "coordinates": {"lat": 41.889500, "lng": 12.470500}, "address": "Vicolo del Piede 2, 00153 Rome, Italy"},
    {"name": "NH Collection Barcelona Calderon", "city": "Barcelona", "rating": 4, "price_range": "13000-25000", "amenities": ["Rooftop Pool", "Passeig de Gràcia Steps", "Cocktail Bar", "City Views"], "coordinates": {"lat": 41.389500, "lng": 2.166800}, "address": "Rambla de Catalunya 26, 08007 Barcelona, Spain"},
    {"name": "Novotel Paris Centre Tour Eiffel", "city": "Paris", "rating": 4, "price_range": "12000-22000", "amenities": ["Seine River View", "Pool", "Restaurant", "Metro Proximity"], "coordinates": {"lat": 48.849700, "lng": 2.283100}, "address": "61 Quai de Grenelle, 75015 Paris, France"},
    {"name": "CitizenM London Bankside", "city": "London", "rating": 4, "price_range": "11000-20000", "amenities": ["Modern Tech", "Cocktail Bar", "Tate Modern Access", "Free WiFi"], "coordinates": {"lat": 51.505200, "lng": -0.099100}, "address": "20 Lavington St, London SE1 0NZ, UK"},
    {"name": "Rove Downtown Dubai", "city": "Dubai", "rating": 4, "price_range": "8000-16000", "amenities": ["Burj Khalifa View", "Pool", "Cinema", "Downtown Access"], "coordinates": {"lat": 25.197200, "lng": 55.281100}, "address": "Za'abeel 2, Downtown Dubai, UAE"},
    {"name": "Shinjuku Granbell Hotel", "city": "Tokyo", "rating": 4, "price_range": "9000-18000", "amenities": ["Rooftop Bar", "Modern Design", "Subway Access", "Restaurant"], "coordinates": {"lat": 35.698300, "lng": 139.706100}, "address": "Kabukicho, Shinjuku, Tokyo, Japan"},
    {"name": "The Elgin Heritage Hotel", "city": "Darjeeling", "rating": 4, "price_range": "8000-16000", "amenities": ["Colonial Manor", "Himalayan Views", "Tea Lounge", "Fireplaces"], "coordinates": {"lat": 27.042500, "lng": 88.264000}, "address": "18 H.D. Lama Road, Darjeeling, West Bengal, India"},
    {"name": "Pullman Bangkok Hotel G", "city": "Bangkok", "rating": 4, "price_range": "6000-12000", "amenities": ["Rooftop Bar", "Pool", "Spa", "City Skyline View"], "coordinates": {"lat": 13.727500, "lng": 100.526900}, "address": "Silom Rd, Bangkok, Thailand"},
    {"name": "Novotel Jaipur", "city": "Jaipur", "rating": 4, "price_range": "4000-8000", "amenities": ["Pool", "Gym", "Restaurant", "Conference Halls"], "coordinates": {"lat": 26.885300, "lng": 75.795080}, "address": "2 Sardar Patel Marg, Jaipur, Rajasthan, India"},
    {"name": "DoubleTree Hilton Agra", "city": "Agra", "rating": 4, "price_range": "5000-9000", "amenities": ["Pool", "Gym", "Restaurant", "Business Center"], "coordinates": {"lat": 27.210500, "lng": 78.033950}, "address": "Taj Nagri Phase 1, Fatehabad Road, Agra, India"},
    {"name": "The Chancery", "city": "Bangalore", "rating": 4, "price_range": "4000-7500", "amenities": ["Japanese Restaurant", "Gym", "Business Center", "Pool"], "coordinates": {"lat": 12.956890, "lng": 77.636970}, "address": "10/6 Lavelle Road, Bangalore, Karnataka, India"},
    {"name": "Brijrama Palace Varanasi", "city": "Varanasi", "rating": 4, "price_range": "9000-18000", "amenities": ["Ganges River View", "Heritage Boat Ride", "Vegetarian Dining", "Spa"], "coordinates": {"lat": 25.308200, "lng": 83.011700}, "address": "Darbhanga Ghat, Varanasi, Uttar Pradesh, India"}
  ],
  "budget": [
    {"name": "Balmers Alpine Hostel", "city": "Interlaken", "rating": 4, "price_range": "2800-6000", "amenities": ["Swiss Chalet", "Hot Tub", "Hammock Room", "Ski Bus Access"], "coordinates": {"lat": 46.681500, "lng": 7.868500}, "address": "Hauptstrasse 23, 3800 Matten bei Interlaken, Switzerland"},
    {"name": "Generator Hostel Paris", "city": "Paris", "rating": 3, "price_range": "2500-6000", "amenities": ["Rooftop Terrace", "Cafe Bar", "Metro Line 2", "WiFi"], "coordinates": {"lat": 48.877800, "lng": 2.370200}, "address": "9-11 Place du Colonel Fabien, 75010 Paris, France"},
    {"name": "Wombat's City Hostel London", "city": "London", "rating": 3, "price_range": "2800-6500", "amenities": ["Tower Bridge Proximity", "Bar", "Kitchen", "Clean Dorms"], "coordinates": {"lat": 51.511800, "lng": -0.068900}, "address": "7 Dock St, London E1 8NU, United Kingdom"},
    {"name": "Lub d Bangkok Siam", "city": "Bangkok", "rating": 3, "price_range": "1500-4000", "amenities": ["BTS Skytrain Steps", "Co-working Space", "Bar", "Tour Desk"], "coordinates": {"lat": 13.746800, "lng": 100.529800}, "address": "Rama 1 Rd, Pathum Wan, Bangkok, Thailand"},
    {"name": "Khaosan Tokyo Origami", "city": "Tokyo", "rating": 3, "price_range": "2200-5000", "amenities": ["Sensoji Temple View", "Common Kitchen", "Japanese Craft", "WiFi"], "coordinates": {"lat": 35.716100, "lng": 139.799500}, "address": "Asakusa, Taito City, Tokyo, Japan"},
    {"name": "Zostel Rishikesh Tapovan", "city": "Rishikesh", "rating": 4, "price_range": "800-2400", "amenities": ["Ganga View Rooftop", "Cafe", "Yoga Terrace", "Rafting Tours"], "coordinates": {"lat": 30.134500, "lng": 78.324000}, "address": "Badrinath Rd, Tapovan, Rishikesh, Uttarakhand, India"},
    {"name": "Zostel Leh", "city": "Leh Ladakh", "rating": 4, "price_range": "900-2500", "amenities": ["Stok Kangri Mountain View", "Common Lounge", "Biker Friendly", "Bonfire"], "coordinates": {"lat": 34.168000, "lng": 77.585000}, "address": "Karzoo, Leh Ladakh, India"},
    {"name": "Zostel Mumbai", "city": "Mumbai", "rating": 3, "price_range": "800-2000", "amenities": ["Hostel", "Common Area", "WiFi", "24/7 Reception"], "coordinates": {"lat": 19.061950, "lng": 72.835570}, "address": "1906 Sadashiv Lane, Fort, Mumbai, Maharashtra, India"},
    {"name": "Madpackers Delhi", "city": "Delhi", "rating": 3, "price_range": "600-1800", "amenities": ["Hostel", "Common Kitchen", "WiFi", "Tours"], "coordinates": {"lat": 28.616670, "lng": 77.237220}, "address": "Hotel Rak International, Paharganj, New Delhi, India"},
    {"name": "Hotel Amar Kothi", "city": "Udaipur", "rating": 3, "price_range": "1200-2500", "amenities": ["Heritage Style", "Restaurant", "WiFi", "City View"], "coordinates": {"lat": 24.580540, "lng": 73.682870}, "address": "Outside Surajpole, Udaipur, Rajasthan, India"},
    {"name": "The Lost Hostels Goa", "city": "Goa", "rating": 3, "price_range": "800-2200", "amenities": ["Palolem Beach Steps", "Cafe", "Yoga Deck", "WiFi"], "coordinates": {"lat": 15.011200, "lng": 74.023400}, "address": "Palolem Beach, Canacona, South Goa, India"}
  ]
};

// Restaurants data with GPS coordinates (India & Worldwide Cuisines)
const restaurantsData = {
  "vegetarian_chains": [
    {"name": "Haldiram's", "cuisine": "North Indian", "cost_for_2": "600-800", "specialties": ["Thali", "Sweets", "Chaat", "Street Food"], "locations": [
      {"city": "Delhi", "coordinates": {"lat": 28.635308, "lng": 77.224464}, "address": "Chandni Chowk, Old Delhi"},
      {"city": "Mumbai", "coordinates": {"lat": 19.017615, "lng": 72.856164}, "address": "Nariman Point, Mumbai"},
      {"city": "Bangalore", "coordinates": {"lat": 12.972442, "lng": 77.580643}, "address": "Koramangala, Bangalore"}
    ]},
    {"name": "Saravana Bhavan", "cuisine": "South Indian", "cost_for_2": "400-600", "specialties": ["Dosa", "Idli", "Thali", "Filter Coffee"], "locations": [
      {"city": "Chennai", "coordinates": {"lat": 13.082680, "lng": 80.270721}, "address": "T. Nagar, Chennai"},
      {"city": "Dubai", "coordinates": {"lat": 25.260500, "lng": 55.298200}, "address": "Al Karama, Dubai, UAE"},
      {"city": "London", "coordinates": {"lat": 51.512600, "lng": -0.133200}, "address": "Leicester Square, London, UK"}
    ]},
    {"name": "L'As du Fallafel", "cuisine": "Middle Eastern & Vegan", "cost_for_2": "1200-2000", "specialties": ["Crispy Falafel", "Hummus", "Pita Sandwiches"], "locations": [
      {"city": "Paris", "coordinates": {"lat": 48.857600, "lng": 2.359200}, "address": "34 Rue des Rosiers, Le Marais, Paris, France"}
    ]},
    {"name": "Haus Hiltl", "cuisine": "Gourmet Global Vegetarian", "cost_for_2": "2800-4500", "specialties": ["Vegetarian Buffet", "Swiss Roesti", "Indian Curries", "Fresh Juices"], "locations": [
      {"city": "Zurich", "coordinates": {"lat": 47.372500, "lng": 8.536500}, "address": "Sihlstrasse 28, 8001 Zürich, Switzerland"}
    ]},
    {"name": "Woodlands Indian Vegetarian", "cuisine": "Pure South Indian", "cost_for_2": "1200-2000", "specialties": ["Masala Dosa", "Chole Bhature", "Filter Coffee"], "locations": [
      {"city": "Singapore", "coordinates": {"lat": 1.306500, "lng": 103.852500}, "address": "19 Upper Dickson Rd, Little India, Singapore"}
    ]}
  ],
  "non_vegetarian": [
    {"name": "Dishoom", "cuisine": "Bombay Cafe & Grill", "cost_for_2": "2800-4500", "specialties": ["Black Daal", "Ruby Chicken", "Bacon Naan Roll", "Chai"], "locations": [
      {"city": "London", "coordinates": {"lat": 51.512500, "lng": -0.126400}, "address": "12 Upper St Martin's Ln, Covent Garden, London"},
      {"city": "London", "coordinates": {"lat": 51.524400, "lng": -0.076800}, "address": "7 Boundary St, Shoreditch, London"}
    ]},
    {"name": "Trattoria Da Enzo al 29", "cuisine": "Authentic Roman Italian", "cost_for_2": "2500-4500", "specialties": ["Cacio e Pepe", "Carbonara", "Fried Artichokes", "Tiramisu"], "locations": [
      {"city": "Rome", "coordinates": {"lat": 41.887800, "lng": 12.476400}, "address": "Via dei Vascellari 29, 00153 Rome, Italy"}
    ]},
    {"name": "El Nacional", "cuisine": "Iberian Tapas & Seafood", "cost_for_2": "3500-6000", "specialties": ["Jamón Ibérico", "Grilled Octopus", "Paella", "Sangria"], "locations": [
      {"city": "Barcelona", "coordinates": {"lat": 41.390500, "lng": 2.167800}, "address": "Passeig de Gràcia 24 Bis, 08007 Barcelona, Spain"}
    ]},
    {"name": "Glenary's Bakery & Pub", "cuisine": "Continental & Himalayan", "cost_for_2": "800-1600", "specialties": ["Darjeeling Tea", "Apple Pie", "Roast Chicken", "Pork Sausages"], "locations": [
      {"city": "Darjeeling", "coordinates": {"lat": 27.042800, "lng": 88.265000}, "address": "Nehru Road, Darjeeling, West Bengal, India"}
    ]},
    {"name": "Fisherman's Wharf", "cuisine": "Goan Seafood", "cost_for_2": "1400-2200", "specialties": ["Goan Prawn Curry", "Butter Garlic Crab", "Fish Recheado"], "locations": [
      {"city": "Goa", "coordinates": {"lat": 15.156800, "lng": 73.948200}, "address": "Mobor Beach, Cavelossim, South Goa, India"}
    ]},
    {"name": "Barbeque Nation", "cuisine": "Multi-cuisine", "cost_for_2": "1200-1800", "specialties": ["BBQ Buffet", "Live Grill", "Kebabs", "Desserts"], "locations": [
      {"city": "Mumbai", "coordinates": {"lat": 19.075984, "lng": 72.877656}, "address": "Linking Road, Bandra West"},
      {"city": "Bangalore", "coordinates": {"lat": 12.935242, "lng": 77.624480}, "address": "Koramangala 5th Block"},
      {"city": "Dubai", "coordinates": {"lat": 25.253200, "lng": 55.301500}, "address": "Al Barsha, Dubai, UAE"}
    ]},
    {"name": "Jay Fai Michelin Street Food", "cuisine": "Authentic Thai Seafood", "cost_for_2": "3000-5000", "specialties": ["Crab Meat Omelette", "Drunken Seafood Noodles", "Tom Yum"], "locations": [
      {"city": "Bangkok", "coordinates": {"lat": 13.752600, "lng": 100.504800}, "address": "327 Maha Chai Rd, Samran Rat, Bangkok, Thailand"}
    ]},
    {"name": "Ippudo Ramen", "cuisine": "Japanese Ramen", "cost_for_2": "1800-3000", "specialties": ["Shiromaru Motoaji", "Akamaru Shinaji", "Gyoza"], "locations": [
      {"city": "Tokyo", "coordinates": {"lat": 35.662800, "lng": 139.731400}, "address": "Roppongi, Minato City, Tokyo, Japan"},
      {"city": "New York", "coordinates": {"lat": 40.730900, "lng": -73.990400}, "address": "65 4th Ave, East Village, New York, USA"}
    ]}
  ],
  "fine_dining": [
    {"name": "Le Jules Verne", "cuisine": "Haute French Cuisine", "cost_for_2": "18000-35000", "specialties": ["Eiffel Tower 2nd Floor Dining", "Tasting Menu", "Champagne Pairings"], "locations": [
      {"city": "Paris", "coordinates": {"lat": 48.858370, "lng": 2.294481}, "address": "Eiffel Tower 2nd Floor, 75007 Paris, France"}
    ]},
    {"name": "At.mosphere Burj Khalifa", "cuisine": "Contemporary European", "cost_for_2": "16000-32000", "specialties": ["122nd Floor Skyline Views", "High Tea", "Wagyu Steaks"], "locations": [
      {"city": "Dubai", "coordinates": {"lat": 25.197197, "lng": 55.274376}, "address": "122nd Floor, Burj Khalifa, Downtown Dubai"}
    ]},
    {"name": "Eleven Madison Park", "cuisine": "Plant-Based Fine Dining", "cost_for_2": "35000-60000", "specialties": ["3 Michelin Stars", "Multi-Course Seasonal Menu", "Sommelier Pairings"], "locations": [
      {"city": "New York", "coordinates": {"lat": 40.741700, "lng": -73.987200}, "address": "11 Madison Ave, New York, NY 10010, USA"}
    ]},
    {"name": "Quay Restaurant", "cuisine": "Modern Australian", "cost_for_2": "22000-42000", "specialties": ["Opera House Panoramic Views", "Celebrated Tasting Menu", "Australian Seafood"], "locations": [
      {"city": "Sydney", "coordinates": {"lat": -33.858500, "lng": 151.210000}, "address": "Upper Level Overseas Passenger Terminal, The Rocks, Sydney, Australia"}
    ]},
    {"name": "Indian Accent", "cuisine": "Modern Indian", "cost_for_2": "4000-8000", "specialties": ["Contemporary Indian", "Tasting Menu", "Wine Pairing", "Innovative Dishes"], "locations": [
      {"city": "Delhi", "coordinates": {"lat": 28.593560, "lng": 77.230690}, "address": "The Lodhi Hotel, New Delhi"},
      {"city": "New York", "coordinates": {"lat": 40.763800, "lng": -73.980600}, "address": "123 W 56th St, New York, NY, USA"}
    ]},
    {"name": "Karavalli", "cuisine": "Coastal South Indian", "cost_for_2": "3500-6000", "specialties": ["Mangalorean Crab Curry", "Appam with Stew", "Alleppey Fish Curry"], "locations": [
      {"city": "Bangalore", "coordinates": {"lat": 12.973400, "lng": 77.608000}, "address": "Taj Gateway Hotel, Residency Rd, Bangalore, India"}
    ]},
    {"name": "Bukhara", "cuisine": "North Indian Tandoor", "cost_for_2": "4500-7500", "specialties": ["Tandoori Jhinga", "Dal Bukhara", "Sikandari Raan"], "locations": [
      {"city": "Delhi", "coordinates": {"lat": 28.613939, "lng": 77.229210}, "address": "ITC Maurya, Diplomatic Enclave, New Delhi"}
    ]}
  ]
};

const tripCostData = {
  "budget": {
    "daily_cost_inr": "1400-2900",
    "daily_cost_usd": "17-35",
    "accommodation": "600-1000",
    "food": "300-600", 
    "transport": "200-500",
    "activities": "300-800"
  },
  "comfort": {
    "daily_cost_inr": "4700-8000",
    "daily_cost_usd": "56-96", 
    "accommodation": "2000-3500",
    "food": "1000-1800",
    "transport": "700-1200",
    "activities": "1000-1500"
  },
  "luxury": {
    "daily_cost_inr": "10000+",
    "daily_cost_usd": "120+",
    "accommodation": "8000-25000",
    "food": "2000-5000",
    "transport": "1500-3000", 
    "activities": "2000-5000"
  }
};

// Global GPS variables
let currentCurrency = 'INR';
let userLocation = null;
let locationWatchId = null;
let autoRefreshInterval = null;
let isAutoRefreshEnabled = false;
let currentCoordinateFormat = 'decimal';
let lastLocationUpdate = null;
let positionCache = null;

// Application data variables
let allHotels = [];
let allRestaurants = [];
let filteredHotels = [];
let filteredRestaurants = [];
let hotelsMap = null;
let restaurantsMap = null;
let routeMap = null;
let hotelsMarkers = [];
let restaurantsMarkers = [];

// Booking system variables
let bookings = [];
let currentBookingVenue = null;
let currentBookingType = null;

// Places & Attractions system variables
let allPlaces = [];
let filteredPlaces = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeHotels();
    initializeRestaurants();
    initializePlaces();
    setupEventListeners();
    populateCityFilters();
    initializeGPSStatus();
    checkForCachedLocation();
    initializeBookingSystem();
    populateTimeSlots();
    setMinDates();
});

// Booking System Functions
function initializeBookingSystem() {
    // Load bookings from session storage (simplified for demo)
    try {
        const savedBookings = sessionStorage.getItem('travelBookings');
        if (savedBookings) {
            bookings = JSON.parse(savedBookings);
        }
    } catch (e) {
        console.error('Error loading bookings:', e);
        bookings = [];
    }
    renderBookings();
}

function populateTimeSlots() {
    const timeSelect = document.getElementById('reservation-time');
    if (!timeSelect) return;
    
    // Clear existing options except the first one
    timeSelect.innerHTML = '<option value="">Select Time</option>';
    
    // Add time slots from 11:00 to 23:00
    for (let hour = 11; hour <= 23; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = timeString;
            option.textContent = timeString;
            timeSelect.appendChild(option);
        }
    }
}

function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    const checkInDate = document.getElementById('check-in-date');
    const checkOutDate = document.getElementById('check-out-date');
    const reservationDate = document.getElementById('reservation-date');
    
    if (checkInDate) checkInDate.min = today;
    if (checkOutDate) checkOutDate.min = today;
    if (reservationDate) reservationDate.min = today;
}

function openBookingModal(venue, type) {
    try {
        // Handle venue data properly
        if (typeof venue === 'string') {
            venue = JSON.parse(venue.replace(/&quot;/g, '"'));
        }
        
        currentBookingVenue = venue;
        currentBookingType = type;
        
        const modal = document.getElementById('booking-modal');
        const title = document.getElementById('booking-modal-title');
        const hotelFields = document.getElementById('hotel-booking-fields');
        const restaurantFields = document.getElementById('restaurant-booking-fields');
        
        if (type === 'hotel') {
            title.textContent = '🏨 Book Hotel - ' + venue.name;
            hotelFields.classList.remove('hidden');
            restaurantFields.classList.add('hidden');
        } else {
            title.textContent = '🍽️ Book Restaurant - ' + venue.name;
            hotelFields.classList.add('hidden');
            restaurantFields.classList.remove('hidden');
        }
        
        // Clear form
        const form = document.getElementById('booking-form');
        if (form) form.reset();
        
        modal.classList.remove('hidden');
        
        // Focus trap
        const nameInput = document.getElementById('booking-name');
        if (nameInput) {
            setTimeout(() => nameInput.focus(), 100);
        }
    } catch (error) {
        console.error('Error opening booking modal:', error);
        alert('Error opening booking form. Please try again.');
    }
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    modal.classList.add('hidden');
    currentBookingVenue = null;
    currentBookingType = null;
}

function validateBookingForm() {
    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('booking-phone').value.trim();
    const email = document.getElementById('booking-email').value.trim();
    const guests = document.getElementById('num-guests').value;
    
    const errors = [];
    
    if (!name) errors.push('Full name is required');
    if (!phone) errors.push('Phone number is required');
    if (!email) errors.push('Email address is required');
    if (!guests || guests < 1) errors.push('Number of guests must be at least 1');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (currentBookingType === 'hotel') {
        const checkIn = document.getElementById('check-in-date').value;
        const checkOut = document.getElementById('check-out-date').value;
        
        if (!checkIn) errors.push('Check-in date is required');
        if (!checkOut) errors.push('Check-out date is required');
        
        if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
            errors.push('Check-out date must be after check-in date');
        }
        
        // Check if dates are in the past
        const today = new Date().toISOString().split('T')[0];
        if (checkIn && checkIn < today) {
            errors.push('Check-in date cannot be in the past');
        }
        
    } else {
        const reservationDate = document.getElementById('reservation-date').value;
        const reservationTime = document.getElementById('reservation-time').value;
        
        if (!reservationDate) errors.push('Reservation date is required');
        if (!reservationTime) errors.push('Reservation time is required');
        
        // Check if date is in the past
        const today = new Date().toISOString().split('T')[0];
        if (reservationDate && reservationDate < today) {
            errors.push('Reservation date cannot be in the past');
        }
    }
    
    return errors;
}

function submitBooking() {
    const errors = validateBookingForm();
    
    if (errors.length > 0) {
        alert('Please fix the following errors:\n\n' + errors.join('\n'));
        return;
    }
    
    const bookingData = {
        id: generateBookingId(),
        venue_name: currentBookingVenue.name,
        venue_type: currentBookingType === 'hotel' ? 'Hotel' : 'Restaurant',
        user_name: document.getElementById('booking-name').value.trim(),
        phone: document.getElementById('booking-phone').value.trim(),
        email: document.getElementById('booking-email').value.trim(),
        guests: parseInt(document.getElementById('num-guests').value),
        special_requests: document.getElementById('special-requests').value.trim(),
        venue_address: currentBookingVenue.address,
        venue_coordinates: currentBookingVenue.coordinates,
        booking_date: new Date().toISOString(),
        status: 'confirmed'
    };
    
    if (currentBookingType === 'hotel') {
        bookingData.check_in = document.getElementById('check-in-date').value;
        bookingData.check_out = document.getElementById('check-out-date').value;
    } else {
        bookingData.reservation_date = document.getElementById('reservation-date').value;
        bookingData.reservation_time = document.getElementById('reservation-time').value;
    }
    
    // Add booking to list
    bookings.unshift(bookingData);
    
    // Save to session storage
    try {
        sessionStorage.setItem('travelBookings', JSON.stringify(bookings));
    } catch (e) {
        console.error('Error saving bookings:', e);
    }
    
    // Close booking modal
    closeBookingModal();
    
    // Show confirmation modal
    showConfirmationModal(bookingData);
    
    // Show success toast
    showToast('Booking confirmed successfully!');
    
    // Update bookings display
    renderBookings();
}

function generateBookingId() {
    return 'BOOK-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();
}

function showConfirmationModal(booking) {
    const modal = document.getElementById('confirmation-modal');
    const content = document.getElementById('confirmation-content');
    
    let bookingDetails = '';
    if (booking.venue_type === 'Hotel') {
        bookingDetails = `
            <div class="detail-row">
                <strong>Check-in:</strong>
                <span>${formatDate(booking.check_in)}</span>
            </div>
            <div class="detail-row">
                <strong>Check-out:</strong>
                <span>${formatDate(booking.check_out)}</span>
            </div>
        `;
    } else {
        bookingDetails = `
            <div class="detail-row">
                <strong>Reservation Date:</strong>
                <span>${formatDate(booking.reservation_date)}</span>
            </div>
            <div class="detail-row">
                <strong>Reservation Time:</strong>
                <span>${booking.reservation_time}</span>
            </div>
        `;
    }
    
    content.innerHTML = `
        <h2>🎉 Booking Confirmed!</h2>
        <p>Your booking has been successfully confirmed. Please save your booking ID for future reference.</p>
        
        <div class="booking-id">${booking.id}</div>
        
        <div class="confirmation-details">
            <h4>📋 Booking Details</h4>
            <div class="detail-row">
                <strong>Venue:</strong>
                <span>${booking.venue_name}</span>
            </div>
            <div class="detail-row">
                <strong>Type:</strong>
                <span>${booking.venue_type}</span>
            </div>
            <div class="detail-row">
                <strong>Guest Name:</strong>
                <span>${booking.user_name}</span>
            </div>
            <div class="detail-row">
                <strong>Phone:</strong>
                <span>${booking.phone}</span>
            </div>
            <div class="detail-row">
                <strong>Email:</strong>
                <span>${booking.email}</span>
            </div>
            ${bookingDetails}
            <div class="detail-row">
                <strong>Guests:</strong>
                <span>${booking.guests}</span>
            </div>
            ${booking.special_requests ? `
                <div class="detail-row">
                    <strong>Special Requests:</strong>
                    <span>${booking.special_requests}</span>
                </div>
            ` : ''}
        </div>
    `;
    
    // Set up navigate button
    const navigateBtn = document.getElementById('navigate-to-venue-btn');
    if (navigateBtn && booking.venue_coordinates) {
        navigateBtn.onclick = () => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${booking.venue_coordinates.lat},${booking.venue_coordinates.lng}`;
            window.open(url, '_blank');
        };
    }
    
    modal.classList.remove('hidden');
}

function closeConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('hidden');
}

function showToast(message) {
    const toast = document.getElementById('success-toast');
    const messageElement = toast.querySelector('.toast-message');
    
    messageElement.textContent = message;
    toast.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideToast();
    }, 5000);
}

function hideToast() {
    const toast = document.getElementById('success-toast');
    toast.classList.add('hidden');
}

function formatDate(dateString) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function showBookings() {
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show bookings section
    const bookingsSection = document.getElementById('my-bookings');
    if (bookingsSection) {
        bookingsSection.classList.remove('hidden');
        bookingsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function renderBookings() {
    const container = document.getElementById('bookings-container');
    
    if (!container) return;
    
    if (bookings.length === 0) {
        container.innerHTML = `
            <div class="empty-bookings">
                <h3>📝 No Bookings Yet</h3>
                <p>You haven't made any bookings yet. Start exploring hotels and restaurants to make your first booking!</p>
                <div style="margin-top: var(--space-20);">
                    <button class="btn btn--primary" onclick="showSection('hotels')">🏨 Browse Hotels</button>
                    <button class="btn btn--outline" onclick="showSection('restaurants')">🍽️ Browse Restaurants</button>
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = bookings.map(booking => {
        let bookingDetails = '';
        if (booking.venue_type === 'Hotel') {
            bookingDetails = `
                <div class="info-item">
                    <div class="info-label">Check-in</div>
                    <div class="info-value">${formatDate(booking.check_in)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Check-out</div>
                    <div class="info-value">${formatDate(booking.check_out)}</div>
                </div>
            `;
        } else {
            bookingDetails = `
                <div class="info-item">
                    <div class="info-label">Reservation Date</div>
                    <div class="info-value">${formatDate(booking.reservation_date)}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Time</div>
                    <div class="info-value">${booking.reservation_time}</div>
                </div>
            `;
        }
        
        return `
            <div class="booking-card" data-booking-id="${booking.id}">
                <div class="booking-header">
                    <h3 class="booking-title">${booking.venue_name}</h3>
                    <span class="booking-status confirmed">Confirmed</span>
                </div>
                <div class="booking-body">
                    <div class="booking-info">
                        <div class="info-item">
                            <div class="info-label">Booking ID</div>
                            <div class="info-value" style="font-family: var(--font-family-mono);">${booking.id}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Type</div>
                            <div class="info-value">${booking.venue_type}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">Guests</div>
                            <div class="info-value">${booking.guests}</div>
                        </div>
                        ${bookingDetails}
                    </div>
                </div>
                <div class="booking-actions">
                    <button class="btn btn--outline" onclick="viewBookingDetails('${booking.id}')">
                        📋 View Details
                    </button>
                    ${booking.venue_coordinates ? `
                        <button class="btn btn--secondary" onclick="navigateToVenue(${booking.venue_coordinates.lat}, ${booking.venue_coordinates.lng})">
                            🧭 Navigate
                        </button>
                    ` : ''}
                    <button class="btn cancel-booking-btn" onclick="cancelBooking('${booking.id}')">
                        ❌ Cancel Booking
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Hide bookings section specifically
    const bookingsSection = document.getElementById('my-bookings');
    if (bookingsSection) {
        bookingsSection.classList.add('hidden');
    }
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function viewBookingDetails(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (booking) {
        showConfirmationModal(booking);
    }
}

function navigateToVenue(lat, lng) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
}

function cancelBooking(bookingId) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookings = bookings.filter(b => b.id !== bookingId);
        try {
            sessionStorage.setItem('travelBookings', JSON.stringify(bookings));
        } catch (e) {
            console.error('Error saving bookings:', e);
        }
        renderBookings();
        showToast('Booking cancelled successfully');
    }
}

// Initialize GPS status
function initializeGPSStatus() {
    updateGPSStatus('disconnected', 'GPS Disconnected');
    updateCoordinatesDisplay();
}

// Check for cached location
function checkForCachedLocation() {
    if (positionCache && (Date.now() - positionCache.timestamp) < 300000) { // 5 minutes
        userLocation = positionCache.coords;
        updateLocationUI();
        updateGPSStatus('ready', 'GPS Ready');
    }
}

// Enhanced GPS functionality
function requestHighAccuracyLocation() {
    if (!navigator.geolocation) {
        showLocationError('Geolocation is not supported by this browser.');
        return;
    }

    showModal('location-modal');
}

function enableHighAccuracyGPS() {
    closeModal('location-modal');
    
    updateGPSStatus('searching', 'Acquiring GPS Signal...');
    showLocationLoading(true);
    
    const options = {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            handleLocationSuccess(position);
        },
        function(error) {
            handleLocationError(error);
        },
        options
    );
}

function handleLocationSuccess(position) {
    const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy,
        altitude: position.coords.altitude,
        heading: position.coords.heading,
        speed: position.coords.speed
    };
    
    userLocation = coords;
    lastLocationUpdate = new Date();
    
    // Cache the position
    positionCache = {
        coords: coords,
        timestamp: Date.now()
    };
    
    updateLocationUI();
    updateGPSStatus('connected', 'GPS Connected');
    showLocationLoading(false);
    enableLocationFeatures();
    
    // Re-render with distances
    renderHotels();
    renderRestaurants();
    
    // Update maps if visible
    if (hotelsMap) {
        setTimeout(() => updateHotelsMap(), 100);
    }
    if (restaurantsMap) {
        setTimeout(() => updateRestaurantsMap(), 100);
    }
}

function handleLocationError(error) {
    updateGPSStatus('error', 'GPS Error');
    showLocationLoading(false);
    
    let message = 'Unable to get your location. ';
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message += 'Location access denied. Please enable location permissions and try again.';
            break;
        case error.POSITION_UNAVAILABLE:
            message += 'Location information is unavailable. Please try again later.';
            break;
        case error.TIMEOUT:
            message += 'Location request timed out. Please try again.';
            break;
        default:
            message += 'An unknown error occurred.';
            break;
    }
    
    showLocationError(message);
}

function showLocationError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'gps-error-notification';
    errorDiv.innerHTML = `
        <div class="error-content">
            <span class="error-icon">⚠️</span>
            <span class="error-message">${message}</span>
            <button class="error-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    document.body.appendChild(errorDiv);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 8000);
}

function showLocationLoading(show) {
    const enableBtn = document.getElementById('enable-gps-btn');
    if (enableBtn) {
        if (show) {
            enableBtn.innerHTML = '<span class="loading-spinner"></span> Acquiring GPS Signal...';
            enableBtn.disabled = true;
        } else {
            enableBtn.innerHTML = '📍 Enable High-Accuracy GPS';
            enableBtn.disabled = false;
        }
    }
}

function updateLocationUI() {
    if (!userLocation) return;
    
    // Update coordinates display
    const currentCoords = document.getElementById('current-coordinates');
    const currentAccuracy = document.getElementById('current-accuracy');
    const currentElevation = document.getElementById('current-elevation');
    const currentHeading = document.getElementById('current-heading');
    const currentSpeed = document.getElementById('current-speed');
    const lastUpdate = document.getElementById('last-update');
    
    if (currentCoords) currentCoords.textContent = formatCoordinates(userLocation.lat, userLocation.lng);
    if (currentAccuracy) currentAccuracy.textContent = userLocation.accuracy ? `±${Math.round(userLocation.accuracy)}m` : '--';
    if (currentElevation) currentElevation.textContent = userLocation.altitude ? `${Math.round(userLocation.altitude)}m` : '--';
    if (currentHeading) currentHeading.textContent = userLocation.heading ? `${Math.round(userLocation.heading)}°` : '--';
    if (currentSpeed) currentSpeed.textContent = userLocation.speed ? `${Math.round(userLocation.speed * 3.6)} km/h` : '--';
    if (lastUpdate) lastUpdate.textContent = lastLocationUpdate ? lastLocationUpdate.toLocaleTimeString() : '--';
    
    // Show location details
    const locationDetails = document.getElementById('location-details');
    if (locationDetails) {
        locationDetails.classList.remove('hidden');
    }
    
    // Update GPS status bar coordinates
    updateCoordinatesDisplay();
}

function updateGPSStatus(status, message) {
    const gpsSignal = document.getElementById('gps-signal');
    if (!gpsSignal) return;
    
    const gpsText = gpsSignal.querySelector('.gps-text');
    const gpsIcon = gpsSignal.querySelector('.gps-icon');
    const gpsAccuracy = document.getElementById('gps-accuracy');
    
    gpsSignal.className = `gps-signal ${status}`;
    if (gpsText) gpsText.textContent = message;
    
    switch(status) {
        case 'connected':
            if (gpsIcon) gpsIcon.textContent = '🛰️';
            if (gpsAccuracy && userLocation && userLocation.accuracy) {
                gpsAccuracy.textContent = `±${Math.round(userLocation.accuracy)}m`;
            }
            break;
        case 'searching':
            if (gpsIcon) gpsIcon.textContent = '📡';
            if (gpsAccuracy) gpsAccuracy.textContent = 'Acquiring...';
            break;
        case 'error':
            if (gpsIcon) gpsIcon.textContent = '❌';
            if (gpsAccuracy) gpsAccuracy.textContent = 'Error';
            break;
        default:
            if (gpsIcon) gpsIcon.textContent = '📍';
            if (gpsAccuracy) gpsAccuracy.textContent = '';
    }
}

function updateCoordinatesDisplay() {
    const coordinatesText = document.getElementById('coordinates-text');
    if (coordinatesText) {
        if (userLocation) {
            coordinatesText.textContent = formatCoordinates(userLocation.lat, userLocation.lng);
        } else {
            coordinatesText.textContent = '---.----, ---.----';
        }
    }
}

function formatCoordinates(lat, lng) {
    const format = document.getElementById('coordinate-format')?.value || currentCoordinateFormat;
    
    switch(format) {
        case 'decimal':
            return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
        case 'dms':
            return `${toDMS(lat, 'lat')}, ${toDMS(lng, 'lng')}`;
        case 'utm':
            return toUTM(lat, lng);
        default:
            return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    }
}

function toDMS(decimal, type) {
    const absolute = Math.abs(decimal);
    const degrees = Math.floor(absolute);
    const minutesFloat = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesFloat);
    const seconds = Math.round((minutesFloat - minutes) * 60 * 100) / 100;
    
    let direction;
    if (type === 'lat') {
        direction = decimal >= 0 ? 'N' : 'S';
    } else {
        direction = decimal >= 0 ? 'E' : 'W';
    }
    
    return `${degrees}°${minutes}'${seconds}"${direction}`;
}

function toUTM(lat, lng) {
    // Simplified UTM conversion for display purposes
    const zone = Math.floor((lng + 180) / 6) + 1;
    return `Zone ${zone} (Approx)`;
}

function refreshLocation() {
    if (!navigator.geolocation) {
        showLocationError('Geolocation is not supported by this browser.');
        return;
    }
    
    updateGPSStatus('searching', 'Refreshing GPS...');
    
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError,
        options
    );
}

function toggleAutoRefresh() {
    const btn = document.getElementById('auto-refresh-btn');
    
    if (isAutoRefreshEnabled) {
        // Disable auto-refresh
        clearInterval(autoRefreshInterval);
        if (locationWatchId) {
            navigator.geolocation.clearWatch(locationWatchId);
            locationWatchId = null;
        }
        isAutoRefreshEnabled = false;
        if (btn) {
            btn.classList.remove('active');
            btn.title = 'Enable auto-refresh';
        }
    } else {
        // Enable auto-refresh
        if (navigator.geolocation) {
            const options = {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 30000
            };
            
            locationWatchId = navigator.geolocation.watchPosition(
                handleLocationSuccess,
                handleLocationError,
                options
            );
            
            isAutoRefreshEnabled = true;
            if (btn) {
                btn.classList.add('active');
                btn.title = 'Disable auto-refresh';
            }
            
            updateGPSStatus('connected', 'GPS Auto-Update');
        }
    }
}

function enableLocationFeatures() {
    // Enable proximity controls
    const searchRadius = document.getElementById('search-radius');
    const restaurantSearchRadius = document.getElementById('restaurant-search-radius');
    
    if (searchRadius) {
        searchRadius.disabled = false;
    }
    if (restaurantSearchRadius) {
        restaurantSearchRadius.disabled = false;
    }
}

// Coordinate format change handler
function handleCoordinateFormatChange() {
    currentCoordinateFormat = document.getElementById('coordinate-format').value;
    updateCoordinatesDisplay();
    updateLocationUI();
}

// Map controls functions
function centerOnUser() {
    if (!userLocation) {
        alert('Location not available. Please enable GPS first.');
        return;
    }
    
    if (hotelsMap && !document.getElementById('hotels-map-container').classList.contains('hidden')) {
        hotelsMap.setView([userLocation.lat, userLocation.lng], 13);
    }
    
    if (restaurantsMap && !document.getElementById('restaurants-map-container').classList.contains('hidden')) {
        restaurantsMap.setView([userLocation.lat, userLocation.lng], 13);
    }
}

function toggleSatelliteView() {
    alert('Satellite view integration would require additional mapping service setup.');
}

function showTraffic() {
    alert('Traffic layer integration would require additional mapping service setup.');
}

function showNearbyPOIs() {
    alert('Points of Interest integration would require additional data sources.');
}

// Route sharing functions
function openInMaps(app) {
    if (!userLocation) {
        alert('Location not available.');
        return;
    }
    
    const lat = userLocation.lat;
    const lng = userLocation.lng;
    
    let url;
    switch(app) {
        case 'google':
            url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
            break;
        case 'apple':
            url = `http://maps.apple.com/?daddr=${lat},${lng}`;
            break;
        case 'waze':
            url = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
            break;
        default:
            url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    }
    
    window.open(url, '_blank');
}

function copyCoordinates() {
    if (!userLocation) {
        alert('No coordinates to copy.');
        return;
    }
    
    const coords = formatCoordinates(userLocation.lat, userLocation.lng);
    const textarea = document.getElementById('share-coordinates');
    if (textarea) {
        textarea.value = coords;
        textarea.select();
        
        try {
            document.execCommand('copy');
            alert('Coordinates copied to clipboard!');
        } catch (err) {
            alert('Unable to copy coordinates. Please copy manually.');
        }
    }
}

// Trip planning functions
function useCurrentLocationAsStart() {
    if (!userLocation) {
        alert('Location not available. Please enable GPS first.');
        return;
    }
    
    // Find nearest city
    let nearestCity = null;
    let minDistance = Infinity;
    
    Object.keys(citiesCoordinates).forEach(city => {
        const coords = citiesCoordinates[city];
        const distance = calculateDistance(userLocation.lat, userLocation.lng, coords.lat, coords.lng);
        if (distance < minDistance) {
            minDistance = distance;
            nearestCity = city;
        }
    });
    
    if (nearestCity) {
        const fromCitySelect = document.getElementById('trip-from-city');
        if (fromCitySelect) {
            fromCitySelect.value = nearestCity;
            updateCalculator();
        }
    }
}

function addWaypoint() {
    const container = document.getElementById('waypoints-container');
    if (!container) return;
    
    const waypointCount = container.children.length + 1;
    
    const waypointDiv = document.createElement('div');
    waypointDiv.className = 'waypoint-item';
    waypointDiv.innerHTML = `
        <label class="form-label">Waypoint ${waypointCount}:</label>
        <select class="form-control waypoint-select">
            <option value="">Select waypoint city</option>
            ${Object.keys(citiesCoordinates).map(city => `<option value="${city}">${city}</option>`).join('')}
        </select>
        <button type="button" class="remove-waypoint-btn" onclick="removeWaypoint(this)">×</button>
    `;
    
    container.appendChild(waypointDiv);
}

function removeWaypoint(button) {
    button.parentElement.remove();
    
    // Renumber remaining waypoints
    const waypoints = document.querySelectorAll('.waypoint-item');
    waypoints.forEach((waypoint, index) => {
        const label = waypoint.querySelector('.form-label');
        if (label) {
            label.textContent = `Waypoint ${index + 1}:`;
        }
    });
}

function calculateGPSTripCost() {
    const days = parseInt(document.getElementById('trip-days')?.value) || 1;
    const people = parseInt(document.getElementById('trip-people')?.value) || 1;
    const fromCity = document.getElementById('trip-from-city')?.value;
    const toCity = document.getElementById('trip-to-city')?.value;
    const travelStyleInput = document.querySelector('input[name="travel-style"]:checked');
    const travelStyle = travelStyleInput ? travelStyleInput.value : 'budget';
    
    if (!fromCity || !toCity) {
        alert('Please select both starting point and destination.');
        return;
    }
    
    const costData = tripCostData[travelStyle];
    
    // Calculate base costs per person per day
    const accommodationRange = costData.accommodation.split('-');
    const foodRange = costData.food.split('-');
    const transportRange = costData.transport.split('-');
    const activitiesRange = costData.activities.split('-');
    
    // Use average of ranges for calculation
    const accommodation = calculateAverage(accommodationRange[0], accommodationRange[1] || accommodationRange[0].replace('+', ''));
    const food = calculateAverage(foodRange[0], foodRange[1] || foodRange[0]);
    const transport = calculateAverage(transportRange[0], transportRange[1] || transportRange[0]);
    const activities = calculateAverage(activitiesRange[0], activitiesRange[1] || activitiesRange[0]);
    
    // Calculate distance-based transport costs
    let distanceKm = 0;
    
    const fromCoords = citiesCoordinates[fromCity];
    const toCoords = citiesCoordinates[toCity];
    
    if (fromCoords && toCoords) {
        distanceKm = calculateDistance(fromCoords.lat, fromCoords.lng, toCoords.lat, toCoords.lng);
    }
    
    // Add waypoints to calculation
    const waypoints = Array.from(document.querySelectorAll('.waypoint-select')).map(select => select.value).filter(city => city);
    let totalRouteDistance = distanceKm;
    
    if (waypoints.length > 0) {
        let lastCoords = fromCoords;
        waypoints.forEach(waypoint => {
            const waypointCoords = citiesCoordinates[waypoint];
            if (waypointCoords && lastCoords) {
                totalRouteDistance += calculateDistance(lastCoords.lat, lastCoords.lng, waypointCoords.lat, waypointCoords.lng);
                lastCoords = waypointCoords;
            }
        });
        // Add distance from last waypoint to destination
        if (lastCoords && toCoords) {
            totalRouteDistance += calculateDistance(lastCoords.lat, lastCoords.lng, toCoords.lat, toCoords.lng);
        }
    }
    
    const transportCost = transport * (1 + (totalRouteDistance / 1000));
    
    // Calculate total costs
    const totalAccommodation = accommodation * days * (people > 1 ? people * 0.8 : 1); // Slight discount for multiple people
    const totalFood = food * days * people;
    const totalTransport = transportCost * days * people;
    const totalActivities = activities * days * people;
    const totalCost = totalAccommodation + totalFood + totalTransport + totalActivities;
    
    // Show route on map
    if (routeMap) {
        updateRouteMap(fromCity, toCity, waypoints);
    } else {
        initializeRouteMap(fromCity, toCity, waypoints);
    }
    
    // Display results
    displayCostBreakdown({
        accommodation: totalAccommodation,
        food: totalFood,
        transport: totalTransport,
        activities: totalActivities,
        total: totalCost,
        days: days,
        people: people,
        distance: totalRouteDistance,
        fromCity: fromCity,
        toCity: toCity,
        waypoints: waypoints
    });
    
    const tripResults = document.getElementById('trip-results');
    if (tripResults) {
        tripResults.style.display = 'block';
    }
}

function initializeRouteMap(fromCity, toCity, waypoints = []) {
    try {
        const mapContainer = document.getElementById('route-map');
        if (!mapContainer) return;
        
        routeMap = L.map('route-map').setView([20.5937, 78.9629], 5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(routeMap);
        
        updateRouteMap(fromCity, toCity, waypoints);
    } catch (error) {
        console.error('Error initializing route map:', error);
    }
}

function updateRouteMap(fromCity, toCity, waypoints = []) {
    if (!routeMap) return;
    
    try {
        // Clear existing layers
        routeMap.eachLayer(layer => {
            if (layer !== routeMap._layers[Object.keys(routeMap._layers)[0]]) { // Keep base tile layer
                routeMap.removeLayer(layer);
            }
        });
        
        const markers = [];
        const coords = [];
        
        // Add start marker
        if (citiesCoordinates[fromCity]) {
            const startCoords = citiesCoordinates[fromCity];
            coords.push([startCoords.lat, startCoords.lng]);
            
            const startMarker = L.marker([startCoords.lat, startCoords.lng])
                .addTo(routeMap)
                .bindPopup(`<b>🚀 Start: ${fromCity}</b>`);
            markers.push(startMarker);
        }
        
        // Add waypoint markers
        waypoints.forEach((waypoint, index) => {
            if (citiesCoordinates[waypoint]) {
                const waypointCoords = citiesCoordinates[waypoint];
                coords.push([waypointCoords.lat, waypointCoords.lng]);
                
                const waypointMarker = L.marker([waypointCoords.lat, waypointCoords.lng])
                    .addTo(routeMap)
                    .bindPopup(`<b>📍 Waypoint ${index + 1}: ${waypoint}</b>`);
                markers.push(waypointMarker);
            }
        });
        
        // Add end marker
        if (citiesCoordinates[toCity]) {
            const endCoords = citiesCoordinates[toCity];
            coords.push([endCoords.lat, endCoords.lng]);
            
            const endMarker = L.marker([endCoords.lat, endCoords.lng])
                .addTo(routeMap)
                .bindPopup(`<b>🏁 Destination: ${toCity}</b>`);
            markers.push(endMarker);
        }
        
        // Draw route line
        if (coords.length > 1) {
            L.polyline(coords, {color: 'red', weight: 3, opacity: 0.7}).addTo(routeMap);
        }
        
        // Fit map to show all markers
        if (markers.length > 0) {
            const group = new L.featureGroup(markers);
            routeMap.fitBounds(group.getBounds().pad(0.1));
        }
        
        // Force map refresh
        setTimeout(() => {
            routeMap.invalidateSize();
        }, 100);
    } catch (error) {
        console.error('Error updating route map:', error);
    }
}

// Haversine formula to calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return distance;
}

// Format distance for display
function formatDistance(distance) {
    if (distance < 1) {
        return `${Math.round(distance * 1000)}m`;
    } else {
        return `${distance.toFixed(1)}km`;
    }
}

// Initialize hotels data
function initializeHotels() {
    allHotels = [];
    Object.keys(hotelsData).forEach(category => {
        hotelsData[category].forEach(hotel => {
            allHotels.push({...hotel, category});
        });
    });
    filteredHotels = [...allHotels];
    renderHotels();
}

// Initialize restaurants data  
function initializeRestaurants() {
    allRestaurants = [];
    Object.keys(restaurantsData).forEach(category => {
        restaurantsData[category].forEach(restaurant => {
            restaurant.locations.forEach(location => {
                allRestaurants.push({
                    name: restaurant.name,
                    cuisine: restaurant.cuisine,
                    cost_for_2: restaurant.cost_for_2,
                    specialties: restaurant.specialties,
                    category: category,
                    city: location.city,
                    coordinates: location.coordinates,
                    address: location.address
                });
            });
        });
    });
    filteredRestaurants = [...allRestaurants];
    renderRestaurants();
}

// Initialize places data
function initializePlaces() {
    allPlaces = [...placesData];
    filteredPlaces = [...allPlaces];
    renderPlaces();
}

// Render places cards
function renderPlaces() {
    const placesGrid = document.getElementById('places-grid');
    if (!placesGrid) return;

    if (filteredPlaces.length === 0) {
        placesGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #cbd5e1;">
                <h3>No places or attractions found</h3>
                <p>Try adjusting your search criteria or category filter</p>
            </div>
        `;
        return;
    }

    placesGrid.innerHTML = filteredPlaces.map(place => {
        const distance = userLocation && place.coordinates ? 
            calculateDistance(userLocation.lat, userLocation.lng, place.coordinates.lat, place.coordinates.lng) : null;
        
        return `
            <div class="place-card">
                <div>
                    <span class="place-category-badge">${place.category}</span>
                    <h3 class="place-title">${place.name}</h3>
                    <div class="place-location">📍 ${place.city}, ${place.country} ${distance !== null ? `• <span style="color:#38bdf8;">${formatDistance(distance)} away</span>` : ''}</div>
                    <p class="place-desc">${place.description}</p>
                </div>
                <div>
                    <div class="place-meta">
                        <div><strong>✨ Highlight:</strong> ${place.highlight}</div>
                        <div style="margin-top: 4px;"><strong>⏰ Best Visiting Hours:</strong> ${place.bestTime}</div>
                        <div style="margin-top: 4px; font-family: monospace; font-size: 11px; color: #94a3b8;">
                            GPS: ${place.coordinates.lat.toFixed(4)}, ${place.coordinates.lng.toFixed(4)}
                        </div>
                    </div>
                    <div class="place-actions">
                        <button type="button" class="btn btn--outline btn--sm btn--full-width" onclick="askGuideAboutRoute('${place.name}, ${place.city}', '${place.country}')">
                            👨🏽‍💼 Ask AI Guide
                        </button>
                        <a href="https://www.google.com/maps/dir/?api=1&destination=${place.coordinates.lat},${place.coordinates.lng}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm btn--full-width" style="text-align: center;">
                            🧭 Navigate
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filter places based on search, city, and category
function filterPlaces() {
    const searchVal = (document.getElementById('place-search')?.value || '').toLowerCase().trim();
    const cityVal = document.getElementById('place-city-filter')?.value || '';
    const categoryVal = document.getElementById('place-category-filter')?.value || '';

    filteredPlaces = allPlaces.filter(place => {
        const matchesSearch = !searchVal || 
            place.name.toLowerCase().includes(searchVal) ||
            place.city.toLowerCase().includes(searchVal) ||
            place.country.toLowerCase().includes(searchVal) ||
            place.description.toLowerCase().includes(searchVal) ||
            place.highlight.toLowerCase().includes(searchVal);

        const matchesCity = !cityVal || place.city.toLowerCase() === cityVal.toLowerCase() || place.country.toLowerCase() === cityVal.toLowerCase();
        const matchesCategory = !categoryVal || place.category === categoryVal;

        return matchesSearch && matchesCity && matchesCategory;
    });

    renderPlaces();
}

// Setup event listeners
function setupEventListeners() {
    // GPS coordinate format change
    const coordinateFormat = document.getElementById('coordinate-format');
    if (coordinateFormat) {
        coordinateFormat.addEventListener('change', handleCoordinateFormatChange);
    }
    
    // Hotel filters
    const hotelSearch = document.getElementById('hotel-search');
    const cityFilter = document.getElementById('city-filter');
    const priceFilter = document.getElementById('price-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const searchRadius = document.getElementById('search-radius');
    
    if (hotelSearch) hotelSearch.addEventListener('input', filterHotels);
    if (cityFilter) cityFilter.addEventListener('change', filterHotels);
    if (priceFilter) priceFilter.addEventListener('change', filterHotels);
    if (ratingFilter) ratingFilter.addEventListener('change', filterHotels);
    if (searchRadius) searchRadius.addEventListener('change', filterHotels);
    
    // Restaurant filters
    const restaurantSearch = document.getElementById('restaurant-search');
    const restaurantCityFilter = document.getElementById('restaurant-city-filter');
    const cuisineFilter = document.getElementById('cuisine-filter');
    const costFilter = document.getElementById('cost-filter');
    const restaurantSearchRadius = document.getElementById('restaurant-search-radius');
    
    if (restaurantSearch) restaurantSearch.addEventListener('input', filterRestaurants);
    if (restaurantCityFilter) restaurantCityFilter.addEventListener('change', filterRestaurants);
    if (cuisineFilter) cuisineFilter.addEventListener('change', filterRestaurants);
    if (costFilter) costFilter.addEventListener('change', filterRestaurants);
    if (restaurantSearchRadius) restaurantSearchRadius.addEventListener('change', filterRestaurants);

    // Places & Attractions filters
    const placeSearch = document.getElementById('place-search');
    const placeCityFilter = document.getElementById('place-city-filter');
    const placeCategoryFilter = document.getElementById('place-category-filter');
    
    if (placeSearch) placeSearch.addEventListener('input', filterPlaces);
    if (placeCityFilter) placeCityFilter.addEventListener('change', filterPlaces);
    if (placeCategoryFilter) placeCategoryFilter.addEventListener('change', filterPlaces);
    
    // Restaurant category tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            if (category === 'all') {
                filteredRestaurants = [...allRestaurants];
            } else {
                filteredRestaurants = allRestaurants.filter(r => r.category === category);
            }
            renderRestaurants();
            if (restaurantsMap) {
                updateRestaurantsMap();
            }
        });
    });
    
    // Trip calculator inputs
    const tripDays = document.getElementById('trip-days');
    const tripPeople = document.getElementById('trip-people');
    const tripFromCity = document.getElementById('trip-from-city');
    const tripToCity = document.getElementById('trip-to-city');
    
    if (tripDays) tripDays.addEventListener('input', updateCalculator);
    if (tripPeople) tripPeople.addEventListener('input', updateCalculator);
    if (tripFromCity) tripFromCity.addEventListener('change', updateCalculator);
    if (tripToCity) tripToCity.addEventListener('change', updateCalculator);
    
    document.querySelectorAll('input[name="travel-style"]').forEach(input => {
        input.addEventListener('change', updateCalculator);
    });
    
    // Booking form date validation
    const checkInDate = document.getElementById('check-in-date');
    const checkOutDate = document.getElementById('check-out-date');
    
    if (checkInDate && checkOutDate) {
        checkInDate.addEventListener('change', function() {
            checkOutDate.min = this.value;
        });
    }
    
    // Navigation links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
    
    // Smooth scrolling for other internal links
    document.querySelectorAll('a[href^="#"]:not(.nav-links a)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeBookingModal();
            closeConfirmationModal();
            closeModal('location-modal');
            closeModal('share-route-modal');
        }
    });
}

// Populate city filter dropdowns
function populateCityFilters() {
    const cities = Object.keys(citiesCoordinates);
    
    // Hotel filters
    const cityFilter = document.getElementById('city-filter');
    if (cityFilter) {
        cityFilter.innerHTML = '<option value="">All Destinations Worldwide</option>';
        cities.forEach(city => {
            const coords = citiesCoordinates[city];
            const option = document.createElement('option');
            option.value = city;
            option.textContent = coords && coords.country ? `${city} (${coords.country})` : city;
            cityFilter.appendChild(option);
        });
    }

    // Restaurant filters
    const restCityFilter = document.getElementById('restaurant-city-filter');
    if (restCityFilter) {
        restCityFilter.innerHTML = '<option value="">All World Cuisines & Cities</option>';
        cities.forEach(city => {
            const coords = citiesCoordinates[city];
            const option = document.createElement('option');
            option.value = city;
            option.textContent = coords && coords.country ? `${city} (${coords.country})` : city;
            restCityFilter.appendChild(option);
        });
    }

    // Places & Attractions filters
    const placeCityFilter = document.getElementById('place-city-filter');
    if (placeCityFilter) {
        placeCityFilter.innerHTML = '<option value="">All Cities & Countries</option>';
        cities.forEach(city => {
            const coords = citiesCoordinates[city];
            const option = document.createElement('option');
            option.value = city;
            option.textContent = coords && coords.country ? `${city} (${coords.country})` : city;
            placeCityFilter.appendChild(option);
        });
    }
    
    // Trip calculator dropdowns
    const fromCitySelect = document.getElementById('trip-from-city');
    const toCitySelect = document.getElementById('trip-to-city');
    
    if (fromCitySelect && toCitySelect) {
        fromCitySelect.innerHTML = '<option value="">Select Starting City (India / World)</option>';
        toCitySelect.innerHTML = '<option value="">Select Destination (India / World)</option>';
        cities.forEach(city => {
            const coords = citiesCoordinates[city];
            const label = coords && coords.country ? `${city} (${coords.country})` : city;

            const fromOption = document.createElement('option');
            fromOption.value = city;
            fromOption.textContent = label;
            fromCitySelect.appendChild(fromOption);
            
            const toOption = document.createElement('option');
            toOption.value = city;
            toOption.textContent = label;
            toCitySelect.appendChild(toOption);
        });
    }
}

// Toggle between list and map view
function toggleView(section, view) {
    const listContainer = document.getElementById(`${section}-grid`);
    const mapContainer = document.getElementById(`${section}-map-container`);
    const toggleBtns = document.querySelectorAll(`#${section} .toggle-btn`);
    
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`#${section} .toggle-btn[data-view="${view}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    if (view === 'map') {
        if (listContainer) listContainer.classList.add('hidden');
        if (mapContainer) mapContainer.classList.remove('hidden');
        
        // Initialize map if not already done
        if (section === 'hotels' && !hotelsMap) {
            setTimeout(() => initializeHotelsMap(), 100);
        } else if (section === 'restaurants' && !restaurantsMap) {
            setTimeout(() => initializeRestaurantsMap(), 100);
        } else if (section === 'hotels' && hotelsMap) {
            setTimeout(() => {
                hotelsMap.invalidateSize();
                updateHotelsMap();
            }, 100);
        } else if (section === 'restaurants' && restaurantsMap) {
            setTimeout(() => {
                restaurantsMap.invalidateSize();
                updateRestaurantsMap();
            }, 100);
        }
    } else {
        if (listContainer) listContainer.classList.remove('hidden');
        if (mapContainer) mapContainer.classList.add('hidden');
    }
}

// Initialize hotels map
function initializeHotelsMap() {
    try {
        const mapContainer = document.getElementById('hotels-map');
        if (!mapContainer) return;
        
        hotelsMap = L.map('hotels-map').setView([20.5937, 78.9629], 5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(hotelsMap);
        
        setTimeout(() => updateHotelsMap(), 100);
    } catch (error) {
        console.error('Error initializing hotels map:', error);
    }
}

// Initialize restaurants map
function initializeRestaurantsMap() {
    try {
        const mapContainer = document.getElementById('restaurants-map');
        if (!mapContainer) return;
        
        restaurantsMap = L.map('restaurants-map').setView([20.5937, 78.9629], 5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(restaurantsMap);
        
        setTimeout(() => updateRestaurantsMap(), 100);
    } catch (error) {
        console.error('Error initializing restaurants map:', error);
    }
}

// Update hotels map markers
function updateHotelsMap() {
    if (!hotelsMap) return;
    
    try {
        // Clear existing markers
        hotelsMarkers.forEach(marker => {
            try {
                hotelsMap.removeLayer(marker);
            } catch (e) {
                // Ignore errors when removing markers
            }
        });
        hotelsMarkers = [];
        
        // Add user location marker if available
        if (userLocation) {
            const userIcon = L.divIcon({
                html: '<div style="background-color: #1FB8CD; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
                iconSize: [20, 20],
                className: 'user-location-marker'
            });
            
            const userMarker = L.marker([userLocation.lat, userLocation.lng], {icon: userIcon})
                .addTo(hotelsMap)
                .bindPopup('<b>📍 Your Location</b>');
            hotelsMarkers.push(userMarker);
        }
        
        // Add hotel markers
        filteredHotels.forEach((hotel, index) => {
            if (hotel.coordinates) {
                const distance = userLocation ? 
                    calculateDistance(userLocation.lat, userLocation.lng, hotel.coordinates.lat, hotel.coordinates.lng) : null;
                
                const hotelIcon = L.divIcon({
                    html: '<div style="background-color: #B4413C; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 2px rgba(0,0,0,0.3);"></div>',
                    iconSize: [16, 16],
                    className: 'hotel-marker'
                });
                
                const popupContent = `
                    <div class="popup-content">
                        <div class="popup-title">${hotel.name}</div>
                        <div class="popup-details">
                            ${generateStars(hotel.rating)} ${hotel.rating} Stars<br>
                            📍 ${hotel.address}<br>
                            💰 ₹${hotel.price_range}/night
                        </div>
                        <div class="popup-coordinates">
                            GPS: ${hotel.coordinates.lat.toFixed(4)}, ${hotel.coordinates.lng.toFixed(4)}
                        </div>
                        ${distance ? `<div class="popup-distance">📏 ${formatDistance(distance)} away</div>` : ''}
                        <div style="margin-top: var(--space-8); display: flex; gap: var(--space-4);">
                            <button class="btn btn--primary btn--sm" onclick="openBookingModalFromMap(${index}, 'hotel')" style="flex: 1; font-size: var(--font-size-xs);">
                                📅 Book Now
                            </button>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=${hotel.coordinates.lat},${hotel.coordinates.lng}" target="_blank" class="btn btn--outline btn--sm" style="flex: 1; font-size: var(--font-size-xs); text-align: center; text-decoration: none;">
                                🧭 Directions
                            </a>
                        </div>
                    </div>
                `;
                
                const marker = L.marker([hotel.coordinates.lat, hotel.coordinates.lng], {icon: hotelIcon})
                    .addTo(hotelsMap)
                    .bindPopup(popupContent);
                
                hotelsMarkers.push(marker);
            }
        });
        
        // Fit map to show all markers if we have any
        if (hotelsMarkers.length > 1) {
            const group = new L.featureGroup(hotelsMarkers);
            hotelsMap.fitBounds(group.getBounds().pad(0.1));
        } else if (hotelsMarkers.length === 1) {
            const marker = hotelsMarkers[0];
            hotelsMap.setView(marker.getLatLng(), 10);
        }
        
        // Force map refresh
        setTimeout(() => {
            if (hotelsMap) {
                hotelsMap.invalidateSize();
            }
        }, 100);
        
    } catch (error) {
        console.error('Error updating hotels map:', error);
    }
}

// Helper function to open booking modal from map popup
function openBookingModalFromMap(hotelIndex, type) {
    const hotel = type === 'hotel' ? filteredHotels[hotelIndex] : filteredRestaurants[hotelIndex];
    if (hotel) {
        openBookingModal(hotel, type);
    }
}

// Update restaurants map markers
function updateRestaurantsMap() {
    if (!restaurantsMap) return;
    
    try {
        // Clear existing markers
        restaurantsMarkers.forEach(marker => {
            try {
                restaurantsMap.removeLayer(marker);
            } catch (e) {
                // Ignore errors when removing markers
            }
        });
        restaurantsMarkers = [];
        
        // Add user location marker if available
        if (userLocation) {
            const userIcon = L.divIcon({
                html: '<div style="background-color: #1FB8CD; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
                iconSize: [20, 20],
                className: 'user-location-marker'
            });
            
            const userMarker = L.marker([userLocation.lat, userLocation.lng], {icon: userIcon})
                .addTo(restaurantsMap)
                .bindPopup('<b>📍 Your Location</b>');
            restaurantsMarkers.push(userMarker);
        }
        
        // Add restaurant markers
        filteredRestaurants.forEach((restaurant, index) => {
            if (restaurant.coordinates) {
                const distance = userLocation ? 
                    calculateDistance(userLocation.lat, userLocation.lng, restaurant.coordinates.lat, restaurant.coordinates.lng) : null;
                
                const restaurantIcon = L.divIcon({
                    html: '<div style="background-color: #FFC185; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 2px rgba(0,0,0,0.3);"></div>',
                    iconSize: [16, 16],
                    className: 'restaurant-marker'
                });
                
                const popupContent = `
                    <div class="popup-content">
                        <div class="popup-title">${restaurant.name}</div>
                        <div class="popup-details">
                            🍽️ ${restaurant.cuisine}<br>
                            📍 ${restaurant.address}<br>
                            💰 ₹${restaurant.cost_for_2} for 2
                        </div>
                        <div class="popup-coordinates">
                            GPS: ${restaurant.coordinates.lat.toFixed(4)}, ${restaurant.coordinates.lng.toFixed(4)}
                        </div>
                        ${distance ? `<div class="popup-distance">📏 ${formatDistance(distance)} away</div>` : ''}
                        <div style="margin-top: var(--space-8); display: flex; gap: var(--space-4);">
                            <button class="btn btn--primary btn--sm" onclick="openBookingModalFromMap(${index}, 'restaurant')" style="flex: 1; font-size: var(--font-size-xs);">
                                📅 Book Now
                            </button>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=${restaurant.coordinates.lat},${restaurant.coordinates.lng}" target="_blank" class="btn btn--outline btn--sm" style="flex: 1; font-size: var(--font-size-xs); text-align: center; text-decoration: none;">
                                🧭 Directions
                            </a>
                        </div>
                    </div>
                `;
                
                const marker = L.marker([restaurant.coordinates.lat, restaurant.coordinates.lng], {icon: restaurantIcon})
                    .addTo(restaurantsMap)
                    .bindPopup(popupContent);
                
                restaurantsMarkers.push(marker);
            }
        });
        
        // Fit map to show all markers if we have any
        if (restaurantsMarkers.length > 1) {
            const group = new L.featureGroup(restaurantsMarkers);
            restaurantsMap.fitBounds(group.getBounds().pad(0.1));
        } else if (restaurantsMarkers.length === 1) {
            const marker = restaurantsMarkers[0];
            restaurantsMap.setView(marker.getLatLng(), 10);
        }
        
        // Force map refresh
        setTimeout(() => {
            if (restaurantsMap) {
                restaurantsMap.invalidateSize();
            }
        }, 100);
        
    } catch (error) {
        console.error('Error updating restaurants map:', error);
    }
}

// Sort by distance
function sortByProximity(type) {
    if (!userLocation) {
        alert('Please enable GPS location services first.');
        return;
    }
    
    if (type === 'hotels') {
        filteredHotels.sort((a, b) => {
            const distanceA = calculateDistance(userLocation.lat, userLocation.lng, a.coordinates.lat, a.coordinates.lng);
            const distanceB = calculateDistance(userLocation.lat, userLocation.lng, b.coordinates.lat, b.coordinates.lng);
            return distanceA - distanceB;
        });
        renderHotels();
    } else {
        filteredRestaurants.sort((a, b) => {
            const distanceA = calculateDistance(userLocation.lat, userLocation.lng, a.coordinates.lat, a.coordinates.lng);
            const distanceB = calculateDistance(userLocation.lat, userLocation.lng, b.coordinates.lat, b.coordinates.lng);
            return distanceA - distanceB;
        });
        renderRestaurants();
    }
}

// Generate star rating HTML
function generateStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Get directions URL
function getDirections(lat, lng) {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

// Render hotels
function renderHotels() {
    const hotelsGrid = document.getElementById('hotels-grid');
    
    if (!hotelsGrid) return;
    
    if (filteredHotels.length === 0) {
        hotelsGrid.innerHTML = `
            <div class="no-results">
                <h3>No hotels found</h3>
                <p>Try adjusting your search criteria or filters</p>
            </div>
        `;
        return;
    }
    
    hotelsGrid.innerHTML = filteredHotels.map((hotel, index) => {
        const distance = userLocation && hotel.coordinates ? 
            calculateDistance(userLocation.lat, userLocation.lng, hotel.coordinates.lat, hotel.coordinates.lng) : null;
        
        return `
            <div class="hotel-card">
                <div class="hotel-header">
                    <h3 class="hotel-title">${hotel.name}</h3>
                    <div class="hotel-location">📍 ${hotel.city}</div>
                    <div class="hotel-rating">
                        <span class="stars">${generateStars(hotel.rating)}</span>
                        <span>${hotel.rating} Stars</span>
                    </div>
                    <div class="hotel-price">₹${hotel.price_range}/night</div>
                </div>
                <div class="hotel-body">
                    <div class="amenities">
                        ${hotel.amenities.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
                    </div>
                    ${hotel.coordinates ? `
                        <div class="gps-info">
                            <div class="coordinates">GPS: ${hotel.coordinates.lat.toFixed(4)}, ${hotel.coordinates.lng.toFixed(4)}</div>
                            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-8);">📍 ${hotel.address}</div>
                            ${distance ? `<div class="distance">📏 ${formatDistance(distance)} away</div>` : ''}
                            <div class="card-actions">
                                <button class="book-now-btn" onclick="openBookingModalFromCard(${index}, 'hotel')">
                                    📅 Book Now
                                </button>
                                <a href="${getDirections(hotel.coordinates.lat, hotel.coordinates.lng)}" target="_blank" class="get-directions-btn">
                                    🧭 Get Directions
                                </a>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    // Update map if visible
    if (hotelsMap && !document.getElementById('hotels-map-container').classList.contains('hidden')) {
        setTimeout(() => updateHotelsMap(), 100);
    }
}

// Helper function to open booking modal from card
function openBookingModalFromCard(index, type) {
    const venue = type === 'hotel' ? filteredHotels[index] : filteredRestaurants[index];
    if (venue) {
        openBookingModal(venue, type);
    }
}

// Filter hotels
function filterHotels() {
    const searchTerm = document.getElementById('hotel-search')?.value.toLowerCase() || '';
    const cityFilter = document.getElementById('city-filter')?.value || '';
    const priceFilter = document.getElementById('price-filter')?.value || '';
    const ratingFilter = document.getElementById('rating-filter')?.value || '';
    const searchRadius = document.getElementById('search-radius')?.value || '';
    
    filteredHotels = allHotels.filter(hotel => {
        const matchesSearch = hotel.name.toLowerCase().includes(searchTerm) || 
                            hotel.city.toLowerCase().includes(searchTerm) ||
                            hotel.address?.toLowerCase().includes(searchTerm);
        const matchesCity = !cityFilter || hotel.city === cityFilter;
        const matchesPrice = !priceFilter || hotel.category === priceFilter;
        const matchesRating = !ratingFilter || hotel.rating >= parseInt(ratingFilter);
        
        let matchesProximity = true;
        if (searchRadius && userLocation && hotel.coordinates) {
            const distance = calculateDistance(userLocation.lat, userLocation.lng, hotel.coordinates.lat, hotel.coordinates.lng);
            matchesProximity = distance <= parseInt(searchRadius);
        }
        
        return matchesSearch && matchesCity && matchesPrice && matchesRating && matchesProximity;
    });
    
    renderHotels();
}

// Render restaurants
function renderRestaurants() {
    const restaurantsGrid = document.getElementById('restaurants-grid');
    
    if (!restaurantsGrid) return;
    
    if (filteredRestaurants.length === 0) {
        restaurantsGrid.innerHTML = `
            <div class="no-results">
                <h3>No restaurants found</h3>
                <p>Try adjusting your search criteria or filters</p>
            </div>
        `;
        return;
    }
    
    restaurantsGrid.innerHTML = filteredRestaurants.map((restaurant, index) => {
        const distance = userLocation && restaurant.coordinates ? 
            calculateDistance(userLocation.lat, userLocation.lng, restaurant.coordinates.lat, restaurant.coordinates.lng) : null;
        
        return `
            <div class="restaurant-card">
                <div class="restaurant-header">
                    <h3 class="restaurant-name">${restaurant.name}</h3>
                    <div class="cuisine-type">🍽️ ${restaurant.cuisine}</div>
                    <div class="cost-info">💰 ₹${restaurant.cost_for_2} for 2</div>
                </div>
                <div class="restaurant-body">
                    <div class="specialties">
                        <h4>Specialties:</h4>
                        <div class="specialty-tags">
                            ${restaurant.specialties.map(specialty => `<span class="specialty-tag">${specialty}</span>`).join('')}
                        </div>
                    </div>
                    ${restaurant.coordinates ? `
                        <div class="gps-info">
                            <div class="coordinates">GPS: ${restaurant.coordinates.lat.toFixed(4)}, ${restaurant.coordinates.lng.toFixed(4)}</div>
                            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-8);">📍 ${restaurant.address}</div>
                            ${distance ? `<div class="distance">📏 ${formatDistance(distance)} away</div>` : ''}
                            <div class="card-actions">
                                <button class="book-now-btn" onclick="openBookingModalFromCard(${index}, 'restaurant')">
                                    📅 Book Now
                                </button>
                                <a href="${getDirections(restaurant.coordinates.lat, restaurant.coordinates.lng)}" target="_blank" class="navigate-btn">
                                    🧭 Navigate Here
                                </a>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
    
    // Update map if visible
    if (restaurantsMap && !document.getElementById('restaurants-map-container').classList.contains('hidden')) {
        setTimeout(() => updateRestaurantsMap(), 100);
    }
}

// Filter restaurants
function filterRestaurants() {
    const searchTerm = document.getElementById('restaurant-search')?.value.toLowerCase() || '';
    const cityFilter = document.getElementById('restaurant-city-filter')?.value || '';
    const cuisineFilter = document.getElementById('cuisine-filter')?.value || '';
    const costFilter = document.getElementById('cost-filter')?.value || '';
    const restaurantSearchRadius = document.getElementById('restaurant-search-radius')?.value || '';
    
    // Get current active category
    const activeTab = document.querySelector('.tab-btn.active');
    const activeCategory = activeTab ? activeTab.dataset.category : 'all';
    
    let baseRestaurants = activeCategory === 'all' ? 
        [...allRestaurants] : 
        allRestaurants.filter(r => r.category === activeCategory);
    
    filteredRestaurants = baseRestaurants.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) || 
                            restaurant.cuisine.toLowerCase().includes(searchTerm) ||
                            restaurant.city?.toLowerCase().includes(searchTerm) ||
                            restaurant.address?.toLowerCase().includes(searchTerm);
        const matchesCity = !cityFilter || restaurant.city === cityFilter || restaurant.address?.toLowerCase().includes(cityFilter.toLowerCase());
        const matchesCuisine = !cuisineFilter || restaurant.category === cuisineFilter;
        
        let matchesCost = true;
        if (costFilter) {
            const cost = parseInt(restaurant.cost_for_2.split('-')[0]);
            switch (costFilter) {
                case 'budget':
                    matchesCost = cost <= 600;
                    break;
                case 'moderate':
                    matchesCost = cost > 600 && cost <= 1500;
                    break;
                case 'expensive':
                    matchesCost = cost > 1500;
                    break;
            }
        }
        
        let matchesProximity = true;
        if (restaurantSearchRadius && userLocation && restaurant.coordinates) {
            const distance = calculateDistance(userLocation.lat, userLocation.lng, restaurant.coordinates.lat, restaurant.coordinates.lng);
            matchesProximity = distance <= parseInt(restaurantSearchRadius);
        }
        
        return matchesSearch && matchesCuisine && matchesCost && matchesProximity;
    });
    
    renderRestaurants();
}

// Calculate average of range
function calculateAverage(min, max) {
    const minVal = parseInt(min.toString().replace('+', ''));
    const maxVal = max ? parseInt(max.toString().replace('+', '')) : minVal * 2;
    return (minVal + maxVal) / 2;
}

// Display cost breakdown
function displayCostBreakdown(costs) {
    const breakdown = document.getElementById('cost-breakdown');
    
    if (!breakdown) return;
    
    let distanceInfo = '';
    if (costs.distance > 0 && costs.fromCity && costs.toCity) {
        distanceInfo = `
            <div class="route-summary">
                <div class="route-stat">
                    <span class="route-stat-value">${formatDistance(costs.distance)}</span>
                    <span class="route-stat-label">Total Distance</span>
                </div>
                <div class="route-stat">
                    <span class="route-stat-value">${costs.waypoints.length}</span>
                    <span class="route-stat-label">Waypoints</span>
                </div>
                <div class="route-stat">
                    <span class="route-stat-value">${Math.ceil(costs.distance / 500)}</span>
                    <span class="route-stat-label">Travel Days</span>
                </div>
            </div>
        `;
    }
    
    breakdown.innerHTML = `
        <h3>💰 Cost Breakdown</h3>
        
        <div class="currency-toggle">
            <button class="currency-btn ${currentCurrency === 'INR' ? 'active' : ''}" onclick="toggleCurrency('INR')">INR (₹)</button>
            <button class="currency-btn ${currentCurrency === 'USD' ? 'active' : ''}" onclick="toggleCurrency('USD')">USD ($)</button>
        </div>
        
        ${distanceInfo}
        
        <div class="cost-details">
            <div class="cost-item">
                <span class="cost-label">Accommodation (${costs.days} days × ${costs.people} people)</span>
                <span class="cost-value">${formatCurrency(costs.accommodation)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Food & Dining</span>
                <span class="cost-value">${formatCurrency(costs.food)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Transportation ${costs.distance > 0 ? '(distance-adjusted)' : ''}</span>
                <span class="cost-value">${formatCurrency(costs.transport)}</span>
            </div>
            <div class="cost-item">
                <span class="cost-label">Activities & Sightseeing</span>
                <span class="cost-value">${formatCurrency(costs.activities)}</span>
            </div>
            <div class="cost-item total">
                <span class="cost-label"><strong>Total Trip Cost</strong></span>
                <span class="cost-value"><strong>${formatCurrency(costs.total)}</strong></span>
            </div>
        </div>
        
        <div class="trip-actions">
            <button class="btn btn--primary" onclick="showModal('share-route-modal')">🔗 Share Route</button>
        </div>
    `;
    
    // Update share modal with coordinates
    const shareCoordinates = document.getElementById('share-coordinates');
    if (shareCoordinates && costs.fromCity && costs.toCity) {
        const fromCoords = citiesCoordinates[costs.fromCity];
        const toCoords = citiesCoordinates[costs.toCity];
        let routeText = `Route: ${costs.fromCity} (${fromCoords.lat}, ${fromCoords.lng})`;
        
        costs.waypoints.forEach((waypoint, index) => {
            const waypointCoords = citiesCoordinates[waypoint];
            if (waypointCoords) {
                routeText += ` → Waypoint ${index + 1}: ${waypoint} (${waypointCoords.lat}, ${waypointCoords.lng})`;
            }
        });
        
        routeText += ` → ${costs.toCity} (${toCoords.lat}, ${toCoords.lng})`;
        routeText += `\nTotal Distance: ${formatDistance(costs.distance)}`;
        routeText += `\nTotal Cost: ${formatCurrency(costs.total)}`;
        
        shareCoordinates.value = routeText;
    }
}

// Format currency
function formatCurrency(amount) {
    if (currentCurrency === 'INR') {
        return `₹${Math.round(amount).toLocaleString('en-IN')}`;
    } else {
        return `$${Math.round(amount / 83).toLocaleString('en-US')}`;
    }
}

// Toggle currency
function toggleCurrency(currency) {
    currentCurrency = currency;
    // Recalculate to update display
    const tripResults = document.getElementById('trip-results');
    if (tripResults && tripResults.style.display !== 'none') {
        calculateGPSTripCost();
    }
}

// Update calculator when inputs change
function updateCalculator() {
    const tripResults = document.getElementById('trip-results');
    if (tripResults && tripResults.style.display !== 'none') {
        calculateGPSTripCost();
    }
}

// Modal functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Make functions available globally for HTML onclick handlers
window.openBookingModal = openBookingModal;
window.openBookingModalFromCard = openBookingModalFromCard;
window.openBookingModalFromMap = openBookingModalFromMap;
window.closeBookingModal = closeBookingModal;
window.submitBooking = submitBooking;
window.closeConfirmationModal = closeConfirmationModal;
window.showBookings = showBookings;
window.showSection = showSection;
window.viewBookingDetails = viewBookingDetails;
window.navigateToVenue = navigateToVenue;
window.cancelBooking = cancelBooking;
window.hideToast = hideToast;
window.requestHighAccuracyLocation = requestHighAccuracyLocation;
window.enableHighAccuracyGPS = enableHighAccuracyGPS;
window.refreshLocation = refreshLocation;
window.toggleAutoRefresh = toggleAutoRefresh;
window.centerOnUser = centerOnUser;
window.toggleSatelliteView = toggleSatelliteView;
window.showTraffic = showTraffic;
window.showNearbyPOIs = showNearbyPOIs;
window.toggleView = toggleView;
window.sortByProximity = sortByProximity;
window.useCurrentLocationAsStart = useCurrentLocationAsStart;
window.addWaypoint = addWaypoint;
window.removeWaypoint = removeWaypoint;
window.calculateGPSTripCost = calculateGPSTripCost;
window.toggleCurrency = toggleCurrency;
window.openInMaps = openInMaps;
window.copyCoordinates = copyCoordinates;
window.showModal = showModal;
window.closeModal = closeModal;

// ========================================================
// AI Distance & Highway Route Analyzer Functions
// ========================================================

function setAIDistanceRoute(origin, destination) {
  const origEl = document.getElementById('ai-origin');
  const destEl = document.getElementById('ai-destination');
  if (origEl) origEl.value = origin;
  if (destEl) destEl.value = destination;
  calculateAIDistance();
}

async function calculateAIDistance() {
  const origInput = document.getElementById('ai-origin');
  const destInput = document.getElementById('ai-destination');
  const modeInput = document.getElementById('ai-travel-mode');
  const btn = document.getElementById('ai-calculate-btn');
  const resultsContainer = document.getElementById('ai-distance-results');

  const origin = (origInput && origInput.value.trim()) || 'Delhi';
  const destination = (destInput && destInput.value.trim()) || 'Agra';
  const travelMode = (modeInput && modeInput.value) || 'Car / Driving';

  if (!btn || !resultsContainer) return;

  const originalBtnText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '⚡ Calculating Route with AI Intelligence...';

  resultsContainer.style.display = 'block';
  resultsContainer.innerHTML = `
    <div style="text-align: center; padding: 24px; color: #38bdf8;">
      <div style="font-size: 24px; animation: spin 1s infinite linear; display: inline-block;">⚙️</div>
      <p style="margin-top: 8px; font-size: 13px; color: #cbd5e1;">Aarav AI is analyzing national expressways, live tolls, and scenic stops...</p>
    </div>
  `;

  try {
    const response = await fetch('/api/ai/calculate-distance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ origin, destination, travelMode }),
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const data = await response.json();
    renderAIDistanceResults(data);
  } catch (err) {
    console.error('AI distance calculation error:', err);
    // Display helpful fallback output
    resultsContainer.innerHTML = `
      <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); padding: 16px; border-radius: 12px; color: #fecaca;">
        <h4>Distance Calculation</h4>
        <p style="font-size: 13px;">Direct route between <strong>${origin}</strong> and <strong>${destination}</strong> is being processed. Please verify your connection or try another city pairing.</p>
      </div>
    `;
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalBtnText;
  }
}

function renderAIDistanceResults(data) {
  const container = document.getElementById('ai-distance-results');
  if (!container) return;

  const car = data.modes && data.modes.car ? data.modes.car : (data.car || {});
  const train = data.modes && data.modes.train ? data.modes.train : (data.train || {});
  const flight = data.modes && data.modes.flight ? data.modes.flight : (data.flight || {});
  const bus = data.modes && data.modes.bus ? data.modes.bus : (data.bus || {});
  const stops = data.scenicStopovers || [];

  container.innerHTML = `
    <div style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 16px; padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <!-- Route Title Banner -->
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.12); padding-bottom: 14px; margin-bottom: 16px; gap: 8px;">
        <div>
          <span style="font-size: 11px; text-transform: uppercase; color: #38bdf8; font-weight: 700;">Analyzed Route</span>
          <h3 style="color: #ffffff !important; font-size: 20px; margin: 2px 0 0 0;">${data.origin} ➔ ${data.destination}</h3>
          <span style="font-size: 12px; color: #cbd5e1;">Highway: <strong>${data.recommendedHighway || 'National Highway Corridor'}</strong></span>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 28px; font-weight: 800; color: #38bdf8;">${data.roadDistanceKm} <span style="font-size: 14px; font-weight: 500; color: #94a3b8;">km</span></div>
          <span style="font-size: 11px; color: #cbd5e1;">approx. ${data.roadDistanceMiles || Math.round(data.roadDistanceKm * 0.621)} miles | Air: ${data.straightLineKm || Math.round(data.roadDistanceKm * 0.8)} km</span>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="ai-distance-grid">
        <div class="ai-stat-card">
          <span class="label">🚗 Road Driving Time</span>
          <div class="value">${car.durationFormatted || (car.durationHours ? car.durationHours + ' hrs' : '4-5 hrs')}</div>
          <div class="subvalue">Est. Tolls: ${car.tollCostINR || car.estimatedTollsINR || '₹450'}</div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 4px;">Fuel: ${car.fuelCostINR || car.estimatedFuelCostINR || '₹2,500'}</div>
        </div>

        <div class="ai-stat-card">
          <span class="label">🚆 Train Options</span>
          <div class="value">${train.durationFormatted || '2-4 hrs'}</div>
          <div class="subvalue">Tickets: ${train.ticketCostINR || train.averageCostINR || '₹750 - ₹1,500'}</div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 4px;">Top: ${Array.isArray(train.bestTrains || train.topTrains) ? (train.bestTrains || train.topTrains).slice(0, 2).join(', ') : 'Vande Bharat / Express'}</div>
        </div>

        <div class="ai-stat-card">
          <span class="label">✈️ Flight Transit</span>
          <div class="value">${flight.durationFormatted || '1 hr 15 mins'}</div>
          <div class="subvalue">${flight.directAvailable ? 'Direct Available' : 'Connecting or N/A'}</div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 4px;">Fare: ${flight.ticketCostINR || flight.averageCostINR || '₹3,500+'}</div>
        </div>

        <div class="ai-stat-card">
          <span class="label">🚌 AC Volvo / Bus</span>
          <div class="value">${bus.durationFormatted || '5-6 hrs'}</div>
          <div class="subvalue">Tickets: ${bus.ticketCostINR || bus.averageCostINR || '₹600 - ₹1,100'}</div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 4px;">Overnight & daytime coaches</div>
        </div>
      </div>

      <!-- Scenic Stops & Route Intelligence -->
      ${stops.length > 0 ? `
        <div style="margin-top: 20px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.1);">
          <span style="font-size: 12px; font-weight: 700; color: #38bdf8; text-transform: uppercase; display: block; margin-bottom: 8px;">
            📍 Recommended Midway Scenic Stops:
          </span>
          <ul class="ai-stopover-list">
            ${stops.map(s => `
              <li>
                <span><strong>${s.name}</strong> — ${s.highlight}</span>
                <span style="color: #38bdf8; font-weight: 600;">${s.distanceFromOrigin || (s.distanceFromOriginKm ? s.distanceFromOriginKm + ' km' : '')}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Advisory & AI Summary -->
      <div style="margin-top: 16px; background: rgba(30, 41, 59, 0.7); padding: 14px; border-radius: 10px; border-left: 3px solid #38bdf8;">
        <p style="font-size: 12px; color: #f1f5f9; margin-bottom: 4px;">
          <strong>⏰ Best Departure Time:</strong> ${data.bestDepartureTime || data.bestTimeToDepart || 'Early morning 5:30 AM'}
        </p>
        <p style="font-size: 12px; color: #cbd5e1; margin-bottom: 6px;">
          <strong>🛡️ Route Tip:</strong> ${data.travelSafetyTip || (Array.isArray(data.routeSafetyTips) ? data.routeSafetyTips[0] : 'Check tire pressure and carry FASTag card.')}
        </p>
        <p style="font-size: 12px; color: #94a3b8; font-style: italic; margin-bottom: 0;">
          "${data.aiSummary || 'A scenic and well-connected route through India vibrant landscapes.'}"
        </p>
      </div>

      <!-- Action Button: Open in GPS Map -->
      <div style="margin-top: 16px; display: flex; justify-content: flex-end; gap: 10px;">
        <button type="button" class="btn btn--outline btn--sm" onclick="askGuideAboutRoute('${data.origin}', '${data.destination}')">
          👨🏽‍💼 Ask Guide Aarav About This Route
        </button>
        <a href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(data.origin)}&destination=${encodeURIComponent(data.destination)}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">
          🧭 Open in Google Maps
        </a>
      </div>
    </div>
  `;
}

// ========================================================
// AI Trip Guide Person ("Aarav") Interactive Chat Widget
// ========================================================

let aiGuideSpeechEnabled = false;
let aiGuideChatHistory = [];

function toggleAIGuide() {
  const windowEl = document.getElementById('ai-guide-window');
  if (!windowEl) return;

  const isHidden = windowEl.style.display === 'none' || !windowEl.style.display;
  windowEl.style.display = isHidden ? 'flex' : 'none';

  if (isHidden) {
    const input = document.getElementById('ai-guide-input');
    if (input) setTimeout(() => input.focus(), 150);
  }
}

function toggleGuideTTS() {
  aiGuideSpeechEnabled = !aiGuideSpeechEnabled;
  const btn = document.getElementById('ai-tts-btn');
  if (btn) {
    btn.innerHTML = aiGuideSpeechEnabled ? '🔊' : '🔈';
    btn.title = aiGuideSpeechEnabled ? 'Voice enabled (Aarav will read responses)' : 'Voice muted';
  }
}

function handleGuideInputKey(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendGuideMessage();
  }
}

function sendQuickGuidePrompt(text) {
  const input = document.getElementById('ai-guide-input');
  if (input) input.value = text;
  sendGuideMessage();
}

function askGuideAboutRoute(orig, dest) {
  toggleAIGuide();
  sendQuickGuidePrompt(`I'm planning to travel from ${orig} to ${dest}. What are the top places to visit and key travel tips?`);
}

async function sendGuideMessage() {
  const input = document.getElementById('ai-guide-input');
  const chatBody = document.getElementById('ai-chat-body');
  const sendBtn = document.getElementById('ai-guide-send-btn');

  if (!input || !chatBody) return;
  const message = input.value.trim();
  if (!message) return;

  // Add User Message Bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'ai-chat-bubble user';
  userBubble.textContent = message;
  chatBody.appendChild(userBubble);

  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  // Loading Bot Bubble
  const botBubble = document.createElement('div');
  botBubble.className = 'ai-chat-bubble bot';
  botBubble.innerHTML = '<em>Aarav is thinking...</em>';
  chatBody.appendChild(botBubble);
  chatBody.scrollTop = chatBody.scrollHeight;

  if (sendBtn) sendBtn.disabled = true;

  try {
    const response = await fetch('/api/ai/guide-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        history: aiGuideChatHistory.slice(-6)
      }),
    });

    const data = await response.json();
    const replyText = data.reply || 'Namaste! How else may I assist you with your travels across India?';

    // Format bold and linebreaks nicely
    const formattedHtml = replyText
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');

    botBubble.innerHTML = formattedHtml;

    // Track history
    aiGuideChatHistory.push({ role: 'user', text: message });
    aiGuideChatHistory.push({ role: 'model', text: replyText });

    // Optional Speech Synthesis
    if (aiGuideSpeechEnabled && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const cleanSpeakText = replyText.replace(/[*#_~]/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanSpeakText);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('Speech synthesis notice:', e);
      }
    }
  } catch (err) {
    console.error('Guide chat error:', err);
    botBubble.innerHTML = `Namaste! I am here. It seems our connection flickered for a second, but feel free to ask me again or check our <strong>🛰️ AI Distance & Expressway Analyzer</strong> above!`;
  } finally {
    if (sendBtn) sendBtn.disabled = false;
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

// Expose AI features globally
window.setAIDistanceRoute = setAIDistanceRoute;
window.calculateAIDistance = calculateAIDistance;
window.toggleAIGuide = toggleAIGuide;
window.toggleGuideTTS = toggleGuideTTS;
window.sendQuickGuidePrompt = sendQuickGuidePrompt;
window.sendGuideMessage = sendGuideMessage;
window.handleGuideInputKey = handleGuideInputKey;
window.askGuideAboutRoute = askGuideAboutRoute;
window.filterPlaces = filterPlaces;
window.renderPlaces = renderPlaces;
