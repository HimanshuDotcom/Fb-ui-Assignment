import React from 'react';


const Gif = (props) => {
    
    // if(props.data.length === 0) return null;
    console.log(props)
   // create array of item components
    const items = props.data.map((itemData) => {
        return <Item
        key = {itemData.id}
         url={itemData?.images?.original.url}
         handleImageClick = {props.handleImageClick}
        />
    })
    return(
        <div className='text-container'>
            {items}
        </div>
    )
    
}

const Item = (props) => {

    return(
        <div className='gif-item'>
            <img
             style={{'display' : 'block','width' : '100%'}}
             onClick={() => props.handleImageClick(props.url)}
             src={props.url} />
        </div>
    )
}

export default Gif;