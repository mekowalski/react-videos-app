import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//Update state on the App class
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items })
  }


  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  //VideoList renders a list therefore passing a plural, array of objects named videos makes sense
  //VideoDetail passes one single object alone therefore props is named video
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App
