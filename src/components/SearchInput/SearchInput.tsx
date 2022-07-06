import st from "./SearchInput.module.css";

type Props = {
  placeholder: string
};
export const SearchInput = (props: Props) => {
  return (
    <form action=''>
      {/*<input type="text" placeholder="поиск" className={st.searchInput}/>*/}
      <input type="text" placeholder={props.placeholder} className={st.searchInput}/>
    </form>
  );
};
