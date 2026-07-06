import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Category } from "../data/categorias";
import { CardProduct } from "../components/cardProduct";
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';
import { useProductos } from '../context/ProductosContext';
import { MenuFlotante } from '../components/menuFlotante';
import { HomeHeader } from '../components/homeHeader'; 

export default function Home() {
  const router = useRouter();
  const { logout } = useAuth();
  const { productos } = useProductos();

  const [selectedCategory, setSelectedCategory] = useState<Category>('Todo');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const manejarlogout = () => {
    logout();
    router.replace('/login');
  };

  const productosFiltrados = productos.filter((product) => {
    const cumpleCategoria = selectedCategory === 'Todo' || (product as any).categoria === selectedCategory;
    const cumpleBusqueda = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return cumpleCategoria && cumpleBusqueda;
  });

  const irAProductos = () => {
    router.push('/productos');
  };

  return (
    <View className="flex-1 bg-white pt-10 px-4 relative">
      
      <HomeHeader 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        manejarlogout={manejarlogout}
      />

      <View className="flex-1 mb-24"> 
        <FlatList
          data={productosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperClassName="justify-between"
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CardProduct product={item} />
          )}
          ListEmptyComponent={() => (
            <View className="w-full items-center py-10">
              <Text className="text-slate-400 text-base">No se encontraron productos.</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 16 }} 
        />
      </View>

      <MenuFlotante 
        enInicio={true} 
        alPresionarProductos={irAProductos} 
        alPresionarLogout={manejarlogout} 
      />
    </View>
  );
}