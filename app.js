const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}/`;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`test app sulla porta ${appUrl}`);
});
