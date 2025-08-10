import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51705159-2a53c7b838f6ac9c38294ce72';

export const getImagesByQuery = query => {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(({ data }) => {
      if (data.hits.length === 0) {
        return null;
      }
      return data.hits;
    })
    .catch(error => {
      iziToast.error({
        message: `Error while getting images: ${error.message}`,
        position: 'topRight',
      });
      console.error(error);
      return null;
    });
};
