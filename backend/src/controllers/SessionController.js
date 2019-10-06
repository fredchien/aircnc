const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const user = await User.find();

    return res.json(user);
  },

  async store(req, res) {
    const { email } = req.body;

    let storeUser = await User.findOne({ email });

    if (!storeUser) {
      storeUser = await User.create({ email });
    }

    return res.json(storeUser);
  }
};
