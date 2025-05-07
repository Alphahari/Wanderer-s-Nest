const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const touristSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

});

const localSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

});

touristSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    } catch (error) {
        next(error);
    }
}
)

localSchema.pre("save", async function () {
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
    } catch (error) {
        next(error);
    }
}
)

touristSchema.methods.generateToken = function () {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.jwt_secret_token,
        {
            expiresIn:"30d",
        },
    )
    } catch (error) {
        console.log("error in jwt")
    }
}

localSchema.methods.generateToken = function () {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.jwt_secret_token,
        {
            expiresIn:"30d",
        },
    )
    } catch (error) {
        console.log("error in jwt")
    }
}

touristSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
localSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const Tourist = new mongoose.model("Tourist", touristSchema);
const Local = new mongoose.model("Local", localSchema);

module.exports = {Tourist, Local};