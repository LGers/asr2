import st from "./SearchInput.module.css";

type Props = {

};
export const SearchInput = (props: Props) => {
  return (
    <form action=''>
      <input type="text" placeholder="поиск" className={st.searchInput}/>
    </form>
  );
};
