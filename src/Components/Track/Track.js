import React,{Component} from 'react';
import './track.css';
class Track extends Component{
      constructor(props){
        super(props);
       this.addTrack = this.addTrack.bind(this);
       this.removeTrack = this.removeTrack.bind(this);

      }
   // add track to the playlist
  addTrack(){
      this.props.onAdd(this.props.track);
  }

   removeTrack(){
     this.props.onRemove(this.props.track);
   }

  renderAction(isRemoval){
    if (this.props.onAdd) {
     return <a className='Track-action' onClick={this.addTrack}>+</a>;
   } else {
     return <a className='Track-action' onClick={this.removeTrack}>-</a>;
   }
  }
  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
            
          <p>{this.props.track.name } |
              {this.props.track.album}

           </p>

        </div>
        <a className="Track-action">{this.renderAction()}</a>
      </div>
    );
  }
}
export default Track;
