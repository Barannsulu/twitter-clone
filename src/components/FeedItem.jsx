import React from 'react';

import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from '../assets/Icons'

const FeedItem = ({
    avatar,
    content,
    displayName,
    image,
    timestamp,
    userName,
}) => { 
    return (
        <article className='flex space-x-3 border-b px-4 py-3'>
            <img src={avatar} alt="" className='w-11 h-11 rounded-full ' />
            <div className='flex-1'>
                <div className='flex items-center text-sm'>
                    <h4 className='font-bold'>{displayName}</h4>
                    <p className='ml-2 text-gray-dark'>{userName}</p>
                    <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full' />
                    <span className=''>
                        {timestamp?.toDate().toLocaleTimeString("tr-TR")}
                    </span>
                </div>
                <p className='mt-2 text-gray-900 text-sm'>{content}</p>
                {image && 
                    <img src={image} alt="" className='my-2 rounded-xl max-h-96' />}
                <ul className='flex justify-between max-w-md mt-3'>
                    <li className='group flex items-center space-x-3 text-gray-dark text-sm '>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light '>
                            <ReplyIcon className='w-5 h-5 group-hover:text-primary-base'  />
                        </div>
                    </li>

                      <li className='group flex items-center  space-x-3 text-gray-dark text-sm '>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200 '>
                            <ReTweetIcon className='w-5 h-5 group-hover:text-green-400'  />
                        </div>
                      </li>

                      <li className='group flex items-center  space-x-3 text-gray-dark text-sm '>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200 '>
                            <LikeIcon className='w-5 h-5 group-hover:text-pink-400'  />
                        </div>
                       </li>

                     <li className='group flex items-center  space-x-3 text-gray-dark text-sm '>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light '>
                            <ShareIcon className='w-5 h-5 group-hover:text-primary-base'  />
                        </div>
                     </li>

                    
                </ul>
            </div>
        </article>
       
    )
}
export default FeedItem;
