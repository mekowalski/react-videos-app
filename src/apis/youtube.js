import axios from 'axios';

const KEY = 'AIzaSyAJPpjtCVPSOF-Q-KIWR3Zjzusl_XYUflc'

export default axiso.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 6,
    //also have to append api key onto URL
    key: KEY
  }
});

//baseURL will be retrieved and help append '/search'

//cap KEY: this is a constant value that should not be changed
//This KEY will be used inside the browser
//When a user accesses this applciation, they will be sent this API KEY
//The user could potentially get hands on the API KEY
//This specific API KEY is MEANT to be publicly available, meant for public access

//Google allows API Restrictions for HTTP referrers
//Once selected HTTP referrers, add localhost:3000 and save
//Only those accessing application from localhost:3000 will be able tosee/use the app
