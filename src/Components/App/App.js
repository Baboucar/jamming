import React, { Component } from 'react';
import Searchbar from '../SearchBar/Searchbar.js';
 import Searchresults from '../SearchResult/Searchresults.js';
 import Playlist from '../PlayList/Playlist.js';
 import Spotify from '../../util/Spotify';
import './App.css';

class App extends Component {
      constructor(props){
          super(props);

          this.state = {
            searchResults:[
              {
              name:"baboucarr Drammeh",
              artist:"test",
              album:"albu"}
            ],

            playlistName: 'test',

            playlistTracks:[{
              name:"baboucarr ",
              artist:"test",
              album:"album"
            }]
          }

      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
      }
     // add a track to the playlist
      addTrack(track){
          if(this.state.playlistTracks.filter((playlistTrack) =>    track.id !== playlistTrack.id  )){
            let tracks = this.state.playlistTracks;
             tracks.push(track);
             this.setState({playListTracks: tracks})
          }


      }

      // remove a track
       removeTrack(track){
         const tracks = this.state.playlistTracks;
         const removeTrack = tracks.filter((item) => track !== item);
           this.setState({playlistTracks:removeTrack})
       }

       // update the name of a playListTracks

       updatePlaylistName(name){
           this.setState({playlistTracks: name})

       }
       // save playlist

       savePlaylist() {
             const trackUris = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
             Spotify.savePlaylist(this.state.playlistName, trackUris);
             this.setState({
               searchResults: []
             });
             this.updatePlaylistName('My playlist');

      }

          search(term) {
          Spotify.search(term)
          .then(searchResults => this.setState({
           searchResults: searchResults
            }));
    }
  render() {
    return(
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
    {/*Add a SearchBar component */}
       <Searchbar  onSearch={this.search}/>
      <div className="App-playlist">
    {/*Add a SearchResults component */}
        <Searchresults
        searchResults={this.state.searchResults}
        onAdd={this.addTrack}
        />
    { /* Add a Playlist component */}
       <Playlist
           onRemove={this.removeTrack}
          name={this.state.playlistName}
       onSave={this.savePlaylist}
       onNamechange={this.updatePlaylistName}
        tracks={this.state.playlistTracks}/>
      </div>
    </div>
  </div>
    );
  }
}

export default App;
