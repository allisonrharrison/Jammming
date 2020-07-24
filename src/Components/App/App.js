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
        {name: 'White Stocking Tops', artist: 'Demented Scumcats', album: 'Splatter Baby', id: '3'},
        {name: 'Cold Water', artist: 'Protest the Hero', album: 'Pacific Myth', id: '4'},
        {name: 'Time', artist: 'Benny Benassi', album: 'Hypnotica', id: '5'}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, {name: track.name, artist: track.artist, album: track.album, id: track.id}]
      }))
    }
  };

  removeTrack(track) {
    const updatedTracks = this.state.playlistTracks.filter(removedTrack =>
      removedTrack.id !== track.id)
    this.setState(({
      playlistTracks: updatedTracks
  }))};

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
