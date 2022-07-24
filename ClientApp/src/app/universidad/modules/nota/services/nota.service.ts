import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { HandleHttpErrorService } from 'src/app/shared/services/handle-http-error.service';
import { environment } from 'src/environments/environment';
import { Nota } from '../classes/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  baseUrl: string;
  private _refrescar$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    private handleError: HandleHttpErrorService
  ) {
    this.baseUrl = environment.baseUrl;
  }

  get refrescar$(){
    return this._refrescar$;
  }

  get():Observable<Nota[]>{
    return this.http.get<Nota[]>(`${this.baseUrl}/Nota`)
    .pipe(
      catchError(this.handleError.handleError<Nota[]>('Consulta Nota'))
    );
  }

  getNotaXIdEstudiante(IdEstudiante:string):Observable<Nota[]>{
    return this.http.get<Nota[]>(`${this.baseUrl}/Nota/IdEstudiante/${IdEstudiante}`)
    .pipe(
      catchError(this.handleError.handleError<Nota[]>('Consultar cursos de estudiantes'))
    );
  }

  getNotaXIdCurso(IdCurso:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(`${this.baseUrl}/Nota/IdCurso/${IdCurso}`)
    .pipe(
      catchError(this.handleError.handleError<Nota[]>('Consultar estudiantes en curso'))
    );
  }

  post(nota: Nota){
    return this.http.post<Nota>(`${this.baseUrl}/Nota`,nota)
    .pipe(
      map(resp => {
        this._refrescar$.next();
        return resp;
      }),
      catchError(error => of(error))
    );
  }

  put(nota: Nota){
    return this.http.put<Nota>(`${this.baseUrl}/Nota`,nota)
    .pipe(
      map(resp => {
        this._refrescar$.next();
        return resp;
      }),
      catchError(error => of(error))
    );
  }
}
