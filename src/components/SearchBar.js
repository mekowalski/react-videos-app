import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
        //show at least a form element, label and input
      <div className='search-bar ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input type='text' />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
