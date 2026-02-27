const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}/`;

app.get("/", (req, res) => {
  const responseData = {
    message: "Benvenuti nel mio Blog",
    success: true
  }

  res.status(200).json(responseData)
});

app.listen(port, () => {
  console.log(`test app sulla porta ${appUrl}`);
});
