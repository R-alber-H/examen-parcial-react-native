
export const CATEGORIES = ['Todo', 'Teclados', 'Mouses', 'Memorias', 'Tarjetas'] as const;

export type Category = typeof CATEGORIES[number];