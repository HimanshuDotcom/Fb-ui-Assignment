import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [value, setValue] = useState(0);
    const [errValue, setErrValue] = useState('');

    const handleKeyUp = event => {
        if (errValue !== '') setErrValue('');
        if (event.keyCode === 13) {
            event.preventDefault();
            if (value.length > 2) {
                onSearch(value);
                setErrValue('')
            } else {
                setErrValue('Too short')
            };
        };
    };

    return (
        <div className="gify_search">
            <input type="text"
                onChange={e => setValue(e.target.value)}
                onKeyUp={handleKeyUp}
                placeholder="Type and Press Enter"
                style={{'width' : '100%'}}
            />
            <span>{errValue}</span>
        </div>
    );
};

export default Search;