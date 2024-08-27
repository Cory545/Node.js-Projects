// Importing for node
import express from "express";
import bodyParser from "body-parser";
// starting express and logging which port I'm on.
const app = express();
const port = 3000;
// Enabling express, body parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//Getting the first index.ejs file to show. 
app.get("/", (req, res) => {
    res.render("index.ejs");
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });