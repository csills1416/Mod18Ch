const { Reaction } = require('../models');

const getAllReactions = async (req, res) => {
  try {
    const reactions = await Reaction.find();
    res.json(reactions);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const getReaction = async (req, res) => {
  try {
    const reaction = await Reaction.findOne({ _id: req.params.reactionId });

    if (!reaction) {
      return res.status(404).json({ message: 'Reaction not found' });
    }

    res.json(reaction);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const createReaction = async (req, res) => {
  try {
    // Create the new reaction
    const reaction = await Reaction.create(req.body);

    // Obtain the _id of the created reaction
    const reactionId = reaction._id;

    // Assuming you have the thoughtId available (e.g., from req.params)
    const thoughtId = req.params.thoughtId;

    // Update the thought document to include the reactionId
    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      { $push: { reactions: reactionId } }, // Add the reactionId to the reactions array
      { new: true, runValidators: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }

    res.json(updatedThought);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};
const updateReaction = async (req, res) => {
  try {
    const updatedReaction = await Reaction.findOneAndUpdate(
      { _id: req.params.reactionId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedReaction) {
      return res.status(404).json({ message: 'Reaction not found' });
    }

    res.json(updatedReaction);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};

const deleteReaction = async (req, res) => {
  try {
    const deletedReaction = await Reaction.findOneAndDelete({
      _id: req.params.reactionId,
    });

    if (!deletedReaction) {
      return res.status(404).json({ message: 'Reaction not found' });
    }

    res.json({ message: 'Reaction deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllReactions,
  getReaction,
  createReaction,
  updateReaction,
  deleteReaction,
};
