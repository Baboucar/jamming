import React,{Component} from 'react';
import Tracklist from '../TrackList/Tracklist.js'
import './Searchresults.css';
class Searchresults extends  Component{

       render(){
         return(
           <div className="SearchResults">
             <h2>Results</h2>
          {  /* Add a TrackList component */   }

            <Tracklist
            tracks={this.props.searchResults}
            onAdd={this.props.onAdd}/>

           </div>
         )
       }


}

export default Searchresults;
