import { Link } from 'expo-router';
import { Text, TextInput, View, Pressable, Image } from 'react-native';
import { useLoginForm } from '../hooks/useLoginForm';

export default function Login() {
  const {
    email, setEmail,
    password, setPassword,
    isEmailFocused, setIsEmailFocused,
    isPasswordFocused, setIsPasswordFocused,
    emailError, setEmailError,
    passwordError, setPasswordError,
    validarEmail, validarPassword,
  } = useLoginForm();

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <View className="w-full px-6 pb-12 items-center">

        <Image
          source={require("../assets/logoCyber-r.png")}
          className="w-[200px] h-[200px] mb-1"
          resizeMode="contain"
        />

        <Text className='mb-2 font-bold text-3xl text-center text-gray-500'>
          Bienvenido de Nuevo
        </Text>

        <Text className='mb-12 text-sm text-center text-gray-400'>
          Ingresa tus datos para iniciar sesión
        </Text>

        <View className="relative w-11/12 mb-6">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className={`text-xs font-medium ${emailError ? 'text-red-500' : isEmailFocused ? 'text-blue-600' : 'text-gray-500'}`}>
              Correo electrónico
            </Text>
          </View>
          <TextInput
            className={`w-full border rounded-2xl p-3.5 text-base text-gray-800 ${emailError ? 'border-red-500' : isEmailFocused ? 'border-blue-600' : 'border-gray-300'}`}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (emailError) setEmailError('');
            }}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={validarEmail}
            placeholder="ejemplo@correo.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? <Text className="text-red-500 text-xs mt-1 ml-2">{emailError}</Text> : null}
        </View>

        <View className="relative w-11/12 mb-6">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className={`text-xs font-medium ${passwordError ? 'text-red-500' : isPasswordFocused ? 'text-blue-600' : 'text-gray-500'}`}>
              Contraseña
            </Text>
          </View>
          <TextInput
            className={`w-full border rounded-2xl p-3.5 text-base text-gray-800 ${passwordError ? 'border-red-500' : isPasswordFocused ? 'border-blue-600' : 'border-gray-300'}`}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (passwordError) setPasswordError('');
            }}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={validarPassword}
            placeholder="••••••••"
            secureTextEntry={true}
          />
          {passwordError ? <Text className="text-red-500 text-xs mt-1 ml-2">{passwordError}</Text> : null}
        </View>

        <Link href="/home" asChild>
          <Pressable className="w-11/12 py-3 rounded-2xl bg-[#4C5AE0] active:opacity-90">
            <Text className="text-center text-white font-bold text-sm">
              Iniciar Sesión
            </Text>
          </Pressable>
        </Link>

        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-500 text-sm">¿No tienes cuenta? </Text>
          <Link href="/registro" className="text-blue-500 font-bold text-sm active:opacity-70">
            Regístrate
          </Link>
        </View>

      </View>
    </View>
  );
}