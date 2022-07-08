import { User } from '../redux/auth/auth.types';

export const currentUser: User = {
  id: 1,
  firstName: 'Захар',
  lastName: 'Палазник',
  patronymic: 'Геннадьевич',
  country: 'Беларусь',
  city: 'Минск',
  phone: '+375 22 111 33 44',
}
const fakeText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

export const fakeNews = [
  {
    id: 1,
    img: '',
    title: 'Технические работы 30.05.2022',
    date: '30.05.2022',
    description: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перeeee...',
  },
  {
    id: 2,
    img: '',
    title: 'Изменение справочника',
    date: '28.05.2022',
    description: fakeText,
  },
  {
    id: 3,
    img: '',
    title: 'Технические работы 26.05.2022',
    date: '26.05.2022',
    description: fakeText,
  },
  {
    id: 4,
    img: '',
    title: 'Лицензирование в Беларуси',
    date: '25.05.2022',
    description: fakeText,
  },
  {
    id: 5,
    img: '',
    title: 'Тестирование системы новостей Единого реестра lorem ipsum fake data',
    date: '20.05.2022',
    description: fakeText,
  },
  {
    id: 6,
    img: '',
    title: 'Обновление версии реестра ПО',
    date: '18.05.2022',
    description: fakeText,
  },
];

export const fakeDocuments = [
  {
    id: 1,
    category: 'Общие документы',
    name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
    date: '20.07.2021',
    documentNumber: '1226',
    content: '',
  },
  {
    id: 2,
    category: 'Общие документы',
    name: 'Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных',
    date: '22.09.2020',
    documentNumber: '468',
    content: '',
  },
  {
    id: 3,
    category: 'Общие документы',
    name: 'Административный регламент ПРИКАЗ от 21 февраля 2019 года N62',
    date: '21.02.2019',
    documentNumber: '62',
    content: '',
  },
  {
    id: 4,
    category: 'Общие документы',
    name: 'Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
    date: '20.12.2017',
    documentNumber: '1594',
    content: '',
  },
  {
    id: 5,
    category: 'Общие документы',
    name: 'Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных',
    date: '31.12.2015',
    documentNumber: '622',
    content: '',
  },
];