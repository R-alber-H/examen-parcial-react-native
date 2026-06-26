import { useState } from 'react';

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
    const emailEsValido = validarEmail();       
    const passwordEsValido = validarPassword();

    return emailEsValido && passwordEsValido;    
  };

  return {
    email, setEmail,
    password, setPassword,
    isEmailFocused, setIsEmailFocused,
    isPasswordFocused, setIsPasswordFocused,
    emailError, setEmailError,
    passwordError, setPasswordError,
    validarEmail,      
    validarPassword,   
    validarFormularioCompleto,
  };
}