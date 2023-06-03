export class Direccion{
    calle:string;
    numero:number;
    piso:number;
    letra:string;
    codigo_postal:number;
    poblacion:string;
    provincia:string;

    constructor (a:string, b:number, c:number, d:string, e:number, f:string, g:string){
        this.calle=a;
        this.numero=b;
        this.piso=c;
        this.letra=d;
        this.codigo_postal=e;
        this.poblacion=f;
        this.provincia=g;
    }

}