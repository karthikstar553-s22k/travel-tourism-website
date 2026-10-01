import { TourPackage, TravelerReview, TravelArticle, CurrencyConfig, CurrencyCode } from '../types/travel';

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rateFromUSD: 1, label: 'USD ($)' },
  EUR: { code: 'EUR', symbol: '€', rateFromUSD: 0.92, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rateFromUSD: 0.79, label: 'GBP (£)' },
  AUD: { code: 'AUD', symbol: 'A$', rateFromUSD: 1.52, label: 'AUD (A$)' },
  INR: { code: 'INR', symbol: '₹', rateFromUSD: 83.5, label: 'INR (₹)' },
  JPY: { code: 'JPY', symbol: '¥', rateFromUSD: 154.0, label: 'JPY (¥)' },
};

export const TOURS_DATA: TourPackage[] = [
  {
    id: 'swiss-alps-odyssey',
    title: 'Alpine Splendors & Glacier Express',
    subtitle: 'High alpine panoramas, cogwheel rail passes & scenic lake cruises',
    tagline: 'The Crown Jewel of the Alps',
    destination: 'Zermatt, Interlaken & Lucerne',
    country: 'Switzerland',
    continent: 'Europe',
    category: 'adventure',
    durationDays: 8,
    durationNights: 7,
    groupSizeMax: 12,
    physicalRating: 'Moderate',
    priceUSD: 2850,
    originalPriceUSD: 3200,
    rating: 4.96,
    reviewsCount: 148,
    badge: 'Best Seller',
    featuredImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=1200&q=80',
    ],
    highlights: [
      'First-Class Glacier Express panoramic glass-roof journey',
      'Sunset views of the Matterhorn from Gornergrat ridge',
      'Lake Lucerne vintage steamboat private captain tour',
      'Artisan Swiss fondue tasting with regional vintages'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich & Scenic Transfer to Lucerne',
        description: 'Meet your expedition concierge at Zurich Airport. Relax on a first-class lakefront train to Lucerne with a private welcome dinner overlooking the Chapel Bridge.',
        mealPlan: 'Welcome Dinner included',
        accommodation: 'Hotel Schweizerhof Lucerne (5-star)',
        activities: ['Airport Meet & Greet', 'Chapel Bridge stroll', 'Welcome Wine & Cheese Reception']
      },
      {
        day: 2,
        title: 'Mount Pilatus Golden Roundtrip & Lake Cruise',
        description: 'Ascend the world steepest cogwheel railway to Mt. Pilatus. Enjoy sweeping views across 73 Alpine summits before descending via panoramic aerial cableway.',
        mealPlan: 'Breakfast & Alpine Lunch',
        accommodation: 'Hotel Schweizerhof Lucerne',
        activities: ['Cogwheel ascent', 'Summit terrace walk', 'Lake Lucerne steamboat cruise']
      },
      {
        day: 3,
        title: 'Interlaken & Lauterbrunnen Valley of 72 Waterfalls',
        description: 'Journey through the Bernese Oberland. Walk the mist-kissed paths of Trümmelbach Falls carved deep inside the mountain bedrock.',
        mealPlan: 'Breakfast included',
        accommodation: 'Victoria-Jungfrau Grand Hotel & Spa',
        activities: ['Lauterbrunnen valley walk', 'Trümmelbach glacial caves', 'Artisan chocolate masterclass']
      },
      {
        day: 4,
        title: 'Jungfraujoch — Top of Europe (3,454m)',
        description: 'Board the Eiger Express tri-cable gondola to the highest railway station in Europe. Step out onto the eternal snow and explore the subterranean Ice Palace.',
        mealPlan: 'Breakfast & Panorama Lunch',
        accommodation: 'Victoria-Jungfrau Grand Hotel & Spa',
        activities: ['Eiger Express flight', 'Sphinx Observatory platform', 'Ice Palace sculptures']
      },
      {
        day: 5,
        title: 'The Legendary Glacier Express to Zermatt',
        description: 'Board the Glacier Express in Excellence Class. Glide through viaducts, pine forests, and high mountain passes while enjoying a multi-course gourmet lunch.',
        mealPlan: 'Breakfast & 5-Course Train Lunch',
        accommodation: 'The Omnia Zermatt (Boutique Luxury)',
        activities: ['Glacier Express panorama rail', 'Zermatt car-free village tour']
      },
      {
        day: 6,
        title: 'Gornergrat & Reflections of the Matterhorn',
        description: 'Take the open-air cog railway up to 3,089m. Hike down to the still waters of Riffelsee to photograph the iconic Matterhorn mirror reflection.',
        mealPlan: 'Breakfast & Alpine Fondue Dinner',
        accommodation: 'The Omnia Zermatt',
        activities: ['Gornergrat train', 'Riffelsee mirror hike', 'Traditional Valais fondue evening']
      },
      {
        day: 7,
        title: 'Sunnegga Glacier Trail & Leisure in Zermatt',
        description: 'A relaxed morning exploring the 5-Lakes walk or enjoying the spa. Conclude with a celebratory farewell banquet hosted by our lead mountain guide.',
        mealPlan: 'Breakfast & Gala Farewell Dinner',
        accommodation: 'The Omnia Zermatt',
        activities: ['Botanical nature walk', 'Thermal wellness spa session', 'Gala dinner']
      },
      {
        day: 8,
        title: 'Departure via Geneva or Zurich',
        description: 'Scenic first-class transfer to Geneva or Zurich International Airport for your return flight home.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        activities: ['Private luggage transfer', 'First-class rail to airport']
      }
    ],
    included: [
      '7 nights in 5-star handpicked alpine luxury hotels',
      'All first-class Swiss Travel Pass transit & cable cars',
      'Glacier Express Excellence Class seat & dining reservation',
      'Dedicated certified mountain guide & tour director',
      'Daily gourmet breakfasts + 4 curated culinary dinners',
      'All national park & monument entrance fees'
    ],
    notIncluded: [
      'International roundtrip airfare',
      'Personal travel insurance (available as add-on)',
      'Alcoholic beverages outside of tasting dinners'
    ],
    departureDates: ['2026-05-15', '2026-06-10', '2026-07-04', '2026-08-18', '2026-09-12'],
    availableSeats: 6,
    bestSeason: 'May – October & Winter Skiing'
  },
  {
    id: 'amalfi-capri-paradise',
    title: 'Amalfi Coast, Capri & Pompeii Odyssey',
    subtitle: 'Cliffside villas, private yacht charter along Faraglioni rocks & lemon groves',
    tagline: 'The Romance of the Italian Riviera',
    destination: 'Positano, Amalfi, Ravello & Capri',
    country: 'Italy',
    continent: 'Europe',
    category: 'romantic',
    durationDays: 7,
    durationNights: 6,
    groupSizeMax: 10,
    physicalRating: 'Easy',
    priceUSD: 3100,
    originalPriceUSD: 3450,
    rating: 4.98,
    reviewsCount: 112,
    badge: 'Popular',
    featuredImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Private Gozzo boat day cruise around Capri and the Blue Grotto',
      'Sunset cocktails on a cliffside terrace in Ravello',
      'VIP skip-the-line archaeologist-guided tour of Pompeii',
      'Hands-on culinary class in an organic cliffside lemon orchard'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Naples & Coastal Drive to Positano',
        description: 'Private chauffeur meets you at Naples. Enjoy the dramatic drive along the Amalfi Corniche into postcard-perfect Positano.',
        mealPlan: 'Welcome Aperitivo & Seafood Dinner',
        accommodation: 'Le Sirenuse Positano',
        activities: ['Scenic coastal drive', 'Terrace welcome prosecco', 'Stroll through Positano alleys']
      },
      {
        day: 2,
        title: 'Positano by Foot & Path of the Gods Excursion',
        description: 'Explore the colorful artisan boutiques of Positano, followed by an optional gentle panoramic hike along the famous Path of the Gods.',
        mealPlan: 'Breakfast & Rustic Trattoria Lunch',
        accommodation: 'Le Sirenuse Positano',
        activities: ['Guided town walk', 'Artisan sandal making demo', 'Path of Gods viewpoint']
      },
      {
        day: 3,
        title: 'Private Yacht Charter: Capri & Faraglioni',
        description: 'Board a handcrafted Italian wooden yacht for a full day cruising Capri. Swim in secluded turquoise coves and see the Faraglioni sea stacks up close.',
        mealPlan: 'Breakfast & Prosecco Picnic onboard',
        accommodation: 'Capri Palace Jumeirah',
        activities: ['Private boat charter', 'Blue Grotto visit', 'Capri Piazzetta cocktail hour']
      },
      {
        day: 4,
        title: 'Anacapri Heights & Villa San Michele',
        description: 'Ride the chairlift to the highest peak of Mt. Solaro. Explore the peaceful gardens of Villa San Michele overlooking the Gulf of Naples.',
        mealPlan: 'Breakfast included',
        accommodation: 'Capri Palace Jumeirah',
        activities: ['Mt. Solaro chairlift', 'Villa San Michele gardens', 'Sunset view over Gulf']
      },
      {
        day: 5,
        title: 'Historic Amalfi & Cliff-Hanging Ravello',
        description: 'Return by ferry to Amalfi town. Visit the Saint Andrew Cathedral, then climb to Ravello to wander the legendary gardens of Villa Cimbrone.',
        mealPlan: 'Breakfast & Michelin-starred Dinner',
        accommodation: 'Belmond Hotel Caruso, Ravello',
        activities: ['Amalfi cathedral tour', 'Villa Cimbrone infinity terrace', 'Fine dining experience']
      },
      {
        day: 6,
        title: 'Lemon Grove Masterclass & Ancient Pompeii',
        description: 'Discover the secrets of authentic Limoncello and handmade pasta at a family lemon estate, followed by an exclusive archaeologist tour of Pompeii.',
        mealPlan: 'Breakfast & Farm-to-Table Lunch',
        accommodation: 'Belmond Hotel Caruso, Ravello',
        activities: ['Limoncello tasting & cooking', 'Pompeii ancient ruins VIP access']
      },
      {
        day: 7,
        title: 'Arrivederci Amalfi',
        description: 'Private airport transfer to Naples International Airport or Naples Centrale train station.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        activities: ['Private departure transfer']
      }
    ],
    included: [
      '6 nights in legendary luxury cliffside properties',
      'Private Gozzo boat full-day excursion with skipper & drinks',
      'Private Mercedes-Benz chauffeur for all transfers',
      'Exclusive certified archaeologist guide at Pompeii',
      'Hands-on pasta & limoncello cooking class',
      'Daily gourmet breakfasts & selected signature dinners'
    ],
    notIncluded: [
      'Airfare to/from Naples',
      'Personal gratuities & optional spa treatments'
    ],
    departureDates: ['2026-05-20', '2026-06-15', '2026-07-10', '2026-09-05', '2026-10-02'],
    availableSeats: 4,
    bestSeason: 'April – October'
  },
  {
    id: 'serengeti-safari-zanzibar',
    title: 'Serengeti Great Migration & Zanzibar Spice Isles',
    subtitle: 'Big Five safari across endless plains followed by white-sand coral reef luxury',
    tagline: 'Untamed Wilderness & Ocean Bliss',
    destination: 'Serengeti, Ngorongoro Crater & Zanzibar',
    country: 'Tanzania',
    continent: 'Africa',
    category: 'nature',
    durationDays: 10,
    durationNights: 9,
    groupSizeMax: 8,
    physicalRating: 'Moderate',
    priceUSD: 4600,
    originalPriceUSD: 5100,
    rating: 4.99,
    reviewsCount: 89,
    badge: 'Bucket List',
    featuredImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Hot air balloon flight over the Serengeti at dawn with champagne breakfast',
      'Private 4x4 game drives across the UNESCO Ngorongoro volcanic caldera',
      'Maasai elder cultural storytelling by evening boma fires',
      'Barefoot private island villa retreat on Zanzibar turquoise coast'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kilimanjaro to Arusha Coffee Plantations',
        description: 'Arrive at Kilimanjaro International Airport. Unwind at an organic colonial coffee lodge nestled beneath Mount Meru.',
        mealPlan: 'Dinner included',
        accommodation: 'Arusha Coffee Lodge',
        activities: ['VIP tarmac greeting', 'Coffee plantation sunset tour', 'Safari briefing']
      },
      {
        day: 2,
        title: 'Tarangire National Park & Giants Among Baobabs',
        description: 'Drive to Tarangire, famous for its massive elephant herds and centuries-old baobab trees. Spot tree-climbing lions and rare dry-country antelopes.',
        mealPlan: 'All meals included',
        accommodation: 'Sanctuary Swala Camp',
        activities: ['Full-day safari drive', 'Bush picnic under acacia trees', 'Sundowners overlooking waterhole']
      },
      {
        day: 3,
        title: 'The Great Ngorongoro Crater Floor',
        description: 'Descend 600 meters into the largest intact volcanic caldera on Earth. High concentration of black rhinos, lion prides, and flamingo flocks.',
        mealPlan: 'All meals included',
        accommodation: 'Ngorongoro Crater Lodge',
        activities: ['Crater rim sunrise', 'Lake Magadi flamingo viewing', 'Black rhino search']
      },
      {
        day: 4,
        title: 'Into the Endless Plains of the Serengeti',
        description: 'Fly by bush plane into the heart of the Serengeti. Afternoon game drive tracking leopard territories and great migration herds.',
        mealPlan: 'All meals included',
        accommodation: 'Four Seasons Safari Lodge Serengeti',
        activities: ['Scenic bush flight', 'Predator tracking drive', 'Stargazing around campfire']
      },
      {
        day: 5,
        title: 'Sunrise Hot Air Balloon & Migration Crossing',
        description: 'Float silently above the plains as golden dawn breaks over wildebeest herds. Land for a five-star champagne breakfast in the bush.',
        mealPlan: 'All meals included',
        accommodation: 'Four Seasons Safari Lodge Serengeti',
        activities: ['Hot air balloon safari', 'Champagne bush breakfast', 'Mara River herd tracking']
      },
      {
        day: 6,
        title: 'Fly to Zanzibar & Ancient Stone Town',
        description: 'Board your charter flight to the exotic spice island of Zanzibar. Stroll the narrow, carved-door labyrinth of UNESCO-listed Stone Town.',
        mealPlan: 'Breakfast & Seafood Dinner',
        accommodation: 'Park Hyatt Zanzibar',
        activities: ['Coastal flight', 'Stone Town historical tour', 'Spice bazaar sensory walk']
      },
      {
        day: 7,
        title: 'Transfer to Kendwa Turquoise Beach Sanctuary',
        description: 'Travel north to the powdery white sands of Kendwa. Check into your oceanfront villa with private plunge pool and direct reef access.',
        mealPlan: 'All-inclusive resort dining',
        accommodation: 'Zuri Zanzibar Beach Resort',
        activities: ['Private transfer', 'Snorkeling over coral reef', 'Sunset dhow sailboat cruise']
      },
      {
        day: 8,
        title: 'Mnemba Atoll Dolphin & Marine Safari',
        description: 'Cruise to the marine conservation reserve of Mnemba Atoll. Swim alongside wild spinner dolphins and vibrant coral sea turtles.',
        mealPlan: 'All-inclusive resort dining',
        accommodation: 'Zuri Zanzibar Beach Resort',
        activities: ['Dhow marine expedition', 'Reef snorkeling', 'Fresh coconut tasting']
      },
      {
        day: 9,
        title: 'Island Wellness & Swahili Cultural Feast',
        description: 'Indulge in a restorative coconut-and-spice spa ritual, followed by a torch-lit Swahili banquet on the sand with live acoustic Taarab music.',
        mealPlan: 'All-inclusive resort dining',
        accommodation: 'Zuri Zanzibar Beach Resort',
        activities: ['Holistic spice spa session', 'Beach yoga at dawn', 'Farewell beach bonfire']
      },
      {
        day: 10,
        title: 'Farewell East Africa',
        description: 'Private transfer to Zanzibar Airport for your outbound journey.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        activities: ['Airport transfer']
      }
    ],
    included: [
      'All luxury safari camps, 5-star lodges & beach villa accommodation',
      'Serengeti Hot Air Balloon safari with champagne breakfast',
      'Unlimited private 4x4 open-top Land Cruiser game drives with master ranger',
      'Internal bush flight (Serengeti to Zanzibar)',
      'All national park conservation & concession fees',
      'All meals on safari & all-inclusive package in Zanzibar'
    ],
    notIncluded: [
      'International flights to Kilimanjaro and from Zanzibar',
      'Tanzania tourist visa ($50-$100 on arrival)'
    ],
    departureDates: ['2026-06-08', '2026-07-14', '2026-08-05', '2026-09-18', '2026-10-10'],
    availableSeats: 3,
    bestSeason: 'June – October (Great Migration)'
  },
  {
    id: 'kyoto-tokyo-heritage',
    title: 'Kyoto Zen, Mount Fuji & Tokyo Neo-Culture',
    subtitle: 'From centuries-old temples, ryokans and tea masters to Tokyo culinary neon',
    tagline: 'Tradition Meets Tomorrow',
    destination: 'Tokyo, Hakone, Kyoto & Nara',
    country: 'Japan',
    continent: 'Asia',
    category: 'cultural',
    durationDays: 9,
    durationNights: 8,
    groupSizeMax: 10,
    physicalRating: 'Easy',
    priceUSD: 3400,
    originalPriceUSD: 3800,
    rating: 4.97,
    reviewsCount: 164,
    badge: 'Cultural Masterpiece',
    featuredImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Private after-hours meditation with a Zen Buddhist monk in Kyoto',
      'Shinkansen bullet train Gran Class travel at 320 km/h',
      'Traditional onsen hot spring ryokan stay with 10-course Kaiseki dinner',
      'Tsukiji outer market street food safari with Tokyo master chef'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Tokyo & Shinjuku Skyline',
        description: 'Arrive at Haneda or Narita. Private transfer to your luxury hotel in central Tokyo with panoramic city views.',
        mealPlan: 'Welcome Izakaya Dinner',
        accommodation: 'The Tokyo Station Hotel or Grand Hyatt Tokyo',
        activities: ['Private airport transfer', 'Welcome dinner in Ginza']
      },
      {
        day: 2,
        title: 'Tsukiji Market, Asakusa Senso-ji & Meiji Shrine',
        description: 'Taste tamagoyaki and sashimi at Tsukiji, wander beneath the giant lanterns of Senso-ji, and stroll the serene forested paths of Meiji Jingu.',
        mealPlan: 'Breakfast & Street Food Tastings',
        accommodation: 'The Tokyo Station Hotel',
        activities: ['Tsukiji culinary walk', 'Senso-ji incense ceremony', 'Harajuku & Omotesando stroll']
      },
      {
        day: 3,
        title: 'Hakone Onsen & Mount Fuji Views',
        description: 'Travel to Hakone. Soak in natural cedar hot spring mineral baths and view Mount Fuji across serene Lake Ashi.',
        mealPlan: 'Breakfast & Multi-Course Kaiseki Dinner',
        accommodation: 'Gora Kadan Luxury Ryokan',
        activities: ['Hakone ropeway', 'Lake Ashi pirate ship cruise', 'Traditional onsen bath']
      },
      {
        day: 4,
        title: 'Shinkansen Bullet Train to Ancient Kyoto',
        description: 'Glide westward across Honshu on the Shinkansen. Arrive in Kyoto and stroll the preserved lantern-lit stone alleys of Gion.',
        mealPlan: 'Breakfast & Kyoto Kyoto Tofu banquet',
        accommodation: 'The Ritz-Carlton, Kyoto',
        activities: ['Gran Class bullet train', 'Gion geisha district walk', 'Pontocho alley dinner']
      },
      {
        day: 5,
        title: 'Fushimi Inari Torii Gates & Arashiyama Bamboo Grove',
        description: 'Morning walk through 10,000 scarlet torii gates at Fushimi Inari. Later, hear the rustle of towering Arashiyama bamboo stalks and cross Togetsukyo Bridge.',
        mealPlan: 'Breakfast & Shojin Ryori (Monk cuisine)',
        accommodation: 'The Ritz-Carlton, Kyoto',
        activities: ['Fushimi Inari shrine hike', 'Arashiyama bamboo grove', 'Tenryu-ji Zen garden']
      },
      {
        day: 6,
        title: 'Kinkaku-ji Golden Pavilion & Authentic Tea Ceremony',
        description: 'Marvel at Kinkaku-ji shimmering on its reflective pond. Participate in a private Chanoyu tea ceremony led by a 15th-generation tea master.',
        mealPlan: 'Breakfast included',
        accommodation: 'The Ritz-Carlton, Kyoto',
        activities: ['Golden Pavilion exploration', 'Private tea master ceremony', 'Calligraphy experience']
      },
      {
        day: 7,
        title: 'Ancient Nara Deer & Great Bronze Buddha',
        description: 'Day excursion to Nara. Bow alongside wild sika deer in Nara Park and stand in awe before Todai-ji, one of the world largest wooden buildings.',
        mealPlan: 'Breakfast & Local Soba Lunch',
        accommodation: 'The Ritz-Carlton, Kyoto',
        activities: ['Nara Park deer interaction', 'Todai-ji Great Buddha', 'Kasuga Taisha lantern shrine']
      },
      {
        day: 8,
        title: 'Return to Tokyo & Shibuya Crossing Night Lights',
        description: 'Bullet train back to Tokyo. Experience teamLab digital art museum and the dazzling energy of the world busiest crossing at Shibuya.',
        mealPlan: 'Breakfast & Farewell Wagyu Feast',
        accommodation: 'The Tokyo Station Hotel',
        activities: ['teamLab Borderless immersion', 'Shibuya Sky deck sunset', 'Kobe & Wagyu farewell dinner']
      },
      {
        day: 9,
        title: 'Sayonara Japan',
        description: 'Enjoy a leisurely morning matcha before your private chauffeur to Tokyo airport.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        activities: ['Private airport transfer']
      }
    ],
    included: [
      '8 nights in premium hotels & authentic 5-star onsen ryokan',
      'All Shinkansen bullet train passes in first class',
      'Private English-speaking cultural master guides',
      'Private tea ceremony & monk meditation access',
      'Daily gourmet breakfasts & 3 exclusive specialty dinners',
      'All entrance fees & luggage forwarding between cities'
    ],
    notIncluded: [
      'International flights',
      'Personal purchases & souvenirs'
    ],
    departureDates: ['2026-04-10', '2026-05-02', '2026-09-15', '2026-10-22', '2026-11-12'],
    availableSeats: 5,
    bestSeason: 'March – May & October – November'
  },
  {
    id: 'patagonia-glacier-expedition',
    title: 'Patagonia Fjords & Torres del Paine Trek',
    subtitle: 'Turquoise glacial lakes, dramatic granite spires and Chilean fjord cruising',
    tagline: 'The Edge of the Inhabited World',
    destination: 'Torres del Paine & Los Glaciares',
    country: 'Chile & Argentina',
    continent: 'Americas',
    category: 'adventure',
    durationDays: 11,
    durationNights: 10,
    groupSizeMax: 12,
    physicalRating: 'Challenging',
    priceUSD: 3950,
    originalPriceUSD: 4400,
    rating: 4.95,
    reviewsCount: 76,
    badge: 'Adventure Icon',
    featuredImage: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Ice trekking on Perito Moreno Glacier with crampons and ice axes',
      'Exclusive lodge with direct panoramic views of the Cuernos del Paine',
      'Catamaran navigation among calving turquoise icebergs on Lake Grey',
      'Traditional Patagonian lamb asado roasted over open wood embers'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Santiago & Flight to Punta Arenas',
        description: 'Land in southern Chile and drive across the expansive Magellanic steppe to Puerto Natales.',
        mealPlan: 'Welcome Dinner with Magellan King Crab',
        accommodation: 'The Singular Patagonia',
        activities: ['Transfer from Punta Arenas', 'Patagonian fjord welcome dinner']
      },
      {
        day: 2,
        title: 'Into Torres del Paine National Park',
        description: 'Enter the world-famous UNESCO biosphere reserve. Spot herds of wild guanacos and Andean condors soaring above.',
        mealPlan: 'All meals included',
        accommodation: 'Explora Torres del Paine',
        activities: ['Wildlife tracking safari', 'Pehoe Lake lookout trek']
      },
      {
        day: 3,
        title: 'Trek to the Base of the Towers (Las Torres)',
        description: 'An exhilarating 18km hike up the Ascencio Valley to the glacial tarn beneath the towering granite triad.',
        mealPlan: 'All meals + trail picnic pack',
        accommodation: 'Explora Torres del Paine',
        activities: ['Full-day iconic trek', 'Glacial lake lunch', 'Spa hydrotherapy recovery']
      },
      {
        day: 4,
        title: 'Grey Glacier Ice Cruise & Kayak Exploration',
        description: 'Navigate Lake Grey on an expedition catamaran right up to the 30-meter ice walls of Grey Glacier.',
        mealPlan: 'All meals included',
        accommodation: 'Explora Torres del Paine',
        activities: ['Iceberg navigation', 'French Valley lower loop hike']
      },
      {
        day: 5,
        title: 'Cross the Border to El Calafate, Argentina',
        description: 'Scenic overland traverse through the frontier pampa into Argentine Patagonia, the gateway to Los Glaciares.',
        mealPlan: 'Breakfast & Argentine Malbec Dinner',
        accommodation: 'Eolo - Patagonia Spirit',
        activities: ['Scenic border crossing', 'Glaciology interpretive center']
      },
      {
        day: 6,
        title: 'Perito Moreno Glacier Ice Hike',
        description: 'Strap on crampons to walk atop the living, roaring Perito Moreno Glacier. Listen to the thunderous echo of ice calving into Lake Argentino.',
        mealPlan: 'Breakfast & Glacier Picnic',
        accommodation: 'Eolo - Patagonia Spirit',
        activities: ['Mini-trekking on the ice sheet', 'Boardwalk viewing balconies', 'Whiskey on glacier ice']
      },
      {
        day: 7,
        title: 'El Chaltén: Capital of Trekking & Mount Fitz Roy',
        description: 'Drive along Lake Viedma to the mountain hamlet of El Chaltén nestled beneath the jagged silhouette of Mount Fitz Roy.',
        mealPlan: 'Breakfast & Hearty Mountain Stew Dinner',
        accommodation: 'Chalten Camp or Destino Sur',
        activities: ['Drive past Viedma Glacier', 'Mirador de los Cóndores walk']
      },
      {
        day: 8,
        title: 'Laguna de los Tres — The Fitz Roy Viewpoint',
        description: 'The pinnacle day-trek of South America. Reach the turquoise alpine lake directly at the foot of Mount Fitz Roy sheer granite walls.',
        mealPlan: 'Breakfast & Gourmet Trail Lunch',
        accommodation: 'Chalten Camp',
        activities: ['Fitz Roy alpine trek', 'Glacial moraine summit', 'Celebratory craft beer tasting']
      },
      {
        day: 9,
        title: 'Laguna Torre & Cerro Torre Spire',
        description: 'A gentle scenic trail along the Fitz Roy River to the floating icebergs of Laguna Torre, framed by the needle of Cerro Torre.',
        mealPlan: 'Breakfast & Traditional Asado Dinner',
        accommodation: 'Chalten Camp',
        activities: ['Laguna Torre trail', 'Gaucho sheep farm asado feast']
      },
      {
        day: 10,
        title: 'Return to El Calafate & Farewell Celebration',
        description: 'Return to El Calafate for boutique shopping, artisan leather crafts, and our farewell dinner.',
        mealPlan: 'Breakfast & Gala Farewell Dinner',
        accommodation: 'Eolo - Patagonia Spirit',
        activities: ['Afternoon leisure', 'Patagonian wine pairing banquet']
      },
      {
        day: 11,
        title: 'Departure flight to Buenos Aires',
        description: 'Transfer to El Calafate Airport for flight connection home or to Buenos Aires.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        activities: ['Airport transfer']
      }
    ],
    included: [
      '10 nights in premier eco-luxury lodges & luxury glamping',
      'Professional certified IFMGA wilderness trekking guides',
      'Perito Moreno Glacier crampon trekking equipment & permits',
      'All border-crossing coordination & private overland transit',
      'All national park admissions (Chile & Argentina)',
      'Gourmet meals, trail rations & vintage regional wines'
    ],
    notIncluded: [
      'Domestic flights within Chile/Argentina',
      'Personal trekking gear (hiking poles, boots)'
    ],
    departureDates: ['2026-10-15', '2026-11-10', '2026-12-05', '2027-01-18', '2027-02-14'],
    availableSeats: 6,
    bestSeason: 'November – March (Austral Summer)'
  },
  {
    id: 'santorini-mykonos-aegean',
    title: 'Santorini Sunset & Cyclades Yacht Cruise',
    subtitle: 'Whitewashed caldera suites, ancient Akrotiri ruins, and hidden Aegean coves',
    tagline: 'The Timeless Greek Island Dream',
    destination: 'Santorini, Naxos & Mykonos',
    country: 'Greece',
    continent: 'Europe',
    category: 'coastal',
    durationDays: 7,
    durationNights: 6,
    groupSizeMax: 10,
    physicalRating: 'Easy',
    priceUSD: 2450,
    originalPriceUSD: 2800,
    rating: 4.93,
    reviewsCount: 130,
    badge: 'Romantic Getaway',
    featuredImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Private catamaran sunset cruise with volcanic hot springs swim',
      'Cave suite with infinity plunge pool overlooking Oia caldera',
      'Wine tasting of indigenous Assyrtiko grapes in ancient volcanic soil',
      'Exclusive guided walk through the Minoan Bronze Age city of Akrotiri'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Santorini & Oia Caldera Welcome',
        description: 'Arrive at Santorini Thira Airport. Private transfer to your cliffside cave suite in Oia.',
        mealPlan: 'Sunset Welcome Dinner',
        accommodation: 'Canaves Oia Suites',
        activities: ['Caldera panoramic check-in', 'Oia sunset stroll', 'Greek mezze dinner']
      },
      {
        day: 2,
        title: 'Catamaran Sailing & Volcanic Hot Springs',
        description: 'Sail the sapphire waters of the submerged caldera. Swim in volcanic thermal springs, snorkel at Red Beach, and savor an onboard barbecue.',
        mealPlan: 'Breakfast & Catamaran Seafood BBQ',
        accommodation: 'Canaves Oia Suites',
        activities: ['Catamaran cruise', 'Red Beach snorkeling', 'Volcanic hot springs swim']
      },
      {
        day: 3,
        title: 'Akrotiri Ruins & Volcanic Vineyard Tour',
        description: 'Step back 3,600 years at the prehistoric ash-preserved city of Akrotiri. Later, tour traditional wineries cultivating basket-woven vines.',
        mealPlan: 'Breakfast & Wine Pairing Lunch',
        accommodation: 'Canaves Oia Suites',
        activities: ['Akrotiri archaeologist tour', 'Assyrtiko wine tasting', 'Pyrgos village walk']
      },
      {
        day: 4,
        title: 'High-Speed Ferry to Naxos & Ancient Temple of Apollo',
        description: 'Cruise to lush Naxos. Walk up to the marble Portara gate of Apollo temple framed by turquoise sea and discover mountain marble villages.',
        mealPlan: 'Breakfast & Organic Naxian Dinner',
        accommodation: 'Naxian Collection Luxury Villas',
        activities: ['Portara sunset view', 'Chalki village exploration', 'Citron liqueur tasting']
      },
      {
        day: 5,
        title: 'Hidden Coves of the Small Cyclades by Boat',
        description: 'Private rib-boat excursion to uninhabited Koufonisia islets with powdery blonde sands and crystal lagoon waters.',
        mealPlan: 'Breakfast & Island Beach Tavern Lunch',
        accommodation: 'Naxian Collection Luxury Villas',
        activities: ['Secluded cove swimming', 'Sea cave exploration']
      },
      {
        day: 6,
        title: 'Mykonos Windmills & Little Venice Charm',
        description: 'Ferry across to cosmopolitan Mykonos. Wander the gleaming sugar-cube alleys, photograph the iconic 16th-century windmills, and dine by the sea.',
        mealPlan: 'Breakfast & Farewell Celebration Dinner',
        accommodation: 'Cavo Tagoo Mykonos',
        activities: ['Mykonos windmill walk', 'Little Venice cocktails', 'Farewell dinner']
      },
      {
        day: 7,
        title: 'Departure via Athens or Mykonos',
        description: 'Enjoy a leisurely breakfast before your private yacht or flight transfer.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        activities: ['Private airport transfer']
      }
    ],
    included: [
      '6 nights in five-star cliffside suites & luxury island villas',
      'Private sunset catamaran cruise with open bar & barbecue',
      'All inter-island high-speed business class ferry transfers',
      'Akrotiri VIP archaeologist entrance & guided tour',
      'Daily gourmet breakfasts + 3 curated dining events'
    ],
    notIncluded: [
      'International flights to/from Greece',
      'Personal boutique shopping expenses'
    ],
    departureDates: ['2026-05-18', '2026-06-22', '2026-07-16', '2026-08-20', '2026-09-14'],
    availableSeats: 4,
    bestSeason: 'May – October'
  },
  {
    id: 'bali-ubud-spiritual-retreat',
    title: 'Bali Spiritual Sanctuary & Komodo Dragon Cruise',
    subtitle: 'Ancient water temples, emerald rice terraces, luxury jungle wellness, and pink beach cruises',
    tagline: 'The Island of the Gods',
    destination: 'Ubud, Sidemen & Komodo National Park',
    country: 'Indonesia',
    continent: 'Asia',
    category: 'luxury',
    durationDays: 8,
    durationNights: 7,
    groupSizeMax: 8,
    physicalRating: 'Easy',
    priceUSD: 2190,
    originalPriceUSD: 2600,
    rating: 4.94,
    reviewsCount: 104,
    badge: 'Wellness Focus',
    featuredImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559628239-eb1637c35817?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Private water purification ceremony at Tirta Empul with high priest',
      'Luxury phinisi schooner liveaboard cruise through Komodo National Park',
      'Snorkeling over pristine coral gardens and walking on the famous Pink Beach',
      'Private infinity pool villa overlooking the Ayung River valley'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Denpasar & Private Transfer to Ubud',
        description: 'Arrive in Bali and escape into the emerald rain forest of Ubud. Check in to your private bamboo-and-teak jungle sanctuary.',
        mealPlan: 'Welcome Balinese Banquet',
        accommodation: 'Capella Ubud or Mandapa, a Ritz-Carlton Reserve',
        activities: ['VIP airport fast-track', 'Traditional welcome blessing', 'Ayung river dinner']
      },
      {
        day: 2,
        title: 'Sacred Water Purification & Tegallalang Terraces',
        description: 'Take part in a sacred Melukat cleansing ritual at the spring-fed waters of Tirta Empul. Walk the stepped emerald paddies of Tegallalang.',
        mealPlan: 'Breakfast & Organic Garden Lunch',
        accommodation: 'Capella Ubud',
        activities: ['Water blessing ceremony', 'Rice terrace walk', 'Balinese herbal wellness demo']
      },
      {
        day: 3,
        title: 'Ubud Artisan Craftsmanship & Mount Batur Vista',
        description: 'Visit traditional woodcarvers and silversmiths in Celuk and Mas villages. Enjoy afternoon tea looking across volcanic Mount Batur and its crater lake.',
        mealPlan: 'Breakfast & Afternoon High Tea',
        accommodation: 'Capella Ubud',
        activities: ['Artisan workshop visits', 'Batur volcanic viewpoint', 'Traditional Kecak fire dance']
      },
      {
        day: 4,
        title: 'Fly to Labuan Bajo & Board Luxury Phinisi Schooner',
        description: 'Fly to Flores and embark on a handcrafted wooden Phinisi yacht. Set sail into the waters of Komodo National Park.',
        mealPlan: 'All meals prepared by private yacht chef',
        accommodation: 'Private Phinisi Luxury Cabin',
        activities: ['Scenic island flight', 'Yacht embarkation', 'Sunset bat colony flight over Kalong Island']
      },
      {
        day: 5,
        title: 'Komodo Dragons of Rinca & Pink Beach Snorkeling',
        description: 'Ranger-guided walking safari to encounter the prehistoric Komodo dragons in their natural habitat. Drop anchor at the miraculous Pink Beach for reef snorkeling.',
        mealPlan: 'All meals on board',
        accommodation: 'Private Phinisi Luxury Cabin',
        activities: ['Komodo dragon safari', 'Pink Beach walk & snorkeling', 'Manta Point ray encounter']
      },
      {
        day: 6,
        title: 'Padar Island Summit Sunrise & Manta Ray Glide',
        description: 'Hike to the legendary tri-colored bay summit of Padar Island at daybreak. Drift alongside gentle giant manta rays in crystal-clear waters.',
        mealPlan: 'All meals on board',
        accommodation: 'Private Phinisi Luxury Cabin',
        activities: ['Padar sunrise hike', 'Manta swimming', 'Candlelit deck dinner under southern stars']
      },
      {
        day: 7,
        title: 'Return to Bali & Uluwatu Cliffside Sunset',
        description: 'Disembark and return to southern Bali. Spend your final evening atop the 70-meter limestone cliffs of Uluwatu with panoramic Indian Ocean views.',
        mealPlan: 'Breakfast & Cliffside Seafood Gala',
        accommodation: 'Bulgari Resort Bali or Alila Villas Uluwatu',
        activities: ['Return flight to Bali', 'Uluwatu temple sunset', 'Farewell gala feast']
      },
      {
        day: 8,
        title: 'Farewell Bali',
        description: 'Relax in your oceanfront villa before your private transfer to the airport.',
        mealPlan: 'Breakfast included',
        accommodation: 'Departure',
        activities: ['Private airport transfer']
      }
    ],
    included: [
      '4 nights in luxury rainforest pool villa + 3 nights on luxury Phinisi yacht',
      'All internal roundtrip flights between Bali and Labuan Bajo',
      'All meals, private yacht crew, dive master and personal chef',
      'Exclusive private temple blessing ceremonies and permits',
      'National Park wildlife ranger fees'
    ],
    notIncluded: [
      'International flights to Denpasar',
      'Alcoholic beverages aboard yacht (available à la carte)'
    ],
    departureDates: ['2026-05-10', '2026-06-18', '2026-07-25', '2026-08-30', '2026-09-22'],
    availableSeats: 4,
    bestSeason: 'April – October'
  }
];

