import st from "./Paginator.module.css";

const paginatorItems = [1, 2, 3, 4, 5, '...', 112, 113];

export const Paginator = () => {
  return (
    <div className={st.paginatorContainer}>
      <div className={st.paginator}>
        <div className={st.button}>
          <img src="../../assets/svg/pag-double-arrow-left.svg" alt="" />
        </div>
        <div className={st.button}>
          <img src="../../assets/svg/pag-arrow-left.svg" alt="" />
        </div>
        {paginatorItems.map((item) => {
          return (
            <div className={st.button + ' ' + (item === 1 && st.active)}>
              {item}
            </div>
          )
        })}
        <div className={st.button}>
          <img src="../../assets/svg/pag-arrow-right.svg" alt="" />
        </div>
        <div className={st.button}>
          <img src="../../assets/svg/pag-double-arrow-right.svg" alt="" />
        </div>
      </div>
    </div>

  );
};
