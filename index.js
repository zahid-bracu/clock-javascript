const express = require('express');
const app = express();
var path = require('path');
const port = 3000

const staticPath=path.join(__dirname);

app.use(express.static(staticPath));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})