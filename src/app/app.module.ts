import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlanTestComponent } from './alan-test/alan-test.component';
import { RopaCaballeroComponentComponent } from './ropa-caballero-component/ropa-caballero-component.component';
import { RopaDamaComponentComponent } from './ropa-dama-component/ropa-dama-component.component';
import { SharingFormComponent } from './sharing-form/sharing-form.component';
import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import dxChart from 'devextreme/viz/chart';
import { DxListModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    AlanTestComponent,
    RopaCaballeroComponentComponent,
    RopaDamaComponentComponent,
    SharingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxChartModule,
    DxListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
