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
    try {
      let randomNumber = Math.floor(Math.random() * 105) + 1;
      const url = `https://www.fruityvice.com/api/fruit/${randomNumber}`;
      const response = await axios.get(url);
      const fruitName = response.data.name;
      const fruitNutritions = response.data.nutritions;
      res.render("fruitFact.ejs", { fruitName, fruitNutritions });
    } catch (error) {
      console.error("Error fetching fruit fact:", error);
    }
  });


app.listen(port, () => {
    console.log(`Server   
 listening on port ${port}`);
});
//Powered by Stratonauts Dog API