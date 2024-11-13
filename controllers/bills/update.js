import Bill from '../../models/Bill.js';

let updateBillById = async (req, res, next) => {
  try {
    let idQuery = req.params.id;
    const { description, amount, user } = req.body;
    let updatedBill = await Bill.findByIdAndUpdate(
      idQuery,
      { description, amount, user},
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: "Bill updated successfully",
      Bill: updatedBill
    });
  } catch (error) {
    next(error);
  }
};

export default updateBillById;
