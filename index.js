import express from "express";
import mongoose from "mongoose";
import actionBooks from "./routes/actionBooks.js";
import adventureBooks from "./routes/adventureBooks.js";
import romanceBooks from "./routes/romanceBooks.js";
import dotenv from "dotenv";
import Book from "./model/Books.js";

dotenv.config();

const app = express();


//route that gets all books
app.get("/books",async (req,res)=>{
        try{
          const books = await Book.find()
           res.json(books)
         }catch(error){
           res.json({message:error})
       }
         
     });

app.use(express.json());

app.use("/books/action",actionBooks);

app.use("/books/adventure",adventureBooks);

app.use("/books/romance",romanceBooks);


mongoose.connect(process.env.DB_Connection,{useNewUrlParser:true})
        .then(()=>app.listen(PORT,()=>{console.log(`server running on port ${PORT}...`)}))
        .catch((error)=>console.log(error))
const PORT = process.env.PORT || 3000;

