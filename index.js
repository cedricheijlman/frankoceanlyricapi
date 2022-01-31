const express = require("express");
const fs = require("fs");
const app = express();

const lyrics = JSON.parse(
  fs.readFileSync(`${__dirname}/lyrics/frankocean.json`)
);

app.get("/api/v1/frankoceanlyric", (req, res) => {
  const randomNum = Math.floor(Math.random() * lyrics.length);
  res.status(200).send({
    status: 200,
    data: { ...lyrics[randomNum] },
  });
});

app.get("/", (req, res) => {
  res.status(200).send({ status: 200, data: "world" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
