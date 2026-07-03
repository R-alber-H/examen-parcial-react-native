import { useState } from 'react';

export function useRegisterForm() {
  
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isNombreFocused, setIsNombreFocused] = useState<boolean>(false);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

  const [nombreError, setNombreError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const validarNombre = (): boolean => {
    setIsNombreFocused(false);
    if (!nombre.trim()) {
      setNombreError('El nombre completo es obligatorio');
      return false;
    } else {
      setNombreError('');
      return true;
    }
  };

  const validarEmail = (): boolean => {
    setIsEmailFocused(false);
    if (!email) {
      setEmailError('El correo es obligatorio');
      return false;
    } else if (!email.includes('@')) {
      setEmailError('Ingresa un correo electrónico válido');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validarPassword = (): boolean => {
    setIsPasswordFocused(false);
    if (!password) {
      setPasswordError('La contraseña es obligatoria');
      return false;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const validarFormularioCompleto = (): boolean => {
    const nombreValido = validarNombre();
    const emailEsValido = validarEmail();      
    const passwordEsValido = validarPassword();

    return nombreValido && emailEsValido && passwordEsValido;    
  };

  return {
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
    validarFormularioCompleto,
  };
}