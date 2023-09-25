const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/config');
const routes = require('./routes/api/index');

const PORT = 3000;
const app = express();

// Middleware
mongoose.set('strictQuery', true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

mongoose.connect('mongodb://localhost:27017/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Define routes
const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes'); // Add this line
const reactionRoutes = require('./routes/api/reactionRoutes'); // Add this line

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes); // Mount thought routes
app.use('/api/reactions', reactionRoutes); // Mount reaction routes

// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});

