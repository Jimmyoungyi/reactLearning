import React, { Component } from 'react';

class SearchBar extends Component{

  resetSearch = event =>{
    if(event.key === 'Enter'){
      this.props.onSearchTermChange(this.state.term);
    }
  }

  constructor(props){
    super(props);
    this.state = {term: ''};
  }

  render(){
    return(
      <div className="search-bar">
        <input value={this.state.term} onChange={event => this.setState({term: event.target.value})} onKeyUp={event => this.resetSearch(event)} />
      </div>
    )
  }

}

export default SearchBar
