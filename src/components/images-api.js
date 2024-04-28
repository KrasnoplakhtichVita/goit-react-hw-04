import { useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "La1nlIhO2U8F0Qh3EfeLZErGUdGhiz8hTa1CKj67fMQ";

const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 15,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};

export default fetchImages;
