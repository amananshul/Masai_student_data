const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://aman:amananshul@cluster0.3jmhtiu.mongodb.net/?retryWrites=true&w=majority")

module.exports = connection;
