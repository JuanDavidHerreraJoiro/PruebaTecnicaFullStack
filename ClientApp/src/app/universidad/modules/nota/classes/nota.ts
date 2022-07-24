import { Curso } from "../../curso/classes/curso";
import { Estudiante } from "../../estudiante/classes/estudiante";

export class Nota {
    id?:number;
    nota1?:number;
    nota2?:number;
    nota3?:number;
    notaFinal?:number;
    aprobado?:string;
    estudiante?:Estudiante;
    curso?:Curso;
    estudianteId?:number;
    cursoId?:number; 
}
