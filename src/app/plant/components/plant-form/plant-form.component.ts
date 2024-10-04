import { Component } from '@angular/core';
import { PlantService } from '../../../core/service/plant.service';
import { Planta } from '../../../core/models/plant.model';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent {
  plant: Planta = {
    idPlanta: 0,
    nombreCientifico: '',
    nombreComun: '',
    frecuenciaRiego: '',
    condicionesLuz: '',
    fechaRegistro: new Date()
  };

  constructor(private plantService: PlantService) {}

  // Método para añadir una planta
  addPlant(): void {
    this.plantService.addPlant(this.plant);
    this.resetForm();
  }

  // Resetear el formulario
  resetForm(): void {
    this.plant = {
      idPlanta: 0,
      nombreCientifico: '',
      nombreComun: '',
      frecuenciaRiego: '',
      condicionesLuz: '',
      fechaRegistro: new Date()
    };
  }
}
