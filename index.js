const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const EmailRoute = require("./routes/EmailRoute.js");
const SitusRoute = require("./routes/SitusRoute.js");
const BlogRoute = require("./routes/BlogRoute.js");
const AuthRoute = require("./routes/AuthRoute.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    w: "majority"
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(error => {
        console.error("MongoDB connection error:", error);
    });

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.DOMAIN_ORIGIN }));

// Routes
app.use(EmailRoute);
app.use(SitusRoute);
app.use(BlogRoute);
app.use(AuthRoute);

// Error handling middleware
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});