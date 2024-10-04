import { Injectable } from '@angular/core';
import { Planta } from '../models/plant.model';
import { PLANTS } from '../data/plants-data';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private plants: Planta[] = PLANTS;

  constructor() {}

  getPlants(): Planta[] {
    return this.plants;
  }

  getPlantById(id: number): Planta | undefined {
    return this.plants.find(plant => plant.idPlanta === id);
  }

  addPlant(plant: Planta): void {
    this.plants.push(plant);
  }

  updatePlant(updatedPlant: Planta): void {
    const index = this.plants.findIndex(plant => plant.idPlanta === updatedPlant.idPlanta);
    if (index !== -1) {
      this.plants[index] = updatedPlant;
    }
  }

  deletePlant(id: number): void {
    this.plants = this.plants.filter(plant => plant.idPlanta !== id);
  }
}
