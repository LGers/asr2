import st from './FormField.module.css';

type Props = {
  // text: string;
  id: string;
  name: string;
  type: 'text' | 'password';
  placeholder: string;
  isError: boolean;
};

export const FormField = ({ type, placeholder, isError}: Props) => {

  return (
    <input className={st.input} type={type} placeholder={placeholder}>

    </input>
  );
};