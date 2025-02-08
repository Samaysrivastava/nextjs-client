import React from "react";
import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded">
      <Image
        src={book.coverImage}
        alt={book.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "auto",
          height: "12rem",
        }}
      />
      <div>
        <h2 className="line-clamp-2 text-xl font-bold text-primary-600 text-balance">
          {book.title}
        </h2>
        <p className="font-bold text-primary-900">{book.description}</p>
        <Link
          href={`/books/${book._id}`}
          className="py-1 px-2 rounded border border-primary-500 mt-2 inline-block text-primary-500 font-medium text-sm hover:border-primary-100 hover:bg-primary-100 transition"
        >
          Read More
        </Link>
      </div>
      {/* jis domain se image aarhi hai use white list krna pdta hai next js pe ye security feature hai  */}
    </div>
  );
};

export default BookCard;
