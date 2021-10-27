const express = require('express')
const app = express()
const port = 3000

app.get((req, res, next) => {
    console.log('a request came!', Date.now())
  })
  

app.get('/profile', (req, res) => {
  res.send('Welcome to your profile!')
})

app.get('/dash', (req, res) => {
    res.send('Welcome to your dashboard!')
  })

app.get('/home', (req, res) => {
    res.send('Welcome to home!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
