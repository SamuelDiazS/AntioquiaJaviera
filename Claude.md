Te conviene darle a Claude un prompt bastante específico para que no se limite a hacer una página informativa, sino que construya un **sitio funcional para gestionar el evento**, con los grupos, productos, precios, silletas y tabla de rotaciones.

Aquí tienes un prompt listo para copiar y pegar en Claude:

Quiero que desarrolles un sitio web RESPONSIVE, moderno e interactivo para gestionar y presentar el evento escolar **“Día de la Antioqueñidad”** de la Institución Educativa Javier Londoño.

La interfaz debe estar inspirada VISUALMENTE en la imagen de referencia que adjunto. Usa esa imagen como referencia del estilo artístico general: estética antioqueña tradicional, ilustraciones botánicas, flores, silletas, montañas, colores verde oscuro, verde oliva, crema/beige, amarillo y detalles rojos, textura artesanal y elementos que recuerden a una celebración tradicional de Antioquia.

IMPORTANTE:

* No copies literalmente la imagen.
* Utilízala únicamente como referencia visual y de composición.
* El resultado debe sentirse como una página web moderna que combina tecnología con estética tradicional antioqueña.
* Debe ser completamente responsive para PC, tablet y celular.
* La información de los grupos y productos debe quedar organizada y fácil de modificar posteriormente.
* Cada producto debe tener un campo claramente preparado para asignarle un PRECIO.
* Cada grupo debe tener un espacio para colocar posteriormente una IMAGEN DE SU SILLETA.
* No inventes precios: deja valores editables o marcadores como “$0” / “Precio por definir”.
* No inventes imágenes de las silletas: deja un componente/espacio visual preparado para cargar la imagen posteriormente.

## 1. INFORMACIÓN GENERAL DEL EVENTO

Institución:
Institución Educativa Javier Londoño

Evento:
Día de la Antioqueñidad

Fecha:
28 de agosto de 2026

Lugar:
Sede Principal

Inicio de bases:
7:00 A.M.

Apertura de la jornada:
6:30 A.M.

Descanso lúdico recreativo:
9:30 A.M. – 10:00 A.M.

Acto cívico cultural:
10:30 A.M. – 12:00 P.M.

Durante el acto cívico habrá:

* Desfile de silleteros
* Canto a capela del grado once
* Muestras culturales

Frase principal del evento:
“Antioquia te abraza y contigo florece. De aquí y de allá, juntos florecemos más.”

También puedes utilizar como frase secundaria:
“Participa, comparte, dona y hagamos de este día una gran celebración antioqueña.”

## 2. ESTRUCTURA GENERAL DEL SITIO

Crea una navegación clara con estas secciones:

1. Inicio
2. Bases / Grupos
3. Productos
4. Rotaciones
5. Jornada
6. Información del evento

En dispositivos móviles utiliza un menú hamburguesa.

La página de inicio debe tener un HERO visual llamativo con:

* Nombre de la institución
* “Día de la Antioqueñidad”
* Fecha
* Lugar
* Frase principal
* Ilustraciones o decoraciones inspiradas en Antioquia
* Elementos florales
* Una silleta decorativa
* Montañas antioqueñas
* Botón para “Ver las bases”
* Botón para “Ver rotaciones”

## 3. SECCIÓN DE GRUPOS / BASES

Crea una tarjeta individual para cada grupo de grado 11.

Cada tarjeta debe mostrar:

* Número del grupo
* Nombre de la base
* Frase o descripción de la base
* Veedor
* Silletero/a
* Producto base
* Lista de productos
* Lista de toppings cuando corresponda
* Precio editable para cada producto
* Espacio para imagen de la silleta

El espacio de la silleta debe ser visualmente importante.

Por ejemplo:

[ IMAGEN DE SILLETA ]
“Agregar imagen de la silleta”

Debe estar preparado para reemplazarse posteriormente por una imagen real.

Puedes implementar el espacio utilizando una etiqueta <img> con una ruta fácilmente modificable, por ejemplo:

/images/silletas/11-1.jpg

Si la imagen no existe, mostrar un placeholder elegante que diga:
“Silleta de 11.1”
“Imagen próximamente”

## 4. DATOS DE LOS GRUPOS

### GRUPO 11.1

Nombre de la base:
“De chiva por Oriente”

Veedor:
Salome Pemberthy

Silletero:
Kevin Atehortua

Producto base:
Arequipe

Productos:

