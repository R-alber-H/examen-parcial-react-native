import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <View className="flex-1 bg-white ">

      <View className="h-[60%] w-full justify-center items-center">
        <Image
          source={require('../assets/fondo-pantalla-inicio.png')}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <View className="h-[40%] w-full  items-center px-6 pt-8 pb-12">

        <View className="items-center">
          <Text className=" text-3xl font-extrabold text-center mb-2">
            ¡Bienvenido!
          </Text>
          <Text className=" text-base text-center px-4 mb-6">
            Explora nuestra tienda y encuentra los mejores productos con un solo lugar
          </Text>
        </View>
        <TouchableOpacity
          className="w-6/12 rounded-2xl overflow-hidden active:opacity-90 shadow-lg"
          onPress={() => console.log('Botón presionado')}
        >
          <LinearGradient
            colors={['#4E65CC', '#958FD9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-4 rounded-2xl"
          >
            <Text className="text-white text-center font-bold text-lg">
              Comenzar
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

    </View>
  );
}