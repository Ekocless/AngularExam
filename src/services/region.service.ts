import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from 'src/models/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  apiRegionUrl: string = "https://geo.api.gouv.fr/regions";

  constructor( private httpClient: HttpClient) { 
   
  }
  getRegions(): Observable<Region[]> {
    return this.httpClient.get<Region[]>(this.apiRegionUrl);
  }

  getRegionByCode(code: string): Observable<Region> {
    return this.httpClient.get<Region>(this.apiRegionUrl + '/' + code);
  }
}
