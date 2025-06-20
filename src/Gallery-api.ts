// src/articles-api.js
import axios from "axios";

const ACCESS_KEY = "tw29lGevGnIF1R8u10avRooZKAnyFZvG7g2pVNg3JVY";

axios.defaults.baseURL = "https://api.unsplash.com";

export interface Image {
  id: number;
  user: { name: string };
  description: string;
  likes: number;
  urls: { small: string; regular: string };
  alt_description: string;
}

export interface Photo {
  images: Image[];
  totalPages: number;
}

export const fetchArticles = async (
  topic: string,
  currentPage: number
): Promise<Photo> => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: topic,
      page: currentPage,
      per_page: 9,
    },
  });
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};
