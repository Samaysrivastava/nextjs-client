import React from 'react';
import {Book} from "@/types";
import BookCard from './BookCard';
const BookList = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/books`,{
    cache:'no-store'
  });
  if(!response.ok){
    throw new Error ("An error occured while fetching the books ");
  }
  const books = await response.json();
  return(
    <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-6'>
      
        {books.map((book)=>(
        
         <BookCard key={book._id} book={book}/>
          
        ))}
      
      
    </div>
  )
     
}

export default BookList;
