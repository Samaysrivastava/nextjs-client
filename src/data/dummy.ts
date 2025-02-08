interface Book {
    title: string;
    description: string;
    author: string; // ObjectId (string) reference to the user
    coverImage: string;
    file: string;
    genre: string;
}

export const books: Book[] = [
    {
        title: "The Great Adventure",
        description: "An epic tale of a hero's journey through uncharted lands, facing mythical creatures and overcoming insurmountable odds.",
        author: "603c72ef0b1d8c001f8c3d5d",  // Make sure this ObjectId exists in your User collection
        coverImage: "https://example.com/images/great-adventure-cover.jpg",
        file: "https://example.com/files/great-adventure.pdf",
        genre: "Fantasy"
    }
];
