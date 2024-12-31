import Home from '../assets/home.svg?react';
import Profile from '../assets/profile.svg?react';
import Scrap from '../assets/scrap.svg?react';

const NavigationBar = () => {
  return (
    <div className="flex flex-row justify-around">
      <Scrap />
      <Home />
      <Profile />
    </div>
  );
};

export default NavigationBar;
