import { Usuario } from '../domain/entities/Usuario';

export interface AuthState {
  usuarios: Usuario[];
  usuarioActual: Usuario | null;
}

export type AuthAction = 
  { type: 'LOGIN'; payload: Usuario }
  |{ type : 'REGISTRO'; payload: Usuario }
  |{type :'LOGOUT' };

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        usuarioActual: action.payload, 
      };
    case 'REGISTRO': 
      return {
        ...state,
        usuarios: [...state.usuarios, action.payload],
        usuarioActual: action.payload 
      };
    case 'LOGOUT':
      return {
        ...state,
        usuarioActual: null
      };
    default:
      return state;
  }
}