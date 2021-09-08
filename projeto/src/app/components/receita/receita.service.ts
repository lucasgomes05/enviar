import { Receita } from './receita.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = "http://localhost:3001/receita"


  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-sucess']
    })
  }

  
  create(receita: Receita): Observable<Receita>{
    return this.http.post<Receita>(this.baseUrl, receita);
  }

  read(): Observable<Receita[]>{
    return this.http.get<Receita[]>(this.baseUrl);
  }

  readById(id: string): Observable<Receita> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Receita>(url);
}

update(receita: Receita): Observable<Receita>{
  const url = `${this.baseUrl}/${receita.id}`;
  return this.http.put<Receita>(url, receita);
}

delete(id: string): Observable<Receita>{
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Receita>(url);
}

}
