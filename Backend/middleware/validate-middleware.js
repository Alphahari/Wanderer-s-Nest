const validate = (schema) => async (req, res, next) => {
    try {
        const parse = await schema.parseAsync(req.body);
        next();
    } catch (err) {
        const status = 422;
        const message = "Fill The Input details Properly";
        const extraDetails = err.errors[0].message;
        const error = {
            status,
            message,
            extraDetails
        }
        next(error);
    }
}

module.exports = validate;