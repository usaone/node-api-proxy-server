const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100 // 5 requests per 10 minutes
})
app.use(limiter)
app.set('trust proxy', 1)

// Set static folder
app.use(express.static('public'))

// Routes
// app.use('/api', require('./routes/index')) (next line is the same as this)
app.use('/api', require('./routes')) 

// Enable CORS
app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
