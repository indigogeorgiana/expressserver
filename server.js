const path = require('path')
const express = require('express')

const server = express()

server.use(express.urlencoded({extended: false}))
server.use(express.static('public'))

server.get('/compliment', (req, res) => {
  res.send('You have cool hair')
})

server.get('/profile', (req, res) => {
  const name = req.query.name
  if (name === 'silvia') {
    res.sendFile(path.join(__dirname, 'silvia.html'))
  } else if (name === 'sampson') {
    res.sendFile(path.join(__dirname, 'sampson.html'))
  }
})

server.get('/profiles/:id', (req, res) => {
  const id = req.params.id
  if (id === '1') {
    res.sendFile(path.join(__dirname, 'silvia.html'))
  } else if (id === '2') {
    res.sendFile(path.join(__dirname, 'sampson.html'))
  }
})

server.post('/named-compliment', (req, res) => {
  const name = req.body.name
  if (name === 'silvia') {
    res.send(`${name} has lovely hair`)
  } else if (name === 'sampson') {
    res.send(`${name} is handsome`)
  }
})

module.exports = server
