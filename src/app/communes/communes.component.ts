import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Communes } from 'src/models/communes';

@Component({
  selector: 'app-communes',
  templateUrl: './communes.component.html',
  styleUrls: ['./communes.component.css']
})
export class CommunesComponent implements OnInit {

  title: string = "";
  communes: Communes[] = [];
  region: string | undefined;
  departement: string | undefined;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let url: string = 'https://geo.api.gouv.fr/';
    let urlCommunes: string = "/communes"
    
    this.activatedRoute.params.subscribe((params) => {
      if (params['departement.codeRegion'] && params['departement.code']) {
        this.region = params['departement.codeRegion'];
        this.departement = params['departement.code'];
        url = 'https://geo.api.gouv.fr/regions/' + this.region + '/departements/' + this.departement ;
        this.title = 'Les communes de ' + this.region;
      }
    });
    this.httpClient.get<Communes[]>(url + urlCommunes)
      .subscribe((response) => {
        this.communes = response;
      });
  }
}
