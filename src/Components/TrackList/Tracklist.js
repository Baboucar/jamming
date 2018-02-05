import React,{Component} from 'react';
import Track from '../Track/Track.js';
import './tracklist.css';
class Tracklist extends Component{
    render(){
      return(

        <div className="TrackList">
         {this.props.tracks.map(track => <Track track={track} onRemove={this.props.onRemove} onAdd={this.props.onAdd} />)}
       </div>
      );
    }
}

export default Tracklist;
