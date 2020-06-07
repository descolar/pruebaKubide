import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GruposService} from 'src/app/services/grupos.service';
import { Grupo } from '../../interfaces/grupo.interface';


@Component({
  selector: 'app-info-group',
  templateUrl: './info-group.component.html',
  styles: [
  ]
})

export class InfoGroupComponent implements OnInit {

  index: number; // Para capturar el indice del grupo
  grupoSelecc: Grupo; // Para cargar el grupo. Se utiliza en cargaGrupo()
  d: Grupo[];
  cancion: string; // Prueba para video.Se utiliza en cargaGrupo()

  constructor(  private activatedRouted: ActivatedRoute,
                private grupoService: GruposService
                ) {

    // Capturamos el index que mandamos por Router
    this.index = this.activatedRouted.snapshot.params.index;

   }

  ngOnInit(): void {
  this.cargaGrupo();
  }

cargaGrupo(){

  // Cargamos el grupo en la variable para utilizarlo en HTML
  this.grupoSelecc = this.grupoService.getGrupo(this.index);
  this.cancion = this.grupoSelecc.cancion;
  console.log(this.cancion);


}
eliminarGrupo(){
console.log(this.index);
  this.grupoService.delGrupo(this.index);

}

}
