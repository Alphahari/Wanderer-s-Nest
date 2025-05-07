const Contact = require("../models/contact_schema")

const contact = (req, res) => {
    response = req.body;
    try {
        Contact.create(response);
    } catch (error) {
        res.status(500)
    }
}

module.exports = contact;