const dotenv = require("dotenv");
dotenv.config();

const config = {
    mongoURI: process.env.MONGOURL }

module.exports = config