// Helper functions to build reliable Google Maps URLs using official query parameters

export function buildDirectionsUrl({ origin, destinationName, destinationCoords, destinationAddress }) {
  // Format origin (user's current GPS location)
  const originParam = origin ? `${origin.lat},${origin.lng}` : "";
  
  // Format destination coordinates precisely if available
  const destCoordsParam = destinationCoords ? `${destinationCoords.lat},${destinationCoords.lng}` : "";
  
  // Fallback search query text if coordinates aren't present
  const destQuery = destinationAddress || `${destinationName}, University of Mines and Technology, Tarkwa, Ghana`;

  // Build official Google Maps Directions API URL
  // Using explicit dest coordinates ensures the red destination pin drops precisely on the location
  let url = `https://www.google.com/maps/dir/?api=1`;
  
  if (originParam) {
    url += `&origin=${encodeURIComponent(originParam)}`;
  }
  
  if (destCoordsParam) {
    // Passing destination as coordinates forces the exact pin location
    url += `&destination=${encodeURIComponent(destCoordsParam)}`;
    // Adding destination_place_id or query label helps Google display the correct name alongside the pin
    url += `&destination_place_id=${encodeURIComponent(destinationName)}`
  } else {
    url += `&destination=${encodeURIComponent(destQuery)}`;
  }

  return url;
}

export function buildSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
