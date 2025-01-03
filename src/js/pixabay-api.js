export const apiUrl = 'https://pixabay.com/api/';
export const apiKey = '47996916-063d7568314d3761f2b5e2fb9';

export function fetchImages(query) {
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${apiUrl}?${params.toString()}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
