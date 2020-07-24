import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Search Results
      searchResults: [
        {name: 'Kids With Guns', artist: 'Gorillaz', album: 'Demon Days', id: '0'},
        {name: '80', artist: 'Green Day', album: 'Keplunk!', id: '1'},
        {name: 'Concrete', artist: 'Poppy', album: 'I Disagree', id: '2'}
      ],
      // Playlist Name
      playlistName: '',
      // Playlist Tracks
      playlistTracks: [
        {name: 'White Stocking Tops', artist: 'Demented Scumcats', album: 'Splatter Baby', id: '3', uri: ''},
        {name: 'Cold Water', artist: 'Protest the Hero', album: 'Pacific Myth', id: '4', uri: ''},
        {name: 'Time', artist: 'Benny Benassi', album: 'Hypnotica', id: '5', uri: ''}
      ]
    }
    // Bind Methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }
  
  /* Add Track */
  addTrack(track) {
    // Check if track is already in playlist
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
    // Update State with Added Track
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, {name: track.name, artist: track.artist, album: track.album, id: track.id}]
      }))
    }
  };

  /* Remove Track */
  removeTrack(track) {
    // Filter Out Unwanted Track by ID
    const updatedTracks = this.state.playlistTracks.filter(removedTrack =>
      removedTrack.id !== track.id);
    // Update State without Removed Track
    this.setState(({
      playlistTracks: updatedTracks
    }))
  };

  /* Update Playlist Name */
  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  };

  /* Save Playlist */
  savePlaylist() {
    const trackURIs = [];
    this.state.playlistTracks.map(track => trackURIs.push(track.uri));
  };

  /* Render */
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* Search Bar */}
          <SearchBar />
          <div className="App-playlist">
          {/* Search Results */}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          {/* Playlist */}
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
