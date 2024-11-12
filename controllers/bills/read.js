import Bill from '../../models/Bill.js';

export let getAllBills = async (req, res) => {
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
