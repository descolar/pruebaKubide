import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/interfaces/grupo.interface';
import { FormGroup, FormBuilder, RequiredValidator } from '@angular/forms';
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
    console.log('artistas' , this.artistas);
    this.nuevoGrupo.nombre = this.formulario.value.nombre;
    this.nuevoGrupo.info = this.formulario.value.info;
    this.nuevoGrupo.logo = 'assets/img/sin_imagen.png';
    this.nuevoGrupo.cancion = this.formulario.value.cancion;
    this.nuevoGrupo.img = 'assets/img/sin_imagen.png';
    this.nuevoGrupo.componentes.splice(0.1);
    // tslint:disable-next-line:prefer-for-of
    for ( let a = 0; a < this.artistas.length; a++){
      this.nuevoGrupo.componentes.push(this.artistas[a]);
    }
    // TODO Datos Imagen
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
  }

  delArtista(i: number){
    this.artistas.splice(i, 1);
  }

  seleccionImagen( archivo: any){

    const reader = new FileReader() ;

    reader.onload = ( archivo: any ) => {
      const url = archivo.target.result;
      console.log('redaer' , reader);
      };

    const or = reader.readAsDataURL( archivo.target.files[0] );
    console.log(or);
  }

  seleccionLogo(path){
    // TODO
  }

  acortarCadena(cadena: string){
    return cadena.substr(0, 10);
  }
}
