import Property from '../../models/Property.js';

let getAllProperties = async (req, res, next) => {
    try {
        let properties = await Property.find().populate('user');
        return res.status(200).json({
            success: true,
            properties: properties
        });
    } catch (error) {
        next(error);
    }
}

let PropertyById = async (req, res, next) => {
    try {
        let idQuery = req.params.id;

        let property = await Property.findById(idQuery).populate('user');


        return res.status(200).json({
            success: true,
            response: property
        });
    } catch (error) {
        next(error);
    }
}


export { getAllProperties, PropertyById }



