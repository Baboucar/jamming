import React,{Component} from 'react';
import './Searchbar.css';

class Searchbar extends Component{
      constructor(props){
          super(props);
          this.search = this.search.bind(this);
          this.handleTermChange = this.handleTermChange.bind(this);
      }

     search(term){
        return this.props.onSearch(term);
     }


     handleTermChange(e){
      this.setState({searchTerm: e.target.value })


     }
    render(){
      return(
        <div className="SearchBar">
          <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
          <a onClick={this.search}>SEARCH</a>
        </div>

      );

    }


}

export default Searchbar;
