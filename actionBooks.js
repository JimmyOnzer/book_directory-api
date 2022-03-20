import express from "express";
const router = express.Router();
import Book from "../model/Books.js"


//route that gets all books in a genre
router.get("/",async (req,res)=>{
   try{
     const books = await Book.find({genre: /^action/})
      res.json(books)
    }catch(error){
      res.json({message:error})
  }
    
});

//route that gets a specific book
router.get("/:bookId" , async(req,res)=>{
    try{
       const book = await Book.findById(req.params.bookId)
         res.json(book)
       }catch(error){
         res.json({message:error})
    } 
});

//route for adding a book
router.post("/",async(req,res)=>{
   const book = new Book({
        title:req.body.title,
        author:req.body.author,
        about:req.body.about,
        genre:req.body.genre
   });
   try{
      const savedBook = await book.save()
      res.json(savedBook)
   }catch(error){
       res.json({message:error})
   }
        
});

//route for updating parts of a specific book
router.patch("/:bookId",async(req,res)=>{
   try{
  const updatedBook= await Book.updateOne({_id: req.params.bookId})
 }catch(error){
   res.json({message:error})
}

});

//route for deleting a specific book
router.delete("/:bookId",async (req,res)=>{
      try{
         const deletedBook = await Book.remove({_id : req.params.bookId})
      }catch(error){
           res.json({message:error})
      }
      
});


export default router;
 
