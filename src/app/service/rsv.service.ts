import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval,Observable, switchMap  } from 'rxjs';
import {CatalogoRSV, ColoresRSV,CatalogoPorColor } from 'src/app/models/catalogoRSV.iterface'
import { EtiquetaRSV } from 'src/app/models/etiquetaRSV.interface'
import { CargaRSV } from 'src/app/models/cargaRSV.interface'
import {SucursalRSV} from 'src/app/models/sucursalRSV.interface'
import { InventarioSucursal } from 'src/app/models/inventarioSucursal.interface'
import { DatosCargaRSV } from 'src/app/models/datosCargaRSV.interface'
import { TipoDespacho } from 'src/app/models/tipoDespacho.inteface'

@Injectable({
  providedIn: 'root'
})
export class RsvService {

  constructor( private http : HttpClient) { }

  // apiurl = "https://hela.transyanez.cl/api/rsv"
  apiurl = "http://127.0.0.1:8000/api/rsv"

  get_catalogo_rsv() {
    return this.http.get<CatalogoRSV[]>(this.apiurl + `/catalogo`)
  }

  get_colores_rsv() {
    return this.http.get<ColoresRSV[]>(this.apiurl + `/colores`)
  }

  agregar_nuevo_producto_rsv(body : any) {
    return this.http.post(this.apiurl + "/agregar/producto", body)
  }

  buscar_producto_existente_rsv(codigo : string) {
    return this.http.get(this.apiurl + `/buscar/${codigo}`)
  }

  editar_producto_rsv(body : any) {
    return this.http.put(this.apiurl + "/editar/producto", body)
  }

  agregar_nuevo_catalogo(body : any){
    return this.http.post(this.apiurl + "/agregar/carga", body)
  }

  get_carga_rsv(){
    return this.http.get<CargaRSV []>(this.apiurl + "/cargas")
  }
  /// obtener datos carga por nombre carga DatosCargaRSV

  get_datos_carga_por_nombre_rsv(nombre_carga : string){
    return this.http.get<DatosCargaRSV []>(this.apiurl + `/datos/etiquetas/carga/${nombre_carga}`)
  }

  // filtrar carga por nombre carga
  get_carga_por_nombre_carga_rsv(nombre_carga : string){
    return this.http.get<CargaRSV []>(this.apiurl + `/cargas/nombre_carga/${nombre_carga}`)
  }
  // lista de solo nombre carga y si tienen etiquetas generadas
  get_listar_cargas(){
    return this.http.get<CargaRSV []>(this.apiurl + "/listar/cargas")
  }

  // lista de solo nombre carga y si tienen etiquetas generadas filtrado por mes
  get_listar_cargas_por_mes(mes : string){
    return this.http.get<CargaRSV []>(this.apiurl + `/listar/cargas/mes?mes=${mes}`)
  }

  // lista de solo nombre carga y si tienen etiquetas generadas
  generar_etiquetas_por_nombre_carga(nombre_carga : string){
    return this.http.get<CargaRSV []>(this.apiurl + `/generar/etiquetas?nombre_carga=${nombre_carga}`)
  }

  // datos de productos de etiquetas hechas

  get_dato_producto_etiquetas(nombre_carga : string){
    return this.http.get<EtiquetaRSV[]>(this.apiurl + `/datos/etiquetas/productos?nombre_carga=${nombre_carga}`)
  }

  // filtrar catalogo por color

  catalogo_por_colo_sin_filtro(){
    return this.http.get<CatalogoPorColor[]>(this.apiurl + `/catalogo/color/sin_filtro`)
  }


  filtrar_catalogo_por_color(color : number){
    return this.http.get<CatalogoPorColor[]>(this.apiurl + `/catalogo/color?color=${color}`)
  }

  // buscar si nombre_carga existe
  buscar_carga_por_nombre_carga(nombre_carga : string){
    return this.http.get(this.apiurl + `/carga/buscar?nombre_carga=${nombre_carga}`)
  }

  // byscar las etiquetas 
  get_etiquetas(){
    return this.http.get<EtiquetaRSV[]>(this.apiurl + "/etiquetas")
  }


  //Update cada 15 segundos o 2 minutos

  updateProductoSinRecepcion(){
    return interval(12000).pipe(switchMap(()=> this.http.get<EtiquetaRSV[]>(this.apiurl+"/etiquetas")))
  }


  //etiquetas de carga

  getEtiquetaPorCarga(nombre_carga : string, codigo : string){
    return this.http.get<EtiquetaRSV[]>(this.apiurl + `/etiquetas/carga?nombre_carga=${nombre_carga}&codigo=${codigo}`) 
  }

  ///  etiquetas/carga/descargar

  downloadEtiquetasExcel(nombre_carga : string, codigo : string , tipo : string) {
    this.http.get(this.apiurl + `/etiquetas/carga/descargar?nombre_carga=${nombre_carga}&codigo=${codigo}&tipo=${tipo}`, {responseType:"blob"})
    .subscribe((blob:Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url
      a.download = `${nombre_carga}-${codigo}-${tipo}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
    })
  }

 

  get_sucursales(){
    return this.http.get<SucursalRSV[]>(this.apiurl + "/sucursales") 
  }
 /// sucursal
  get_inventario_por_sucursales(sucursal : number){
    return this.http.get<InventarioSucursal[]>(this.apiurl + `/inventario/sucursales/${sucursal}`) 
  }

  // editar/carga

  update_carga( body : any){
    return this.http.put(this.apiurl + "/editar/carga", body)
  }

  //eliminar listad de cargas

  delete_lista_codigos_carga( lista_codigos : string , nombre_carga : string){
    return this.http.put(this.apiurl + "/eliminar/cargas", { lista : lista_codigos ,
                                                             nombre_carga : nombre_carga})
  }

  /// sucursal
  get_tipo_despacho(){
    return this.http.get<TipoDespacho[]>(this.apiurl + `/tipo/despacho`) 
  }

  insert_nota_venta(body : any){
    return this.http.post(this.apiurl + `/agregar/nota_venta`,body) 
  }
}
