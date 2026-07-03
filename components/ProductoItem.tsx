import { Text, TouchableOpacity, View } from 'react-native';
import { Producto } from '../domain/entities/Producto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ProductoItemProps {
  producto: Producto;
  onEditar: () => void;
  onEliminar: () => void;
}

export function ProductoItem({ producto, onEditar, onEliminar }: ProductoItemProps) {
  return (
    <View className="mb-3 flex-row items-center rounded-2xl bg-white p-4">
      <View className="flex-1">
        <Text className="text-lg font-extrabold text-slate-800">{producto.name}</Text>
        <Text className="mt-1 text-slate-500">S/ {producto.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity className="mr-2 rounded-lg bg-amber-100 p-3" onPress={onEditar}>
        <FontAwesome name="pencil-square-o" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="rounded-lg bg-rose-200 p-3" onPress={onEliminar}>
        <AntDesign name="delete" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
}