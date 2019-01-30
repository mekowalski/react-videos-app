import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  onTermSubmit = term => {
    //pre-configured instance of axios
    //and can now pass in the params of q
    //will need to use a promise or async await with this request
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  }

  render() {
    return (
      <div className='ui container'>
      //whenever passing a callback Prop to a Component custome-created, can name that prop anything
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App
