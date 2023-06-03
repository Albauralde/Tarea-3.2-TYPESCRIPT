import {Direccion} from './Direccion';
import {Telefono} from './Telefono';
import {Mail} from './Mail';

export class persona{
    Nombre:string;
    Apellidos:string;
    Edad:number;
    DNI:string|number;
    Cumpleaños:string;
    Color_favorito:string;
    Sexo:string;
    Direcciones:Direccion[];
    Mails:Mail[];
    Telefonos:Telefono[];
    Notas:number;

    constructor(a:string, b:string, c:number, d:string|number, e:string, f:string, 
                g:string, h:Direccion[], i:Mail[], j:Telefono[], k:number)
            {
            this.Nombre=a;
            this.Apellidos=b;
            this.Edad=c;
            this.DNI=d;
            this.Cumpleaños=e;
            this.Color_favorito=f;
            this.Sexo=g;
            this.Direcciones= [];
            this.Mails=[];
            this.Telefonos= [];
            this.Notas=k
            }

    mostrarDatos():void{
        console.log('Nombre:', this.Nombre, '\n Apellido:', this.Apellidos, '\n Edad:', this.Edad, 
                    '\n DNI', this.DNI, '\n Cumpleaños:', this.Cumpleaños, '\n Color favorito:', this.Color_favorito, 
                    '\n Sexo:', this.Sexo, '\n Direción', this.Direcciones, '\n Mail', this.Mails, '\n Teléfono',
                    this.Telefonos, '\n Notas', this.Notas, '\n', '\n')
    };

    public cambiarDireccion( x:string|number, a, b, c, d, e, f, g) {
        if(this.DNI==x){
                        var direc=new Direccion(a,b,c,d,e,f,g);
                        this.Direcciones=[direc]; 
                        console.log('La dirección de', this.Nombre, this.Apellidos, 'se ha cambiado correctamente:\n', 'La nueva dirección es:\n ', 
                        this.Direcciones, '\n  \n ');} 
        else{
            console.log('El DNI no coincide con el de', this.Nombre, this.Apellidos, '. No se ha podido realizar el cambio \n \n ')
        }
    }

    public cambiarMail( x:string|number, a:string, b:string) {
        if(this.DNI==x){
                        var email=new Mail(a,b);
                        this.Mails= [email]; 
                        console.log("El mail de ", this.Nombre, this.Apellidos, "se ha cambiado correctamente:\n", "El nuevo mail es:\n", 
                        this.Mails, '\n  \n ');} 
        else{
            console.log("El DNI no coincide con el de", this.Nombre, this.Apellidos, '. No se ha podido realizar el cambio \n \n ') 
        }
    }

    public cambiarTelefono( x:string|number, a, b) {
        if(this.DNI==x){
                        var mobile= new Telefono(a,b)
                        this.Telefonos=[mobile]; 
                        console.log('El teléfono de', this.Nombre, this.Apellidos, 'se ha cambiado correctamente:\n', 'El nuevo teléfono es:\n ', 
                        this.Telefonos, '\n  \n ')} 
        else{
            console.log("El DNI no coincide con el de", this.Nombre, this.Apellidos, '. No se ha podido realizar el cambio \n \n ')
        }
    }
    
}
