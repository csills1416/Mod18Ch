const router = require('express').Router();

const {
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller');

router.route('/').get(getUser).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;