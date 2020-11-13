const router = require('express').Router();
const {
    saveItem,
    populateItems
} = require('../../controllers/item-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').get(populateItems).post(authMiddleware, saveItem);

module.exports = router;