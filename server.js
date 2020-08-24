const express = require('express');
const app = express()


app.list(8000, function () {
  console.log("server is running")
})
