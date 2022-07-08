import st from "./NewsItem.module.css";

type Props = {
  id: number,
  img: string,
  title: string,
  date: string,
  description: string,
};

export const NewsItem = (props: Props) => {
  const { id, img, title, date, description, } = props;
  const imgPath = `../../../../assets/img/rNews/n${id}.jpg`;
  return (
    <div className={st.newsCard}>
      <img src={imgPath} alt="News" />
      <div className={st.newsInfo}>
        <article>{title}</article>
        <div>{date}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};