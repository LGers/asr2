import st from "./ProfileData.module.css";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

export const ProfileData = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <section className={st.profileDataContainer}>
      <h2>Здравствуй, {user.firstName}</h2>
    </section>
  );
};
