//  INITIAL MODULES
import React, { Component } from 'react';

// STYLES
import './App.css';

// COMPONENTS
import SearchBar from './components/SearchBar.jsx'
import SearchResults from './components/SearchResults.jsx'

class App extends Component {
  state = {
    searchField: ''
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  render()  {
    return (
      <div className='top-container'>
        <SearchBar
          searchField={this.state.searchField}
          handleChange={this.handleChange}
        />
        <SearchResults
          searchField={this.state.searchField}
        />
      </div>
    );
  }
}

export default App;
