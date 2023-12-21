// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bitcoinApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB schema and model (e.g., User)
const userSchema = new mongoose.Schema({
  username: String,
  bitcoinBalance: Number,
});

const User = mongoose.model('User', userSchema);

// API routes
app.post('/api/users', async (req, res) => {
  try {
    const { username } = req.body;
    const newUser = new User({ username, bitcoinBalance: 0 });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes as needed (e.g., to update bitcoin balance)

// Start the server
app.listen(PORT, () => {
  console.log(Server &{PORT});
});