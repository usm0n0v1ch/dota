import Cybersport from '../../pages/Cybersport';
import Game from '../../pages/Game';
import Heroes from '../../pages/Heroes';
import News from '../../pages/News';
import Header_Btn from '../../UI/Header_Btn';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.container}>
      <img className={styles.dota_icon} src="/dota_icon.png" alt="Dota Icon" />
      
      <NavLink to="/game" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
        <Header_Btn text="игра" />
      </NavLink>
      <NavLink to="/heroes" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
        <Header_Btn text="герои" />
      </NavLink>
      <NavLink to="/news" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
        <Header_Btn text="новости" />
      </NavLink>
      <NavLink to="/cybersport" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
        <Header_Btn text="киберспорт" />
      </NavLink>
    </div>
  );
}
