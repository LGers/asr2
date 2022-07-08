import st from "./Profile.module.css";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Profile = () => {
  return (
    <div className={st.wrapper}>
      <Header notifications={4} />
      <main className={st.main}>
        <h1>Личный кабинет</h1>
      </main>
      <Footer />
    </div>
  );
};
