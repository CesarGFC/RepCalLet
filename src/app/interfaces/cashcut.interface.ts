export interface ICashcut{
    caja_inicial:number;
    caja_final:number;
    deducciones:number;
    fecha:string;
    terminado:boolean;
    usuario_id:string | any;
    comentarios:string;
    corte_caja_id:string;
    [key:string]:any
}