* Alfajores
* Obleas
* Barquillos
* Bolis de arequipe

Cada producto debe tener:

* Nombre
* Precio editable
* Opcionalmente una imagen del producto

Silleta:
Dejar espacio para la imagen de la silleta de 11.1.

### GRUPO 11.2

Nombre de la base:
“Entre café y montañas”

Veedor:
Catalina Carmona Espinosa

Silletero:
Miguel Ángel Montoya Pulgarin

Producto base:
CAFÉ

Productos:

* Granizado de Café
* Helado de Capuccino
* Coffee Delight

Toppings:

* Chispitas de Colores
* Salsa de Caramelo
* Lecherita
* Salsa Chocolate
* Coffee Delight
* Chispitas Chocolate
* Chokis
* MiniChips
* Wafer

Cada producto y cada topping debe tener un espacio para precio editable.

Silleta:
Dejar espacio para la imagen de la silleta de 11.2.

### GRUPO 11.3

Nombre de la base:
“El rincón platanero”

Frase:
“Un pedacito de sol: entre plátanos y sabor”

Veedor:
Katherine Alarcón Velez

Silletera:
Elizabeth Duarte Giraldo

Producto:

* Maduro con una proteína y diferentes toppings
* Paquetes pequeños de plátano

Dejar espacio para especificar posteriormente:

* Qué proteínas estarán disponibles
* Qué toppings estarán disponibles
* Precio de cada combinación
* Precio de los paquetes pequeños

Silleta:
Dejar espacio para la imagen de la silleta de 11.3.

### GRUPO 11.4

Nombre de la base:
“Ruta láctea: todo un universo por el Norte de Antioquia.”

Veedor:
Yulay Isabella Piedrahíta Ramírez

Silletero:
Sebastián Ossa Pérez

Producto base:
Fresa

Productos:

* Fresas con crema
* Fresas con chocolate
* Pinchos de fresa

Aclaración:
Existe un pincho de fresa mixto que lleva malvaviscos.

Mostrar esta aclaración de forma visible pero discreta dentro de la tarjeta del grupo.

Dejar espacio para:

* Precio de cada producto
* Precio del pincho mixto
* Imagen de cada producto, opcional

Silleta:
Dejar espacio para la imagen de la silleta de 11.4.

### GRUPO 11.5

Nombre de la base:
“El balcón de los diablitos”

Frase:
“De manguito en manguito sabe más rico.”

Veedor:
Hanna Osorio Zapata

Silletero:
Simon Cifuentes Jiménez

Productos:

* Sodas de mango

  * Con chamoy y soda
* Mango picado con toppings

  * Sal
  * Limón
  * Pimienta
  * Tajín
  * Gomitas
* Cremas de mango

Cada producto y opción debe tener un campo para precio.

Silleta:
Dejar espacio para la imagen de la silleta de 11.5.

### GRUPO 11.6

Nombre de la base:
“Rugido antioqueño: entre montañas, mitos y oro.”

Veedor:
Forlán Cristiano Marín Milanés

Silletero:
Samuel Alzate Largo

Productos:

* Arepas de chocolo con queso
* Empanadas
* Palomitas

Cada producto debe tener un campo para precio.

Silleta:
Dejar espacio para la imagen de la silleta de 11.6.

## 5. SISTEMA DE PRECIOS

Quiero que la estructura de datos esté diseñada para que posteriormente sea muy fácil cambiar los precios.

NO pongas precios inventados.

Utiliza inicialmente algo como:

precio: 0

Y en la interfaz muestra:

“Precio por definir”

Cuando precio sea mayor a 0, mostrarlo como moneda colombiana:

$5.000

Utiliza formato COP.

Idealmente crea los datos de los grupos en un objeto/JSON/array separado del HTML para que posteriormente pueda modificarlos fácilmente.

Ejemplo conceptual:

{
nombre: "Granizado de Café",
precio: 0
}

La arquitectura debe permitir modificar productos y precios sin tener que rediseñar toda la interfaz.

## 6. TABLA DE ROTACIONES

Crea una sección independiente llamada:

“Rotación de la Jornada”

Debe reproducir la información de la tabla del evento.

Columnas:

1. 7:00 - 7:30
2. 7:30 - 8:00
3. 8:00 - 8:30
4. 8:30 - 9:00
5. 9:00 - 9:30

Filas:

### 11.1 — GIMNASIO

