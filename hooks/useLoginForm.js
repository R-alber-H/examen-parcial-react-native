import { useState } from 'react'

export function useLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validarEmail = () => {
    setIsEmailFocused(false);
    if (!email) {
      setEmailError('El correo es obligatorio.');
    } else if (!email.includes('@')) {
      setEmailError('Ingresa un correo electrónico válido.');
    } else {
      setEmailError('');
    }
  };

  const validarPassword = () => {
    setIsPasswordFocused(false);
    if (!password) {
      setPasswordError('La contraseña es obligatoria.');
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
    } else {
      setPasswordError('');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isEmailFocused,
    setIsEmailFocused,
    isPasswordFocused,
    setIsPasswordFocused,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    validarEmail,
    validarPassword,
  };
}