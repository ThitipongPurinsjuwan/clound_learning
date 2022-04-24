const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "success",
  });
});

app.get("/con", (req, res) => {
  res.send({
    status: 200,
    message: "connected",
  });
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
