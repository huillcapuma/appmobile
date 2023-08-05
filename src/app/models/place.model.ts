export interface Place {
    id?: string;
    name: string;
    responsable: string;
    descripcion: string;
    fechalimite?: Date | null;
    image: string | null;
  }