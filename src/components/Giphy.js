import React, { useState } from 'react';
import Search from './search';
import Gif from './Gif';
import Trending from './trending';
import { fetchRandomGif } from '../api'

const Giphy = ({setPostGif, toggleGiffy}) => {
    const [searchText, setSearchState] = useState('');
    const [gif, setGif] = useState([]);
    const [loader, setLoader] = useState(true);
    const [isError, setIsError] = useState(false);

    const search = async (searchText) => {
        setIsError(false);
        setLoader(true);
        setGif([]);
        
        try {
            const { data } = await fetchRandomGif(searchText);
            console.log(data);
            setGif(data);
            setSearchState(searchText);
        } catch (error) {
            setIsError(true);
            console.log(error);
        }
        setLoader(false);
    };

    const handleImageClick = (url) => {
        setPostGif(url);
        toggleGiffy(false)
    }

    return (
        <div className="container">
            <div>
            <Search
                onSearch={search}
            />
            </div>
            { isError && <div>Something went wrong ...</div> }
            <Gif
                loader={loader}
                data={gif}
                handleImageClick = {handleImageClick}
                
            />
            <Trending
                handleImageClick = {handleImageClick}
             />
        </div>
    );
};

export default Giphy;