
import React from "react";
type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};
async function getBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books", {
    cache:'no-store'
  });
  const data = response.json();
  return data;
}

export default async function page() {
  const books = await getBooks();

  return (
    <div>
      <h1>Static Page</h1>
      <div>
        {books.map((book: Book) => (
        <table key={book.id}>
              <tr>
                 <th>Id</th>
                 <th>Name</th>
                 <th>Type</th>
                 <th>Available</th>
              </tr>
              <tbody>
                  <tr>
                      <td>{book.id}</td>
                      <td>{book.name}</td>
                      <td>{book.type}</td>
                      <td>{book.available}</td>
                  </tr>

              </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}






       
    

  
