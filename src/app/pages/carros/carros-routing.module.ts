import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosListComponent } from './carros-list/carros-list.component';
import { CarrosComponent } from './carros.component';

const routes: Routes = [
    {
      path: '',
      component: CarrosComponent,
      children: [
        {
          path: 'carros-list',
          component: CarrosListComponent,
        },
      ],
    },
  ];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })
  export class CarrosRoutingModule {
  }