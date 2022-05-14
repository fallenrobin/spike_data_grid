import React, { useState } from 'react'


function LinkShortener() {

    const [longURL, setLongURL] = useState('');


  const shortenURL = () => {
    // console.log('click');
    event.preventDefault();
    axios.post('/')
      .then(response => {
        console.log(response.data);
        setNewGif(response.data);
      }).catch(err => {
        console.log(err);
      })
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