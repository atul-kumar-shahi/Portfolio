export function extractSpotifyTrackId(url: string) {
    const parts = url.split("/track/");
    if (parts.length > 1) {
      return parts[1].split("?")[0]; // Remove any query params
    }
    return "";
  }
  