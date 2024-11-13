import User from "../models/User.js"

export default async (req, res, next) => {
  try {
    const users = req.body;

    for (let user of users) {
      let account = await User.findOne({ email: user.email });
      if (account) {
        return res.status(400).json({
          success: false, 
          message: `User with email ${user.email} already exists`
        });
      }
    }
    next();
  } catch (error) {
    next(error);
  }
}
