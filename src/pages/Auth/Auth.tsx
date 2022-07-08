import { useForm, SubmitHandler } from "react-hook-form";
import st from "./Auth.module.css";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

type Inputs = {
  name: string,
  password: string,
};

export const Auth = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div className={st.wrapper}>
      <Header notifications={4} />
      <main className={st.main}>
        <h1>Авторизация</h1>
        <form className={st.form} onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Введите ваше имя" {...register("name")} />

          <input placeholder="Введите пароль" type={"password"} {...register("password", { required: true })} />
          {errors.password && <span>Это обязательное поле</span>}

          <button type="submit">Вход</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};
