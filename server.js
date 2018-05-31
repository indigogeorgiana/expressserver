const express = require('express')

const server = express()

const port = 300

server.get('/compliment', (req, res) => {
  res.send('You have cool hair')
})

module.exports = server
