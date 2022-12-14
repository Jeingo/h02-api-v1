import express from 'express'

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('WORKS')
})

app.listen(PORT, () => {
    console.log(`Server is starting on port: ${PORT}`)
})