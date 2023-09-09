import axios from 'axios'
const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {maxResults: '50', },
    headers: {
      'X-RapidAPI-Key': '774dba7f66msh01187a6121b0a30p15c15fjsnb9ec63aefabb',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }