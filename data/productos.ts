import { ImageSourcePropType } from 'react-native';

export interface Product {
  id: string;
  name: string;
  price: number; 
  categoria : string
  image: ImageSourcePropType; 
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AMD procesador Ryzen 9',
    categoria: "Memorias",
    price: 89.99,
    image: require('../assets/p-1.jpg'), 
  },
  {
    id: '2',
    name: 'tarjeta de video msi 2gb',
    price: 59.99,
    categoria: "Tarjetas",
    image: require('../assets/p-2.jpg'), 
  },
  {
    id: '3',
    name: 'tarjeta de video inno3d 12gb',
    price: 249.99,
    categoria: "Tarjetas",
    image: require('../assets/p-3.jpg'), 
  },
  {
    id: '4',
    name: 'mouse antryx m660 black rgb',
    price: 120.00,
    categoria: "Mouses",
    image: require('../assets/p-4.jpg'), 
  },
  {
    id: '5',
    name: 'teclado',
    price: 120.00,
    categoria: "Teclados",
    image: require('../assets/p-4.jpg'), 
  },
  {
    id: '6',
    name: 'Memorias',
    price: 120.00,
    categoria: "Memorias",
    image: require('../assets/p-4.jpg'), 
  },
  
];