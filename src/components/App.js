import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  //currently fetch videos then call setState
  //setState will only change the videos on the right side(VideoList)
  //update selected video at the same time to update video list and pick a video out of that list
  //set it as the selected video
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
      //when doing a new search, take first video in results and use it as default video
    });
  }


  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '15px'}}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
