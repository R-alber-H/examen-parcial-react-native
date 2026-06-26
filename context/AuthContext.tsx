import { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';
import { usuarios } from '../data/usuarios';

export const AuthContext = createContext<any>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(authReducer, { usuarioActual: null });
  const login = (email: string, password: string) => {
    const encontrado = usuarios.find(u => u.email === email && u.password === password);
    if (encontrado) {
      dispatch({ type: 'LOGIN', payload: encontrado });
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ usuarioActual: state.usuarioActual, login }}>
      {children}
    </AuthContext.Provider>
  );
}