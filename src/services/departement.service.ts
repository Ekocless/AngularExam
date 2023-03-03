import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from 'src/models/departement';
import { Region } from 'src/models/region';
import { RegionService } from './region.service';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private apiUrl: string = 'https://geo.api.gouv.fr';
  private departements: string = '/departements/';


  constructor(private httpClient: HttpClient) { }

  getDepartements(): Observable<Departement[]> {
    return this.httpClient.get<Array<Departement>>(this.apiUrl + this.departements);
  }

  getDepartementsByRegion(code: string): Observable<Departement[]> {
    return this.httpClient.get<Departement[]>(this.apiUrl + '/regions/' + code + this.departements);
  }

  getDepartementByCode(code: string): Observable<Departement> {
    return this.httpClient.get<Departement>(this.apiUrl + this.departements + code);
  }
}
