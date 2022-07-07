const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

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

app.get("/Profile", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/Profile.json", "utf-8");
  res.send(info);
});

app.get("/Profile", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/Profile.json", "utf-8");
  res.send(info);
});

app.get("/Profile", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/Profile.json", "utf-8");
  res.send(info);
});
app.get("/Profile", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./data/Profile.json", "utf-8");
  res.send(info);
});

app.listen(4000);
