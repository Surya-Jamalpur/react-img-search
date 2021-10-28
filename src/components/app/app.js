import React from 'react';
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component{
onSearchSubmin(inputValue){
console.log(inputValue);

}
    render() {
        return (
            <div className="ui container">
            <p>Hi.. Am App Component</p>
            <SearchBar onSubmit={this.onSearchSubmin} />
            </div>
        )
    }
}
export default App;