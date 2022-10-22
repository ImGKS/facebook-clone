import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from '@mui/material';
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from './firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

function MessageSender() {

  const [{user}, dispatch] = useStateValue();

const [input, setInput] = useState('');
const [imageURL, setImageURL] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection('posts').add({
      username:user.displayName,
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      image:imageURL
    })

    setInput("");
    setImageURL("");
  };

  return (
    <div className='messageSender'>
    <div className='messageSender_top'>
      <Avatar src={user.photoURL}/>
      <form>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        className='messageSender_input' 
        type={"text"} placeholder={`What's on your mind, ${user.displayName} ?`} />

        <input
        value={imageURL}
        onChange={(e)=>setImageURL(e.target.value)}
            placeholder='Image URL (Optional)'
          />

        <button onClick={handleSubmit} type="submit">
          hidden submit
        </button>
      </form>
    </div>


    <div className='messageSender_bottom'>
      <div className='messageSender_option'>
        <VideocamIcon style={{ color: "red" }} />
        <h3>Live Video</h3>
      </div>
     
      <div className='messageSender_option'>
        <PhotoLibraryIcon style={{ color: "green" }} />
        <h3>Photo/Video</h3>
      </div>

      <div className='messageSender_option'>
        <InsertEmoticonIcon style={{ color: "orange" }} />
        <h3>Feeling/Activity</h3>
      </div>
    </div>

    </div>
  )
}

export default MessageSender