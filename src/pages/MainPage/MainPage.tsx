import { Header } from '../../components/Header';
import st from './MainPage.module.css';
import { InfoSection } from './InfoSection';
import { RegistriesSection } from './RegistriesSection';
import { RegistryNews } from './RegistryNews';
import { Documents } from './Documents';
import { Footer } from '../../components/Footer';

export const MainPage = () => {
  return (
    <div className={st.st}>
      <Header notifications={4} />
      <main>
        <InfoSection />
        <RegistriesSection />
        <RegistryNews />
        <Documents />
      </main>
      <Footer />
    </div>
  );
}
