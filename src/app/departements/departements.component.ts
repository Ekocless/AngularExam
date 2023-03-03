import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departement } from 'src/models/departement';
import { Region } from 'src/models/region';
import { DepartementService } from 'src/services/departement.service';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {

  title: string = "";
  departements: Departement[] = [];
  region: string | undefined;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let url: string = 'https://geo.api.gouv.fr/';
    let urlDepartement: string = "/departements"
    this.activatedRoute.params.subscribe((params) => {
      if (params['region.code']) {
        this.region = params['region.code'];
        url = 'https://geo.api.gouv.fr/regions/' + this.region;
        this.title = 'Les pays de ' + this.region;
      }
    });
    this.httpClient.get<Departement[]>(url + urlDepartement)
      .subscribe((response) => {
        this.departements = response;
      });
  }
}
