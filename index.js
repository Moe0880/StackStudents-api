const express = require("express");
const stackStudents = require("./tests/mocks/stackStudents");
const app = express();
app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.render("index", { stackStudents });
});
app.get("/:id", (req, res) => {
  const studentData = stackStudents.find((student) => {
    return student.id === parseInt(req.params.id);
  });
  return res.render("index", { student: studentData });
});

app.all("*", (req, res) => {
  return res.sendStatus(404);
});

app.listen(1337, () => {
  console.log("Listienning on 1337..."); //eslint-disable-line no-console
});
