import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/interfaces/grupo.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GruposService } from '../../services/grupos.service';

interface Artista {
  nombre: string;
  urlWiki: string;
  urlFoto: string;
}


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styles: [
  ]
})
export class AddGroupComponent implements OnInit {

  formulario: FormGroup;
  artista =    {
    nombre: '',
    urlWiki: '',
    urlFoto: '',
  };
  artistas: Artista[] = [];


  public nombreArtista: string;
  public urlWiki: string;
  public urlNombre: string;
  public nombre: string;
  nuevoGrupo: Grupo = {
    nombre: '',
    img: '',
    logo: '',
    info: '',
    cancion: '',
    componentes: [
      {
        nombre: '',
        urlWiki: '',
        urlFoto: '',
      }
    ]
  };

  constructor(private fb: FormBuilder,
              private servicioGrupo: GruposService) {

    this.crearFormulario();

  }

  ngOnInit(): void {

  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: [''],
      info: [''],
      img: [''],
      logo: [''],
      cancion: [''],
      nombreArtista: [''],
      urlWiki: [''],
      urlFoto: [''],
    });
  }

  addGrupo(){
    this.nuevoGrupo.nombre = this.formulario.value.nombre;
    this.nuevoGrupo.info = this.formulario.value.info;
    this.nuevoGrupo.logo = this.formulario.value.logo;
    this.nuevoGrupo.cancion = this.formulario.value.cancion;
    this.nuevoGrupo.img = this.formulario.value.img;
    this.nuevoGrupo.componentes = this.artistas;

    // TODO añadir grupo y Validaciones
  }

  limpiarValores() {
    this.formulario.setValue({
      nombreArtista: '',
      urlFoto: '',
      urlWiki: '',
    });
  }

  addArtista(){
    const artista: Artista = {
      nombre: this.formulario.value.nombreArtista,
      urlFoto: this.formulario.value.urlFoto,
      urlWiki: this.formulario.value.urlWiki,
    };
    this.artistas.push(artista);
    this.limpiarValores();

    // TODO validaciones
  }

  delArtista(i: number){
    this.artistas.splice(i, 1);
  }

}
