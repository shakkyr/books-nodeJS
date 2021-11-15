const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        max: new Date().getFullYear(),
    },
    booksLanguage: {
        type: String,
        maxLength :2 ,
        required: true
    },
    rate: {
        type: Number,
        required:true,
        min: 1,
        max: 5,
    }
});

const Book = mongoose.model('Book', booksSchema);

module.exports = {
    Book
}