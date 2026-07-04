import { createContext, PropsWithChildren, useContext, useReducer } from 'react';
import { Producto, ProductoFormData, ProductoUpdateData } from '../domain/entities/Producto';
import { productosReducer } from '../reducers/productosReducer';
import { PRODUCTS } from '@/data/productos';

interface ProductosContextValue {
  productos: Producto[];
  crear: (datos: ProductoFormData) => void;
  actualizar: (id: string, datos: ProductoUpdateData) => void;
  eliminar: (id: string) => void;
}

const ProductosContext = createContext<ProductosContextValue | undefined>(undefined);

export function ProductosProvider({ children }: PropsWithChildren) {

  const [productos, dispatch] = useReducer(productosReducer, PRODUCTS);

  const crear = (datos: ProductoFormData) => {
  dispatch({ type: 'CREAR', payload: { id: Date.now().toString(), ...datos } });
};

  const actualizar = (id: string, datos: ProductoUpdateData) => {

    const new_producto: Producto = {
      id: id,
      image: require('../assets/producto_nuevo.png'),
      categoria: "Teclados",
      ...datos
    }
    dispatch({ type: 'ACTUALIZAR', payload: new_producto })
  }

  const eliminar = (id: string) => {
    dispatch({ type: 'ELIMINAR', payload: id });
  }

  return (
    <ProductosContext.Provider value={{ productos, crear, actualizar, eliminar }}>
      {children}
    </ProductosContext.Provider>
  );

}

export function useProductos() {
  const context = useContext(ProductosContext);
  if (!context) {
    throw new Error('useProductos debe utilizarse dentro de ProductosProvider');
  }
  return context;
}