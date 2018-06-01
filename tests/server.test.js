/* global test expect */

const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

test('all working a.ok', () => {
  expect(true).toBeTruthy()
})

test('the root route is all good', () => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(res.text).toMatch('good')
      expect(err).toBeFalsy()
    })
})

test('We like dogs', (done) => {
  request(server)
    .get('/get-name.html')
    .expect(200)
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const p = $('p').text()
      expect(p).toMatch('dogs')
      done(err)
    })
})

test('User', (done) => {
  request(server)
    .get('/sampson.html')
    .expect(200)
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const h1 = $('h1').text()
      expect(h1).toMatch('User')
      done(err)
    })
})

test('Links', (done) => {
  request(server)
    .get('/silvia.html')
    .expect(200)
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const a = $('a').attr('href')
      expect(a).toMatch('debbie')
      done(err)
    })
})

test('Photo', (done) => {
  request(server)
    .get('/sampson.html')
    .expect(200)
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const li = $('li').text()
      expect(li).toMatch('Photo')
      done(err)
    })
})
