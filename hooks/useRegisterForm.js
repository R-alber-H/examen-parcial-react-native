
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
      return false;
    } else {
      setNombreError('');
      return true;
    }
  };

  const validarEmail = () => {
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

  const validarPassword = () => {
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

  const validarFormularioCompleto = () => {
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

