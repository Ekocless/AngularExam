import { Component, OnInit } from '@angular/core';
import { Region } from 'src/models/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  tableauRegions: Region[] = [];

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.regionService.getRegions().subscribe((regionsJson) => {
      this.tableauRegions = regionsJson;
    });
  }
}
