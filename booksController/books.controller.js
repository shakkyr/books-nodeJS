const booksModule = require('../module/books.module')
const validator = require('validator');

//! ========================= get all books list =====================
const getAllBooks = (req,res)=> {
  booksModule.Book.find({}, (err,data)=>{
    if(err){
      res.status(404).json('not a valid data')
     return console.log(err);
    }

   return res.status(200).json(data)
  })
}
//! ========================= get all books list by year =====================
const getAllBooksByYear = (req,res)=> {

  booksModule.Book.find({year:req.params.year}, (err,data)=>{
    if(err){
      res.status(404).json('not a valid data')
     return console.log(err);
    }
    console.log(data);
   return res.status(200).json(data)
  })
}

//! ========================= add Book=====================
const sendBooks = ( req,res)=>{
   console.log(req.body);
   const {bookName,authorName,year,booksLanguage,rate} = req.body;

   if(!(bookName && authorName && year <=new Date().getFullYear() && booksLanguage.length ===2 && rate<=5 && rate>=0)){
     return res.status(400).send('missing data or invalid values ')
   }
   const book = new booksModule.Book({
    bookName:bookName,
    authorName: authorName,
    year:year,
    booksLanguage : booksLanguage,
    rate:rate
   })
   book.save((err, data)=>{
    if(err){
      res.status(404).json('not a valid data')
     return console.log(err);
    }
    res.status(200).json('data entered sucssesfully')
    console.log(data);
   })
}
//! ========================= edit Book=====================
const editBooks = (req,res) => {
  const {bookName,authorName,year,booksLanguage,rate} = req.body;
  if(!(bookName && authorName && year <=new Date().getFullYear() && booksLanguage.length ===2 && rate<=5 && rate>=0)){
    return res.status(400).send('missing data or invalid values ')
  }

  booksModule.Book.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, data)=> {
    if(err){
      res.status(404).send('book is not found')
      return console.log('book is not found');
    }
    console.log(data);
    res.status(200).json( {message:'your data was updated',data})
  })
}
//! ========================= delete Book=====================
const deleteBook = (req,res)=>{
  booksModule.Book.findOneAndDelete(req.params.id, (err,data)=>{
    if(err){
      res.status(404).send('book is not found')
      return console.log('book is not found');
    }
    return res.status(200).send(data);
  })

}




module.exports = {
    getAllBooks,
    sendBooks,
    editBooks,
    deleteBook,
    getAllBooksByYear
}