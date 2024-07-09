import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { S } from '@fullcalendar/core/internal-common';


@Injectable({
  providedIn: 'root'
})
export class CitacionesService {

  // private apiUrl = 'http://localhost:8000/api/meli';
  apiUrl = "https://hela.transyanez.cl/api/meli"
  constructor(private http: HttpClient) { }

  getModalidadOperacion(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/modalidad_operacion');
  }


  getConductoresList(): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/conductoresList');
  }

  
  getPeonetaList(): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/peonetaList');
  }

  getEstadoList(): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/estadoList');
  }

  getOperaciones(): Observable<any>{
    return this.http.get<any>(this.apiUrl + `/citacionOperacionFecha?fecha=20240607&id=1`);
  }
  getPpu(fecha:any,op: number, cop:number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/citacion_cop?fecha=${fecha}&op=${op}&cop=${cop}`);
  }
  actualizarEstadoPpu(estado: any, id: any, fecha:string): Observable<any> {
    const url = `${this.apiUrl}/actualizar_estadoPpu?estado=${estado}&id_ppu=${id}&fecha=${fecha}`;
    return this.http.post<any>(url, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  
  actualizarRutaMeli(ruta_meli: any, id_ppu: any, fecha:string): Observable<any> {
    const url = `${this.apiUrl}/actualizar_rutaMeli?ruta_meli=${ruta_meli}&id_ppu=${id_ppu}&fecha=${fecha}`; 
    return this.http.post<any>(url, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  actualizarTipoRuta(tipo_ruta: any, id_ppu: any, fecha:string): Observable<any> {
    const url = `${this.apiUrl}/actualizar_tipoRuta?tipo_ruta=${tipo_ruta}&id_ppu=${id_ppu}&fecha=${fecha}`; 
    return this.http.post<any>(url, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getEstadosSeleccionados(id_estado: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/nombreCitacion?id_estado=${id_estado}`);
}

  getPatenteCitacion(operacionValue:number, centroOperacionValue:number, fecha:string): Observable<any>{
    return this.http.get(`${this.apiUrl}/patentesPorCitacion?op=${operacionValue}&cop=${centroOperacionValue}&fecha=${fecha}`);
  }

  getCopFiltrado(operacion:any): Observable<any>{
    return this.http.get(`${this.apiUrl}/filtro/Cop?op=${operacion}`);
  }

  getpatentesFiltradas(id_operacion: number, id_centro_op: number):Observable<any>{
    return this.http.get(`${this.apiUrl}/filtroPatentesPorIdOp_y_IdCop?id_operacion=${id_operacion}&id_centro_op=${id_centro_op}`)
  }

  getTipoRuta(): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/tipoRuta');
  }

  }