* 7:00 - 7:30 → 6.1
* 7:30 - 8:00 → 7.1
* 8:00 - 8:30 → 8.1
* 8:30 - 9:00 → 9.1
* 9:00 - 9:30 → P3 y P4

### 11.2 — AULA 3.09 (SANDRA)

* 7:00 - 7:30 → 6.2
* 7:30 - 8:00 → 7.2
* 8:00 - 8:30 → P1 y PR11
* 8:30 - 9:00 → 9.2
* 9:00 - 9:30 → 10.1

### 11.3 — AUDITORIO

* 7:00 - 7:30 → 6.3
* 7:30 - 8:00 → 7.3
* 8:00 - 8:30 → P2 y PR12
* 8:30 - 9:00 → 9.3
* 9:00 - 9:30 → 10.2 y 10.3

### 11.4 — PATIO SALÓN

* 7:00 - 7:30 → 6.4
* 7:30 - 8:00 → 7.4
* 8:00 - 8:30 → 8.4
* 8:30 - 9:00 → 9.4
* 9:00 - 9:30 → 10.4

### 11.5 — AULA 3.10 (SALÓN MÓNICA)

* 7:00 - 7:30 → 6.5
* 7:30 - 8:00 → 7.5
* 8:00 - 8:30 → 8.5
* 8:30 - 9:00 → 9.5
* 9:00 - 9:30 → 10.5 y P5

### 11.6 — SALIDA / SALA DE SISTEMAS

* 7:00 - 7:30 → 6.6
* 7:30 - 8:00 → 6.7
* 8:00 - 8:30 → 8.3
* 8:30 - 9:00 → 8.2
* 9:00 - 9:30 → 10.6

## 7. ACLARACIONES DE LA TABLA

Incluye una pequeña leyenda debajo de la tabla:

P = Preescolar

PR1 = Primero

P1, P2, P3, P4 y P5 corresponden a Preescolar 1, 2, 3, 4 y 5.

PR11 y PR12 corresponden a Primero 11 y Primero 12.

Los demás números corresponden a los grupos de 6.º a 11.º.

En dispositivos móviles, la tabla debe seguir siendo fácil de utilizar. Puedes implementar:

* scroll horizontal
* encabezado fijo
* o una transformación de la tabla a tarjetas

Prioriza la legibilidad.

## 8. SECCIÓN "DESARROLLO DE LA JORNADA"

Crear una timeline visual:

6:30 A.M.
Apertura de la jornada

7:00 A.M.
Inicio de bases

7:00 – 9:30 A.M.
Rotación de los grupos

9:30 – 10:00 A.M.
Descanso lúdico recreativo

10:30 A.M. – 12:00 P.M.
Acto cívico cultural

Durante el acto:

* Desfile de silleteros
* Canto a capela del grado once
* Muestras culturales

Utiliza una línea temporal visual con iconos y elementos florales antioqueños.

## 9. DISEÑO VISUAL

La estética debe estar basada en la identidad visual de la imagen adjunta.

Paleta sugerida:

* Verde antioqueño oscuro
* Verde bosque
* Verde oliva
* Crema / marfil
* Beige
* Amarillo cálido
* Rojo o rosado como color de acento

No hagas una interfaz genérica de Bootstrap.

Debe sentirse como una celebración antioqueña.

Elementos visuales:

* Flores
* Hojas
* Silletas
* Montañas
* Cafetales
* Casas tradicionales antioqueñas
* Sombreros antioqueños
* Detalles artesanales
* Texturas suaves tipo papel
* Formas orgánicas
* Bordes ligeramente irregulares
* Separadores decorativos

Usa tipografías que combinen:

* Una fuente serif o display para títulos tradicionales
* Una fuente sans-serif moderna para la información
* Una fuente manuscrita/cursiva para frases decorativas

Mantén una buena legibilidad.

## 10. TARJETAS DE LOS GRUPOS

Cada grupo debe tener una tarjeta visualmente diferente pero consistente.

Estructura:

[11.2]

ENTRE CAFÉ Y MONTAÑAS

“Una experiencia inspirada en el café antioqueño”

VEEDOR
Catalina Carmona Espinosa

SILLETERO
Miguel Ángel Montoya Pulgarin

[ IMAGEN DE LA SILLETA ]

PRODUCTOS

☕ Granizado de Café ........ Precio por definir
🍨 Helado de Capuccino ...... Precio por definir
☕ Coffee Delight ............ Precio por definir

TOPPINGS

