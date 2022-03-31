import React, { useState, useEffect, useCallback } from 'react';
import { fetchTrendingGifs } from '../api';
import {AiFillFund} from "react-icons/ai";

const Trending = ({handleImageClick}) => {
    const [giphs, setGiphs] = useState({ data: [] });
    const [loader, setLoader] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchApi = useCallback(
        async () => {
            setLoader(true);
            try {
                const response = await fetchTrendingGifs();
                setGiphs(response);
            } catch (error) {
                console.log(error);
                setIsError(error);
            }       
            setLoader(false);
        }, [fetchTrendingGifs]
    );

    useEffect(() => {
        fetchApi();
    }, []);



    const listItems = giphs.data.map((item) =>
            <div key={item.id}> 
                <img 
                    onClick={() => handleImageClick(item.images.original.url)} 
                    style={{'width' : '100%'}} 
                    src={item.images.original.url} 
                    alt = "gif"
                    />
            </div>
    );

    return (
        <div className="pakageTrending">
            
            <div className="trending"> 
            {!loader && !isError &&
            <h2>
                Trending
                <AiFillFund style={{'marginLeft': '5px'}} />
            </h2>}
            { loader ? <h2>Loading..</h2> : listItems } 
            { isError && <div>Something went wrong ...</div> }
            </div>  
        </div>
    );
};

export default Trending;