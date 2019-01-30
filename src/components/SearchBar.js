import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            //turn input from uncontrolled to a controlled input
            //hook it to State of SearchBar class, store data(term) inside component and NOT the DOM
            <input type='text' value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
