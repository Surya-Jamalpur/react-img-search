import React from 'react';
import unsplash from '../../api/unsplash';
import SearchBar from '../SearchBar/SearchBar';
import ImageList from '../ImageList/ImageList'

class App extends React.Component {
    state = {
        images: []
    }
    onSearchSubmin = async (inputValue) => {
        const imgSearchRes = await unsplash.get('/search/photos', {
            params: {
                query: inputValue
            }
        });

        this.setState({ images: imgSearchRes.data.results });
    }
    render() {
        return (
            <div className="ui container">
                <p>Hi.. Am App Component</p>
                <SearchBar onSubmit={this.onSearchSubmin} />
                <p>Found: {this.state.images.length} images</p>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
export default App;