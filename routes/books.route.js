const express = require('express');
const booksController = require('../booksController/books.controller')
const router = express.Router();




router.get("/",(req,res) =>
{
   booksController.getAllBooks(req,res)
} ).post('/', (req,res) =>{
   
   booksController.sendBooks(req,res)
}).put('/:id', (req,res) =>{

   booksController.editBooks(req,res)
}).delete('/:id', (req,res) =>{

   booksController.deleteBook(req,res)
}).get('/:year', (req,res)=>{
    booksController.getAllBooksByYear(req,res)
})

module.exports = router;