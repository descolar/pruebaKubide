import { Injectable } from '@angular/core';
import { Grupo } from '../interfaces/grupo.interface';
import { rockData } from '../../assets/data/rock-data';
import { compileNgModule } from '@angular/compiler';

@Injectable()
export class GruposService {

  data: Grupo[] = rockData;

  constructor() {
  }

  getGrupos(){
    return this.data;
  }

  getGrupo(index: number){
    return this.data[index];
  }

  addGrupo(grupo: Grupo){
    this.data.push(grupo);
  }

  delGrupo(index: number){
    this.data.splice(index, 1);
    }

}
