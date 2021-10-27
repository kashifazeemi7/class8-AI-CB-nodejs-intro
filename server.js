const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log('a request came!', Date.now());
    next();
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
