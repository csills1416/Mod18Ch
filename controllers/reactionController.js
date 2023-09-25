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
    const reaction = await Reaction.create(req.body);
    res.json(reaction);
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
