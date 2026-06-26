export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  password?: string; 
}

export type RegistroFormData = Omit<Usuario, 'id'>;

export type LoginFormData = Omit<Usuario, 'id' | 'nombre'>;