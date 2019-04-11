const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
require('../config/config');
const url = process.env.MONGODB_URL
const connection = async () => {
    try {
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log("Database is connected");
    } catch (err) {
        console.log(err.message);
    }

}
connection();

module.exports = {
    mongoose
};