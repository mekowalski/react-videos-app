import axios from 'axios';

const KEY = 'AIzaSyCWx3mJk-T5vbNnhXOm03bX5u06Ral0NMQ'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 6,
    key: KEY
  }
});
