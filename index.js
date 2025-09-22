import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("<h1 style='color:red';>hello world</h1>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT : ${PORT}`);
});
