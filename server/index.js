const express = require("express");
const fs = require("fs");
const app = express();

const lyrics = JSON.parse(
  fs.readFileSync(`${__dirname}/lyrics/frankocean.json`)
);

app.get("/api/v1/frankoceanlyric", (req, res) => {
  res.status(200).send({
    status: 200,
    randomLyric: lyrics[Math.floor(Math.random() * lyrics.length)].lyric,
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
