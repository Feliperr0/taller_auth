import Bill from '../../models/Bill.js';

let deleteBillById = async (req, res, next) => {
  try {
    let idQuery = req.params.id;
    let deletedBill = await Bill.findByIdAndDelete(idQuery);

    return res.status(200).json({
      success: true,
      message: 'Bill deleted successfully',
      property: deletedBill
    });
  } catch (error) {
    next(error);
  }
};

export default deleteBillById;