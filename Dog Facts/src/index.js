//import modules
import bodyParser from "body-parser";
import express from "express";
import ejs from "ejs";
import axios from "axios";

const app = express();
const port = 3000;


// Enabling express, body parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.get("/fact", async (req, res) => {

    const response = await axios.get('https://www.fruityvice.com/api/fruit/1')
    const fruitName = response.data.name;
    const fruitNutritions = response.data.nutritions;
    console.log(fruitNutritions)
    console.log(fruitName);
    res.render("index.ejs")
});


app.listen(port, () => {
    console.log(`Server   
 listening on port ${port}`);
});
//Powered by Stratonauts Dog API