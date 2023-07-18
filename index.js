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
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, w: "majority" });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log(`Connected to MongoDB`);
}
);

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: process.env.DOMAIN_ORIGIN, credentials: true }));
app.use(
    EmailRoute,
    SitusRoute,
    BlogRoute,
    AuthRoute
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);