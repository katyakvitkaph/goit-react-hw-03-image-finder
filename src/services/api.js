import axios from 'axios';

const key = '14441096-534811d7a70c206cdf6d1f3a5';

export const fetchArticles = (searchQuery = 'news', pageNumber = 1) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export const somethingFunc = () => {};
