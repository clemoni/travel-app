const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config({
  path: path.resolve(__dirname, "../../config/.env"),
});

const travel = require("./routes/travel");

require("colors");

const app = express();
const PORT = process.env.PORT || 8082;

// Midleware
app.use(express.static("dist"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  path.join(__dirname, "../../dist/index.html");
});

// instanciation route /travel
app.use("/travel", travel);

//middleware error handler
app.use((err, req, res, next) => {
  ({ message } = err);
  res.status(500).send(message);
  // res.status(409).json({ message });
});

app.listen(PORT, (error) => {
  try {
    console.log(`Server running on PORT: ${PORT}`.yellow.inverse);
  } catch (err) {
    console.log(`An error happned ... ${err.message}`.red.inverse);
  }
});
