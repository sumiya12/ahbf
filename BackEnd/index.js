const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
require("dotenv").config();
app.use(express.static("public"));
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/Profile", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/Profile.json", "utf-8");
  res.send(info);
});

app.get("/name", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/name.json", "utf-8");
  res.send(info);
});

app.get("/age", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/age.json", "utf-8");
  res.send(info);
});

app.get("/description", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/description.json", "utf-8");
  res.send(info);
});
app.get("/major", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/major.json", "utf-8");
  res.send(info);
});

app.listen(PORT);
console.log(`running port ${PORT}`);
