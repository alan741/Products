import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AlanTestComponent } from './alan-test/alan-test.component';
import { RopaDamaComponentComponent } from './ropa-dama-component/ropa-dama-component.component';
import { RopaCaballeroComponentComponent } from './ropa-caballero-component/ropa-caballero-component.component';
import { SharingFormComponent } from './sharing-form/sharing-form.component';

const routes: Routes = [
  { path: 'alan-test', component: AlanTestComponent },
  { path: 'ropa-dama-component', component: RopaDamaComponentComponent},
  { path: 'ropa-caballero-component', component: RopaCaballeroComponentComponent},
  { path: 'sharing-form-component', component: SharingFormComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
