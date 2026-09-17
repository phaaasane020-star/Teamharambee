import ktImg from '../assets/kt.jpg';

// Centralized Campus Guide data. Every entry drives search, filters, the
// location detail page, and Google Maps navigation.

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "hostel", label: "Hostels" },
  { id: "department", label: "Departments" },
  { id: "administrative", label: "Administrative Offices" },
  { id: "library", label: "Libraries" },
  { id: "other", label: "Other" },
];

export const LOCATIONS = [
  {
    id: "chamber-of-mines-hall",
    name: "Chamber of Mines Hall",
    slug: "chamber-of-mines-hall",
    category: "hostel",
    description: "University hall of residence",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/chambers.png",
    coordinates: null,
    coordinatesVerified: true,
    nearbyLandmarks: ["[NEARBY LANDMARK TO VERIFY]"],
  },
  {
    id: "gold-refinery-hall",
    name: "Gold Refinery Hall",
    slug: "gold-refinery-hall",
    category: "hostel",
    description: "University hall of residence",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/gold.jpg",
    coordinates: null,
    coordinatesVerified: true,
    nearbyLandmarks: ["[NEARBY LANDMARK TO VERIFY]"],
  },
  {
    id: "kt-hall",
    name: "K.T. Hall",
    slug: "kt-hall",
    category: "hostel",
    description: "University hall of residence",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: ktImg,
    coordinates: null,
    coordinatesVerified: true,
    nearbyLandmarks: [],
  },
  {
    id: "Kivis Hostel",
    name: "Kivis Hostel",
    slug: "kivis-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/kivis.jpg",
    coordinates: null,
    coordinatesVerified: true,
    nearbyLandmarks: [],
  },
  {
    id: "JK Hostel",
    name: "JK Hostel",
    slug: "jk-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/jk-hostel.jpg",
    coordinates: null,
    coordinatesVerified: true,
    nearbyLandmarks: [],
  },
  {
    id: "Osborn Hostel",
    name: "Osborn Hostel",
    slug: "osborn-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/osborn.jpg",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
  {
    id: "SME Hostel",
    name: "SME Hostel",
    slug: "sme-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/sme.jpg",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
  {
    id: "The Point Hostel",
    name: "The Point Hostel",
    slug: "thepoint-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/the.png",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
   {
    id: "Frubin Hostel",
    name: "Frubin Hostel",
    slug: "frubin-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/frubin.jpg",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
   {
    id: "Kabis Hostel",
    name: "Kabis Hostel",
    slug: "kabis-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/kabis.jpg",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
   {
    id: "Oak Hostel",
    name: "Oak Hostel",
    slug: "oak-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/oak.jpg",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
   {
    id: "GoldBeltHostel",
    name: "GoldBelt Hostel",
    slug: "goldbelt-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/goldbelt.jpg",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
   {
    id: "De-HildaHostel",
    name: "De-Hilda Hostel",
    slug: "hilda-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/hilda.jpg",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
   {
    id: "R & M Hostel",
    name: "R & M Hostel",
    slug: "R & M-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/r&m.jpg",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
   {
    id: "White Hostel",
    name: "White Hostel",
    slug: "white-hostel",
    category: "hostel",
    description: "Student hostel accommodation",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/white.jpg",
    coordinates: null,
    coordinatesVerified:  true,
    nearbyLandmarks: [],
  },
  {
    id: "crystal-hostel",
    name: "Crystal hostel",
    slug: "crystal-hostel",
    category: "hostel",
    description: "University hall of residence",
    address: "University of Mines and Technology, Tarkwa, Western Region, Ghana",
    image: "/images/crystal.jpg",
    coordinates: null,
    coordinatesVerified: true,
    nearbyLandmarks: [],
  },
];

export const HOSTELS = LOCATIONS.filter((l) => l.category === "hostel");

export function getLocationBySlug(slug) {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function searchLocations(query = "", category = "all") {
  const rawQuery = typeof query === "object" && query?.target ? query.target.value : query;
  const q = String(rawQuery || "").trim().toLowerCase();
  
  return LOCATIONS.filter((l) => {
    const matchesCategory = category === "all" || l.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    
    return (
      l.name?.toLowerCase().includes(q) ||
      l.description?.toLowerCase().includes(q) ||
      l.category?.toLowerCase().includes(q) ||
      l.address?.toLowerCase().includes(q) ||
      (q.includes("hostel") && l.category === "hostel")
    );
  });
}