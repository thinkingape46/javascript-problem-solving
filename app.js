const express = require("express");
const path = require("path");

const app = express();

const port = 3010;

app.get("*", async (req, res) => {
  try {
    const filePath = path.join(__dirname, `src${req.url}.js`);

    const file = await require(filePath);

    res.send(file);
  } catch (e) {
    res.send(404);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
