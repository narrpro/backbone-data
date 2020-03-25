const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')

app.use(cors())

app.post('/', (req, res) => {
    res.send('post ok')
})
app.get('/', (req, res) => {
    res.send('get ok')
})

// app.get('/:id', (req, res) => {
//     res.send('get ok' + req.params.id)
// })
app.put('/:id', (req, res) => {
    res.send('put ok' + req.params.id)
})
app.delete('/:id', (req, res) => {
    res.send('delete ok' + req.params.id)
})

app.use((err, req, res, next) => {
    if (err.message === 'acess denied') {
        res.status(403)
        res.json({ error: err.message })
    }
    res.send(err.message)
})
module.exports = app