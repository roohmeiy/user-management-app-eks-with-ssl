

const express = require('express');
const cors = require('cors');                 
const app = express();
const userRoutes = require('./routes/userRoutes');

// ✅ Define CORS options
const corsOptions = {
  origin: [
    'http://test1.aidevops.in',      
    'https://test1.aidevops.in'
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

// ✅ Apply CORS middleware
app.use(cors(corsOptions));

app.use(express.json());
// app.use(express.static('client/public')); // Serve static files if needed

app.use('/api', userRoutes);

module.exports = app;
