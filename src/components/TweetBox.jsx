import firebase from 'firebase';
import React, { useState } from 'react';
import { ImageIcon, GIFIcon, PollIcon, EmojiIcon, ScheduleIcon } from '../assets/Icons'
import db from '../firebase';



function TweetBox() {

    const [content, setContent] = useState('')
    
    const sendTweet = () => {
    if (content !== "") {
      db.collection("feed").add({
        displayName: "Baran Sulu",
        userName: "@barannsulu",
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        image: '' ,
        avatar:
          "https://pbs.twimg.com/profile_images/1406768364693987330/hpGf9Ove_400x400.jpg",
      });

      setContent("");
    }
  };


    return (
        <div className='flex flex-col flex-1'>
            <textarea
                className='w-full text-xl placeholder-gray-dark overflow-hidden resize-none bg-transparent'
                placeholder="What's Happening?"
                onChange={(e) => setContent(e.target.value)}
                value={content}
            >
            </textarea>   
            <div className='flex items-center justify-between'>
                <div className='flex '>
                    <div className='hover:bg-primary-light rounded-full p-2 cursor-pointer transform transition-colors duration-200'>
                        <ImageIcon className='w-6 h-6 text-primary-base' />
                    </div>    
                    <div className='hover:bg-primary-light rounded-full p-2 cursor-pointer transform transition-colors duration-200'>
                        <GIFIcon className='w-6 h-6 text-primary-base ' />
                    </div>    

                    <div className='hover:bg-primary-light rounded-full p-2 cursor-pointer transform transition-colors duration-200'>
                        <PollIcon className='w-6 h-6 text-primary-base ' />
                    </div>    

                    <div className='hover:bg-primary-light rounded-full p-2 cursor-pointer transform transition-colors duration-200'>
                        <EmojiIcon className='w-6 h-6 text-primary-base ' />
                    </div>    

                    <div className='hover:bg-primary-light rounded-full p-2 cursor-pointer transform transition-colors duration-200'>
                        <ScheduleIcon className='w-6 h-6 text-primary-base ' />
                    </div>    
                </div>    
                <button
                    className='bg-primary-base rounded-full text-white px-4 py-2 mt-2' >Tweet</button>
            </div>
        </div>
  )
}

export default TweetBox;
