import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { HandleHttpErrorService } from 'src/app/shared/services/handle-http-error.service';
import { environment } from 'src/environments/environment';
import { Curso } from '../classes/curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

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

  get():Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.baseUrl}/Curso`)
    .pipe(
      catchError(this.handleError.handleError<Curso[]>('Consulta Curso'))
    );
  }

  post(curso: Curso){
    return this.http.post<Curso>(`${this.baseUrl}/Curso`,curso)
    .pipe(
      map(resp => {
        this._refrescar$.next();
        return resp;
      }),
      catchError(error => of(error))
    );
  }
}
