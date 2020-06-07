import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { Grupo } from '../../interfaces/grupo.interface';
import { Router } from '@angular/router';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  grupoData: Grupo [];
  grupoFiltro: Grupo [];
  // grupoD: Grupo [];

  constructor( private grupoService: GruposService,
               private router: Router ) { }

  ngOnInit(): void {

    this.grupoData = this.grupoService.getGrupos();

  }

  cargaInfo(index: number){
    this.router.navigate([`details/${index}`]);
  }

  buscarGrupo(e){
    console.log(e.target.value);
    console.log(e.target);
  // this.grupoFiltro = [];

  }

}
