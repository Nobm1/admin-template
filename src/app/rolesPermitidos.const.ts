import {ROLES_ENUM} from  './models/enum/roles.enum'

export const ROLES_PERMITIDOS = {
    LOGIN_NOT_ALLOW : [ROLES_ENUM.USER_JURIDICO, ROLES_ENUM.USER_NATURAL],
    DASHBOARD : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_FINANZAS, ROLES_ENUM.JEFE_TRANSPORTE, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.TRANSPORTE,ROLES_ENUM.COORDINADOR,ROLES_ENUM.TOC, ROLES_ENUM.JEFE_TOC],
    TRANSPORTE : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_TRANSPORTE, ROLES_ENUM.CHOFER, ROLES_ENUM.JEFE_OPERACIONES],
    OPERACIONES : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.TOC, ROLES_ENUM.JEFE_TOC, ROLES_ENUM.TRANSPORTE,ROLES_ENUM.RAUDDY],
    OPERACIONES_VIEWS : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.TRANSPORTE],
    PICKING : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.RAUDDY,ROLES_ENUM.RUT_PICKEADOR, ROLES_ENUM.TRANSPORTE],
    PICKING_ALL : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.RAUDDY,ROLES_ENUM.TRANSPORTE],
    PICKING_RUT_PICKIEADOR : [ROLES_ENUM.RUT_PICKEADOR],
    OPL  : [ROLES_ENUM.ADMIN],
    TOC : [ROLES_ENUM.ADMIN,ROLES_ENUM.JEFE_TOC,ROLES_ENUM.TOC, ROLES_ENUM.TRANSPORTE,ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR],
    RECEPCION : [ROLES_ENUM.ADMIN,ROLES_ENUM.PICKING,ROLES_ENUM.RUT_PICKEADOR, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.RAUDDY,ROLES_ENUM.TRANSPORTE],
    PANEL : [ROLES_ENUM.ADMIN],
    INFORMACION : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.RAUDDY, ROLES_ENUM.TOC, ROLES_ENUM.JEFE_TOC, ROLES_ENUM.TRANSPORTE],
    INGRESO_CLIENTE : [ROLES_ENUM.ADMIN,ROLES_ENUM.PICKING,ROLES_ENUM.RUT_PICKEADOR, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.TRANSPORTE],
    INFORMACION_PICKING : [ROLES_ENUM.PICKING,ROLES_ENUM.RUT_PICKEADOR,],
    ONLY_TOC : [ROLES_ENUM.TOC],
    FULL_TOC : [ROLES_ENUM.ADMIN,ROLES_ENUM.JEFE_TOC],
    ONLY_ALERTAS_TOC :[ROLES_ENUM.TRANSPORTE,ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR],
    INFORMACION_ADMINISTRADOR : [ROLES_ENUM.ADMIN],
    INFORMACION_OPERACIONES : [ROLES_ENUM.JEFE_OPERACIONES, ROLES_ENUM.COORDINADOR, ROLES_ENUM.SUPERVISOR, ROLES_ENUM.RAUDDY, ROLES_ENUM.TRANSPORTE],
    CARGA_EXCEL: [ROLES_ENUM.ADMIN],
    RSV : [ROLES_ENUM.ADMIN],
    EXO: [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_TRANSPORTE,ROLES_ENUM.TRANSPORTE, ROLES_ENUM.JEFE_OPERACIONES, ROLES_ENUM.ANALISTA_EXO]
}


export const ACCESO_ROL : any = {
    [ROLES_ENUM.ADMIN_DCORE] : 'dashboard',
    [ROLES_ENUM.CHOFER] : 'transporte/reportes',
    [ROLES_ENUM.SUPERVISOR] : 'dashboard',
    [ROLES_ENUM.ADMIN] : 'dashboard',
    [ROLES_ENUM.TRANSPORTE] : 'dashboard',
    [ROLES_ENUM.JEFE_OPERACIONES] : 'dashboard',
    [ROLES_ENUM.JEFE_TRANSPORTE] : 'dashboard',
    [ROLES_ENUM.PICKING]: 'info/estado',
    [ROLES_ENUM.COORDINADOR] : 'dashboard',
    [ROLES_ENUM.RAUDDY] : 'informacion/estado',
    [ROLES_ENUM.TOC] : 'dashboard',
    [ROLES_ENUM.JEFE_TOC] : 'dashboard',
    [ROLES_ENUM.RUT_PICKEADOR]: 'info/estado',
    [ROLES_ENUM.ANALISTA_EXO]: 'exo/nivel-servicio'
}