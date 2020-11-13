// import item router
const { Item, User } = require('../models');

module.exports = {
    // get all items
    async getAllItems(req, res) {
        const items = await Item.find();
        return res.json(items);
      },
    // create an item
    async saveItem({ user, body }, res) {
        body.user = user._id;
        const item = await Item.create(body)
        .then(({ _id }) => User.findOneAndUpdate(
            { _id: user._id },
            { $push: { items: _id } },
            { new: true }))
        res.json(item);
    },

    async populateItems(req, res) {
        const items = await Item.find()
        .populate("user")
        res.json(items);
    }
}