// netlify/functions/getRequests.js
exports.handler = async (event) => {
  // EXAMPLE: replace this with real fetch from your DB or Netlify Forms API
  const sampleData = [
    { name: "Alex", type: "requesting", date: "2025-06-20T17:00", location: "Main Ave" },
    { name: "Jordan", type: "offering",  date: "2025-06-21T18:30", location: "Oak Street" }
  ];
  // Log IP for security/audit:
  console.log("Viewer IP:", event.headers['client-ip'] || event.headers['x-nf-client-connection-ip']);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sampleData)
  };
};
