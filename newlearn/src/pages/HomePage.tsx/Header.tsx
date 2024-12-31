import CategoryLayout from '../../components/categories/categoryLayout';
import Alarm from '../../assets/alarm.svg?react';
// import AlarmOn from '../../assets/alarm-on.svg?react';
import { getTodayDate } from '../../utils/dateUtil';

const Header = () => {
  const { month, day, weekday } = getTodayDate();

  return (
    <header>
      <div className="flex flex-row justify-between mb-4">
        <div className="text-xl font-bold">
          {month} {day}일 {}
          <span className="text-lg text-gray-600">{weekday}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-custom-gradient content-center">
          <Alarm className="mb-0 mt-0 mr-auto ml-auto" />
        </div>
      </div>
      <CategoryLayout layout="home" />
    </header>
  );
};

export default Header;
