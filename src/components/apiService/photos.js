// import axios from "axios";

// const API_KEY = "bdCSTqifVqAf_9K--hkvotLeb5oljyDREqgfPQ2UOqY";
// axios.defaults.baseURL = "https://api.unsplash.com/";
// axios.defaults.headers.common["Authorization"] = API_KEY;
// axios.defaults.params = {
//   orientation: "landscape",
//   per_page: 15,
// };

// export const getPhotos = async (query, page) => {
//   const { data } = await axios.get(`search?query=${query}&page=${page}`);
//   return data;
// };
// import axios from "axios";

// const API_KEY = "4Y1n_pfAnx2gAMEBYN3TLFtB7-J4wDyzL4bXts20vBU";
// axios.defaults.baseURL = "https://api.unsplash.com/";
// axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

// axios.defaults.params = {
//   orientation: "landscape",
//   per_page: 15,
// };

// export const getPhotos = async (query, page) => {
//   const { data } = await axios.get(`search/photos`, {
//     params: { query, page },
//   });
//   return response.data;
// };
import axios from "axios";

const API_KEY = "4Y1n_pfAnx2gAMEBYN3TLFtB7-J4wDyzL4bXts20vBU";

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get("search/photos", {
    params: { query, page },
  });
  return data;
};
