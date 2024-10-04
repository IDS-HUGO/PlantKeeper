import { Planta } from '../models/plant.model';

export const PLANTS: Planta[] = [
  {
    idPlanta: 1,
    nombreComun: 'Poto',
    nombreCientifico: 'Epipremnum aureum',
    frecuenciaRiego: 'Cada semana',
    condicionesLuz: 'Indirecta brillante',
    fechaRegistro: new Date('2023-01-10'),
  },
  {
    idPlanta: 2,
    nombreComun: 'Cactus',
    nombreCientifico: 'Cactaceae',
    frecuenciaRiego: 'Cada 2 semanas',
    condicionesLuz: 'Plena luz',
    fechaRegistro: new Date('2023-01-15'),
  },
  {
    idPlanta: 3,
    nombreComun: 'Lirio de la paz',
    nombreCientifico: 'Spathiphyllum',
    frecuenciaRiego: 'Cada semana',
    condicionesLuz: 'Luz indirecta',
    fechaRegistro: new Date('2023-01-20'),
  },
  {
    idPlanta: 4,
    nombreComun: 'Aloe Vera',
    nombreCientifico: 'Aloe barbadensis',
    frecuenciaRiego: 'Cada 3 semanas',
    condicionesLuz: 'Plena luz',
    fechaRegistro: new Date('2023-02-01'),
  },
  {
    idPlanta: 5,
    nombreComun: 'Ficus',
    nombreCientifico: 'Ficus elastica',
    frecuenciaRiego: 'Cada semana',
    condicionesLuz: 'Indirecta brillante',
    fechaRegistro: new Date('2023-02-10'),
  },
];
