import {ROLES_ENUM} from  './models/enum/roles.enum'

export const ROLES_PERMITIDOS = {
    LOGIN_NOT_ALLOW : [ROLES_ENUM.USER_JURIDICO, ROLES_ENUM.USER_NATURAL],
    DASHBOARD : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_FINANZAS, ROLES_ENUM.JEFE_TRANSPORTE, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.TRANSPORTE,ROLES_ENUM.COORDINADOR,ROLES_ENUM.TOC, ROLES_ENUM.JEFE_TOC],
    TRANSPORTE : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_TRANSPORTE, ROLES_ENUM.CHOFER, ROLES_ENUM.JEFE_OPERACIONES],
    OPERACIONES : [ROLES_ENUM.ADMIN, ROLES_ENUM.PICKEADOR_TIENDA, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.TOC, ROLES_ENUM.JEFE_TOC, ROLES_ENUM.TRANSPORTE,ROLES_ENUM.RAUDDY, ROLES_ENUM.ANALISTA_EXO, ROLES_ENUM.JEFE_TRANSPORTE],
    OPERACIONES_VIEWS : [ROLES_ENUM.COORDINADOR, ROLES_ENUM.TRANSPORTE,ROLES_ENUM.ANALISTA_EXO],
    OPERACIONES_VIEWS_FULL : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_OPERACIONES],
    PICKING : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.RAUDDY,ROLES_ENUM.RUT_PICKEADOR, ROLES_ENUM.TRANSPORTE,  ROLES_ENUM.JEFE_TOC, ROLES_ENUM.JEFE_TRANSPORTE,ROLES_ENUM.JEFE_SEGURIDAD],
    PICKING_ALL : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.TRANSPORTE],
    PICKING_CASI_ALL : [ROLES_ENUM.RAUDDY],
    PICKING_RUT_PICKIEADOR : [ROLES_ENUM.RUT_PICKEADOR],
    OPL  : [ROLES_ENUM.ADMIN],
    TOC : [ROLES_ENUM.ADMIN,ROLES_ENUM.JEFE_TOC,ROLES_ENUM.TOC, ROLES_ENUM.TRANSPORTE,ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.JEFE_TRANSPORTE,ROLES_ENUM.JEFE_SEGURIDAD],
    RECEPCION : [ROLES_ENUM.ADMIN,ROLES_ENUM.PICKING,ROLES_ENUM.RUT_PICKEADOR, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.RAUDDY,ROLES_ENUM.TRANSPORTE],
    PANEL : [ROLES_ENUM.ADMIN],
    INFORMACION : [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.RAUDDY, ROLES_ENUM.TOC, ROLES_ENUM.JEFE_TOC, ROLES_ENUM.TRANSPORTE , ROLES_ENUM.JEFE_TRANSPORTE, ROLES_ENUM.SEGURIDAD,ROLES_ENUM.JEFE_SEGURIDAD],
    INGRESO_CLIENTE : [ROLES_ENUM.ADMIN,ROLES_ENUM.PICKING,ROLES_ENUM.RUT_PICKEADOR, ROLES_ENUM.PICKEADOR_TIENDA, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.TRANSPORTE],
    INGRESO_CLIENTE_FULL : [ROLES_ENUM.ADMIN,ROLES_ENUM.PICKING,ROLES_ENUM.RUT_PICKEADOR, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.TRANSPORTE],
    INFORMACION_PICKING : [ROLES_ENUM.PICKING,ROLES_ENUM.RUT_PICKEADOR,],
    ONLY_TOC : [ROLES_ENUM.TOC],
    FULL_TOC : [ROLES_ENUM.ADMIN,ROLES_ENUM.JEFE_TOC],
    ONLY_ALERTAS_TOC :[ROLES_ENUM.TRANSPORTE,ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.COORDINADOR, ROLES_ENUM.JEFE_TRANSPORTE, ROLES_ENUM.JEFE_SEGURIDAD],
    INFORMACION_ADMINISTRADOR : [ROLES_ENUM.ADMIN],
    INFORMACION_OPERACIONES : [ROLES_ENUM.JEFE_OPERACIONES, ROLES_ENUM.COORDINADOR, ROLES_ENUM.SUPERVISOR, ROLES_ENUM.RAUDDY, ROLES_ENUM.TRANSPORTE],
    INFORMACION_SEGURIDAD : [ROLES_ENUM.SEGURIDAD, ROLES_ENUM.JEFE_SEGURIDAD],
    CARGA_EXCEL: [ROLES_ENUM.ADMIN],
    EXO: [ROLES_ENUM.ADMIN, ROLES_ENUM.JEFE_TRANSPORTE,ROLES_ENUM.TRANSPORTE, ROLES_ENUM.JEFE_OPERACIONES, ROLES_ENUM.ANALISTA_EXO],
    RSV : [ROLES_ENUM.ADMIN, ROLES_ENUM.CLIENTE_RSV,ROLES_ENUM.OPERARIO_RSV, ROLES_ENUM.ADMINISTRATIVO_RSV,ROLES_ENUM.SUPERVISOR_RSV, ROLES_ENUM.JEFE_OPERACIONES,ROLES_ENUM.NROL_RSV],
    RSV_ALL : [ROLES_ENUM.ADMIN, ROLES_ENUM.SUPERVISOR_RSV,'fabian.lara@transyanez.cl'],
    RSV_PARCIAL : [],
    INVENTARIO_TI : [ROLES_ENUM.ADMIN],
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
    [ROLES_ENUM.ANALISTA_EXO]: 'exo/nivel-servicio',
    [ROLES_ENUM.CLIENTE_RSV]: '/rsv/catalogo',
    [ROLES_ENUM.ADMINISTRATIVO_RSV]: '/rsv/listar-carga',
    [ROLES_ENUM.OPERARIO_RSV]: '/rsv/catalogo',
    [ROLES_ENUM.SUPERVISOR_RSV]: '/rsv/listar-carga',
    [ROLES_ENUM.PICKEADOR_TIENDA] : '/ingreso-cliente/easy-opl',
    [ROLES_ENUM.NROL_RSV] : '/rsv/listar-carga',
    [ROLES_ENUM.SEGURIDAD] : 'informacion/timeline',
    [ROLES_ENUM.JEFE_SEGURIDAD] : 'informacion/timeline'
}