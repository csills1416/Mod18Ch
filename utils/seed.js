// utils/seed.js
const mongoose = require('mongoose');
const { User, Thought, Reaction } = require('../models');
const { users, thoughts, reactions } = require('./data');
const { mongoURI } = require('../config/config'); // Adjust the path to your config file

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', async () => {
  try {
    console.log('Connected to MongoDB');

    // Clear existing data (optional)
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    // Insert the mock user data
    const createdUsers = await User.insertMany(users);

    // Create mock thoughts and reactions
    const createdThoughts = await Thought.insertMany(
      thoughts.map((thought, index) => ({
        ...thought,
        username: createdUsers[index % createdUsers.length].username,
      }))
    );

    const createdReactions = await Reaction.insertMany(
      reactions.map((reaction, index) => ({
        ...reaction,
        username: createdUsers[index % createdUsers.length].username,
        thought: createdThoughts[index % createdThoughts.length]._id,
      }))
    );

    console.log('Database seeded successfully.');

    // Close the MongoDB connection
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
