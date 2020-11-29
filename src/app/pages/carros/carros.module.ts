import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosListComponent } from './carros-list/carros-list.component';
import { CarrosRoutingModule } from './carros-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CarrosComponent } from './carros.component';

@NgModule({
  declarations: [
    CarrosComponent,
    CarrosListComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    Ng2SmartTableModule,
    NbCardModule
  ]
})
export class CarrosModule { }
