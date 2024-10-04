import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantFormComponent } from './components/plant-form/plant-form.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantService} from '../core/service/plant.service';

@NgModule({
  declarations: [
    PlantListComponent,
    PlantFormComponent,
    PlantDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [PlantService],
  exports: [PlantListComponent, PlantFormComponent]
})
export class PlantModule { }
