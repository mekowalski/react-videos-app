import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  }
  //Under Networks by XHR & Fetch
  //A request shows and you can see entire query string with part, maxResults, KEY and q
  //That will show a Preview Response from Youtube
  //Items property 0-5, click on items tag and then snippet tag
  //That will show infor on the specific video
  //ie: channelTitle, description, title, etc

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App
