import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './imageList.css'

const ImageList = (props) => {
    const imgList = props.images.map((img) => {
        return <ImageCard key={img.id} image={img} />
    })
    return (
        <div className='imageList'>{imgList}</div>
    )
}
export default ImageList;