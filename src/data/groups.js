// Datos centralizados de los grupos de grado 11.
// Estructura pensada para conectarse a futuro con un panel de administración o backend.
// Todos los precios inician en 0 ("Precio por definir") — no se inventan valores.

export const groups = [
  {
    id: '11.1',
    baseName: 'De chiva por Oriente',
    phrase: null,
    productoBase: 'Arequipe',
    products: [
      { name: 'Obleas con todo', price: 5.000 },
      { name: 'Obleas sin queso', price: 4.000 },
      { name: 'Bolis', price: 3.000 },
      { name: 'Combo con todo', price: 7.000 },
    ],
    toppings: [],
    note: null,
    pendingConfig: [],
    silletaImage: '/images/silletas/11-1.jpg',
    accent: 'terracota',
  },
  {
    id: '11.2',
    baseName: 'Entre café y montañas',
    phrase: null,
    productoBase: 'CAFÉ',
    products: [
      { name: 'Granizado de Café con salsa y un topping', price: 8.500 },
      { name: 'Helado de Capuccino con una salsa', price: 5.500 },
    ],
    toppings: [
      { name: 'Chispitas de Colores', price: 1.500 },
      { name: 'Coffee Delight', price: 300 },
      { name: 'Chispitas Chocolate', price: 1.500 },
      { name: 'Chokis', price: 1.500 },
      { name: 'MiniChips', price: 1.500 },
      { name: 'Wafer', price: 1.000 },
    ],
    note: null,
    pendingConfig: [],
    silletaImage: '/images/silletas/11-2.jpg',
    accent: 'dorado',
  },
  {
    id: '11.3',
    baseName: 'El rincón platanero',
    phrase: 'Un pedacito de sol: entre plátanos y sabor',
    productoBase: 'Plátano',
    products: [
      { name: 'Platanos con proteina', price: 7.500 },
      { name: 'Platanitos (se le puede añadir toppings)', price: 2.500 },
    ],
    toppings: [
      { name: 'Queso', price: 1.000 },
      { name: 'Guacamole', price: 600 },
      { name: 'Pollo y carne', price: 3.000 },
    ],
    note: null,
    pendingConfig: [],
    silletaImage: '/images/silletas/11-3.jpg',
    accent: 'verde-oliva',
  },
  {
    id: '11.4',
    baseName: 'Ruta láctea: todo un universo por el Norte de Antioquia.',
    phrase: null,
    productoBase: 'Fresa',
    products: [
      { name: 'Fresas con crema', price: 5.000 },
      { name: 'Pincho de fresa ', price: 4.000 },
      { name: 'Pincho de fresa con malvadiscos', price: 4.000 },
      { name: 'Adiciones', price: 1.000 },
    ],
    toppings: [],
    note: 'Existe un pincho de fresa mixto que lleva malvaviscos.',
    pendingConfig: [],
    silletaImage: '/images/silletas/11-4.jpg',
    accent: 'rosado',
  },
  {
    id: '11.5',
    baseName: 'El balcón de los diablitos',
    phrase: 'De manguito en manguito sabe más rico.',
    productoBase: 'Mango',
    products: [
      
      { name: 'Soda michelada de mango 16 onzas', price: 8.000 },
      { name: 'Soda michelada de mango 12 onzas', price: 6.500 },
      { name: 'Adición de pincho con gomitas y mango', price: 2.000 },
      { name: 'Mango bañado con Chamoy, Tajín, gomitas', price: 5.000 },
    
    ],
    toppings: [],
    note: null,
    pendingConfig: [],
    silletaImage: '/images/silletas/11-5.jpg',
    accent: 'dorado',
  },
  {
    id: '11.6',
    baseName: 'Rugido antioqueño: entre montañas, mitos y oro.',
    phrase: null,
    productoBase: null,
    products: [
      { name: 'Arepas de chocolo con quesito', price: 4.000 },
      { name: 'Empanadas', price: 1.000 },
      { name: 'Palomitas', price: 2.500 },
    ],
    toppings: [],
    note: null,
    pendingConfig: [],
    silletaImage: '/images/silletas/11-6.jpg',
    accent: 'verde-oliva',
  },
]

export default groups
