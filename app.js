const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}/`;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const responseData = {
    message: "Benvenuti nel mio Blog",
    success: true,
  };

  res.status(200).json(responseData);
});


const blogList = [
    {
      title: "ciambellone",
      content: "ciambellone molto buono",
      image: "/images/ciambellone.jpeg",
      tags: ["soffice", "leggero"],
    },

    {
      title: "cracker barbabietola",
      content: "cracker croccanti alla barbabietola",
      image: "/images/cracker_barbabietola.jpeg",
      tags: ["salato", "snacks"],
    },
    {
      title: "panefritto dolce",
      content: "fette di pane fritto dorate",
      image: "/images/pane_fritto_dolce.jpeg",
      tags: ["dolce", "fritto"],
    },
    {
      title: "pasta barbabietola",
      content: "pasta fresca dal colore vivace",
      image: "/images/pasta_barbabietola.jpeg",
      tags: ["primo", "barbabietola"],
    },
    {
      title: "torta paesana",
      content: "dolce rustico",
      image: "/images/torta_paesana.jpeg",
      tags: ["dolce", "tradizionale"],
    },
  ];

app.get("/bacheca", (req, res) => {
  res.json(blogList);
});

app.listen(port, () => {
  console.log(`test app sulla porta ${appUrl}`);
});
