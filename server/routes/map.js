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
    const timeLimit = req.query.tt * 60; // seconds

    //calculated later
    const radius = 50000; // meters

    //passed in from front end
    const modetemp = req.query.transit;
    let mode = "";

    if("wheelchair" === modetemp || "walking" === modetemp) {
        mode = "walking";
    } else if ("public_transit" === modetemp) {
        mode = "transit";
    } else if ("car" === modetemp) {
        mode = "driving";
    }

    const price = req.query.budget;

    let response;
    let distanceData;
    let htmlAttributions;
    const PD = new PlaceDetails();

    const url = encodeURI(`${GMAPS_API_BASE_URL}/place/nearbysearch/json?location=${lat},${long}`
        + `&rankby=distance&keyword=supermarket|grocery|market&key=${key}`);

    try {
        response = await axios({
            url,
            method: "get"
        });
        distanceData = response.data.results;
        htmlAttributions = response.data.html_attributions;
    } catch (error) {
        //console.error(error);
        res.end(JSON.stringify({
            ok: false,
            message: "Server error occurred"
        }));
        return;
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
        const distanceMatrixUrl = encodeURI(`${GMAPS_API_BASE_URL}/distancematrix/json?origins=${origin}&destinations=${dests.join("|")}&mode=${mode}&key=${key}&units=imperial`);

        try {
            response = await axios({
                url: distanceMatrixUrl,
                method: "get"
            });
            distanceData = response.data;
        } catch (error) {
            //console.error(error);
            res.end(JSON.stringify({
                ok: false,
                message: "Server error occurred"
            }));
            return;
        }

        results = PD.places.map((place, index) => {
            return {
                ...place,
                distance: distanceData.rows[0].elements[index].distance,
                duration: distanceData.rows[0].elements[index].duration
            };
        });

        results = results.filter(place => place.duration.value <= timeLimit);
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
        ok: true,
        htmlAttributions,
        results
    }));
});

module.exports = router;
