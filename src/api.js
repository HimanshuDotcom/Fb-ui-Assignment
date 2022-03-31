import axios from 'axios';

const URL = 'http://api.giphy.com/v1/gifs/';
const KEY = 'A4kYDpO6zUqg5xkBEP8qrNWARbWbjOTr';

export const fetchRandomGif = async (name) => {
  const { data } = await axios.get(URL + 'search', {
    params: {
      q: name,
      api_key: KEY
    }
   });

  return data;
};

export const fetchTrendingGifs = async () => {
  const { data } = await axios.get(URL + 'trending', {
    params: {
      limit: 4,
      api_key: KEY
    }
  });

  return data
};