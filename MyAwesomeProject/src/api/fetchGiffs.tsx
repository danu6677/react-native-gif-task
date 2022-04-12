import axios from 'axios';
import Gifs from './model';

const API_KEY = 'BvFV6zTeyxB9U8Y4SZsxL0Hn3MmHkuXq';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search';

const fetchDataFropmAPI = async (term: string) => {
  try {
    // const API_KEY = 'BvFV6zTeyxB9U8Y4SZsxL0Hn3MmHkuXq';
    // const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
    const resJson = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&limit=10&q=${term}`,
    );
    const {data} = await resJson.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDataFropmAPI;
