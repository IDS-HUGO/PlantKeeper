import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlantModule } from './plant/plant.module';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlantModule,
    FormsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
