import { Component, OnInit } from '@angular/core';
import { PlantService } from '../../../core/service/plant.service';
import { Planta } from '../../../core/models/plant.model';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Planta[] = [];
  selectedPlantId: number | null = null; // ID de la planta seleccionada

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plants = this.plantService.getPlants();
  }

  deletePlant(id: number): void {
    this.plantService.deletePlant(id);
    this.plants = this.plants.filter(plant => plant.idPlanta !== id); // Actualiza la lista local
  }

  selectPlant(id: number): void {
    this.selectedPlantId = id; // Guarda el ID de la planta seleccionada
  }
}
