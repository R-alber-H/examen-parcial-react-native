// 1. Definimos las categorías como una tupla de solo lectura
export const CATEGORIES = ['Todo', 'Teclados', 'Mouses', 'Memorias', 'Tarjetas'] as const;

// 2. Exportamos el tipo automático para que tu 'useState' en Home lo use
export type Category = typeof CATEGORIES[number];