import st from "./ProfileTabs.module.css";
import { Link } from 'react-router-dom';
import { ReactComponent as User } from '../../../assets/svg/user-round.svg';
import { ReactComponent as Bell } from '../../../assets/svg/bell.svg';
import { ReactComponent as Logout } from '../../../assets/svg/logout.svg';
import { ReactComponent as Note } from '../../../assets/svg/note-bookmark.svg';
import { ReactComponent as Paper } from '../../../assets/svg/paper.svg';
import { ReactComponent as Lock } from '../../../assets/svg/lock-closed-II.svg';
import { ReactComponent as Download } from '../../../assets/svg/download.svg';

const PROFILE_LINK = '/profile';

export const ProfileTabs = () => {
  return (
    <section className={st.profileSections}>
      <Link to={PROFILE_LINK} className={`${st.tab} ${st.firstTab} ${st.activeTab}`}>
        <User className={st.activeTabSvg}/>
        <p>Мои Данные</p>
      </Link>
      <Link to={PROFILE_LINK} className={st.tab}>
        <Bell className={st.tabSvg}/>
        <p>Уведомления</p>
      </Link>
      <Link to={PROFILE_LINK} className={st.tab}>
        <Note className={st.tabSvg}/>
        <p>Реестры</p>
      </Link>
      <Link to={PROFILE_LINK} className={st.tab}>
        <Paper className={st.tabSvg}/>
        <p>Метаданные</p>
      </Link>
      <Link to={PROFILE_LINK} className={st.tab}>
        <Lock className={st.tabSvg}/>
        <p>Безопасность</p>
      </Link>
      <Link to={PROFILE_LINK} className={st.tab}>
        <Download className={st.tabSvg}/>
        <p>Мои загрузки</p>
      </Link>
      <Link to={PROFILE_LINK} className={st.tab + ' ' + st.logout}>
        <Logout className={st.logoutSvg}/>
        <p>Выход</p>
      </Link>
    </section>
  );
};