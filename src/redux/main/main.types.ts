export interface RegistryItemProps {
  id: number,
  appName: string,
  classCode: string,
  appClass: string;
  date: string,
  link: string,
}

export interface DocumentItem {
  id: number;
  category: string;
  documentName: string;
  documentDate: string;
  documentNumber: number;
  content: string;
}

export interface MainState {
  registries: Array<RegistryItemProps>;
  documents: Array<DocumentItem>;
}
