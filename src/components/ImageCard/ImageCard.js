import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { spans: 0 }
        this.elementRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.elementRef);
        this.elementRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => {
        const imgHeight = this.elementRef.current.clientHeight;
        const spans = Math.ceil(imgHeight / 10);
        this.setState({ spans: spans })
    }
    render() {
        const { description, urls } = this.props.image;
        return (<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img ref={this.elementRef} alt={description} src={urls.regular} />
        </div>
        )
    }

}
export default ImageCard;