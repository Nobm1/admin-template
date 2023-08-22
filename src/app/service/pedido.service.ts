import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { PedidoSinCompromiso } from "../models/pedidoSinCompromiso.interface"


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  apiurl="https://hela.transyanez.cl/api/pedidos"
  // apiurl = "http://127.0.0.1:8000/api/pedidos"

  get_pedidos_sin_despacho() {
    return this.http.get<PedidoSinCompromiso[]>(this.apiurl + "/sin_despacho/")
  }

  get_pedidos_sin_despacho_descarga() {
    this.http.get(this.apiurl + "/sin_despacho/descargar", {responseType:"blob"})
    .subscribe((blob:Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url
      a.download = `Pedidos_con_fecha_de_compromiso_sin_despacho.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
    })

  }
}