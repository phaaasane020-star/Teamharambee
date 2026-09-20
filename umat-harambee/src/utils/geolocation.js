// Thin promise wrapper around the browser Geolocation API with a safety timeout for iOS.
// The coordinates it resolves are used only in-memory, to build a single
// Google Maps URL — never stored, never sent to any server.
export function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject({ code: "UNSUPPORTED" });
      return;
    }

    let isResolved = false;

    // Safety timeout: iOS webviews can silently hang if location prompts are dismissed
    const safetyTimeout = setTimeout(() => {
      if (!isResolved) {
        isResolved = true;
        reject({ code: 3, message: "Geolocation request timed out." });
      }
    }, 11000); // 11 seconds max wait

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (!isResolved) {
          isResolved = true;
          clearTimeout(safetyTimeout);
          resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        }
      },
      (err) => {
        if (!isResolved) {
          isResolved = true;
          clearTimeout(safetyTimeout);
          // err.code: 1 = PERMISSION_DENIED, 2 = POSITION_UNAVAILABLE, 3 = TIMEOUT
          reject(err);
        }
      },
      { 
        enableHighAccuracy: true, 
        timeout: 10000, 
        maximumAge: 0, 
        ...options 
      }
    );
  });
}
