const express = require('express');
const app = express();

const port = process.env.PORT || 3002;
const host = process.env.HOSTNAME || "0.0.0.0";

app.get('/', async (req, resp) => {
  console.log(process.env.TEST_ENV);
  const qweqwe = await require('./data/test-data.json');
  return resp.send('test' + qweqwe.test + new Date());
});
app.listen(port, host, () => {
  console.log(`Node.js API server is listening on http://${host}:${port}/`);
});
  