"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var persona = /** @class */ (function () {
    function persona(a, b, c, d, e, f, g, h, i, j, k) {
        this.Nombre = a;
        this.Apellidos = b;
        this.Edad = c;
        this.DNI = d;
        this.Cumpleaños = e;
        this.Color_favorito = f;
        this.Sexo = g;
        this.Direcciones = [];
        this.Mails = [];
        this.Telefonos = [];
        this.Notas = k;
    }
    persona.prototype.mostrarDatos = function () {
        console.log('Nombre:', this.Nombre, '\n Apellido:', this.Apellidos, '\n Edad:', this.Edad, '\n DNI', this.DNI, '\n Cumpleaños:', this.Cumpleaños, '\n Color favorito:', this.Color_favorito, '\n Sexo:', this.Sexo, '\n Direción', this.Direcciones, '\n Mail', this.Mails, '\n Teléfono', this.Telefonos, '\n Notas', this.Notas, '\n', '\n');
    };
    ;
    persona.prototype.cambiarDireccion = function (x, a, b, c, d, e, f, g) {
        if (this.DNI == x) {
            var direc = new Direccion_1.Direccion(a, b, c, d, e, f, g);
            this.Direcciones = [direc];
            console.log('La dirección de', this.Nombre, this.Apellidos, 'se ha cambiado correctamente:\n', 'La nueva dirección es:\n ', this.Direcciones, '\n  \n ');
        }
        else {
            console.log('El DNI no coincide con el de', this.Nombre, this.Apellidos, '. No se ha podido realizar el cambio \n \n ');
        }
    };
    persona.prototype.cambiarMail = function (x, a, b) {
        if (this.DNI == x) {
            var email = new Mail_1.Mail(a, b);
            this.Mails = [email];
            console.log("El mail de ", this.Nombre, this.Apellidos, "se ha cambiado correctamente:\n", "El nuevo mail es:\n", this.Mails, '\n  \n ');
        }
        else {
            console.log("El DNI no coincide con el de", this.Nombre, this.Apellidos, '. No se ha podido realizar el cambio \n \n ');
        }
    };
    persona.prototype.cambiarTelefono = function (x, a, b) {
        if (this.DNI == x) {
            var mobile = new Telefono_1.Telefono(a, b);
            this.Telefonos = [mobile];
            console.log('El teléfono de', this.Nombre, this.Apellidos, 'se ha cambiado correctamente:\n', 'El nuevo teléfono es:\n ', this.Telefonos, '\n  \n ');
        }
        else {
            console.log("El DNI no coincide con el de", this.Nombre, this.Apellidos, '. No se ha podido realizar el cambio \n \n ');
        }
    };
    return persona;
}());
exports.persona = persona;
