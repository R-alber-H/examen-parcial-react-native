
import { Link } from 'expo-router';
import { Text, TextInput, View, Pressable, Image } from 'react-native';
import { useRegisterForm } from '../hooks/useRegisterForm';

function Registro() {
  const {
    nombre, setNombre,
    email, setEmail,
    password, setPassword,
    isNombreFocused, setIsNombreFocused,
    isEmailFocused, setIsEmailFocused,
    isPasswordFocused, setIsPasswordFocused,
    nombreError, setNombreError,
    emailError, setEmailError,
    passwordError, setPasswordError,
    validarNombre, validarEmail, validarPassword,
  } = useRegisterForm();

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

        {/* Campo: Nombre Completo */}
        <View className="relative w-11/12 mb-6">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className={`text-xs font-medium ${nombreError ? 'text-red-500' : isNombreFocused ? 'text-blue-600' : 'text-gray-500'}`}>
              Nombre completo
            </Text>
          </View>
          <TextInput
            className={`w-full border rounded-2xl p-3.5 text-base text-gray-800 ${
              nombreError ? 'border-red-500' : isNombreFocused ? 'border-blue-600' : 'border-gray-300'
            }`}
            value={nombre}
            onChangeText={(text) => {
              setNombre(text);
              if (nombreError) setNombreError('');
            }}
            onFocus={() => setIsNombreFocused(true)}
            onBlur={validarNombre}
            placeholder="Ingresa tu nombre"
            autoCapitalize="words"
          />
          {nombreError ? <Text className="text-red-500 text-xs mt-1 ml-2">{nombreError}</Text> : null}
        </View>

        {/* Campo: Correo Electrónico */}
        <View className="relative w-11/12 mb-6">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className={`text-xs font-medium ${emailError ? 'text-red-500' : isEmailFocused ? 'text-blue-600' : 'text-gray-500'}`}>
              Correo electrónico
            </Text>
          </View>
          <TextInput
            className={`w-full border rounded-2xl p-3.5 text-base text-gray-800 ${
              emailError ? 'border-red-500' : isEmailFocused ? 'border-blue-600' : 'border-gray-300'
            }`}
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

        {/* Campo: Contraseña */}
        <View className="relative w-11/12 mb-6">
          <View className="absolute -top-2.5 left-4 bg-white px-1 z-10">
            <Text className={`text-xs font-medium ${passwordError ? 'text-red-500' : isPasswordFocused ? 'text-blue-600' : 'text-gray-500'}`}>
              Contraseña
            </Text>
          </View>
          <TextInput
            className={`w-full border rounded-2xl p-3.5 text-base text-gray-800 ${
              passwordError ? 'border-red-500' : isPasswordFocused ? 'border-blue-600' : 'border-gray-300'
            }`}
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

        <Pressable className="w-11/12 py-3 rounded-2xl bg-[#4C5AE0] active:opacity-90">
          <Text className="text-center text-white font-bold text-sm">
            Regístrate
          </Text>
        </Pressable>

        {/* Redirección a Login sin el string conflictivo */}
        <View className="flex-row justify-center items-center mt-6">
          <Text className="text-gray-500 text-sm">¿Ya tienes una cuenta? </Text>
          <Link href="/login" className="text-blue-500 font-bold text-sm active:opacity-70">
            Inicia sesión
          </Link>
        </View>

      </View>
    </View>
  );
}

export default Registro;