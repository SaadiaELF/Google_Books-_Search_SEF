const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    id: String,
    title: String,
    subtitle: String,
    authors: [String],
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
