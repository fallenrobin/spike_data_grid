import React, { useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import useCopy from "use-copy";






function LinkShortener() {

    const [longURL, setLongURL] = useState('');
    const dispatch = useDispatch();
    const URL = useSelector((store) => store.URLreducer);

    /******* useCopy  ********/

    const [text, setText] = useState('(this is where the tinyURL will go)');
    const [copied, copy, setCopied] = useCopy(text);

    const copyText = () => {
        copy();

        setTimeout(() => {
            setCopied(false);
        }, 8000);
    };

    /******* useCopy  ********/


    const shortenURL = (event) => {
        event.preventDefault();
        console.log('url/input text on client side is:', longURL);
        axios.post(`/link`, longURL)
            .then(response => {
                console.log(response.data);
                // dispatch({ type: 'SET_URL', payload: response.data })
                setLongURL('');
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <>
            <div>Link Shortener</div>
            <form onSubmit={shortenURL}>
                <input 
                value={longURL} 
                style={{width:'300px'}}
                placeholder='paste long URL here and hit enter'
                type="text" 
                onChange={(event) => setLongURL(event.target.value)} />
            </form>

            {/* ******* useCopy https://www.npmjs.com/package/use-copy ******** */}
            <div>
                <p>This will copy to the clipboard:</p>
                <h3>{text}</h3>
                {copied ? (
                    <p>Link copied! You can now paste it in an email or text</p>
                ) : (
                    <button onClick={copyText}>Copy text</button>
                )}
                <br />
            </div>
            {/* ******* useCopy  ******** */}


        </>
    )
}

export default LinkShortener