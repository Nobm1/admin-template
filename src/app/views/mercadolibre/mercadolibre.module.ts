import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  ButtonGroupModule,
  TableModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule,
  ModalModule,
  
} from '@coreui/angular';
import { InfoMercadoLibreComponent } from './info-mercado-libre/info-mercado-libre.component';
import { MercadolibreRoutingModule } from './mercadolibre-routing.module';
import { CitacionesComponent } from './citaciones/citaciones.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    InfoMercadoLibreComponent,
    CitacionesComponent
    
  ],
  imports: [
    CommonModule,
    MercadolibreRoutingModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    SharedModule,
    MatExpansionModule,
    SharedModule,
    UtilitiesModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    NavModule,
    ModalModule,
    TableModule,
    CollapseModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class MercadolibreModule { }