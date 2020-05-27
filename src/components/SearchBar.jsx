import React, { Component } from 'react'


class SearchBar extends Component {
  render()  {
    return (
      <div className='search-container'>
        <form>
          <div className="form-group">
            <label htmlFor="search">Seearch for a movie</label>




            <input
            id="search"
            type="text"
            className="form-control"
            value={this.props.searchField} 
            onChange={this.props.handleChange}
            />





            <small className="form-text text-muted">Movie Title</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }

}


export default SearchBar
