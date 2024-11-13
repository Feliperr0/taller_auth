import Bill from '../../models/Bill.js';

let getAllBills = async (req, res) => {
  try {
    const bills = await Bill.find().populate('user', 'name email');
    res.status(200).json({
      success: true,
      bills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching bills',
      error: error.message
    });
  }
};


let BillById = async (req, res) => {
  try {
    let idQuery = req.params.id;

    let bill = await Bill.findById(idQuery).populate('user');

 
    return res.status(200).json({
      succes: true,
      response: bill
    });
  } catch (error) {
    next(error)
  }
}

export { getAllBills, BillById }

