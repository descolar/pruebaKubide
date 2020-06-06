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

  index: number;
  grupoSelecc: Grupo[];

  constructor(  private activatedRouted: ActivatedRoute,
                private grupoService: GruposService
                ) {

    this.index = this.activatedRouted.snapshot.params.index;
    console.log(this.index);
   }

  ngOnInit(): void {
  this.cargaGrupo();
  }
cargaGrupo(){
  this.grupoService.getGrupo(this.index);
}

}
