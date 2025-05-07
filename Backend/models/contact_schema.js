const { model , Schema } = require("mongoose")

const contactSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
})

const Contact = new model("Contact", contactSchema);
module.exports = Contact;