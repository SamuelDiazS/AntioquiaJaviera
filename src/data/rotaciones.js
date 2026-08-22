// Datos de la tabla "Rotación de la Jornada".
// columnas: franjas horarias. filas: un renglón por grupo con su lugar y las rotaciones.

export const columnas = ['7:00 - 7:30', '7:30 - 8:00', '8:00 - 8:30', '8:30 - 9:00', '9:00 - 9:30']

export const filas = [
  {
    grupo: '11.1',
    lugar: 'GIMNASIO',
    rotaciones: ['6.1', '7.1', '8.1', '9.1', 'P3 y P4'],
  },
  {
    grupo: '11.2',
    lugar: 'AULA 3.09 (SANDRA)',
    rotaciones: ['6.2', '7.2', 'P1 y PR11', '9.2', '10.1'],
  },
  {
    grupo: '11.3',
    lugar: 'AUDITORIO',
    rotaciones: ['6.3', '7.3', 'P2 y PR12', '9.3', '10.2 y 10.3'],
  },
  {
    grupo: '11.4',
    lugar: 'PATIO SALÓN',
    rotaciones: ['6.4', '7.4', '8.4', '9.4', '10.4'],
  },
  {
    grupo: '11.5',
    lugar: 'AULA 3.10 (SALÓN MÓNICA)',
    rotaciones: ['6.5', '7.5', '8.5', '9.5', '10.5 y P5'],
  },
  {
    grupo: '11.6',
    lugar: 'SALIDA / SALA DE SISTEMAS',
    rotaciones: ['6.6', '6.7', '8.3', '8.2', '10.6'],
  },
]

export const leyenda = [
  'P = Preescolar',
  'PR1 = Primero',
  'P1, P2, P3, P4 y P5 corresponden a Preescolar 1, 2, 3, 4 y 5.',
  'PR11 y PR12 corresponden a Primero 11 y Primero 12.',
  'Los demás números corresponden a los grupos de 6.º a 11.º.',
]
