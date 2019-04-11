const config = require('./config.json');

process.env.MONGODB_URL = config.development.MONGODB_URL_LOCAL;
process.env.PORT = config.development.SERVER_PORT;
//keep your app encapsulated. Now you can run your app anywhere by modifying the 
//environment variables without changing your code and without rebuilding it!