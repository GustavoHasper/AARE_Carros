import { Component, OnInit } from '@angular/core';
import { CarrosListTableService } from './carros-list-service.service';

@Component({
  selector: 'ngx-carros-list',
  templateUrl: './carros-list.component.html',
  styleUrls: ['./carros-list.component.scss']
})
export class CarrosListComponent implements OnInit {

  constructor(public service : CarrosListTableService) { }

  ngOnInit(): void {
  }

}
