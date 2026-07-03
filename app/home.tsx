import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CATEGORIES, Category } from "../data/categorias"; 
import { PRODUCTS } from "../data/productos";
import { CardProduct } from "../components/cardProduct";
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const { logout } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState<Category>('Todo');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const manejarlogout = () => {
    logout();
    router.replace('/login');
  };

  const productosFiltrados = PRODUCTS.filter((product) => {
    const cumpleCategoria = selectedCategory === 'Todo' || (product as any).categoria === selectedCategory;
    const cumpleBusqueda = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return cumpleCategoria && cumpleBusqueda;
  });

  return (
    <ScrollView className="flex-1 bg-white pt-10 px-4" showsVerticalScrollIndicator={false}>

      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-slate-400 text-sm font-medium">¡Hola, Bienvenido!</Text>
          <Text className="text-2xl font-bold text-slate-900">Cyber Store</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <TouchableOpacity onPress={manejarlogout} className="p-2">
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
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View className='mb-5'>
        <Text className="text-lg font-semibold mb-3">Categorías</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
          {CATEGORIES.map((category) => {
            const isSelected = category === selectedCategory;
            return (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)} 
                className={`mr-2 px-3 py-2 ${
                  isSelected ? 'border-b-2 border-[#111111]' : 'border-b-2 border-transparent'
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
        <Text className="text-lg font-semibold mb-4">
          {searchQuery || selectedCategory !== 'Todo' ? 'Resultados de búsqueda' : 'Productos Destacados'}
        </Text>

        <View className="flex-row flex-wrap justify-between">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((product) => (
              <CardProduct
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <View className="w-full items-center py-10">
              <Text className="text-slate-400 text-base">No se encontraron productos.</Text>
            </View>
          )}
        </View>
      </View>

    </ScrollView>
  );
}