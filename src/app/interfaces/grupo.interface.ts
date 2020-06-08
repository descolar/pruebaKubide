interface Artista {
  nombre: string;
  urlWiki?: string;
  urlFoto?: string;
}
export interface Grupo {
  nombre: string;
  info: string;
  img: string;
  logo: string;
  cancion: string;
  componentes?: Artista[];
}



