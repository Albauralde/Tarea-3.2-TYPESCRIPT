import {persona} from './Persona' ;
import {Direccion} from './Direccion';
import {Telefono} from './Telefono';
import {Mail} from './Mail';

var Persona1 = new persona('Maria', 'García', 19, '13868160H', '12/6/2003', 'Verde', 'Mujer',[], [], [], 8)
Persona1.mostrarDatos()
var Persona2 = new persona('Juan', 'García', 19, '13868161H', '12/6/2003', 'Azul', 'Hombre',[], [], [], 10)
Persona2.mostrarDatos()
var Persona3 = new persona('Lucía', 'Pérez', 23, '13868161H', '12/6/1999', 'Amarillo', 'Mujer',[], [], [], 10)
Persona3.mostrarDatos()

Persona1.cambiarTelefono('13868160J', 'Móvil', 666000999)
Persona2.cambiarMail('13868161H', 'gmail', 'juangarcia@gmail.com')
Persona2.cambiarDireccion('13868161H', 'C/Gongora', 7, 3, 'B', 28050, 'Madrid', 'Madrid')
Persona2.cambiarTelefono('13868161H','Móvil', 666777888)


Persona2.mostrarDatos()