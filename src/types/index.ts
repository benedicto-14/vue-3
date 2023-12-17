export interface IPersona{
    name:string,
    surname:string,
    rol:string,
    matricula:number,
    materias:Array<string>,
    doc:boolean
}

export interface IRickMorty {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
  export interface Origin {
    name: string;
    url: string;
  }