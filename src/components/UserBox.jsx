import React from 'react';
const UserBox = () => {

    

    return (
        <div className="flex items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
            <img className='w-11 h-11 rounded-full' src="https://pbs.twimg.com/profile_images/1406768364693987330/hpGf9Ove_400x400.jpg" alt="" />
            
            <div className='flex flex-col ml-2'>
                <span className='font-bold text-md'>Baran</span>
                <span className='text-sm text-gray-dark'>@barannsulu</span>
            </div>

            <div className='flex space-x-1 ml-auto'>
            <div className='w-1 h-1 bg-gray-900 rounded-full '></div>
            <div className='w-1 h-1 bg-gray-900 rounded-full '></div>
            <div className='w-1 h-1 bg-gray-900 rounded-full '></div>
            </div>
        </div>
  )
};

export default UserBox;
