// Guided Plunder — LBI Business Deals
// Gold coin pins on the treasure map
// Each links out to guidedplunder.com

const GUIDED_PLUNDER_URL = 'https://www.guidedplunder.com';

const DEAL_BUSINESSES = [
  {
    name: "The Engleside Inn",
    category: "Lodging",
    town: "Beach Haven",
    deal: "15% off midweek stays",
    lat: 39.5590,
    lng: -74.2430,
    icon: "🏨",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Daddy O Hotel",
    category: "Lodging",
    town: "Brant Beach",
    deal: "Free welcome cocktail",
    lat: 39.6230,
    lng: -74.1640,
    icon: "🏨",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "The Chicken or the Egg",
    category: "Restaurant",
    town: "Beach Haven",
    deal: "Exclusive member deal",
    lat: 39.5635,
    lng: -74.2415,
    icon: "🍽️",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "LBI Surfing",
    category: "Rentals",
    town: "Surf City",
    deal: "Free delivery for members",
    lat: 39.6630,
    lng: -74.1470,
    icon: "🏄",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Fantasy Island",
    category: "Family Fun",
    town: "Beach Haven",
    deal: "Member discount available",
    lat: 39.5710,
    lng: -74.2357,
    icon: "🎡",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Harvey Cedars Shellfish Co.",
    category: "Seafood",
    town: "Harvey Cedars",
    deal: "Member discount available",
    lat: 39.7080,
    lng: -74.1280,
    icon: "🦞",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Ship Bottom Brewery",
    category: "Bar",
    town: "Ship Bottom",
    deal: "Member discount available",
    lat: 39.6450,
    lng: -74.1580,
    icon: "🍺",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Thundering Surf Waterpark",
    category: "Family Fun",
    town: "Beach Haven",
    deal: "Member discount available",
    lat: 39.5570,
    lng: -74.2440,
    icon: "🌊",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Kubel's",
    category: "Restaurant",
    town: "Barnegat Light",
    deal: "Member discount available",
    lat: 39.7530,
    lng: -74.1090,
    icon: "🍽️",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Surflight Theatre",
    category: "Entertainment",
    town: "Beach Haven",
    deal: "Member discount available",
    lat: 39.5637,
    lng: -74.2438,
    icon: "🎭",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Country Kettle Fudge",
    category: "Treats",
    town: "Beach Haven",
    deal: "Member discount available",
    lat: 39.5645,
    lng: -74.2420,
    icon: "🍫",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Farias Surf & Sport",
    category: "Surf Shop",
    town: "Ship Bottom",
    deal: "Member discount available",
    lat: 39.6480,
    lng: -74.1560,
    icon: "🏄",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Parker's Garage & Oyster Saloon",
    category: "Restaurant",
    town: "Beach Haven",
    deal: "Member discount available",
    lat: 39.5600,
    lng: -74.2440,
    icon: "🍽️",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Museum of NJ Maritime History",
    category: "Attraction",
    town: "Beach Haven",
    deal: "Member discount available",
    lat: 39.5641,
    lng: -74.2425,
    icon: "🏛️",
    url: GUIDED_PLUNDER_URL
  },
  {
    name: "Poppy's Ice Cream",
    category: "Treats",
    town: "Barnegat Light",
    deal: "Member discount available",
    lat: 39.7520,
    lng: -74.1100,
    icon: "🍦",
    url: GUIDED_PLUNDER_URL
  }
];

// Map tour stop indices to nearby deals (for contextual nudges)
// Keys are stop IDs (1-based), values are arrays of deal indices
const NEARBY_DEALS = {
  1:  [8, 14],       // Old Barney → Kubel's, Poppy's
  3:  [8, 14],       // Viking Village → Kubel's, Poppy's
  7:  [6, 11],       // Ship Bottom → Ship Bottom Brewery, Farias
  8:  [1],           // Brant Beach → Daddy O Hotel
  9:  [4],           // Fantasy Island → Fantasy Island deal
  10: [2, 10],       // Shark Attacks → Chicken or Egg, Country Kettle
  11: [0, 9, 12],    // Beach Haven Historic → Engleside, Surflight, Parker's
  12: [13],          // Maritime Museum → Museum deal
  13: [9],           // Surflight → Surflight deal
  14: [],            // Forsythe → none
  15: [],            // Holgate → none
};
