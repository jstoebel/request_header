var express = require('express')

var app = express()

app.get("/", function(req, res) {
  console.log(req.headers)
  var obj = {
    "host": req.headers.host,
    "user-agent": req.headers["user-agent"],
    "language": req.headers["accept-language"]
  }

  res.end(JSON.stringify(obj))

})
app.listen(process.env.PORT || 3000)
