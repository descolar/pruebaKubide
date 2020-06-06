import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { Grupo, GrupoClass } from '../../interfaces/grupo.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor( private _grupoService:GruposService ) { }

  ngOnInit(): void {

  }

}
