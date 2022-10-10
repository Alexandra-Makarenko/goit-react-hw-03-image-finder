import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?key=29482519-7d7042a408157712b5334bdf2';

export const getImages = async (query,page) => {
    const response = await axios.get(`&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${page * 12}&page=1`);
    const result = response.data.hits;
    console.log(result)
    return result;
};



