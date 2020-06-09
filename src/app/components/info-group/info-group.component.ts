import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GruposService} from 'src/app/services/grupos.service';
import { Grupo } from '../../interfaces/grupo.interface';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info-group',
  templateUrl: './info-group.component.html',
  styles: [
  ]
})

export class InfoGroupComponent implements OnInit {

  index: number; // Para capturar el indice del grupo
  grupoSelecc: Grupo; // Para cargar el grupo. Se utiliza en cargaGrupo()
  componentes = [];
  cancion: string; // Prueba para video.Se utiliza en cargaGrupo()
 

  constructor(  private activatedRouted: ActivatedRoute,
                private grupoService: GruposService,
                private sanitizer: DomSanitizer,
                private router: Router
                ) {
    // Capturamos el index que mandamos por Router
    this.index = this.activatedRouted.snapshot.params.index;
   }

  ngOnInit(): void {
    this.cargaGrupo();
    this.compo2Array();
  }

  cargaGrupo() {
    this.grupoSelecc = this.grupoService.getGrupo(this.index);
    this.cancion = this.grupoSelecc.cancion;
}

  eliminarGrupo() {

  }

  compo2Array() {
    // El objeto lo pasamos a array
    this.componentes = this.grupoSelecc.componentes;
  }

  getVideoUrl( url: string ){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  back(){
    this.router.navigate(['/home']);
  }
}

