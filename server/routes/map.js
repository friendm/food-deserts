const express = require("express");
const router = express.Router();
const axios = require("axios").default;

const key = process.env.GOOGLE_MAPS_API_KEY;

let PlaceDetails = function () {
    this.places = [];
};

router.get("/query", async function (req, res, next) {
    let lat = req.query.lat;
    let long = req.query.long;
    let radius = 50000;
    let answer;
    let results;
    let PD = new PlaceDetails();

    let host = "https://maps.googleapis.com";
    let path = `/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=grocery_or_supermarket&key=${key}`;
    const total = host + path;
    try {
        answer = await axios({
            url: total,
            method: "get"
        });
        results = answer.data.results;
    } catch (error) {
        console.error(error);
    }

    PD.places.push(["name", "location", "place_id", "vicinity"]);
    for (let i = 0; i < results.length; i++) {
        let temp = results[i];
        console.log(temp.name);
        console.log(temp.geometry.location);
        PD.places.push([temp.name, temp.geometry.location, temp.place_id, temp.vicinity]);
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(PD.places));
});


module.exports = router;
