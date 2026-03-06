
export default async function handler(req, res) {

  const { url, type } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing url" });
  }

  let api;

  if (type === "mp4") {
    api = `https://www.api-junzz.web.id/download/ytmp4?url=${encodeURIComponent(url)}`;
  } else {
    api = `https://www.api-junzz.web.id/download/ytmp3?url=${encodeURIComponent(url)}`;
  }

  try {

    const response = await fetch(api);
    const data = await response.json();

    const download =
      data?.result?.download ||
      data?.result?.url ||
      data?.download ||
      null;

    res.status(200).json({ download });

  } catch (e) {
    res.status(500).json({ error: "convert failed" });
  }
}

