import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { HandleHttpErrorService } from 'src/app/shared/services/handle-http-error.service';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../classes/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

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

  get():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${this.baseUrl}/Estudiante`)
    .pipe(
      catchError(this.handleError.handleError<Estudiante[]>('Consulta Estudiante'))
    );
  }

  post(estudiante: Estudiante){
    return this.http.post<Estudiante>(`${this.baseUrl}/Estudiante`,estudiante)
    .pipe(
      map(resp => {
        this._refrescar$.next();
        return resp;
      }),
      catchError(error => of(error))
    );
  }
}
