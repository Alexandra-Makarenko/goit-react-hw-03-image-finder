import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '29482519-7d7042a408157712b5334bdf2'

export const getImages = async (query,page) => {
    const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${page * 12}&page=1`);
    const result = response.data.hits;
    console.log(result)
    return result;
};



