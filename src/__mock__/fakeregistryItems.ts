export type RegistryRecords = 'id' | 'appName' | 'appClass' | 'classCode' | 'date' | 'link';

export interface RegistryItems {
  id: number,
  appName: string,
  classCode: string,
  appClass: string;
  date: string,
  link: string,
};

export const fakeRegistryItems: Array<RegistryItems> = [
  {
    id: 1,
    appName: 'Система управления базами данных «Ред База Данных»',
    classCode: '02.09',
    appClass: 'Системы управления базами данных',
    date: '29.01.2016',
    link: '',
  },
  {
    id: 2,
    appName: '1С:Школа. Информатика, 11 класс',
    classCode: '04.11',
    appClass: 'Системы управления процессами организации',
    date: '29.01.2016',
    link: '',
  },
  {
    id: 3,
    appName: '1С:Школа. Русский язык, 5–6 класс. Лексикология',
    classCode: '04.11',
    appClass: 'Информационные системы для решения специфических отраслевых задач',
    date: '29.01.2016',
    link: '',
  },
  {
    id: 4,
    appName: '1С:Комплексная автоматизация 8',
    classCode: '04.11',
    appClass: 'Системы управления процессами организации',
    date: '20.02.2016',
    link: '',
  },
  {
    id: 5,
    appName: 'Электронный периодический справочник "Система ГАРАНТ"',
    classCode: '04.15',
    appClass: 'Прикладное программное обеспечение общего назначения',
    date: '20.02.2016',
    link: '',
  },
  {
    id: 6,
    appName: 'Система электронного документооборота и aвтоматизации бизнес-процессов «Е1 Евфрат»',
    classCode: '04.13',
    appClass: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
    date: '11.03.2016',
    link: '',
  },
  {
    id: 7,
    appName: 'ABBYY Lingvo',
    classCode: '04.07',
    appClass: 'Лингвистическое программное обеспечение',
    date: '11.03.2016',
    link: '',
  },
  {
    id: 8,
    appName: '1С-Битрикс24 (Компания)',
    classCode: '04.03',
    appClass: 'Офисные приложения',
    date: '14.03.2016',
    link: '',
  },
  {
    id: 9,
    appName: '1С-Битрикс24 (Проект+)',
    classCode: '04.03',
    appClass: 'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
    date: '14.03.2016',
    link: '',
  },
  {
    id: 10,
    appName: '1С-Битрикс24 (Команда)',
    classCode: '04.03',
    appClass: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
    date: '14.03.2016',
    link: '',
  },
];
