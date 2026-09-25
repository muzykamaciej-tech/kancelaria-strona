/* /api/google-rating — ocena i liczba opinii z wizytówki Google (Places API (New)).
   Wymaga zmiennych w Vercel: GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID.
   Odpowiedź jest cache'owana na CDN Vercel przez 24 h, więc do Google trafia ok. 1 zapytanie dziennie. */
module.exports = async function handler(req, res) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ error: 'not_configured' });
  }

  try {
    const r = await fetch('https://places.googleapis.com/v1/places/' + encodeURIComponent(placeId), {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount'
      }
    });

    if (!r.ok) {
      res.setHeader('Cache-Control', 'no-store');
      return res.status(502).json({ error: 'upstream_error', status: r.status });
    }

    const d = await r.json();
    if (typeof d.rating !== 'number' || typeof d.userRatingCount !== 'number') {
      res.setHeader('Cache-Control', 'no-store');
      return res.status(502).json({ error: 'no_data' });
    }

    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=86400');
    return res.status(200).json({ rating: d.rating, count: d.userRatingCount });
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(502).json({ error: 'fetch_failed' });
  }
};
