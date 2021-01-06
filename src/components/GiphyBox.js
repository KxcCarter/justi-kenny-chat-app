import React, { useState, useEffect } from 'react';
import axios from 'axios';

// MUI
import TextField from '@material-ui/core/TextField';

const GiphyBox = ({ tag }) => {
  const [gif, setGif] = useState(null);
  const [secretSearch, setSecretSearch] = useState(false);
  const [term, setTerm] = useState('cat');

  useEffect(() => {
    getGifs(tag);
  }, [tag]);

  const handleDblClick = () => {
    setSecretSearch(!secretSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getGifs(term);
    setTerm('');
    setSecretSearch(false);
  };

  const getGifs = async (tag = 'cat') => {
    const { data } = await axios.get('https://api.giphy.com/v1/gifs/random', {
      params: {
        api_key: process.env.REACT_APP_giphy,
        // rating: 'pg-13',
        tag: tag,
      },
    });
    setGif(data.data);
  };

  return (
    <div>
      {gif && (
        <div>
          {secretSearch && (
            <form onSubmit={handleSubmit}>
              <label htmlFor="secretSearch">
                <span>🔍</span> Search for other gifs! Even in Polish!
              </label>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search for other gifs!"
                id="secretSearch"
                type="text"
                value={term}
                onChange={(event) => {
                  setTerm(event.target.value);
                }}
                onBlur={handleSubmit}
              />
            </form>
          )}
          <img
            src={gif.images.downsized_medium.url}
            alt={gif.caption}
            onTouchStart={handleDblClick}
            onDoubleClick={handleDblClick}
          />
        </div>
      )}
    </div>
  );
};

export default GiphyBox;
