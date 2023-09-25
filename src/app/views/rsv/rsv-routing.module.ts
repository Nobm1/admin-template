import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { CrearCargaComponent } from './crear-carga/crear-carga.component';
import { VentasComponent } from './ventas/ventas.component';
import { RecepcionComponent } from './recepcion/recepcion.component';
const routes: Routes = [
  {
    path:'',
    data : {
      title: "RSV"
    },
    children : [
      {
        path : 'catalogo',
        component : CatalogoComponent,
        data : {
          title : "Catalogo"
        }
      },
      {
        path : 'agregar-producto',
        component : AgregarProductoComponent,
        data : {
          title : "Agregar producto"
        }
      },
      {
        path : 'crear-carga',
        component : CrearCargaComponent,
        data : {
          title : "Agregar producto"
        }
      },
      {
        path : 'ventas',
        component : VentasComponent,
        data : {
          title : "Ventas"
        } 
      },
      {
        path : 'recepcion',
        component : RecepcionComponent,
        data : {
          title : "Recepción"
        } 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RsvRoutingModule { }
