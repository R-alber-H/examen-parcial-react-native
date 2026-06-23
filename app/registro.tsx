import { Link } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, View, Pressable, Image } from 'react-native';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [isNombreFocused, setIsNombreFocused] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [password, setPassword] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <View className="w-full px-6 pb-12 items-center">
        
        <Image
          source={require("../assets/logoCyber-r.png")}
          className="w-[200px] h-[200px] mb-1"
          resizeMode="contain"
        />

        <Text className='mb-2 font-bold text-3xl text-center text-gray-500'>
          Crea tu Cuenta
        </Text>

        <Text className='mb-12 text-sm text-center text-gray-400'>
          Ingresa tus datos para registrarte
        </Text>

        <View className="relative w-11/12 mb-8">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className={`text-xs font-medium ${isNombreFocused ? 'text-blue-600' : 'text-gray-500'}`}>
              Nombre completo
            </Text>
          </View>
          <TextInput
            className={`w-full border rounded-2xl p-3.5 text-base text-gray-800 ${
              isNombreFocused ? 'border-blue-600' : 'border-gray-300'
            }`}
            value={nombre}
            onChangeText={setNombre}
            onFocus={() => setIsNombreFocused(true)}
            onBlur={() => setIsNombreFocused(false)}
            placeholder="Ingresa tu nombre"
            autoCapitalize="words"
          />
        </View>

        <View className="relative w-11/12 mb-8">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className={`text-xs font-medium ${isEmailFocused ? 'text-blue-600' : 'text-gray-500'}`}>
              Correo electrónico
            </Text>
          </View>
          <TextInput
            className={`w-full border rounded-2xl p-3.5 text-base text-gray-800 ${
              isEmailFocused ? 'border-blue-600' : 'border-gray-300'
            }`}
            value={email}
            onChangeText={setEmail}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            placeholder="ejemplo@correo.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="relative w-11/12 mb-8">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className={`text-xs font-medium ${isPasswordFocused ? 'text-blue-600' : 'text-gray-500'}`}>
              Contraseña
            </Text>
          </View>
          <TextInput
            className={`w-full border rounded-2xl p-3.5 text-base text-gray-800 ${
              isPasswordFocused ? 'border-blue-600' : 'border-gray-300'
            }`}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            placeholder="••••••••"
            secureTextEntry={true}
          />
        </View>

        <Pressable className="w-11/12 py-3 rounded-2xl bg-[#4C5AE0] active:opacity-90">
          <Text className="text-center text-white font-bold text-sm">
            Regístrate
          </Text>
        </Pressable>

        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-500 text-sm">
            ¿Ya tienes una cuenta?{" "}
          </Text>
          <Link href="/login" className="text-blue-500 font-bold text-sm active:opacity-70">
            Inicia sesion
          </Link>
        </View>

      </View>
    </View>
  );
}

export default Registro;