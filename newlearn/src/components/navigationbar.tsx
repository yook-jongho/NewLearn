import { Link, useLocation } from 'react-router';
import Home from '../assets/home.svg?react';
import Profile from '../assets/profile.svg?react';
import Scrap from '../assets/scrap.svg?react';

const NavigationBar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/scrap', component: Scrap, label: '스크랩' },
    { path: '/', component: Home, label: '홈' },
    { path: '/profile', component: Profile, label: '프로필' },
  ];

  return (
    <div className="w-full py-4 flex flex-row justify-around shadow-[0px_4px_30px_rgba(224,229,238,0.6)] border-t-[0.5px] border-t-[#DBDBDB] border-solid">
      {navItems.map(({ path, component: Icon, label }) => (
        <Link to={path} key={path} className="flex flex-col items-center">
          <Icon
            className={`w-6 h-6 ${
              location.pathname === path ? 'fill-[#7DAAF3]' : 'fill-gray-400'
            }`}
          />
          <span
            className={`text-sm mt-1 ${
              location.pathname === path ? 'text-[#7DAAF3]' : 'text-gray-400'
            }`}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavigationBar;
