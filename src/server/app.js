const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");

const travel = require("./routes/travel");

require("colors");

const app = express();
const PORT = process.env.PORT || 8082;

app.set("trust proxy", 1); // trust first proxy

// Midleware
app.use(express.static("dist"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  path.join(__dirname, "../../dist/index.html");
});

app.use("/travel", travel);

app.use((err, req, res, next) => {
  ({ message } = err);
  res.status(409).json({ message });
});

app.listen(PORT, (error) => {
  try {
    console.log(`Server running on PORT: ${PORT}`.yellow.inverse);
  } catch (err) {
    console.log(`An error happned ... ${err.message}`.red.inverse);
  }
});
