import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  //⭐ Create a 'stateVariable' to hold the eventual results
  const [songs, setSongs] = useState('')
  
  
  //⭐ To mark '=> function' as async, key word 'async' should be put before the () (async() => {})
  useEffect(() => {
    getAllSongs();
    console.log('Hello World!')
  }, []);
  //❓ Explain why the end of App() is }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
  //!⭐ Whenever we're making our request with axios -- we want to create a variable to HOLD THE EVENTUAL RESPONSE/EVENTUAL RESOLUTION TO THE PROMISE
    //➕ Not ideal to make 'axios request' 👇 directly inside of useEffect because we may need to use the same API call again (hence why its in its own function(getAllSongs))
    //➕ Because we made an axios API call as its function, we're able to use it for the onClick <button> functionality
    //!👇 After the API call(response) is made we want to update our 'songs' stateVariable to hold response.data (response.data == array of 46 songs) 
    setSongs(response.data)
    console.log(response.data)
  } 

  return (
    <div>
      <button onClick={() => getAllSongs()}>Get All Songs</button> 
    </div>
  );
}

export default App;

//? Explain how the threads split up after hitting the await key word (will the secondary thread run first, before it even before the intitial thread starts tunning other functions it hits?)
  //? Is there specific function functionalities we always want to use an async function/await key? (i.e when our app has to grab info/data from different site, or app needs to parse through hundreds of array items)