export interface ProductoPicking {
    Nombre_ruta?:         string;
    Id_ruta?:             string;
    Codigo_cliente:       string;
    Nombre:               string;
    Calle:                string;
    Ciudad:               string;
    Provincia:            string;
    Latitud:              string;
    Longitud:             string;
    Telefono:             string;
    Email:                string;
    Codigo_pedido:        string;
    Fecha_pedido:         string;
    Diferencias_dias:    number;
    Operacion:            string;
    Codigo_producto:      string;
    Descripcion_producto: string;
    Cantidad_producto:    number;
    Peso:                 number;
    Volumen:              number;
    Dinero:               number;
    Duracion_min:         string;
    Ventana_horaria_1:    string;
    Ventana_horaria_2:    string;
    Notas:                string;
    Agrupador:            string;
    Email_remitentes:     string;
    Eliminar_pedido:      string;
    Vehiculo:             string;
    Habilidades:          string;
    SKU:                  string;
    // numero?:              number;
    arrayCodigo?:         string[];
    arrayDescripcion?:    string[];
    Pistoleado?:          string;
    Talla?:               string;
    Estado?:              any;
    En_ruta?:             string;
    Created_by?:          string;
    Id_tabla?:             string;
}

