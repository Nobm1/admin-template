import { ROLES_ENUM } from 'src/app/models/enum/roles.enum';
import { ROLES_PERMITIDOS } from 'src/app/rolesPermitidos.const'

interface INavDataBar {
  name?: string;
  url?: string | any[];
  href?: string;
  icon?: string;
  iconComponent?: any;
  title?: boolean;
  children?: INavDataBar[];
  variant?: string;
  divider?: boolean;
  class?: string;
  roles?: string [];
}

/// Este es el importante
export const navItems: INavDataBar[] = [
  // {
  //   name: 'Mi Cuenta',
  //   url: '/mi-cuenta/settings',
  //   iconComponent: { name: 'cil-user' },
  //   roles : ROLES_PERMITIDOS.DASHBOARD,
  //   // children: [
  //   //   {
  //   //     name: 'Reportes',
  //   //     url: '/dashboard',
  //   //     roles : ['5','13','14']
  //   //   },
  //   //   {
  //   //     name: 'Hoy',
  //   //     url: '/dashboard/hoy',
  //   //     roles : ['5','13','14']
  //   //   },
  //   // ]
  // },
  {
    name: 'Area TI',
    url : '/areati',
    icon: "viking",
    roles : ROLES_PERMITIDOS.PANEL,
    children : [
      {
        name: 'Lista de funciones',
        url: '/areati/funciones'
      },
      // {
      //   name: 'Agregar funcion',
      //   url: '/areati/agregar-funcion'
      // },
    ]
  },
  {
    name: 'Logistica Inversa',
    url : '/log-inversa',
    iconComponent: { name: 'cil-swap-horizontal' },
    roles : ROLES_PERMITIDOS.PANEL,
    children : [
      // {
      //   name: 'Edicion Pendientes',
      //   url: '/log-inversa/edicion-pendiente'
      // },
      {
        name: 'Recepción',
        url: '/log-inversa/recepcion'
      },
      {
        name:'Bodega Virtual',
        url:'/log-inversa/bodega-virtual'
      },
    ]
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    roles : ROLES_PERMITIDOS.DASHBOARD,
    children: [
      {
        name: 'Reportes',
        url: '/dashboard',
        roles : ['5','13','14']
      },
      {
        name: 'Nivel Servicio',
        url: '/dashboard/ns-verificados'
       },
      {
        name: 'Hoy',
        url: '/dashboard/hoy',
        roles : ['5','13','14']
      },
      
    ]
  },
  {
    name: 'Transporte',
    url: '/transporte',
    iconComponent: { name: 'cil-car-alt' },
    roles : ROLES_PERMITIDOS.TRANSPORTE,
    children: [
      {
        name: 'Reportes',
        url : '/transporte/reportes'
      },
    ]
  },
  {
    name: 'EXO',
    url: '/exo',
    iconComponent: { name: 'cil-bar-chart' },
    roles : ROLES_PERMITIDOS.EXO,
    children: [
      {
        name: 'Nivel Servicio',
        url : '/exo/nivel-servicio'
      }
    ]
  },
  // FULL PANTALLA
  {
    name: 'Operaciones',
    url: '/operaciones',
    iconComponent: { name: 'cil-clipboard' },
    roles : ROLES_PERMITIDOS.OPERACIONES_VIEWS_FULL,
    children: [
      {
        name: 'Pendientes',
        url: '/operaciones/pendientes'
      },
      {
        name: 'Estados',
        url: '/operaciones/estados'
      },
      {
        name: 'Productos sin clasificación',
        url: '/operaciones/productos-sin-clasificacion'
      },
      {
        name: 'Edicion Pendientes',
        url: '/operaciones/edicion-pendientes'
      },
      {
        name: 'Diferencia Fechas Easy',
        url: '/operaciones/dif-fechas-easy'
      },
      {
        name: 'Productos Ingresados',
        url: '/operaciones/productos-ingresados-easy'
      },
    ]
  },
  {
    name: 'Operaciones',
    url: '/operaciones',
    iconComponent: { name: 'cil-clipboard' },
    roles : ROLES_PERMITIDOS.OPERACIONES_VIEWS,
    children: [
      {
        name: 'Pendientes',
        url: '/operaciones/pendientes'
      },
      {
        name: 'Estados',
        url: '/operaciones/estados'
      },
      {
        name: 'Productos sin clasificación',
        url: '/operaciones/productos-sin-clasificacion'
      }
    ]
  },
  //// operaciones COORDINADORES
  {
    name: 'Operaciones',
    url: '/operaciones',
    iconComponent: { name: 'cil-clipboard' },
    roles : [ROLES_ENUM.COORDINADOR],
    children: [
      {
        name: 'Pendientes',
        url: '/operaciones/pendientes'
      },
      {
        name: 'Estados',
        url: '/operaciones/estados'
      },
      {
        name: 'Productos sin clasificación',
        url: '/operaciones/productos-sin-clasificacion'
      },
      {
        name: 'Diferencia Fechas Easy',
        url: '/operaciones/dif-fechas-easy'
      },
      {
        name: 'Productos Ingresados',
        url: '/operaciones/productos-ingresados-easy'
      },
    ]
  },
  {
    name: 'Operaciones',
    url: '/operaciones',
    iconComponent: { name: 'cil-clipboard' },
    roles : [ROLES_ENUM.PICKEADOR_TIENDA],
    children: [
      {
        name: 'Estados',
        url: '/operaciones/estados'
      }
    ]
  },
  {
    name: 'Operaciones',
    url: '/operaciones',
    iconComponent: { name: 'cil-clipboard' },
    roles : [ROLES_ENUM.TOC,ROLES_ENUM.JEFE_TOC],
    children: [
      {
        name: 'Pendientes',
        url: '/operaciones/pendientes'
      },
      {
        name: 'Diferencia Fechas Easy',
        url: '/operaciones/dif-fechas-easy'
      },
      {
        name: 'Productos Ingresados',
        url: '/operaciones/productos-ingresados-easy'
      },
    ]
  }
  ,
  { // Operaciones RAUDDY
    name: 'Operaciones',
    url: '/operaciones',
    iconComponent: { name: 'cil-clipboard' },
    roles : [ROLES_ENUM.RAUDDY,ROLES_ENUM.JEFE_TRANSPORTE],
    children: [
      {
        name: 'Pendientes',
        url: '/operaciones/pendientes'
      },
      {
        name: 'Estados',
        url: '/operaciones/estados'
      },
    ]
  },
  ///Pantalla Full
  {
    name: 'Rutas',
    url: '/picking',
    iconComponent: { name: 'cil-truck' },
    // roles : ROLES_PERMITIDOS.PICKING_ALL,
    roles : ROLES_PERMITIDOS.PICKING_ALL,
    children: [
      {
        name: 'Crear Ruta',
        url: '/picking/ruta-manual'
      },
      {
        name: 'Rutas Activas',
        url: '/picking/rutas-activas'
      },
      {
        name : 'Quadminds',
        url: '/picking/quadminds'
      },
      {
        name : 'Rutas Predictivas',
        url : '/picking/prearmado-ruta'
      },
      {
        name : 'Despacho Ruta',
        url : '/picking/buscar-ruta'
      },
      {
        name : 'Resumen Rutas',
        url : '/picking/resumen-rutas'
      }
    ]
  },
// Pantalla casi todas
  {
    name: 'Rutas',
    url: '/picking',
    iconComponent: { name: 'cil-truck' },
    roles : ROLES_PERMITIDOS.PICKING_CASI_ALL,
    children: [
      {
        name: 'Crear Ruta',
        url: '/picking/ruta-manual'
      },
      {
        name: 'Rutas Activas',
        url: '/picking/rutas-activas'
      },
      {
        name : 'Quadminds',
        url: '/picking/quadminds'
      },
      {
        name : 'Rutas Predictivas',
        url : '/picking/prearmado-ruta'
      },
      {
        name : 'Despacho Ruta',
        url : '/picking/buscar-ruta'
      }
    ]
  },


  {
    // Pantalla completa TOC
    name: 'TOC',
    url: '/toc',
    iconComponent: { name: 'cil-chat-bubble' },
    roles : ROLES_PERMITIDOS.FULL_TOC,
    children: [
      {
        name: 'Bitacora',
        url: '/toc/bitacora'
      },
      {
        name: 'Alertas Vigentes',
        url: '/toc/alertas-vigentes'
      },
      {
        name: 'NS TOC',
        url: '/toc/jefatura'
      },
      {
        name: 'Reporte entregas Diarias',
        url: '/toc/reporte-entrega.diaria'
      },
      {
        name: 'Reporte Telefonos',
        url: '/toc/reporte-telefono'
      }
    ]
  },
  {
    // Pantalla muestra para solo TOC
    name: 'TOC',
    url: '/toc',
    iconComponent: { name: 'cil-chat-bubble' },
    roles : [ROLES_ENUM.TOC],
    children: [
      {
        name: 'Bitacora',
        url: '/toc/bitacora'
      },
      {
        name: 'Alertas Vigentes',
        url: '/toc/alertas-vigentes'
      },
      {
        name: 'Reporte entregas Diarias',
        url: '/toc/reporte-entrega.diaria'
      }
      
    ]
  },
  {
    // Pantalla TOC solo Alertas
    name: 'TOC',
    url: '/toc',
    iconComponent: { name: 'cil-chat-bubble' },
    roles : ROLES_PERMITIDOS.ONLY_ALERTAS_TOC,
    children: [
      {
        name: 'Alertas Vigentes',
        url: '/toc/alertas-vigentes'
      }
    ]
  },
  {
    // Pantalla muestra para ruteador_pickeador
    name: 'Rutas',
    url: '/picking',
    iconComponent: { name: 'cil-truck' },
    roles : ROLES_PERMITIDOS.PICKING_RUT_PICKIEADOR,
    children: [
      {
        name: 'Crear Ruta',
        url: '/picking/ruta-manual'
      },
      {
        name: 'Rutas Activas',
        url: '/picking/rutas-activas'
      },
      {
        name : 'Despacho Ruta',
        url : '/picking/buscar-ruta'
      }
    ]
  },
  {
    // Pantalla muestra para JEFE TOC
    name: 'Rutas',
    url: '/picking',
    iconComponent: { name: 'cil-truck' },
    roles : [ROLES_ENUM.JEFE_TOC],
    children: [
      {
        name: 'Crear Ruta',
        url: '/picking/ruta-manual'
      },
      {
        name: 'Rutas Activas',
        url: '/picking/rutas-activas'
      },
      {
        name : 'Despacho Ruta',
        url : '/picking/buscar-ruta'
      }
    ]
  },
  {
    // Pantalla muestra para Jefe transporte
    name: 'Rutas',
    url: '/picking',
    iconComponent: { name: 'cil-truck' },
    roles : [ROLES_ENUM.JEFE_TRANSPORTE,ROLES_ENUM.JEFE_SEGURIDAD],
    children: [
      {
        name: 'Rutas Activas',
        url: '/picking/rutas-activas'
      }
    ]
  },
  { /// Pantalla Informacion Para Jefe transporte
    name: 'Información',
    url: '/informacion',
    iconComponent : {name : 'cil-magnifying-glass'},
    roles : [ROLES_ENUM.JEFE_TRANSPORTE],
    children: [
      {
        name: "Tracking Producto",
        url : '/informacion/tracking-producto'
      }
    ]
  },
  { /// Pantalla Informacion Para ADMINISTRADORES
    name: 'Información',
    url: '/informacion',
    iconComponent : {name : 'cil-magnifying-glass'},
    roles : ROLES_PERMITIDOS.INFORMACION_ADMINISTRADOR,
    children: [
      {
        name: "Estado",
        url : '/informacion/estado'
      },
      {
        name: "Buscar SKU",
        url : '/informacion/buscar-sku'
      },
      {
        name: "Tracking Producto",
        url : '/informacion/tracking-producto'
      },
      {
        name: "Ingreso Producto",
        url : '/informacion/ingreso-producto'
      },
      {
        name: "Historial Producto",
        url: '/informacion/timeline',
      },
      {
        name: "Detalle Por Patente/Driver",
        url:  '/informacion/detalle-por-patente'
      },
      {
        name: "Modalidades de Operaciones",
        url:  '/informacion/modalidades-de-operaciones'
      },
      {
        name: "Usuario Transporte",
        url:  '/informacion/usuario-transporte'
      },
      {
        name: "Seguimiento Ruta",
        url:  '/informacion/seguimiento-ruta'
      },
      {
        name: "Peso Volumetrico",
        url:  '/informacion/peso-volumetrico'
      },
      
    ]
  },
  { /// Pantalla Informacion Para SEGURIDAD
    name: 'Información',
    url: '/informacion',
    iconComponent : {name : 'cil-magnifying-glass'},
    roles : ROLES_PERMITIDOS.INFORMACION_SEGURIDAD,
    children: [
      {
        name: "Tracking Producto",
        url : '/informacion/tracking-producto'
      },
      {
        name: "Historial Producto",
        url: '/informacion/timeline',
      }
    ]
  },
  { /// Pantalla Informacion Para OPERACIONES
    name: 'Información',
    url: '/informacion',
    iconComponent : {name : 'cil-magnifying-glass'},
    roles : ROLES_PERMITIDOS.INFORMACION_OPERACIONES,
    children: [
      {
        name: "Estado",
        url : '/informacion/estado'
      },
      {
        name: "Buscar SKU",
        url : '/informacion/buscar-sku'
      },
      {
        name: "Tracking Producto",
        url : '/informacion/tracking-producto'
      },
      {
        name: "Ingreso Producto",
        url : '/informacion/ingreso-producto'
      }
    ]
  },
  { /// Pantalla de info para Mercadolibre
    name: 'MercadoLibre',
    url: '/mercadolibre',
    iconComponent : {name : 'cil-handshake'},
    roles :  ROLES_PERMITIDOS.PANEL,
    children: [
      {
        name: "Informacion",
        url : '/mercadolibre/info-mercado-libre'
      },
      {
        name: "Citaciones",
        url:  '/mercadolibre/citaciones'
      }
    ]
  },
  { /// Pantalla Informacion Para TOC
    name: 'Información',
    url: '/informacion',
    iconComponent : {name : 'cil-magnifying-glass'},
    roles :[ROLES_ENUM.TOC, ROLES_ENUM.JEFE_TOC],
    children: [
      {
        name: "Estado",
        url : '/informacion/estado'
      },
      {
        name: "Tracking Producto",
        url : '/informacion/tracking-producto'
      }
    ]
  },
  { /// Pantalla Informacion Para PISTOLEADORES
    name: 'Información',
    url: '/info',
    iconComponent : {name : 'cil-magnifying-glass'},
    roles : ROLES_PERMITIDOS.INFORMACION_PICKING,
    children: [
      {
        name: "Estado",
        url : '/info/estado'
      },
      {
        name: "Buscar SKU",
        url : '/info/buscar-sku'
      },
    ]
  },
  {
    name: 'Ingreso cliente',
    url: '/ingreso-cliente',
    iconComponent : {name : 'cil-building'},
    roles : ROLES_PERMITIDOS.INGRESO_CLIENTE_FULL,
    children: [
      {
        name: "Anden Easy",
        url : '/ingreso-cliente/easy-cd'
      },
      {
        name: "Easy Tienda",
        url : '/ingreso-cliente/easy-opl'
      }
    ]
  },
  {
    name: 'Ingreso cliente',
    url: '/ingreso-cliente',
    iconComponent : {name : 'cil-building'},
    roles : [ROLES_ENUM.PICKEADOR_TIENDA, ROLES_ENUM.RAUDDY],
    children: [
      {
        name: "Easy Tienda",
        url : '/ingreso-cliente/easy-opl'
      }
    ]
  },
  {
    name: 'Recepción',
    url : '/recepcion',
    iconComponent: { name: 'cil-home' },
    roles : ROLES_PERMITIDOS.RECEPCION,
    children : [
      {
        name: 'Easy OPL',
        url: '/recepcion/easy-opl'
      },
      {
        name: 'Easy CD',
        url: '/recepcion/easy-cd'
      },
      {
        name: 'Electrolux',
        url: '/recepcion/electrolux'
      },
      // {
      //   name: 'Sportex',
      //   url: '/recepcion/sportex'
      // },
      {
        name: 'Producto Sin Recepcionar',
        url: '/recepcion/productoSinRecepcion'
      }
    ]
  },
  /// Vistas RSV
  {
    name: 'RSV',
    url : '/rsv',
    roles : ROLES_PERMITIDOS.RSV_ALL,
    iconComponent: { name: 'cil-window' },
    children : [
     
     {
       name: 'Catálogo',
       url: '/rsv/catalogo'
     },
     {
      name: 'Lista inventarios',
      url: '/rsv/inventario-sucursal'
     },
     {
      name: 'Crear Carga',
      url: '/rsv/crear-carga'
     },
     {
      name: 'Arribo de Cargas',
      url: '/rsv/listar-carga'
     },
     {
      name: 'Ventas',
      url: '/rsv/ventas'
     },
      {
      name: 'Armar venta',
      url: '/rsv/armar-venta'
     },
     {
      name: 'Lista de ventas',
      url: '/rsv/lista-venta'
     },
     {
      name: 'Reporte etiquetas',
      url: '/rsv/reporte-etiquetas'
     },
     {
      name: 'Asignar Ubicación',
      url: '/rsv/filtro-ubicacion'
     },
     {
      name: 'Lista de Paquetes Abiertos',
      url: '/rsv/listar-paquetes'
     },
     {
      name: 'Mantenedor',
      url: '/rsv/mantenedor'
     },
     {
      name: 'Racks estructura',
      url: '/rsv/ubicacion-producto'
     },
    
    
    //  {
    //   name: 'Unidades Sin Etiqueta',
    //   url: '/rsv/unidad-sin-etiqueta'
    //  }
    //  {
    //   name: 'Agregar Producto',
    //   url: '/rsv/agregar-producto'
    // },
   ]
 },
 {
  name: 'RSV',
  url : '/rsv',
  roles :[ROLES_ENUM.ADMINISTRATIVO_RSV],
  iconComponent: { name: 'cil-window' },
  children : [
   {
     name: 'Catálogo',
     url: '/rsv/catalogo'
   },
   {
    name: 'Lista inventarios',
    url: '/rsv/inventario-sucursal'
   },
   {
    name: 'Crear Carga',
    url: '/rsv/crear-carga'
   },
   {
    name: 'Arribo de Cargas',
    url: '/rsv/listar-carga'
   },
   {
    name: 'Ventas',
    url: '/rsv/ventas'
   },
   {
    name: 'Armar venta',
    url: '/rsv/armar-venta'
   },
   {
    name: 'Lista de ventas',
    url: '/rsv/lista-venta'
   },
   {
    name: 'Reporte etiquetas',
    url: '/rsv/reporte-etiquetas'
   },
   {
    name: 'Asignar Ubicación',
    url: '/rsv/filtro-ubicacion'
   },
   {
    name: 'Racks estructura',
    url: '/rsv/ubicacion-producto'
   },
   {
    name: 'Lista de Paquetes Abiertos',
    url: '/rsv/listar-paquetes'
   }
 ]
},
//NUEVO ROL (Yerko)
{
  name: 'RSV',
  url : '/rsv',
  roles :[ROLES_ENUM.NROL_RSV],
  iconComponent: { name: 'cil-window' },
  children : [
   {
     name: 'Catálogo',
     url: '/rsv/catalogo'
   },
   {
    name: 'Lista inventarios',
    url: '/rsv/inventario-sucursal'
   },
   {
    name: 'Arribo de Cargas',
    url: '/rsv/listar-carga'
   },
   {
    name: 'Ventas',
    url: '/rsv/ventas'
   },
   {
    name: 'Armar venta',
    url: '/rsv/armar-venta'
   },
   {
    name: 'Lista de ventas',
    url: '/rsv/lista-venta'
   },
   {
    name: 'Reporte etiquetas',
    url: '/rsv/reporte-etiquetas'
   },
   {
    name: 'Asignar Ubicación',
    url: '/rsv/filtro-ubicacion'
   },
   {
    name: 'Racks estructura',
    url: '/rsv/ubicacion-producto'
   },
   {
    name: 'Lista de Paquetes Abiertos',
    url: '/rsv/listar-paquetes'
   }
 ]
},
 {
  name: 'RSV',
  url : '/rsv',
  roles : [ROLES_ENUM.CLIENTE_RSV],
  iconComponent: { name: 'cil-window' },
  children : [
   {
     name: 'Catálogo',
     url: '/rsv/catalogo'
   },
   {
    name: 'Lista inventarios',
    url: '/rsv/inventario-sucursal'
   },
   {
    name: 'Arribo de Cargas',
    url: '/rsv/listar-carga'
   },
   {
    name: 'Lista de ventas',
    url: '/rsv/lista-venta'
   },
 ]
},
{
  name: 'RSV',
  url : '/rsv',
  roles : [ROLES_ENUM.OPERARIO_RSV],
  iconComponent: { name: 'cil-window' },
  children : [
   {
     name: 'Catálogo',
     url: '/rsv/catalogo'
   },
   {
    name: 'Lista inventarios',
    url: '/rsv/inventario-sucursal'
   },
   {
    name: 'Lista de ventas',
    url: '/rsv/lista-venta'
   },
   {
    name: 'Reporte etiquetas',
    url: '/rsv/reporte-etiquetas'
   },
   {
    name: 'Asignar Ubicación',
    url: '/rsv/filtro-ubicacion'
   },
   {
    name: 'Racks estructura',
    url: '/rsv/ubicacion-producto'
   },
  
 ]
},
  {
    name: 'Panel',
    url : '/panel',
    iconComponent: { name: 'cil-contact' },
    roles : ROLES_PERMITIDOS.PANEL,
    children : [
      {
        name: 'Registro usuarios',
        url: '/panel/registro-usuario'
      },
    ]
  },
  
  {
    name: 'Inventario TI',
    url : '/inventario-ti',
    iconComponent: { name: 'cilDevices' },
    roles : ROLES_PERMITIDOS.INVENTARIO_TI,
    children : [
      {
        name: 'Mantenedores',
        url: '/inventario-ti/mantenedores'
      },
      {
        name: 'Asignación de Equipos',
        url: '/inventario-ti/asignacion'
      }
    ]
  }
  // {
  //   name: 'Carga Excel',
  //   url : '/carga',
  //   iconComponent: { name: 'cil-inbox' },
  //   roles : ROLES_PERMITIDOS.CARGA_EXCEL,
  //   children : [
  //     {
  //       name: 'easy cd',
  //       url: '/carga/easy-cd'
  //     },
  //   ]
  // }
];