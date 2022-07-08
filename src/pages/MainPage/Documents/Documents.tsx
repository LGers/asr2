import st from "./Documents.module.css";
import { fakeDocuments } from '../../../__mock__/fakeData';

type Props = {

};

export const Documents = (props: Props) => {
  return (
    <section className={st.documents}>
      <h2>Документы</h2>
      <p>Всего документов: <span>5</span></p>
      <div className={st.documentsHeader}>
        <div>Категория</div>
        <div>Наименование</div>
        <div>Дата</div>
        <div>Номер</div>
        <div>Содержание</div>
      </div>
      {fakeDocuments.map((doc) => {
        return (
          <div key={doc.id} className={st.documentsContainer}>
            <div>{doc.category}</div>
            <div>{doc.name}</div>
            <div>{doc.date}</div>
            <div>{doc.documentNumber}</div>
            <div>Скачать (10.81 Мб)</div>
          </div>
        )
      })}
    </section>
  );
};
