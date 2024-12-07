import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value, 
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (newBook.title && newBook.author) {
      // if title and author has values，add books
      setBooks((prevBooks) => [...prevBooks, newBook]);
      // clear the input
      setNewBook({ title: "", author: "" });
    } else {
      alert("Please fill in both title and author!");
    }
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* Form will go here */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange} />
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange} />
          <button>Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        <ul>
          {books.map((book,index) => (
            <li key={index}>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bookshelf;
