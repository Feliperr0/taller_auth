import Property from '../../models/Property.js';

let deletePropertyById = async (req, res, next) => {
  try {
    let idQuery = req.params.id;
    let deletedProperty = await Property.findByIdAndDelete(idQuery);

    return res.status(200).json({
      success: true,
      message: 'Property deleted successfully',
      property: deletedProperty
    });
  } catch (error) {
    next(error);
  }
};

export default deletePropertyById;
