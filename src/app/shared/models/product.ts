export enum ProductCategory {
  MEN = 'Чоловічий одяг',
  WOMEN = 'Жіночий одяг',
  KIDS = 'Дитячий одяг',
  ACCESSORIES = 'Аксесуари'
}

export interface BrandInfo {
  name: string;
  country: string;
}

export interface Product {
  id: number;                   // id
  title: string;                // Назва товару 
  description: string;          // Опис товару 
  imageUrl: string;             // Посилання на картинку 
  price: number;                // Ціна 
  addedDate: Date;              // Дата додавання 
  category: ProductCategory;    // Категорія товару
  sizes: string[];              // Розміри
  brand: BrandInfo;             // Бренд
}