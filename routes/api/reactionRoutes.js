const router = require('express').Router();
const {
    getReactions,
    createReaction,
    deleteReaction
} = require('../../controllers/reaction-controller');

router.route('/').get(getReactions).post(createReaction);

router.route('/:id').delete(deleteReaction);

module.exports = router;