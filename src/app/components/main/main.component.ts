import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { Grupo } from '../../interfaces/grupo.interface';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  grupoData: Grupo [];
  grupoFiltro: Grupo [];
  filtrar: boolean;
  formulario: FormGroup;
  buscar =    {
    txtBuscar: ''
  };

  constructor( private grupoService: GruposService,
               private router: Router,
               private fb: FormBuilder
               ) {}

  ngOnInit(): void {
    this.grupoData = this.grupoService.getGrupos();
    this.crearFormulario();
  }

  cargaInfo(index: number) {
    this.router.navigate([`details/${index}`]);
  }

  buscarGrupo() {
    let text = this.formulario.value.txtBuscar;
    text = text.toLowerCase();
    if (this.filtrar){
      this.grupoData = this.grupoService.getGrupos();
      this.grupoData = this.grupoService.searchGrupo( text );
    }else{
      this.filtrar = true;
      this.grupoData = this.grupoService.searchGrupo( text );
    }
  }

  quitarFiltro() {
    this.filtrar = false;
    this.grupoData = this.grupoService.getGrupos();
    this.formulario.setValue({
      txtBuscar: ''
    });
  }

  delGroup( index: number ) {
    this.grupoService.delGrupo( index );
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      txtBuscar: [''],
    });
  }
}
