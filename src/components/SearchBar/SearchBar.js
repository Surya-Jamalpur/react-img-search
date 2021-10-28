import React from 'react';

class SearchBar extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    state = {searchInputValue:''}
    // onInputChange(e){
    //     console.log(e.target.value);
    // }
    onSearchSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.searchInputValue);
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={(event) => this.onSearchSubmit(event)}>
                    <div className="field">
                    <label>Search Images</label>
                    {/* this will also work as exactly same as below */}
                    {/* <input type="text" placeholder="Search Images" onChange={this.onInputChange} /> */}
                    <input type="text" 
                    placeholder="Search Images" 
                    value={this.state.searchInputValue}
                    onChange={(e) => this.setState({searchInputValue:e.target.value})} />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default SearchBar;