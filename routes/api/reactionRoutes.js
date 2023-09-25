const express = require('express');
const router = express.Router();

// Import the Reaction model (assuming you have a Reaction model)
const Reaction = require('../../models/Reaction');

// Define your reaction-related routes here

// GET all reactions
router.get('/', async (req, res) => {
  try {
    const reactions = await Reaction.find();
    res.json(reactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new reaction
router.post('/', async (req, res) => {
  try {
    const newReaction = new Reaction(req.body);
    const savedReaction = await newReaction.save();
    res.json(savedReaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Add more routes as needed

module.exports = router;
