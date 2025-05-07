const {z} = require("zod");

const Tourist = z.object({
    username: z
    .string({required_error:"username is required"})
    .trim()
    .min(3, {message:"Username must be more then 3 charcters"})
    .max(255, {message:"Username must be less then 255 charcters"}),
    email: z
    .string({required_error:"username is required"})
    .trim()
    .email({message:"invalid email"})
    .min(3, {message:"Username must be more then 3 charcters"})
    .max(255, {message:"Username must be less then 255 charcters"}),
    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, {message:"Invalid Phone Number"})
    .max(20, {message:"Invalid Phone Number"}),
    password: z
    .string({required_error:"password is required"})
    .min(8, {message:"Password must be more then 8 charcters"})
    .max(255, {message:"Password must be less then 255 charcters"})
})
const Local = z.object({
    username: z
    .string({required_error:"username is required"})
    .trim()
    .min(3, {message:"Username must be more then 3 charcters"})
    .max(255, {message:"Username must be less then 255 charcters"}),
    email: z
    .string({required_error:"username is required"})
    .trim()
    .email({message:"invalid email"})
    .min(3, {message:"Username must be more then 3 charcters"})
    .max(255, {message:"Username must be less then 255 charcters"}),
    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, {message:"Invalid Phone Number"})
    .max(20, {message:"Invalid Phone Number"}),
    password: z
    .string({required_error:"password is required"})
    .min(8, {message:"Password must be more then 8 charcters"})
    .max(255, {message:"Password must be less then 255 charcters"}),
    description: z
    .string({required_error:"description is required"})
    .trim()
})

module.exports = {Tourist,Local};