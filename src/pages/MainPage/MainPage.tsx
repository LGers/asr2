import { Header } from '../../components/Header';
import st from './MainPage.module.css';
import { InfoSection } from './InfoSection/InfoSection';
export const MainPage = () => {
  return (
    <div className={st.st}>
      <Header notifications={4} />
      <main>
        <InfoSection />
        {/*<section className={st.informationSection}>*/}
        {/*  <div>*/}
        {/*   Information*/}
        {/*  </div>*/}
        {/*  <img src="./assets/img/3d-Office-Work.png" alt="3D Office Work" />*/}
        {/*</section>*/}
        MainPage
      </main>
      Footer
    </div>
  );
}
