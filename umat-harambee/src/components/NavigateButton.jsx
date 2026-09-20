import { useState } from "react";
import { getCurrentPosition } from "../utils/geolocation";
import { buildDirectionsUrl, buildSearchUrl } from "../utils/maps";

// States: idle | requesting | granted | denied | unavailable | timeout | unsupported
export default function NavigateButton({ location, className = "" }) {
  const [state, setState] = useState("idle");
  const [showWhy, setShowWhy] = useState(false);
  const [verifiedCoords, setVerifiedCoords] = useState(null);

  const getCoords = () => {
    if (!location.coordinates) return null;
    if (Array.isArray(location.coordinates)) {
      return location.coordinates.length === 2 ? { lat: location.coordinates[0], lng: location.coordinates[1] } : null;
    }
    return location.coordinates;
  };

  const openWithOrigin = (origin) => {
    const coords = getCoords();
    const url = buildDirectionsUrl({
      origin,
      destinationName: location.name,
      destinationCoords: coords || null,
      destinationAddress: `${location.name}, University of Mines and Technology, Tarkwa, Ghana`
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openWithoutOrigin = () => {
    const coords = getCoords();
    const url = coords
      ? buildDirectionsUrl({ origin: null, destinationName: location.name, destinationCoords: coords })
      : buildSearchUrl(`${location.name}, University of Mines and Technology, Tarkwa, Ghana`);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const requestAndNavigate = async () => {
    setShowWhy(false);
    setState("requesting");
    try {
      const coords = await getCurrentPosition();
      setVerifiedCoords(coords);
      setState("granted"); // Stops here so user can tap the direct button, bypassing iOS popup blocking
    } catch (err) {
      if (!("geolocation" in navigator)) {
        setState("unsupported");
        return;
      }
      if (err?.code === 1) setState("denied");
      else if (err?.code === 3) setState("timeout");
      else setState("unavailable");
    }
  };

  const copyLocation = async () => {
    const text = `${location.name} — University of Mines and Technology, Tarkwa, Ghana`;
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const shareLocation = async () => {
    const shareData = {
      title: location.name,
      text: `Find ${location.name} at UMaT`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* user cancelled */
      }
    } else {
      copyLocation();
    }
  };

  return (
    <div className={className}>
      {state === "idle" && (
        <button
          type="button"
          onClick={() => setShowWhy(true)}
          className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold-deep hover:shadow-[0_0_18px_rgba(242,183,5,0.5)] cursor-pointer"
        >
          <span aria-hidden="true">🧭</span> Navigate with Google Maps
        </button>
      )}

      {showWhy && state === "idle" && (
        <div className="mt-3 rounded-xl border border-mist bg-paper-dim p-4 text-sm dark:border-ink-soft dark:bg-ink-soft animate-reveal">
          <p className="text-gray-800 dark:text-paper">
            We'll ask your browser for your current location so we can point
            Google Maps from where you are to <strong>{location.name}</strong>.
            Your location is used only in your browser to build this link —
            it isn't stored or sent anywhere.
          </p>
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              onClick={requestAndNavigate}
              className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-paper dark:bg-gold dark:text-ink cursor-pointer"
            >
              Continue
            </button>
            <button
              type="button"
              onClick={openWithoutOrigin}
              className="rounded-full border border-ink px-4 py-2 text-xs font-semibold text-ink dark:border-paper dark:text-paper cursor-pointer"
            >
              Skip, just open Google Maps
            </button>
          </div>
        </div>
      )}

      {state === "requesting" && (
        <p className="mt-3 text-sm text-slate dark:text-paper/70" role="status">
          Requesting your location…
        </p>
      )}

      {state === "granted" && (
        <div className="mt-3 rounded-xl border border-gold/40 bg-paper-dim p-4 text-sm dark:border-ink-soft dark:bg-ink-soft animate-reveal">
          <p className="font-medium text-gray-900 dark:text-paper mb-2">Location acquired successfully!</p>
          <button
            type="button"
            onClick={() => openWithOrigin(verifiedCoords)}
            className="w-full py-3 rounded-full bg-gold text-ink font-bold text-sm shadow-md hover:bg-gold-deep transition-all cursor-pointer"
          >
            🗺️ Open Directions in Google Maps Now
          </button>
        </div>
      )}

      {(state === "denied" ||
        state === "unavailable" ||
        state === "timeout" ||
        state === "unsupported") && (
        <div className="mt-3 rounded-xl border border-mist bg-paper-dim p-4 text-sm dark:border-ink-soft dark:bg-ink-soft animate-reveal">
          <p className="font-medium text-gray-900 dark:text-paper">
            {state === "denied" && "Location permission was denied."}
            {state === "unavailable" && "Your location is unavailable right now."}
            {state === "timeout" && "Finding your location took too long."}
            {state === "unsupported" && "Your browser doesn't support location access."}
          </p>
          <p className="mt-1 text-slate dark:text-paper/70">
            You can still get directions — Google Maps can use its own location once it opens.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openWithoutOrigin}
              className="rounded-full bg-gold px-4 py-2 text-xs font-semibold text-ink cursor-pointer"
            >
              Open Google Maps
            </button>
            <button
              type="button"
              onClick={copyLocation}
              className="rounded-full border border-ink px-4 py-2 text-xs font-semibold text-ink dark:border-paper dark:text-paper cursor-pointer"
            >
              Copy Location
            </button>
            <button
              type="button"
              onClick={requestAndNavigate}
              className="rounded-full border border-ink px-4 py-2 text-xs font-semibold text-ink dark:border-paper dark:text-paper cursor-pointer"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {state === "copied" && (
        <p className="mt-3 text-sm text-gold-deep" role="status">
          Location copied to clipboard.
        </p>
      )}
    </div>
  );
}
