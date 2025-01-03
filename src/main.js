import { fetchImages } from './js/pixabay-api';
import { createImageCard } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const pictureName = document.querySelector('#picture-picker');
const searchButton = document.querySelector('#Search-btn');
const resultContent = document.querySelector('#results');
const loadingIndicator = document.createElement('div');

loadingIndicator.id = 'loading-indicator';
loadingIndicator.classList.add('loading-indicator');
loadingIndicator.textContent = 'Loading images, please wait';
loadingIndicator.style.display = 'none';
document.body.appendChild(loadingIndicator);

searchButton.addEventListener('click', () => {
  const searchedPicture = pictureName.value.trim();

  if (!searchedPicture) {
    iziToast.error({
      title: 'Error',
      message: `Please enter picture description`,
    });
    return;
  }

  loadingIndicator.style.display = 'block';

  resultContent.innerHTML = '';

  fetchImages(searchedPicture)
    .then(data => {
      resultContent.innerHTML = '';
      if (data.hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      data.hits.forEach(hit => {
        const card = createImageCard(hit);
        resultContent.appendChild(card);
      });

      const lightbox = new SimpleLightbox('.lightbox-item');
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loadingIndicator.style.display = 'none';
      pictureName.value = '';
    });
});
