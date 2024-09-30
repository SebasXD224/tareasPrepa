import { Component } from '@angular/core';
import { platanos } from './catalogo';

@Component({
  selector: 'app-evidencia-e2',
  templateUrl: './evidencia-e2.component.html',
  styleUrl: './evidencia-e2.component.css'
})
export class EvidenciaE2Component {
  catalogo:platanos[] = [
    {titular: "Bananos Maduros y Sabrosos", imagen: "assets_evidenciaE2/imagenes/platano_negro.jpeg"},
    {titular: "Bananos Inmaduros", imagen: "assets_evidenciaE2/imagenes/platano_verde.webp"},
    {titular: "Bananos Amarillos y Suculentos", imagen: "assets_evidenciaE2/imagenes/platano_amarillo.jpeg"},
    {titular: "Bananos Loquitos", imagen: "assets_evidenciaE2/imagenes/platano_mixto.webp"}
  ]
}
