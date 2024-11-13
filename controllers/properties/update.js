import Property from '../../models/Property.js';

let updatePropertyById = async (req, res, next) => {
  try {
    let idQuery = req.params.id;
    const { type, value, user } = req.body;
    let updatedProperty = await Property.findByIdAndUpdate(
      idQuery,
      { type, value, user},
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: "Property updated successfully",
      Property: updatedProperty
    });
  } catch (error) {
    next(error);
  }
};

export default updatePropertyById;
