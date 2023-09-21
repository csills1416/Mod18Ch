const router = require('express').Router();
const {
    getThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thought-controller');

router.route('/').get(getThought).post(createThought);

router
   .route('/:id')
   //.put(updateThought)
   //.delete(deleteThought)
  .get(getThought)

  module.exports = router;