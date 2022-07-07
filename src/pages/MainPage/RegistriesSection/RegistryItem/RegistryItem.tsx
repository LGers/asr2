import st from "./RegistryItem.module.css";
import { RegistryItemProps } from '../../../../redux/main/main.types';

type Props = {
  item: RegistryItemProps;
};
export const RegistryItem = (props: Props) => {
  const { id, appName, classCode, appClass, link, date } = props.item;
  return (
    <div className={st.rItemContainer}>
      <div className={st.itemId}>#{id}</div>
      <p className={st.appName}>{appName}</p>
      <div className={st.classCode}>{classCode}</div>
      <div className={st.appClass}>{appClass}</div>
      <div>{date}</div>
      <div className={st.link}>Ссылка</div>
    </div>
  );
};
