import { ComponentType } from '@angular/cdk/portal';

export class Boton {
    mensaje: string = '';
    icono: string = '';
    color?: string = '';
    ruta?: string;
    componente?: ComponentType<any>;
    id?: number | string;
    objeto?: any;
}