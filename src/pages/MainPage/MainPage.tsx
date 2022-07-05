import { Header } from '../../components/Header';
import st from './MainPage.module.css';
export const MainPage = () => {
  return (
    <div className={st.st}>
      <Header notifications={4} />
      <main>
        <section>Information</section>
        MainPage
      </main>
      Footer
    </div>
  );
}
