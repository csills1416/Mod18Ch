const mongoose = require('mongoose');

reactionSchema = new mongoose.Schema({
    reaction: {
        type: String,
        required: true
        },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Thought: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;