export const TRAVEL_REVIEWS: TravelerReview[] = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    location: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'August 2026',
    tripTitle: 'Alpine Splendors & Glacier Express',
    comment: 'The Glacier Express Excellence Class was effortlessly magical. Every detail was orchestrated to perfection, from our luggage seamlessly moving between hotels to the private fondue experience in Zermatt.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Marcus & Chloe Vance',
    location: 'San Francisco, USA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'July 2026',
    tripTitle: 'Serengeti Great Migration & Zanzibar',
    comment: 'Floating over the Serengeti in a hot air balloon as dawn painted the herds golden made us both tear up. The lodge in Zanzibar was paradise on earth. The guides are deeply knowledgeable and passionate.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Kenji Takahashi',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'June 2026',
    tripTitle: 'Amalfi Coast, Capri & Pompeii Odyssey',
    comment: 'The private Gozzo yacht day around Capri was the absolute highlight of my year. Far away from tourist crowds, swimming in private grottos and sipping cold Falanghina. Will definitely book our next expedition here.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Sophia Lindqvist',
    location: 'Stockholm, Sweden',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: 'September 2026',
    tripTitle: 'Patagonia Fjords & Torres del Paine Trek',
    comment: 'Cramponing across Perito Moreno glacier was thrilling beyond words. The guides kept us safe and engaged, and returning to the heated hot tubs overlooking the granite horns was peak bliss.',
    verified: true
  }
];

