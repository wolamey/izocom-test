export interface ClientDocument {
  id: string;
  slug: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  downloads: number;
  fileDate?: string;
  downloadUrl: string;
  category: string;
}

export const clientDocuments: ClientDocument[] = [
  {
    id: '1',
    slug: 'zayavka-na-arendu-instrumenta-dlya-montazha-trub',
    title: 'Заявка на аренду инструмента для монтажа труб',
    description: 'Форма заявки на аренду специализированного инструмента для монтажа предварительно изолированных труб. Включает информацию о типах инструмента, сроках аренды и условиях доставки.',
    fileType: 'DOCX',
    fileSize: '17.62 KB',
    downloads: 62,
    downloadUrl: '/documents/client/zayavka-na-arendu-instrumenta-dlya-montazha-trub/download',
    category: 'Документы для клиентов',
  },
  {
    id: '2',
    slug: 'zayavka-na-transport',
    title: 'Заявка на транспорт',
    description: 'Форма заявки на организацию транспортировки продукции. Содержит поля для указания адреса доставки, контактной информации, перечня продукции и предпочтительных сроков.',
    fileType: 'DOCX',
    fileSize: '25.92 KB',
    downloads: 62,
    downloadUrl: '/documents/client/zayavka-na-transport/download',
    category: 'Документы для клиентов',
  },
];

export const getClientDocumentBySlug = (slug: string): ClientDocument | undefined => {
  return clientDocuments.find(doc => doc.slug === slug);
};

export const getClientDocumentById = (id: string): ClientDocument | undefined => {
  return clientDocuments.find(doc => doc.id === id);
};
