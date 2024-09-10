//import modules
import bodyParser from "body-parser";
import express from "express";
import ejs from "ejs";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
// Enabling express, body parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/ip", async (req, res) => {
    const url = "https://api.ipify.org?format=json";
    const response = await axios.get(url);
    const ip = response.data.ip;
    res.render("ip.ejs", {ip})
});

app.listen(3000, () => {
    console.log(`Server running on ${port}`);
});