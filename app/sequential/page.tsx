import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getFictionBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books?type=fiction", {
    cache: "no-store"
  });
  const data = response.json();
  return data;
}

async function getNonFictionBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books?type=non-fiction", {
    cache: "no-store"
  });
  const data = response.json();
  return data;
}

 async function Sequential(){
  const fictionBooks = await getFictionBooks();
  const nonFictionBooks =await  getNonFictionBooks();

 
  return (
    <div>
      <h1>Fiction Books</h1>
      <ul>
        {fictionBooks.map((book: Book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
      <h1>Non Fiction Books</h1>
      <ul>
        {nonFictionBooks.map((book: Book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
}
export default Sequential