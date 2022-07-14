import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all'
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }

  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  handleFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}), () => {
      return this.props.searchMovies(this.state.search, this.state.type);
    });
  }

  render() {
    const {search, type} = this.state
    return <div className="row">
        <div className="input-field search-container">
          <input 
            type="search"
            placeholder="search" 
            className="validate"
            value={search}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
          <button className='btn search-btn' onClick={() => this.props.searchMovies(search, type)}>Search</button>
        </div>
        <div className='radio-btns'>
          <label>
            <input
              name='type' 
              type='radio' 
              data-type='all' 
              onChange={this.handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input 
              name='type' 
              type='radio' 
              data-type='movie' 
              onChange={this.handleFilter}
              checked={type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input 
              name='type' 
              type='radio' 
              data-type='series' 
              onChange={this.handleFilter}
              checked={type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
    </div>
  }
}

export {Search}