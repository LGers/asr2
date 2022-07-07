import { Header } from '../../components/Header';
import st from './MainPage.module.css';
import { InfoSection } from './InfoSection';
import { RegistriesSection } from './RegistriesSection';
export const MainPage = () => {
  return (
    <div className={st.st}>
      <Header notifications={4} />
      <main>
        <InfoSection />
        <RegistriesSection />
      </main>
      Footer
    </div>
  );
}
