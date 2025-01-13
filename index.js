import express from "express";
import os from "os";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const msg = `VERSION: 2 Hello from ${os.hostname()}!`;
  console.log(msg);
  res.send(msg);
});

app.get("/nginx", async (req, res) => {
  const url = "http://nginx";
  const response = await fetch(url);
  const data = await response.text();
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});