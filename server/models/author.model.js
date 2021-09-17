const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    // fields that a table would have
    name:{
        type: String,
        required:[true, "A name is required!"],
        minlength: [3, "The name must be longer than 3 characters"]
    }
})

const Author = mongoose.model("Author", AuthorSchema)

module.exports = Author;