export const TRAVEL_ARTICLES: TravelArticle[] = [
  {
    id: 'article-1',
    title: 'The Art of High Alpine Packing: 8 Essentials for Every Season',
    category: 'Expedition Advice',
    readTime: '4 min read',
    date: 'September 2026',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    author: 'Lukas Meyer, Senior Alpine Director',
    summary: 'From breathable merino baselayers to high-altitude UV eye protection, master the art of lightweight mountain preparation without overpacking.',
    keyAdvice: [
      'Layering principle: moisture-wicking base, insulating fleece, waterproof Gore-Tex shell.',
      'Always bring category 3 or 4 sunglasses for snow reflection glare.',
      'Keep electronics warm in inner chest pockets to prevent lithium battery drain.'
    ]
  },
  {
    id: 'article-2',
    title: 'Responsible Wildlife Travel: How to Safari with Zero Trace',
    category: 'Conservation',
    readTime: '6 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    author: 'Amara Kiprop, Lead Naturalist',
    summary: 'Understand ethical game viewing distances, supporting local indigenous communities, and choosing sustainable solar-powered conservation camps.',
    keyAdvice: [
      'Never demand your ranger crowd an animal for a closer photograph.',
      'Opt for safari camps that contribute at least 30% of fees to community conservancies.',
      'Use flash-free photography to protect nocturnal hunting behaviors.'
    ]
  },
  {
    id: 'article-3',
    title: 'A Gastronomic Map of the Amalfi Coast: Beyond Limoncello',
    category: 'Culinary Journeys',
    readTime: '5 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    author: 'Matteo Bellini, Mediterranean Culinary Curator',
    summary: 'Discover artisanal colatura di alici from Cetara, delicate Provolone del Monaco cheese, and high-altitude cliffside vines.',
    keyAdvice: [
      'Taste Cetara anchovy essence drizzled over garlic and spaghetti.',
      'Seek small-batch Sfusato Amalfitano lemons eaten fresh with sea salt and mint.',
      'Pair fresh seafood with chilled DOC Costa d’Amalfi Furore white wine.'
    ]
  }
];

