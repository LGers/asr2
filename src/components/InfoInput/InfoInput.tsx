import st from "./InfoInput.module.css";

type Props = {
  placeholder: string
};

export const InfoInput = (props: Props) => {
  return (
      <input type="text" placeholder={props.placeholder} className={st.searchInput}/>
  );
};