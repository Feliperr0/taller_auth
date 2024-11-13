import Bill from "../../models/Bill.js";

let create = async (req, res, next) => {
  try {
    let bill = req.body;
    let createBill = await Bill.create(bill);

    return res.status(201).json({
      success: true,
      message: "Bill created successfully",
      response: createBill
    });
  } catch (error) {
    next(error);
  }
};

let createBills = async (req, res, next) => {
  try {
    let bills = req.body;
    let createdBills = await Bill.insertMany(bills);

    return res.status(201).json({
      success: true,
      message: "Bills created successfully",
      bills: createdBills
    });
  } catch (error) {
    next(error);
  }
};

// Exportación correcta
export { create, createBills };
