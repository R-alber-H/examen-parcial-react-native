
import { View, Text, TextInput, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { CATEGORIES, Category } from "../data/categorias";

interface HomeHeaderProps {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  manejarlogout: () => void;
}

export function HomeHeader({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  manejarlogout
}: HomeHeaderProps) {
  return (
    <View>
      <View className="flex-row justify-between items-center mb-4 mt-4">
        <View>
          <Text className="text-slate-400 text-sm font-medium">¡Hola, Bienvenido!</Text>
          <Text className="text-2xl font-bold text-slate-900">Cyber Store</Text>
        </View>

        <View className="flex-row items-center gap-2">
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
                className={`mr-2 px-3 py-2 ${isSelected ? 'border-b-2 border-[#111111]' : 'border-b-2 border-transparent'}`}
              >
                <Text className={`font-semibold ${isSelected ? 'text-[#141415]' : 'text-slate-400'}`}>
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <Text className="text-lg font-semibold mb-4">
        {searchQuery || selectedCategory !== 'Todo' ? 'Resultados de búsqueda' : 'Productos Destacados'}
      </Text>
    </View>
  );
}