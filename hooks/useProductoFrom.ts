import { useState } from 'react';
import { Alert } from 'react-native';
import { Producto } from '../domain/entities/Producto';
import { useProductos } from '../context/ProductosContext';


export function useProductoForm() {

 const {crear, actualizar} = useProductos();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editandoId, setEditandoId] = useState<string | null>(null);

  const limpiar = () => {
    setName('');
    setPrice('');
    setEditandoId(null);
  };

  const guardar = () => {
    const precioNumero = Number(price);
    if (!name.trim() || !price.trim() || Number.isNaN(precioNumero)) {
      Alert.alert('Datos incompletos', 'Ingresa un nombre y un precio válido.');
      return;
    }

    const datos_actualizar = { name: name.trim(), price: precioNumero };
    const datos_crear = {name: name.trim(), price: precioNumero,image: require('../assets/producto_nuevo.jpg'), categoria: "Teclados"}

    if(editandoId) actualizar(editandoId,datos_actualizar);
    else crear(datos_crear)

    limpiar();
  };

  const comenzarEdicion = (producto: Producto) => {
    setName(producto.name);
    setPrice(producto.price.toString());
    setEditandoId(producto.id);
  };

  return { name, setName, price, setPrice, editandoId, guardar, limpiar, comenzarEdicion };
}