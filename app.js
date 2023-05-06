
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000
require('dotenv/config')

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
  
});


app.use(express.json())

// Accounts routes 
const accRoute = require('./routes/accounts')
app.use('/accounts', accRoute)

// Transactions routes 
const tranRoute = require('./routes/transactions')
app.use('/transactions', tranRoute)

app.get('/', (req, res) => {
    res.send('<h1>This is Home</h1>')
  })
  
  app.listen(port, () => {
    console.log(`It's live on http://localhost:${port}`)
  })