import { Injectable } from '@angular/core';
import { Grupo } from '../interfaces/grupo.interface';
import { rockData } from '../../assets/data/rock-data';


@Injectable()
export class GruposService {

  data: Grupo[] = rockData;
  data2: Grupo[]; // Array para el filtro

  constructor() {
  }

  getGrupos() {
    return this.data;
  }

  getGrupo(index: number) {
    return this.data[index];
  }

  addGrupo(grupo: Grupo) {
    this.data.push(grupo);
  }

  delGrupo(index: number) {
    this.data.splice(index, 1);
  }

  searchGrupo(texto: string) {

    return this.data.filter( ( dato ) =>
      dato.nombre.toLowerCase() === texto.toLowerCase()
    );

  }

}
