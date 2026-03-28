import { Product, ProductCategory } from './models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Чоловіча шкіряна куртка',
    description: 'Стильна куртка з натуральної шкіри для осіннього сезону.',
    imageUrl: 'https://surl.li/yulsny',
    price: 3500,
    addedDate: new Date('2025-10-15'),
    category: ProductCategory.MEN,
    sizes: ['M', 'L', 'XL'],
    brand: { name: 'Zara', country: 'Іспанія' },
    quantity: 10,
    isDiscount: false
  },
  {
    id: 2,
    title: 'Літня жіноча сукня',
    description: 'Легка бавовняна сукня з квітковим принтом.',
    imageUrl: 'https://surl.li/horglw',
    price: 1200,
    addedDate: new Date('2026-03-10'),
    category: ProductCategory.WOMEN,
    sizes: ['XS', 'S', 'M'],
    brand: { name: 'H&M', country: 'Швеція' },
    quantity: 0,
    isDiscount: true
  },
  {
    id: 3,
    title: 'Дитячі кросівки',
    description: 'Зручні кросівки для активних ігор з підсвіткою.',
    imageUrl: 'https://surl.li/faxmvi',
    price: 850,
    addedDate: new Date('2026-01-20'),
    category: ProductCategory.KIDS,
    sizes: ['28', '29', '30', '31'],
    brand: { name: 'Puma', country: 'Німеччина' },
    quantity: 15,
    isDiscount: true
  },
  {
    id: 4,
    title: 'Сонцезахисні окуляри',
    description: 'Окуляри з поляризацією та захистом від ультрафіолету.',
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400',
    price: 600,
    addedDate: new Date('2025-12-05'),
    category: ProductCategory.ACCESSORIES,
    sizes: ['Універсальний'],
    brand: { name: 'Ray-Ban', country: 'США' },
    quantity: 20,
    isDiscount: true
  },
  {
    id: 5,
    title: 'Класичний чоловічий костюм',
    description: 'Елегантний костюм-двійка для офіційних зустрічей.',
    imageUrl: 'https://surl.li/vowngr',
    price: 5400,
    addedDate: new Date('2026-02-28'),
    category: ProductCategory.MEN,
    sizes: ['48', '50', '52', '54'],
    brand: { name: 'Massimo Dutti', country: 'Іспанія' },
    quantity: 3,
    isDiscount: false
  },
  {
    id: 6,
    title: 'Жіноча шкіряна сумка',
    description: 'Містка сумка-шопер з натуральної шкіри.',
    imageUrl: 'https://surl.li/ozrzdj',
    price: 2800,
    addedDate: new Date('2026-03-20'),
    category: ProductCategory.ACCESSORIES,
    sizes: ['Стандарт'],
    brand: { name: 'Guess', country: 'США' },
    quantity: 0,
    isDiscount: false
  }
];

