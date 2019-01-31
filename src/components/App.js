import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  //first default state to be an emptry array, because this return is expected to be an array in the future
  state = { videos: [] };

  //after request and return is made, video.length will be updated
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos
      </div>
    );
  }
}

export default App
