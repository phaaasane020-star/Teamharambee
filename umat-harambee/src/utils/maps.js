// Helper functions to build reliable Google Maps URLs using official query parameters

export function buildDirectionsUrl({ origin, destinationName, destinationCoords, destinationAddress }) {
  const baseUrl = "https://www.google.com/maps/dir/";
  
  // Format origin (if user location was granted)
  const originParam = origin ? `${origin.lat},${origin.lng}` : "";
  
  // Prefer exact coordinates for destination if available, otherwise use address/name
  const destParam = destinationCoords 
    ? `${destinationCoords.lat},${destinationCoords.lng}` 
    : encodeURIComponent(destinationAddress || destinationName);

  // Using Google Maps official query parameter structure (api=1)
  // This prevents path-routing errors and handles special characters/spaces properly
  if (originParam) {
    return `https://www.google.com/maps/dir/?api=1&origin=${originParam}&destination=${destParam}`;
  } else {
    return `https://www.google.com/maps/dir/?api=1&destination=${destParam}`;
  }
}

export function buildSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
