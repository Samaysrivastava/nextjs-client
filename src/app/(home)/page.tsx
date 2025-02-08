// 'use client'  by this we can make client component
import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";
// import { books } from "@/data/dummy";
export default async function Home() {
  // data fetching 
  // in next js it is recommended to used fetch
  // server componennt --> jo phle server pe render hota hai fir client ko diya jaata hai
  // client component -->  jo server pe nhi hota  client pe render hota hai
  // static component --> server pe nhi hota client pe hota
  // next me component ko async bna skte hai
  // by default it is server component

  const response = await fetch("http://localhost:2000/api/books");
  if(!response.ok){
    throw new Error ("An error occured while fetching the books ");
  }
  const books = await response.json();
  console.log(books); 
  return (
    <>
        <Banner/>
        <BookList/>
    </> 
  );
}

