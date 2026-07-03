import { ImageSourcePropType } from 'react-native';

export interface Producto {
  id: string;
  name: string;
  price: number; 
  categoria : string
  image: ImageSourcePropType; 
}

export type ProductoFormData = Omit<Producto, 'id'>;

export type ProductoUpdateData = Omit<Producto, 'id'|'image'|'categoria'>