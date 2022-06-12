const express = require('express')
const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/main.html')
})

app.use(express.static(__dirname + '/../dist'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})