"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { top50 } = require("./data/top50");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(bodyParser.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  .get("/top50", (req, res) => {
    const data = top50;
    res.status(200).json({ status: 200, data });
  })

  .get("/top50/song/:id", (req, res) => {
    const songId = req.params.id;
    const rankToNum = Number(songId);

    const data = top50.find((song) => {
      return song.rank === rankToNum;
    });

    if (data) {
      res.status(200).json({
        status: 200,
        data,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Sorry, song not found.",
      });
    }
  })

  .get("/top50/artist/:artist", (req, res) => {
    const artistId = req.params.artist;

    const data = top50.filter((song) => {
      return song.artist.toLowerCase() === artistId.toLowerCase();
    });

    if (data) {
      res.status(200).json({
        status: 200,
        data,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Sorry, song not found.",
      });
    }
  })

  .get("/top50/popular-artist", (req, res) => {
    const artList = [];
    top50.forEach((song) => {
      artList.push(song.artist);
    });

    let counts = {};
    for (let i = 0; i < artList.length; i++) {
      let num = artList[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    let sortedArtist = Object.keys(counts).sort((keya, keyb) => {
      return counts[keyb] - counts[keya];
    });

    const popularArtist = sortedArtist[0];

    const data = top50.filter((song) => {
      return song.artist.toLowerCase() === popularArtist.toLowerCase();
    });

    res.status(200).json({
      status: 200,
      data,
    });
  })

  .get("/top50/artist", (req, res) => {
    const data = [];
    const artistList = top50.map((song) => song.artist);
    function artistSet(value) {
      data.push(value);
    }
    new Set(artistList).forEach(artistSet);
    res.status(200).json({
      status: 200,
      data,
    });
  })

  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
