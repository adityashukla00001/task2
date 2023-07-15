const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Configure express to use ejs as the template engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const HOST = "0.0.0.0";
const PORT = 3000;

// task array
let tasks = [];

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});

// home page
app.get("/", (req, res) => {
  res.render("index", { tasks });
});

// add task mapping
app.post("/tasks", (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect("/");
});

// delete task mapping
app.post("/tasks/:id/delete", (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter((task, index) => index != id);
  res.redirect("/");
});
