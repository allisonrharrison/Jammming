import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'Kids With Guns', artist: 'Gorillaz', album: 'Demon Days', id: '0'},
        {name: '80', artist: 'Green Day', album: 'Keplunk!', id: '1'},
        {name: 'Concrete', artist: 'Poppy', album: 'I Disagree', id: '2'}
      ],
      playlistName: 'My Awesome Playlist',
      playlistTracks: [
        {name: 'White Stocking Tops', artist: 'Demented Scumcats', album: 'Splatter Baby', id: '0'},
        {name: 'Cold Water', artist: 'Protest the Hero', album: 'Pacific Myth', id: '1'},
        {name: 'Time', artist: 'Benny Benassi', album: 'Hypnotica', id: '2'}
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
