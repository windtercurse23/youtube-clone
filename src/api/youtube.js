import axios from 'axios';

const KEY = 'AIzaSyANAPgvReooS0K9_hu031z7757qCumWuxY';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5 ,
        key :KEY
    }
})