import st from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={st.footer}>
        <div>
          <img src="../../assets/svg/logo.svg" alt="logo" />
          <p>Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта
            2014 г</p>
          <h3>Разработчик</h3>
          <p>ОАО «Агентство сервисизации и реинжиниринга»</p>
          <p>Минск, улица Клары Цеткин, 24</p>
        </div>
        <div className={st.footerBlock}>
          <h3>Информация</h3>
          <a className={st.contactLink} href="/">Реестры</a>
          <a className={st.contactLink} href="/">Новости</a>
          <a className={st.contactLink} href="/">Документы</a>
          <a className={st.contactLink} href="/">Вопросы</a>
        </div>
        <div className={st.footerBlock}>
          <h3>Техническая поддержка</h3>
          <p>
            Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных
            дней.
          </p>
          <p>+375 25 111 22 33</p>
          <p>+375 29 222 44 55</p>
          <p>ReestrPOsupport@mail.ru</p>
        </div>
        <div className={st.footerBlock}>
          <h3>Контакты</h3>
          <p>+375 25 111 22 33</p>
          <p>+375 29 222 44 55</p>
          <p>ReestrPOsupport@mail.ru</p>
          <p>220004 г. Минск, ул. Карла Маркса, 38</p>
          <a className={st.link} href="/">Связаться с поддержкой</a>
        </div>
      </div>
      <div className={st.copyright}>
        &copy; Copyright 2022 — ОАО «РеестрПО». Все права защищены.
      </div>
    </footer>
  );
}