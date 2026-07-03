import { Alert, FlatList, Text, View } from 'react-native';
import { ProductoForm } from '../components/ProductoFrom';
import { ProductoItem } from '@/components/ProductoItem';
import { useProductoForm } from '../hooks/useProductoFrom';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useProductos } from '../context/ProductosContext';

export default function Productos() {

  const {productos, eliminar}=useProductos();
  const form = useProductoForm();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-6">
        <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
          AREA PRODUCTOS
        </Text>
        <Text className="mt-3 mb-2 text-center text-3xl font-black text-slate-900">Crud Basico De Productos</Text>
        <Text className="mb-5 mt-1 text-slate-500">
          Crear, Editar y Eliminar Productos de la lista
        </Text>

        <ProductoForm
          nombre={form.name}
          precio={form.price}
          editando={form.editandoId !== null}
          onNombreChange={form.setName}
          onPrecioChange={form.setPrice}
          onGuardar={form.guardar}
          onCancelar={form.limpiar}
        />

        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 24, paddingTop: 16 }}
          renderItem={({ item }) => (
            <ProductoItem
              producto={item}
              onEditar={() => form.comenzarEdicion(item)}
              onEliminar={() =>
                Alert.alert('Eliminar', `¿Eliminar ${item.name}?`,[
                  {text:'Cancelar', style: 'cancel'},
                  {text:'Eliminar',style: 'destructive', onPress:() => eliminar(item.id)}
                ])
              }
            />
          )}
          ListEmptyComponent={<Text className="mt-8 text-center text-slate-500">No existen productos.</Text>}
        />
      </View>
    </SafeAreaView>
  );
}