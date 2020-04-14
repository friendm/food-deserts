const express = require("express");
const router = express.Router();
const axios = require("axios");


const key = process.env.BACKEND_API;

let PlaceDetails = function () {
    this.places = [];
};

const GMAPS_API_BASE_URL = "https://maps.googleapis.com/maps/api";

router.get("/query", async function (req, res, next) {
    const lat = req.query.lat;
    const long = req.query.long;

    //calculated later
    const timeLimit = 30 * 60; // seconds

    //calculated later
    const radius = 50000; // meters

    //passed in from front end
    const mode = "driving";

    let response;
    let distanceData;
    const PD = new PlaceDetails();

    const url = `${GMAPS_API_BASE_URL}/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=grocery_or_supermarket&key=${key}`;

    try {
        response = await axios({
            url,
            method: "get"
        });
        distanceData = response.data.results;
    } catch (error) {
        console.error(error);
        res.end(JSON.stringify({
            ok: false,
            message: "Server error occurred"
        }));
    }

    PD.places = distanceData.map(place => {
        return {
            name: place.name,
            location: place.geometry.location,
            id: place.place_id,
            vicinity: place.vicinity
        };
    });
    const origin = `${lat},${long}`;
    const dests = PD.places.map(place => `place_id:${place.id}`);
    let results = [];

    if (PD.places.length) {
        const distanceMatrixUrl = `${GMAPS_API_BASE_URL}/distancematrix/json?origins=${origin}&destinations=${dests.join("|")}&mode=${mode}&key=${key}&units=imperial`;

        try {
            response = await axios({
                url: distanceMatrixUrl,
                method: "get"
            });
            distanceData = response.data;
        } catch (error) {
            console.error(error);
            res.end(JSON.stringify({
                ok: false,
                message: "Server error occurred"
            }));
        }

        results = PD.places.map((place, index) => {
            return {
                ...place,
                distance: distanceData.rows[0].elements[index].distance,
                duration: distanceData.rows[0].elements[index].duration
            };
        });

        results = results.filter(place => place.duration.value < timeLimit);
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        ok: true,
        results
    }));
});

module.exports = router;
