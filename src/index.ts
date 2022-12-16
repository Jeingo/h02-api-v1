import express from 'express'
import bodyParser from 'body-parser'
import {blogsRouter} from "./routers/blogs-router"
import {postsRouter} from "./routers/posts-router"
import {testRouter} from "./routers/test-router"

export const app = express()

const PORT = process.env.PORT || 9999

app.use(express.json())


app.use('/blogs', blogsRouter)
app.use('/posts', postsRouter)
app.use('/testing/all-data', testRouter)

app.listen(PORT, () => {
    console.log(`Server is starting on port: ${PORT}`)
})