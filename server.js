const express = require('express');
const app = express();

const port = process.env.PORT || 3002;
const host = process.env.HOSTNAME || "0.0.0.0";

app.get('/', (req, resp) => {
  return resp.send('test');
});
app.listen(port, host, () => {
  console.log(`Node.js API server is listening on http://${host}:${port}/`);
});