export const FAQ_LIST = [
  {
    question: 'How do tour departures and small group sizes work?',
    answer: 'Our signature journeys are strictly limited to small intimate groups (maximum 8–12 guests) to preserve exclusivity, minimize environmental impact, and grant access to boutique accommodations and private estates that large tour buses cannot enter.'
  },
  {
    question: 'Can any of these itineraries be customized into a private trip?',
    answer: 'Absolutely. Every single package showcased can be tailored into a bespoke private departure for solo travelers, couples, families, or private groups with your own dedicated private driver, guide, and custom dates.'
  },
  {
    question: 'What is your booking deposit and cancellation policy?',
    answer: 'We require a flexible 20% deposit to lock in your luxury accommodations and permits. Cancellations made up to 60 days before departure receive a 100% credit toward any future journey within 24 months, or a full refund minus nominal local permit fees.'
  },
  {
    question: 'Are international flights included in the package price?',
    answer: 'Tour prices include all internal flights, first-class trains, private yachts, and overland Mercedes-Benz transfers within the destination. Our concierge team can effortlessly book your international transatlantic/transpacific business or economy flights upon request.'
  },
  {
    question: 'What level of physical fitness is required?',
    answer: 'Each tour clearly displays a Physical Rating (Easy, Moderate, or Challenging). Easy tours involve leisurely city walks and gentle boat rides, while Challenging treks in Patagonia or the Alps require good aerobic endurance and mountain walking capability.'
  }
];
