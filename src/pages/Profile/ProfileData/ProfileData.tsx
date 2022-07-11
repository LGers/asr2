import { useForm, SubmitHandler } from "react-hook-form";
import st from "./ProfileData.module.css";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useEffect, useState } from 'react';

type Inputs = {
  firstName: string,
  lastName: string,
  patronymic: string,
  country: string,
  password: string,
  confirmPassword: string,
  city: string,
  phone: string;
};

export const ProfileData = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const { register, handleSubmit, watch, formState: { errors }, formState, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  useEffect(() => {
    reset({ ...user });
  }, []);

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

  return (
    <section className={st.profileDataContainer}>
      <div className={st.profileNameAvatar}>
        <img className={st.avatar} src={ava} alt="Avatar" />
        <p className={st.name}>Здравствуй, {user.firstName}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Основные данные</h2>
        <div className={st.profileData}>
          <div className={st.field}>
            <label htmlFor={'firstName'}>Имя</label>
            <input
              id={'firstName'}
              type={'text'}
              placeholder={'Ваше имя'}
              {...register("firstName")}
            />
          </div>
          <div className={st.field}>
            <label>Фамилия</label>
            <input
              id={'lastName'}
              type={'text'}
              placeholder={'Ваша фамилия'}
              {...register("lastName")}
            />
          </div>
          <div className={st.field}>
            <label>Отчество</label>
            <input
              id={'patronymic'}
              type={'text'}
              placeholder={'Ваше отчество'}
              {...register("patronymic")}
            />
          </div>
          <div className={st.field}>
            <label>Страна</label>
            <input
              id={'country'}
              type={'text'}
              placeholder={'Страна'}
              {...register("country")}
            />
          </div>
          <div className={st.field}>
            <label>Город</label>
            <input
              id={'city'}
              type={'text'}
              placeholder={'Город'}
              {...register("city")}
            />
          </div>
          <div className={st.field}>
            <label>Мобильный телефон</label>
            <input
              id={'phone'}
              type={'text'}
              placeholder={'Мобильный телефон'}
              {...register("phone")}
            />
          </div>
        </div>
        <h2>Пароль</h2>
        <div className={st.profileData}>
          <div className={st.field}>
            <label>Новый пароль</label>
            <input
              id={'password'}
              type={'password'}
              placeholder={'Новый пароль'}
              {...register("password")}
            />
          </div>
          <div className={st.field}>
            <label>Подтверждение пароля</label>
            <input
              id={'confirmPassword'}
              type={'password'}
              placeholder={'Подтверждение пароля'}
              {...register("confirmPassword")}
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
