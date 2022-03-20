import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
     title:{
         type:String
     },
      author:{
          type:String
      },

      about:{
          type:String
      },

    genre:{
        type:String
    }

})


const Book = mongoose.model("Books",bookSchema);
export default Book;