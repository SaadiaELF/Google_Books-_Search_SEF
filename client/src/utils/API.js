import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCpIaa1MfuHnJcYv7ScLu7R2kG3Vz19tn8";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
