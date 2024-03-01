import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportesComponent } from './reportes/reportes.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { EstadosComponent } from './estados/estados.component';
import { ProductosSinClasificacionComponent } from './productos-sin-clasificacion/productos-sin-clasificacion.component';
import { EdicionPendientesComponent } from './edicion-pendientes/edicion-pendientes.component';
import { DifFechasEasyComponent } from './dif-fechas-easy/dif-fechas-easy.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buttons'
      },
      {
        path: 'estados',
        component: EstadosComponent,
        data: {
          title: 'Estados'
        }
      },
      {
        path: 'pendientes',
        component: PendientesComponent,
        data: {
          title: 'Pendientes'
        }
      },
      {
        path: 'productos-sin-clasificacion',
        component: ProductosSinClasificacionComponent,
        data: {
          title: 'Productos sin clasificacion'
        }
      },
      {
        path: 'reportes',
        component: ReportesComponent,
        data: {
          title: 'Reportes'
        }
      },
      {
        path: 'edicion-pendientes',
        component: EdicionPendientesComponent,
        data: {
          title: 'Edicion Pendientes'
        }
      },
      {
        path: 'dif-fechas-easy',
        component: DifFechasEasyComponent,
        data: {
          title: 'Diferencia Fechas Easy'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {
}
