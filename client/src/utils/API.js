import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCpIaa1MfuHnJcYv7ScLu7R2kG3Vz19tn8";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY)
      .then(res => {
        const books = res.data.items;
        console.log(books)
        return books.map(book => {
          return {
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            authors: book.volumeInfo.authors,
            image: book.volumeInfo.imageLinks.thumbnail,
            description: book.volumeInfo.description,
            link : book.volumeInfo.previewLink,
          };
        });
      });
  }
};
