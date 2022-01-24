import React , {useState} from 'react';
import SideLink from '../SideLink';
import UserBox from '../UserBox'
import twitterLogo from '../../assets/images/twitter.svg'
import { HomeIcon , More , Explore , Notifications , Message , BookMarks , List , ProfileIcon}  from '../../assets/Icons';



const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: Explore,
  },
  {
    name: "Notifications",
    icon: Notifications,
  },
  {
    name: "Message",
    icon: Message,
  },
  {
    name: "BookMarks",
    icon: BookMarks,
  },
  {
    name: "List",
    icon: List,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: More,
  },
];

const Sidebar = () => {
    const [active, setActive] = useState('Home')
    const handleMenuItemClick = (name) => {
        setActive(name);
    }
    return (
        <div className="sticky top-0 h-screen flex flex-col justify-between w-72 px-2">
            <div>
                <div className='mt-1 mb-4 ml-1  flex items-center justify-center rounded-full hover:bg-gray-lightest w-12 h-12'>
                    <img src={twitterLogo} alt="Twitter Logo" className='w-8 h-8' />
                </div>    
            <nav>
                <ul>
                        {sideLinks.map(({name , icon }) => (
                            <SideLink
                                key={name}
                                name={name}
                                Icon={icon}
                                active={active}
                                onMenuItemClick={handleMenuItemClick} />
                    ))}
                </ul>
            </nav>
            <button className='bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200'>Tweet</button>
            </div>
            <UserBox />
        </div>
    )
};

export default Sidebar;
