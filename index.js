const { da } = require('date-fns/locale')
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    const date = new Date()
    response.send("VAMSI ")
})

app.listen(3000)