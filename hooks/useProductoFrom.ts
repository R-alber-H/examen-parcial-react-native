import { useState } from 'react';
import { Producto } from '../domain/entities/Producto';
import { useProductos } from '../context/ProductosContext';
import { mostrarError, mostrarExito } from "@/utils/alertas";

export function useProductoForm() {

  const { crear, actualizar } = useProductos();

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
      mostrarError('Datos incompletos', 'Ingresa un nombre y un precio válido.');
      return;
    }

    const datos_actualizar = { name: name.trim(), price: precioNumero };
    const datos_crear = { name: name.trim(), price: precioNumero, image: require('../assets/producto_nuevo.png'), categoria: "Teclados" }

    if (editandoId) {
      actualizar(editandoId, datos_actualizar);
      mostrarExito("Producto editado", "Catalogo Actualizado")
    }

    else {
      crear(datos_crear)
      mostrarExito("Producto creado", "Producto agregado al catalogo")
    }

    limpiar();
  };

  const comenzarEdicion = (producto: Producto) => {
    setName(producto.name);
    setPrice(producto.price.toString());
    setEditandoId(producto.id);
  };


  return { name, setName, price, setPrice, editandoId, guardar, limpiar, comenzarEdicion };
}