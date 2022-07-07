import st from './RegistriesSection.module.css';

type Props = {

};

export const RegistriesSection = (props: Props) => {
  return (
    <section className={st.rSection}>
      <div className={st.rFilter}>
        <h2>Реестры</h2>
        <div className={st.filterButtons}>
          <img src="../../../assets/svg/filter.svg" alt="filter" />
          <img src="../../../assets/svg/three-dots-vertical.svg" alt="dots" />
        </div>
      </div>
      <div className={st.rHeader}>
        <div className={st.sortContainer}>
          <div className={st.sortIcon}>
            <img src="../../../assets/svg/sort.svg" alt="sort" />
          </div>
          <div>Регистрационный номер</div>
        </div>
        <div className={st.sortContainer}>
          <div className={st.sortIcon}>
            <img src="../../../assets/svg/sort.svg" alt="sort" />
          </div>
          <div>Наименовани программного обеспечения</div>
        </div>
        <div>Код класса</div>
        <div>Класс программного обеспечения</div>
        <div>Дата регистрации</div>
        <div>Адрес сайта</div>
      </div>
    </section>
  );
};
