import React, { Component } from 'react'


class SearchResults extends Component {
  render()  {
    return (
        <div className='search-results'>Search results
          <h5>User is searhing: {this.props.searchField}</h5>
        </div>

    )
  }
}

export default SearchResults;
