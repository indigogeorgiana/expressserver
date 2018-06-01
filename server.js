const path = require('path')
const express = require('express')

const server = express()

server.use(express.urlencoded({extended: false}))

server.get('/compliment', (req, res) => {
  res.send('You have cool hair')
})

// server.get('/profile', (req, res) => {
// res.sendFile(path.join(__dirname, 'silvia.html'))
// })

server.get('/profile', (req, res) => {
  const name = req.query.name
  if (name === 'silvia') {
    res.sendFile(path.join(__dirname, 'silvia.html'))
  } else if (name === 'sampson') {
    res.sendFile(path.join(__dirname, 'sampson.html'))
  }
})

module.exports = server
