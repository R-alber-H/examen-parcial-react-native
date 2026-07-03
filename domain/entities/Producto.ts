
export interface Producto {
  id: string;
  name: string;
  price: string; 
  categoria : string;
  image: string; 
}

export type ProductoFormData = Omit<Producto, 'id'>;