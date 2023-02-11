require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./config/db.connection.js')
const moviesRouter = require('./routes/movies.routes.js')
const starsRouter = require('./routes/stars.routes.js')
const authRouter = require('./routes/auth.routes.js')
const commentsRouter = require('./routes/comments.routes.js')

const app = express()
connectDb()


app.use(cors())
app.use(express.json())
app.use('/movies', moviesRouter)
app.use('/stars', starsRouter)
app.use(commentsRouter)
app.use(authRouter)

app.listen(process.env.PORT, () => console.log('Server listening on port: ', process.env.PORT))