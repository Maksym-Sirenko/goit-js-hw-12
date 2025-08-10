import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-function';

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchQuery = e.target.elements['search-text'].value.trim();
  if (!searchQuery) {
    iziToast.error({
      message: 'Please, enter a valid search query',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(images => {
      if (!(images?.length > 0)) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(images);
    })
    .catch(error => {
      console.log(error.message);
    })
    .finally(() => {
      hideLoader();
      e.target.reset();
    });
});
