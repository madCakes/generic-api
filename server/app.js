const express = require("express");
const cors = require("cors");

const app = express();
// Tell the app to allow cross-origin requests;
app.use(cors());

const menu = {
  starters: ["garlic bread", "chocolate fudge cake", "fries"],
  mains: ["burger and chips", "steak"],
  desserts: ["pancakes", "ice cream", "creme bruleé"],
  specials: {
    monday: "dover sole",
    tuesday: "portehouse steak",
  },
};

app.get("/", (req, res) => {
  res.json({
    name: "Chez Norbert",
    established: 2019,
    status: "open",
    "hygien-rating": 10,
  });
});

app.get("/menu", (req, res) => {
  res.json(menu);
});

// specials/monday
// specials/tuesday
app.get("/specials/:day", (req, res) => {
  const day = req.params.day;

  const special = menu["specials"][day];
  if (special) {
    res.json({
      special: special,
      success: true,
    });
  } else {
    res.status(404).json({
      special: null,
      success: false,
    });
  }
});

module.exports = app;
