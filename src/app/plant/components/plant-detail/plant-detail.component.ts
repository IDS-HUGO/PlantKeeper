import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PlantService } from '../../../core/service/plant.service';
import { Planta } from '../../../core/models/plant.model';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css']
})
export class PlantDetailComponent implements OnChanges {
  @Input() plantId!: number; // ID de la planta seleccionada
  plant?: Planta; // Planta a mostrar

  constructor(private plantService: PlantService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['plantId'] && this.plantId) {
      this.getPlantDetails();
    }
  }

  getPlantDetails(): void {
    this.plant = this.plantService.getPlantById(this.plantId);
  }

  // Método para actualizar la planta
  updatePlant(): void {
    if (this.plant) {
      this.plantService.updatePlant(this.plant);
      alert('Planta actualizada con éxito');
    } else {
      alert('Error al actualizar la planta. Asegúrate de que todos los campos estén completos.');
    }
  }
}
