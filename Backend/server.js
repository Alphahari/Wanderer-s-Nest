require("dotenv").config();
const cors = require('cors')
const express = require('express');
const authRouter = require("./router/auth-router.js");
const connectDb = require("./utils/db.js")
const errorMiddleware = require("./middleware/error-middleware.js")
const contactRoute = require("./router/auth-contact.js")
const localsExperienceRoute = require("./router/router-localExperiences.js")

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api", localsExperienceRoute);
app.use(errorMiddleware);

connectDb().then(()=> {
    app.listen(port, () => {
        console.log(`running on port ${port}`)
    }
    );
});