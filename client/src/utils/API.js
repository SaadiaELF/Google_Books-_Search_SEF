import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCpIaa1MfuHnJcYv7ScLu7R2kG3Vz19tn8";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY)
      .then(res => {
        const books = res.data.items;
        return books.map(book => {
          return {
            id : book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            authors: book.volumeInfo.authors,
            image: book.volumeInfo.imageLinks.thumbnail,
            description: book.volumeInfo.description,
            link: book.volumeInfo.previewLink,
          };
        });
      });
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
