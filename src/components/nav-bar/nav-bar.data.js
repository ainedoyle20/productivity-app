import { BiHome, BiHistory, BiLineChart, BiCalendar } from 'react-icons/bi';

const NavBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <BiHome />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <BiCalendar />,
    cName: 'nav-text'
  },
  {
    title: 'History',
    path: '/history',
    icon: <BiHistory />,
    cName: 'nav-text'
  },
  {
    title: 'Progress',
    path: '/progress',
    icon: <BiLineChart />,
    cName: 'nav-text'
  },
];

export default NavBarData;