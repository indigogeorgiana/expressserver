const path = require('path')
const express = require('express')

const server = express()

server.get('/compliment', (req, res) => {
  res.send('You have cool hair')
})

server.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'silvia.html'))
})

module.exports = server
