import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send(`Hello world`)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
