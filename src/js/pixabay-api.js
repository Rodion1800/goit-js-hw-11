import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://pixabay.com/api/';

const apiKey = '47996916-063d7568314d3761f2b5e2fb9';
const url = 'https://pixabay.com/api/';
const pictureName = document.querySelector('#picture-picker');

const searchButton = document.querySelector('#Search-btn');
const resultContent = document.querySelector('#results');

searchButton.addEventListener('click', () => {
  const searchedPicture = pictureName.value.trim();

  if (!searchedPicture) {
    iziToast.error({
      title: 'Error',
      message: `Please enter picture description`,
    });
    return;
  }

  const params = new URLSearchParams({
    key: apiKey,
    q: searchedPicture,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  resultContent.innerHTML = '';

  fetch(`${proxyUrl}${apiUrl}?${params.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
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
    .catch(error => console.log(error));

  pictureName.value = '';
});

function createImageCard(hit) {
  const card = document.createElement('div');
  card.classList.add('card');

  const link = document.createElement('a');
  link.href = hit.largeImageURL;
  link.classList.add('lightbox-item');

  const image = document.createElement('img');
  image.src = hit.webformatURL;
  image.alt = hit.tags;

  link.setAttribute('data-title', hit.tags);

  link.appendChild(image);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const stats = document.createElement('p');
  stats.innerHTML = `
    <span>Likes: ${hit.likes}</span> | 
    <span>Views: ${hit.views}</span> | 
    <span>Comments: ${hit.comments}</span> | 
    <span>Downloads: ${hit.downloads}</span>
  `;

  cardInfo.appendChild(stats);
  card.appendChild(link);
  card.appendChild(cardInfo);

  return card;
}
