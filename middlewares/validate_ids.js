import mongoose from "mongoose";

const validate_ids = (req, res, next) => {
    const ids = req.query.ids;
    if (!ids) {
        return res.status(400).json({ error: "No IDs" });
    }

    const idsArray = ids.split(',');

    const areValidIds = idsArray.every(id => mongoose.Types.ObjectId.isValid(id));

    if (!areValidIds) {
        return res.status(400).json({ error: "Uno o más IDs no son válidos" });
    }

    next();
};

export default validate_ids;
