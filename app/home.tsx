import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CATEGORIES } from "../data/categorias";
import { PRODUCTS } from "../data/productos";
import { CardProduct } from "../components/cardProduct"
import { useAuth } from '../context/AuthContext';
import { useRouter, Link } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const { logout } = useAuth();

  const manejarlogout = () => {
    logout();
    router.replace('/login');
  }

  return (
    <ScrollView className="flex-1 bg-white pt-12 px-4" showsVerticalScrollIndicator={false}>

      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-slate-400 text-sm font-medium">¡Hola, Bienvenido!</Text>
          <Text className="text-2xl font-bold text-slate-900">Cyber Store</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            onPress={manejarlogout}
            className="p-2">
            <Ionicons name="log-out" size={28} color="#ef4444" />
          </TouchableOpacity>

          <TouchableOpacity className="p-2 relative">
            <Ionicons name="cart-outline" size={28} color="#0f172a" />
            <View className="absolute top-0 right-0 bg-red-500 w-4 h-4 rounded-full items-center justify-center">
              <Text className="text-[10px] text-white font-bold">2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row items-center px-4 py-2 mb-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <Ionicons name="search-outline" size={20} color="#94a3b8" />
        <TextInput
          placeholder="Buscar componentes, mouses..."
          placeholderTextColor="#94a3b8"
          className="text-slate-800 flex-1 text-base ml-2"
        />
      </View>

      <View className='mb-5'>
        <Text className="text-lg font-semibold mb-3">Categorías</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
          {CATEGORIES.map((category, index) => {
            const isSelected = index === 0;
            return (
              <TouchableOpacity
                key={index}
                className={`mr-2 px-3 py-2 ${isSelected ? 'border-b-2 border-[#111111]' : 'border-b-2 border-transparent'
                  }`}
              >
                <Text className={`font-semibold ${isSelected ? 'text-[#141415]' : 'text-slate-400'}`}>
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View className="mb-10">
        <Text className="text-lg font-semibold mb-4">Productos Destacados</Text>

        <View className="flex-row flex-wrap justify-between">
          {PRODUCTS.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))}
        </View>
      </View>

    </ScrollView>
  );
}