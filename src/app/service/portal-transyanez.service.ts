import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Colaborador,DetallePago } from 'src/app/models/transporte/colaborador.interface' 
import { Vehiculo,AsignarOperacion } from 'src/app/models/transporte/vehiculo.interface' 
import { Usuario } from 'src/app/models/transporte/tripulacion.interface' 
@Injectable({
  providedIn: 'root'
})
export class PortalTransyanezService {

  constructor(private http: HttpClient) { }

  apiurl="https://hela.transyanez.cl/api/transporte"
  // apiurl = "http://127.0.0.1:8000/api/transporte" 

  downloadResumenVehiculos() {
    let date = new Date();
    const fechaActual = date.toISOString().split('T')[0];

    this.http.get(this.apiurl + '/resumen_vehiculos_portal', {responseType:"blob"})
    .subscribe((blob:Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url
      a.download = `resumen_vehiculos_portal_${fechaActual}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
    })
  }

  httpOptions = {
    "headers": {
      "Content-Encoding": "gzip",
      "Cache-Control": "no-cache"
    },
    "responseType": "blob"
  }


  downloadArchivos(nombre : string) {
    let date = new Date();
    const fechaActual = date.toISOString().split('T')[0];

    const headers = new HttpHeaders()
      .set('Cache-Control', 'no-cache, no-store, must-revalidate')
      .set('Pragma', 'no-cache')
      .set('Expires', '0');


    this.http.get(this.apiurl + `/descargar?name_file=${nombre}`, {responseType:"blob", headers : {
      "Content-Encoding": "gzip",
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }})
    .subscribe((blob:Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url
      const nombre_archivo = nombre.split('/')[nombre.split('/').length -1]
      a.download = nombre_archivo;
      
        a.click();
        window.URL.revokeObjectURL(url);
    })
  }


  // downloadArchivos(nombre : string) {
  //   let date = new Date();
  //   const fechaActual = date.toISOString().split('T')[0];

  //   const headers = new HttpHeaders()
  //     .set('Cache-Control', 'no-cache, no-store, must-revalidate')
  //     .set('Pragma', 'no-cache')
  //     .set('Expires', '0');


  //   this.http.get(this.apiurl + `/descargar?name_file=${nombre}`, {responseType:"blob", headers : {
  //     "Content-Encoding": "gzip",
  //     'Cache-Control': 'no-cache, no-store, must-revalidate',
  //     'Pragma': 'no-cache',
  //     'Expires': '0'
  //   }})
  //   .subscribe((blob:Blob) => {
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = url
  //     const nombre_archivo = nombre.split('/')[4]
  //     a.download = nombre_archivo;
      
  //       a.click();
  //       window.URL.revokeObjectURL(url);
  //   })
  // }

  obtenerColaboradores(){
    return this.http.get<Colaborador []>(this.apiurl+"/ver/colaboradores")
  }

  buscarVehiculos(){
    return this.http.get<Vehiculo []>(this.apiurl+"/buscar/vehiculos")
  }


  buscarVehiculosMasOperaciones(){
    return this.http.get<Vehiculo []>(this.apiurl+"/buscar/vehiculos/operacion")
  }



  buscarColaboradores(nombre : string){
    return this.http.get<Colaborador []>(this.apiurl+`/buscar/colaboradores?nombre=${nombre}`)
  }

  activarColaborador(rut:string, activo : boolean){
    return this.http.get(this.apiurl+`/activar/colaborador?rut=${rut}&activar=${activo}`)
  }

  obtenerDetallePago(id : string){
    return this.http.get<DetallePago []>(this.apiurl+ `/ver/detalles_pago?id=${id}`)
  }


  actualizarColaborador(data : any){
    return this.http.put(this.apiurl+"/actualizar/colaborador",data)
  }

  actualizarDetallePago(data : any){
    return this.http.put(this.apiurl+"/actualizar/colaborador/datos/banco",data)
  }

  actualizarVehiculo(data : any){
    return this.http.put(this.apiurl+"/actualizar/datos/vehiculo",data)
  }

  actualizarTripulacion(data : any){
    return this.http.put(this.apiurl+"/actualizar/datos/usuario",data)
  }


  actualizarEstadoVehiculo(data : any){
    return this.http.put(this.apiurl+"/actualizar/estado/vehiculo",data)
  }

  actualizarEstadoTripulacion(data : any){
    return this.http.put(this.apiurl+"/actualizar/estado/tripulacion",data)
  }

  asignarOperacionVehiculo(data : any){
    return this.http.put(this.apiurl+"/asignar/operacion/vehiculo",data)
  }

  revisarOperacionVehiculo(vehiculo:number){
    return this.http.get<AsignarOperacion []>(this.apiurl+`/revisar/operacion/vehiculo?vehiculo=${vehiculo}`)
  }


  verificarColaborador(rut:string){
    return this.http.get(this.apiurl+`/verificar/razon_social?rut=${rut}`)
  }

  buscarVehiculo(filtro:string){
    return this.http.get<Vehiculo []>(this.apiurl+`/buscar/vehiculo/${filtro}`)
  }


 registrarColaborador(data : any){
    return this.http.post(this.apiurl+"/agregar/colaborador",data)
  }


  registrarUsuario(data : any){
    return this.http.post(this.apiurl+"/agregar/usuario",data)
  }

  registrarDetallePago(data : any){
    return this.http.post(this.apiurl+"/agregar/colaborador/datos/banco",data)
  }

  registrarVehiculos(data : any){
    return this.http.post(this.apiurl+"/agregar/vehiculos",data)
  }

 subirDocumentos(formData : any, tipo_archivo : string, nombre : string){
    return this.http.post(this.apiurl+`/colaboradores/subir-archivo?tipo_archivo=${tipo_archivo}&nombre=${nombre}`, formData)
  }

 subirDocumentosVehiculos(formData : any, tipo_archivo : string, nombre : string){
    return this.http.post(this.apiurl+`/vehiculos/subir-archivo?tipo_archivo=${tipo_archivo}&nombre=${nombre}`, formData)
  }
 subirFotoPerfilUsuario(formData : any,  nombre : string){
    return this.http.post(this.apiurl+`/subir/foto-perfil?nombre=${nombre}`, formData)
  }

  subirDocumentosTripulacion(formData : any, tipo_archivo : string, nombre : string){
    return this.http.post(this.apiurl+`/usuario/subir-archivo?tipo_archivo=${tipo_archivo}&nombre=${nombre}`, formData)
  }


 registrarBitacora(data : any){
    return this.http.post(this.apiurl+"/registrar/bitacora",data)
  }

  getEstadoTransporte(){
    return this.http.get(this.apiurl+"/estados")
  }

  getTiposTripulacion(){
    return this.http.get(this.apiurl+"/tripulacion/tipo")
  }

  getDatosColaborador(){
    return this.http.get(this.apiurl+"/tripulacion/tipo")
  }

  getUsuariosTransporte(){
    return this.http.get<Usuario []>(this.apiurl+"/usuarios")
  }

  buscarUsuariosTransporte(){
    return this.http.get<Usuario []>(this.apiurl+"/usuarios")
  }


  EliminarOpVehiculo(id : number){
    return this.http.delete(this.apiurl+`/eliminar/operacion/vehiculo?id=${id}`)
  }


  desvincularColaborador(data : any){
    return this.http.post(this.apiurl+"/desvincular/colaborador",data)
  }
  
  buscarIdVehiculo(id_op : number, id_co : number){
    return this.http.get(this.apiurl+`/buscar/vehiculos/filtro?id_op=${id_op}&id_co=${id_co}`)
  }


  descargar_vehiculos_buscados(body : any) {
    this.http.post(this.apiurl + "/vehiculos/descargar", body, {responseType:"blob"}).subscribe((blob:Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url
      a.download =`vehiculos.xlsx`; 
        a.click();
        window.URL.revokeObjectURL(url);
    })
  }

  descargar_vehiculos_buscados_resumen(body : any) {
    this.http.post(this.apiurl + "/vehiculos/descargar/resumen", body, {responseType:"blob"}).subscribe((blob:Blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url
      a.download =`vehiculos.xlsx`; 
        a.click();
        window.URL.revokeObjectURL(url);
    })
  }
 

  getMotivosDesvinculacion(){
    return this.http.get(this.apiurl+"/colaborador/desvinculacion")
  }


  getMarcasVehiculos(){
    return this.http.get(this.apiurl+"/marcas/vehiculos")
  }

}
