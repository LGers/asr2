import st from "./RegistryNews.module.css";
import { NewsItem } from './newsItem';
import { fakeNews } from '../../../__mock__/fakeData';

type Props = {};

export const RegistryNews = (props: Props) => {
  return (
    <section className={st.rNews}>
      <h2>Новости реестра</h2>
      <div className={st.rNewsContainer}>
        {fakeNews.map((item) => <NewsItem key={item.id} {...item} />)}
      </div>
    </section>
  );
};
