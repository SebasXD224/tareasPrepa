import { Component } from '@angular/core';
import { Lenguajes } from './lenguajes';

@Component({
  selector: 'app-etapa2-dimension3',
  templateUrl: './etapa2-dimension3.component.html',
  styleUrl: './etapa2-dimension3.component.css'
})
export class Etapa2Dimension3Component {
  ListaLenguajes: Lenguajes[] = [
    {nombre: "Python", creador: "Guido Van Rossum", fecha_creacion: 1989, logo: "imagenes/python.png", documentacion: "https://docs.python.org/"},
    {nombre: "JavaScript", creador: "Brendan Eich", fecha_creacion: 1995, logo: "imagenes/JavaScript.png", documentacion: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    {nombre: "C#", creador: "Anders Hejlsberg", fecha_creacion: 2000, logo: "imagenes/cs.png", documentacion: "https://learn.microsoft.com/en-us/dotnet/csharp/"},
    {nombre: "C++", creador: "Bjarne Stroustrup", fecha_creacion: 1985, logo: "imagenes/cpp.png", documentacion: "https://en.cppreference.com/w/"}
];
}
