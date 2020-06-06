export interface Grupo {
    nombre: string;
    info: string;
    img: string;
    logo: string;
    cancion: string;
  }

export class GrupoClass implements Grupo {
    nombre = '';
    info = '';
    img = 'src\assets\img\sin_imagen.png';
    logo = 'src\assets\img\sin_imagen.png';
    cancion = 'src\assets\img\sin_imagen.png';
}
