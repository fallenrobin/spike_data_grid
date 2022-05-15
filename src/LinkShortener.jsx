import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';





function LinkShortener() {

    const [longURL, setLongURL] = useState('');
    const dispatch = useDispatch();


    const shortenURL = (event) => {
        event.preventDefault();
        console.log('url/input text on client side is:', longURL);
        axios.post(`/link`, longURL)
      .then(response => {
        console.log(response.data);
        // dispatch({ type: 'SET_URL', payload: response.data })
      })
      .catch( error => {
        console.log(error);
      });
    }


    return (
        <>
            <div>Link Shortener</div>
            <form onSubmit={shortenURL}>
                <input value={longURL} type="text" onChange={(event) => setLongURL(event.target.value)} />
            </form>
        </>
    )
}

export default LinkShortener