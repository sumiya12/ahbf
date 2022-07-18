const express = require("express");

const cors = require("cors");
const app = express();
const fs = require("fs");
require("dotenv").config();
app.use(express.static("public"));
const PORT = process.env.PORT;
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("views options", { layout: false });

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.get("/ejs", cors(), (req, res) => {
  res.render("index");
});
app.get("/404", cors(), (req, res) => {
  res.render("404", { message: "oopsie!" });
});
app.get("/js", cors(), (req, res) => {
  var data = {
    name: "john",
    hobbies: ["playing football", "playing chess", "cycling"],
  };
  res.render("js", { data: data });
});
app.get("/exercise", cors(), (req, res) => {
  var data = {
    img: ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg"],
    text: ["1.jpeg", "2.jpeg", "3.jpeg"],
  };
  res.render("exercise", { data: data });
});

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
app.get("/audio", cors(), (req, res) => {
  console.log("testing");
  const info = fs.readFileSync("./public/audio/c.mp3");
  res.send(info);
});

app.listen(PORT);
console.log(`running port ${PORT}`);
