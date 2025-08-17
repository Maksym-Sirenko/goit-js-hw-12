import axios from 'axios';

export const PER_PAGE = 15;

export const getImagesByQuery = async (query, page = 1) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '51705159-2a53c7b838f6ac9c38294ce72';

  const { data } = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query.trim(),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: PER_PAGE,
      page,
    },
  });
  return data;
};
