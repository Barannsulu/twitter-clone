import React from 'react';
import { SearchIcon } from '../../assets/Icons';
import { Timeline } from 'react-twitter-widgets'
const Widgets = () => {
  return (
    <aside className="w-80  ">
      <div className='flex space-x-4 p-3 m-3 bg-gray-200 rounded-full items-center focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base'>
        <SearchIcon className='w-5 h-5' />
        <input
          className='placeholder-gray-dark bg-transparent focus:outline-none text-sm'
          type="text"
          placeholder='Search Twitter'
        />
      </div>
      <div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'barannsulu'
          }}
          options={{
            height: '900'
          }}
        />
      </div>
    </aside>
  )
};

export default Widgets;
