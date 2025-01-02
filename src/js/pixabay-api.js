import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const apiKey = '47996916-063d7568314d3761f2b5e2fb9';
const url = 'https://pixabay.com/api/';
const pictureName = document.querySelector('#picture-picker');

const searchButton = document.querySelector('#Search-btn');

searchButton.addEventListener('click', () => {
  const searchedPicture = pictureName.value.trim();

  if (!searchedPicture) {
    iziToast.error({
      title: 'Error',
      message: `Please enter picture description`,
    });
  }

  const params = new URLSearchParams({
    key: apiKey,
    q: searchedPicture,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  fetch(`${url}?${params.toString()}`, {
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
      console.log(data);
    })
    .catch(error => console.log(error));
});
