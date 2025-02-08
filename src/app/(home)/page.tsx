// 'use client'  by this we can make client component
import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";
import Loading from "@/components/Loading";
import { Suspense } from "react";
// import { Book } from "@/types";
// import { books } from "@/data/dummy";
export default async function Home() {
  // data fetching 
  // in next js it is recommended to used fetch
  // server componennt --> jo phle server pe render hota hai fir client ko diya jaata hai
  // client component -->  jo server pe nhi hota  client pe render hota hai
  // static component --> server pe nhi hota client pe hota
  // next me component ko async bna skte hai
  // by default it is server component




  // console.log("books : ",books);
  return (
    <>
        <Banner/>
        <Suspense fallback={<Loading/>}>
              <BookList/>
        </Suspense>
      
    </> 
  );
}

