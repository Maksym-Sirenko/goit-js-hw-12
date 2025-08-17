import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

let page = 1;
let query = '';
let totalHits = 0;

refs.searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  query = e.target.elements['search-text'].value.trim();

  const searchQuery = e.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({
      message: 'Please, enter a valid search query',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits: newTotal } = await getImagesByQuery(query, page);
    totalHits = newTotal;

    if (hits.length === 0) {
      iziToast.error({
        message: 'Sorry, no images found. Please try another query!',
        position: 'topRight',
      });
      return;
    }

    createGallery(hits);

    if (totalHits > PER_PAGE) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    e.target.reset();
  }
});

refs.loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const totalPages = Math.ceil(totalHits / PER_PAGE);
    if (page > totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }

    const { hits } = await getImagesByQuery(query, page);
    createGallery(hits);

    const { height: cardHeight } =
      refs.gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (page === totalPages) {
      hideLoadMoreButton();
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    hideLoader();
  }
});
