import Property from "../../models/Property.js";

let create = async (req, res, next) => {
  try {
    let property = req.body;
    let createProperty = await Property.create(property);

    return res.status(201).json({
      success: true,
      message: "Property created successfully",
      response: createProperty
    });
  } catch (error) {
    next(error);
  }
};

let createProperties = async (req, res, next) => {
  try {
    let properties = req.body;
    let createdProperties = await Property.insertMany(properties);

    return res.status(201).json({
      success: true,
      message: "Properties created successfully",
      Properties: createdProperties
    });
  } catch (error) {
    next(error);
  }
};


export { create, createProperties };
