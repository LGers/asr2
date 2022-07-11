import st from "./ProfileData.module.css";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useEffect, useState } from 'react';
import { FormField } from '../../../components/FormField';

export const ProfileData = () => {

  // todo this test code. remove it
  let avatarUrl = '';
  const [ava, setAva] = useState('');

  useEffect(() => {
    fetch("../../assets/img/user-avatar.jpg").then(response => {
      return response.blob();
    }).then(blob => {
      avatarUrl = URL.createObjectURL(blob ?? new Blob());
      setAva(avatarUrl);
      const bl = new Blob(["<img src='../../assets/img/user-avatar.jpg' alt='Avatar' />"], { type: 'text/html' });
    });
  }, [])
  // todo this test code. remove it

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <section className={st.profileDataContainer}>
      <div className={st.profileNameAvatar}>
        <img className={st.avatar} src={ava} alt="Avatar" />
        <p className={st.name}>Здравствуй, {user.firstName}</p>
      </div>
      <form>
        <h2>Основные данные</h2>
        <div className={st.profileData}>
          <div className={st.field}>
            <label htmlFor={'firstName'}>Имя </label>
            <FormField
              id={'firstName'}
              name={'firstName'}
              type={'text'}
              placeholder={'Ваше имя'}
              isError={false}
            />
          </div>
          <div className={st.field}>
            <label>Фамилия</label>
            <FormField
              id={'firstName'}
              name={'firstName'}
              type={'text'}
              placeholder={'Ваше имя'}
              isError={false}
            />
          </div>
          <div className={st.field}>
            <label>Отчество</label>
            <FormField
              id={'patronymic'}
              name={'patronymic'}
              type={'text'}
              placeholder={'Ваше отчество'}
              isError={false}
            />
          </div>
          <div className={st.field}>
            <label>Страна</label>
            <FormField
              id={'country'}
              name={'country'}
              type={'text'}
              placeholder={'Страна'}
              isError={false}
            />
          </div>
        </div>
        <h2>Пароль</h2>
        <div className={st.profileData}>
          <div className={st.field}>
            <label>Новый пароль</label>
            <FormField
              id={'password'}
              name={'password'}
              type={'text'}
              placeholder={'Новый пароль'}
              isError={false}
            />
          </div>
          <div className={st.field}>
            <label>Подтверждение пароля</label>
            <FormField
              id={'confirmPassword'}
              name={'confirmPassword'}
              type={'text'}
              placeholder={'Подтверждение пароля'}
              isError={false}
            />
          </div>
        </div>
        <div className={st.submit}>
          <button className={st.btn} type="submit">Сохранить</button>
        </div>
      </form>
    </section>
  );
};
