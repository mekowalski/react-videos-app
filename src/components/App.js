import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onTermSubmit = (term) => {
    console.log(term)
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
