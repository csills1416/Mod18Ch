const { connect, connection } = require('mongoose');

// Your MongoDB URI
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network';

// Connect to MongoDB
connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the connection
module.exports = connection;
