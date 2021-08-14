const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Placeholder...");
});

app.listen(port, () => {
  console.log(`El servidor se esta ejecutando en el puerto: ${port}`);
});
