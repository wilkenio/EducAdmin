import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../../../shared/models/professor.model';
import { GlobalService } from '../../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProfessoresService {
  private apiUrl: string;

  constructor(private globalService: GlobalService, private http: HttpClient) {
    this.apiUrl = this.globalService.apiUrl + '/professores';
  }

  getAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl);
  }

  create(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.apiUrl, professor);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Assuming update might be needed later, but for now matching component usage
  update(id: number, professor: Professor): Observable<Professor> {
    return this.http.put<Professor>(`${this.apiUrl}/${id}`, professor);
  }
}
