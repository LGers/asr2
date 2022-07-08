import * as React from 'react';
import st from './InfoSection.module.css';
import { InfoInput } from '../../../components/InfoInput';

const totalApps = 13438;
const totalUsers = 4272;

const numToStr = (num: number): string => {
  return num.toLocaleString().replace(/,/gi, ' ')
}

export const InfoSection = () => {
  return (
    <section className={st.info}>
      <div className={st.infoContainer}>
        <div className={st.infoData}>
          <h1>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
          <p>Единый реестр программ для электронных вычислительных машин и баз данных</p>
          <div>
            <p>Включено ПО в реестр: <span>{numToStr(totalApps)}</span></p>
            <p>Правообладателей: <span>{numToStr(totalUsers)}</span></p>
          </div>
        </div>
        <form className={st.findForm} action="">
          <InfoInput placeholder={'Искать реестр...'} />
          <button className={st.findButton} type="submit">Искать</button>
        </form>
      </div>
      <div className={st.infoImg}>
        <img src="./assets/img/3d-office-work.png" alt="3D Office Work" />
      </div>
    </section>
  );
};
