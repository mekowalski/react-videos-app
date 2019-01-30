import axios from 'axios';

const KEY = 'AIzaSyAJPpjtCVPSOF-Q-KIWR3Zjzusl_XYUflc'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 6,
    key: KEY
  }
});
