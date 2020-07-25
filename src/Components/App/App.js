import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Search Results
      searchResults: [],
      // Playlist Name
      playlistName: '',
      // Playlist Tracks
      playlistTracks: []
    }
    // Bind Methods
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  
  /* Add Track */
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    // Check if track is already in playlist
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    // Update State with Added Track
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      })
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

  /* Search */
  search(term) {
    Spotify.search(term)
    .then(searchResults => {
      this.setState({
        searchResults: searchResults
      })
    })
  };

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* Search Bar */}
          <SearchBar onSearch={this.search} />
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