Chispitas de Colores ........ Precio por definir
Salsa de Caramelo ........... Precio por definir
etc.

El diseño exacto puede variar, pero debe mantener esta jerarquía.

## 11. INTERACTIVIDAD

Agrega interacciones modernas:

* Animaciones suaves al hacer scroll.
* Hover en tarjetas.
* Modal o vista ampliada para cada grupo.
* Botón “Ver productos”.
* Botón “Ver silleta”.
* Posibilidad de ampliar la imagen de la silleta.
* Filtros por grupo.
* Búsqueda de productos.
* Mostrar claramente los precios cuando sean configurados.
* Navegación suave entre secciones.

En móvil, los productos pueden aparecer mediante acordeones para evitar una página excesivamente larga.

## 12. FUNCIONALIDAD DE GESTIÓN

Quiero que el código esté preparado para una futura función de administración.

Crea una estructura de datos centralizada para:

* grupos
* nombres de bases
* productos
* toppings
* precios
* imágenes de silletas

Por ejemplo:

groups = [
{
id: "11.1",
baseName: "...",
silletaImage: "/images/silletas/11-1.jpg",
products: [
{
name: "...",
price: 0
}
]
}
]

De esta manera posteriormente se puede conectar fácilmente a una base de datos o panel administrativo.

## 13. PANEL DE ADMINISTRACIÓN FUTURO

Aunque inicialmente no es obligatorio implementar un backend, deja la arquitectura preparada para agregar posteriormente un panel donde un administrador pueda:

* Editar precios.
* Agregar productos.
* Eliminar productos.
* Editar toppings.
* Cambiar nombres.
* Subir imágenes de las silletas.
* Modificar la tabla de rotaciones.

Si puedes implementar una versión local sencilla usando localStorage para guardar precios e imágenes/rutas editadas, hazlo, pero no sacrifiques la calidad visual de la página principal.

## 14. TECNOLOGÍA

Construye el proyecto utilizando una arquitectura limpia y mantenible.

Preferiblemente:

* React
* Tailwind CSS
* Lucide Icons
* Componentes reutilizables
* Datos separados de la interfaz

Si consideras que HTML/CSS/JavaScript puro es más apropiado para que el proyecto sea fácil de ejecutar, puedes utilizarlo.

No dependas de un backend para mostrar la información inicial.

## 15. RESPONSIVE

El sitio debe funcionar correctamente en:

* Computadores de escritorio
* Portátiles
* Tablets
* Celulares

En móvil:

* Menú hamburguesa
* Tarjetas en una sola columna
* Productos organizados mediante acordeones
* Tabla de rotación con scroll horizontal o tarjetas
* Botones grandes y fáciles de tocar
* Imágenes adaptables
* No debe existir scroll horizontal accidental

## 16. PIE DE PÁGINA

Crear un footer inspirado en la estética de la página.

Debe incluir:

Institución Educativa Javier Londoño

Día de la Antioqueñidad — 2026

“Antioquia te abraza y contigo florece.”

Agregar decoración con flores, hojas y elementos de la cultura antioqueña.

## 17. IMPORTANTE SOBRE LA IMAGEN DE REFERENCIA

La imagen adjunta contiene el diseño oficial del evento y debe servir como referencia visual para:

* Paleta de colores
* Tipografías
* Composición
* Estilo de ilustración
* Elementos antioqueños
* Flores
* Silletas
* Montañas
* Texturas
* Estética general

No conviertas la página en una copia exacta del afiche. Quiero una interpretación WEB moderna de ese diseño.

## 18. RESULTADO ESPERADO

Quiero que generes el sitio completo y funcional, no solamente un ejemplo de código.

Primero analiza la estructura del proyecto y después crea los archivos necesarios.

La página inicial debe verse como un sitio real terminado.

Asegúrate de que:

* Todos los 6 grupos estén incluidos.
* Todos los productos estén incluidos.
* Los toppings estén incluidos.
* Todos los nombres estén escritos exactamente como fueron proporcionados.
* Los precios queden preparados para edición.
* Todas las silletas tengan un espacio para imagen.
* La tabla de rotaciones esté completa y coincida con los datos proporcionados.
* La información de la jornada esté incluida.
* El diseño sea responsive.
* La estética corresponda a la Antioqueñidad y a la imagen de referencia.
* No inventes información que no haya sido proporcionada.

Al terminar, revisa el sitio completo y corrige errores de diseño, responsive, ortografía, estructura y consistencia visual.
