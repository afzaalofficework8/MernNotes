const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const notes = require('./data/notes')

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api/notes', (req, res) => {
  res.send(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find((n) => n._id === req.params.id)
  res.send(note)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})
