const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}/`;

app.get("/", (req, res) => {
  const responseData = {
    message: "Benvenuti nel mio Blog",
    success: true,
  };

  res.status(200).json(responseData);
});

app.get("/bacheca", (req, res) => {
  const blogList = [
    {
      title: "ciambellone",
      content: "ciambellone molto buono",
      image: "",
      tags: ["soffice", "leggero"],
    },

    {
      title: "cracker barbabietola",
      content: "cracker croccanti alla barbabietola",
      image: "",
      tags: ["salato", "snacks"],
    },
    {
      title: "panefritto dolce",
      content: "fette di pane fritto dorate",
      image: "",
      tags: ["dolce", "fritto"],
    },
    {
      title: "pasta barbabietola",
      content: "pasta fresca dal colore vivace",
      image: "",
      tags: ["primo", "barbabietola"],
    },
    {
      title: "torta paesana",
      content: "dolce rustico",
      image: "",
      tags: ["dolce", "tradizionale"],
    },
  ];

  res.json(blogList);
});

app.listen(port, () => {
  console.log(`test app sulla porta ${appUrl}`);
});
