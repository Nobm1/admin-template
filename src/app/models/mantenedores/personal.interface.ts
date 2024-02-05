export interface Personal {
    id: number,
    id_user: number | null,
    ids_user: string | null,
    lat: string | null,
    long: string | null,
    nombres: string,
    apellidos: string,
    rut: string,
    nacionalidad: string | null,
    fecha_nacimiento: Date | null,
    estado_civil: string | null,
    telefono: string | null,
    fecha_ingreso: Date | null,
    cargo: string | null,
    domicilio: string | null,
    comuna: string | null, 
    banco: string | null,
    tipo_cuenta: string | null,
    numero_cuenta: string | null,
    correo: string | null,
    afp: string | null,
    salud: string | null,
    telefono_adicional: string | null,
    nombre_contacto: string | null,
    seguro_covid: boolean | null, 
    horario:string | null,
    ceco:string | null,
    sueldo_base: number | null,
    tipo_contrato: string | null,
    direccion_laboral: string| null,
    enfermedad: string | null,
    polera: string | null,
    pantalon: string | null,
    poleron: string | null,
    zapato: number | null,
    req_comp: boolean | null,
    req_cel: boolean | null
    habilitado: boolean |null



}