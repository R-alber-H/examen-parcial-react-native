
export interface AuthState {
  usuarioActual: { id: number; nombre: string; email: string } | null;
}

export type AuthAction = 
  { type: 'LOGIN'; payload: { id: number; nombre: string; email: string } };

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        usuarioActual: action.payload, 
      };
    default:
      return state;
  }
}