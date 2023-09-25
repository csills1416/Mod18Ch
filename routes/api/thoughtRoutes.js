const express = require('express');
const router = express.Router();

// Import the Thought model (assuming you have a Thought model)
const Thought = require('../../models/Thought');

// Define your thought-related routes here

// GET all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET a single thought by ID
router.get('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new thought
router.post('/', async (req, res) => {
  try {
    const newThought = new Thought(req.body);
    const savedThought = await newThought.save();
    res.json(savedThought);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT (update) a thought by ID
router.put('/:thoughtId', async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json(updatedThought);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE a thought by ID
router.delete('/:thoughtId', async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndRemove(req.params.thoughtId);
    if (!deletedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json({ message: 'Thought deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
