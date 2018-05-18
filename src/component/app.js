import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyAmgooJS4xpt6M2V2PkVNPkUh9SaXH44co';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.searchVideo('blizzard');
  }

  searchVideo = (term)=>{
    YTSearch({key: API_KEY, term: term}, videos=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    } );
  }

  render() {
    return (
      <div className="app">
        <SearchBar onSearchTermChange={this.searchVideo} />
        <VideoDetail selectedVideo={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} changeVideo={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }
}

export default App;
