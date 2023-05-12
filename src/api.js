import axios from "axios";

axios.defaults.baseURL="https://pixabay.com/api";
const KEY_API = '34548627-4253aa847fe52c38f81610ad9';

const fetchData = async(search, page)=> {
    const {data} = await axios.get(`/?q=${search}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`);
    return data ;
}

export default fetchData;