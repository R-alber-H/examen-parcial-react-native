import { createContext, useContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';
// import { usuarios } from '../data/usuarios';
import { Usuario, RegistroFormData, LoginFormData } from '../domain/entities/Usuario';

interface AuthContextValue {
  usuarioActual: Usuario | null;
  login: (datos: LoginFormData) => boolean;
  registro: (datos: RegistroFormData) => { conExito: boolean; mensaje: string };
  logout: () => void;
}

export const AuthContext = createContext<any>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(authReducer, {
    usuarioActual: null,
    usuarios: [
      { id: '1', nombre: 'Jorge Casas', email: 'usuario1@gmail.com', password: '123456' },
      { id: '2', nombre: 'Lucia Sanchez', email: 'usuario2@gmail.com', password: '123456' }
    ]
  });
  
  const login = (datos: LoginFormData) : boolean => {
    const encontrado = state.usuarios.find(u => u.email === datos.email && u.password === datos.password );
    if (encontrado) {
      dispatch({ type: 'LOGIN', payload: encontrado });
      return true;
    }
    return false;
  };

  const registro = (datos: RegistroFormData) => {
    const existe = state.usuarios.some(u => u.email === datos.email);
    if (existe) {
      return { conExito: false, mensaje: 'El correo electrónico ya está registrado' };
    }

    const nuevoUsuario: Usuario = {
      id: Date.now().toString(),
      ...datos // Desestructuramos el nombre, email y password que vienen del formulario
    };

    dispatch({ type: 'REGISTRO', payload: nuevoUsuario });
    return { conExito: true, mensaje: 'Registro exitoso' };
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ usuarioActual: state.usuarioActual, login, registro, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe utilizarse dentro de AuthProvider');
  }
  return context;
}