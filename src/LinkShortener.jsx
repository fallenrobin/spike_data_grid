import React, { useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import useCopy from "use-copy";






function LinkShortener() {

    const [longURL, setLongURL] = useState('');
    const dispatch = useDispatch();
    const URL = useSelector((store) => store.URLreducer);

    /******* useCopy
    
    const [text, setText] = useState(randomStrings[0]);
  const [copied, copy, setCopied] = useCopy(text);
 
  const copyText = () => {
    copy();

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
     
    ********/

    const shortenURL = (event) => {
        event.preventDefault();
        console.log('url/input text on client side is:', longURL);
        axios.post(`/link`, longURL)
            .then(response => {
                console.log(response.data);
                // dispatch({ type: 'SET_URL', payload: response.data })
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <>
            <div>Link Shortener</div>
            <form onSubmit={shortenURL}>
                <input value={longURL} type="text" onChange={(event) => setLongURL(event.target.value)} />
            </form>
            <h3>The shortened link is: </h3>

            {/* <div>
                <p>The text we're gonna copy is:</p>
                <h2>{text}</h2>
                {copied ? (
                    <p>Text copied to clipboard</p>
                ) : (
                    <button onClick={copyText}>Copy text</button>
                )}
                <br />
            </div> */}


        </>
    )
}

export default LinkShortener