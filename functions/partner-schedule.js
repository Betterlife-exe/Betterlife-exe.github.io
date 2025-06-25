exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }
  // parse event.body, save to DB or send email…
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};
