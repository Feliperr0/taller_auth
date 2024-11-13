import User from '../../models/User.js';

let updateUserById = async (req, res, next) => {
  try {
    let idQuery = req.params.id;
    const { name, email, password, photo, online } = req.body;
    let updatedUser = await User.findByIdAndUpdate(
      idQuery,
      { name, email, password, photo, online },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (error) {
    next(error);
  }
};

export default updateUserById;
