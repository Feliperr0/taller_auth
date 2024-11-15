let verify_id_query = (req, res, next) => {
    if (!req.query.ids) {
        return res.status(400).json({
            error: "No se proporcionaron IDs"
        });
    } next();
};

export default verify_id_query;
