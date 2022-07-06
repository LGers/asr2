import st from './Header.module.css'
import { SearchInput } from '../SearchInput/SearchInput';
import calendar from '../../assets/svg/calendar.svg';
import notification from '../../assets/svg/bell-blue.svg';
import arrowUp from '../../assets/svg/upper-arrow.svg';

export type Props = {
  notifications: number;
}

export const Header = (props: Props) => {
  return (
    <header className={st.header}>
      <div className={st.logoBlock}>
        <img src='./../../assets/svg/logo.svg' alt={"Logo"} />
        <SearchInput placeholder={'Поиск'}/>
      </div>
      <div className={st.profileBlock}>
        <div className={st.calendar + ' ' + st.icon}>
          <img src={calendar} alt="Calendar" />
        </div>
        <div className={st.notification + ' ' + st.icon}>
          <img src={notification} alt="Bell" />
          <div className={st.notificationCount + ' ' + st.center}>{props.notifications}</div>
        </div>
        <div className={st.divider}/>
        <div className={st.profile}>
          <div className={st.avatar}>
            <img src="./assets/jpg/user-avatar.jpg" alt="Avatar" />
          </div>
          <p className={st.profileName}>Захар Палазник</p>
          <div className={st.arrow && st.center}>
            <img src={arrowUp} alt="Upper" />
          </div>
        </div>
      </div>
    </header>
  );
}
