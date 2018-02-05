import React,{Component} from 'react';
import Tracklist from '../TrackList/Tracklist.js';
import './Playlist.css';
class Playlist extends Component{

        constructor(props){
           super(props);
            this.handleNameChange = this.handleNameChange.bind(this);
        }
    handleNameChange(e){
      this.props.onNamechange(e.target.value);

    }
     render(){
      return(
        <div className="Playlist">
          <input defaultValue={'New Playlist'}  onChange={this.handleNameChange}/>
      { /*Add a TrackList component */}

         <Tracklist
         tracks={this.props.tracks} 
         onRemove={this.props.onRemove}/>
          <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
        </div>

      );

     }

}

export default Playlist;
