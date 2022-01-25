import React , {useEffect , useState} from 'react';
import { PopulerIcon  } from '../../assets/Icons';
import TweetBox from '../TweetBox';
import Divider from '../Divider';
import FeedList from '../FeedList';
import db from '../../firebase';


const Content = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  

  return (
    <main className='flex-1 flex-col border-r border-l border-gray-extraLight mr-10'>
      <header className='sticky top-0 z-10 flex items-center justify-between p-4 border-b bg-white'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <PopulerIcon className='w-5 h-5 text-primary-base'/>
      </header>
      <div className='flex space-x-4 px-4 py-3'>
        <img className='w-11 h-11 rounded-full' src="https://pbs.twimg.com/profile_images/1406768364693987330/hpGf9Ove_400x400.jpg" alt="" />
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} />
    </main>
  )
};

export default Content;
