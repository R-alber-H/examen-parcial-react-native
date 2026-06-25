
import { useState } from 'react';

export function useRegisterForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isNombreFocused, setIsNombreFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validarNombre = () => {
    setIsNombreFocused(false);
    if (!nombre.trim()) {
      setNombreError('El nombre completo es obligatorio');
    } else {
      setNombreError('');
    }
  };

  const validarEmail = () => {
    setIsEmailFocused(false);
    if (!email) {
      setEmailError('El correo es obligatorio');
    } else if (!email.includes('@')) {
      setEmailError('Ingresa un correo electrónico válido');
    } else {
      setEmailError('');
    }
  };

  const validarPassword = () => {
    setIsPasswordFocused(false);
    if (!password) {
      setPasswordError('La contraseña es obligatoria');
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
    } else {
      setPasswordError('');
    }
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
  };
}

