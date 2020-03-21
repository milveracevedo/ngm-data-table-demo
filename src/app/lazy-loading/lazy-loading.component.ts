import { Component, OnInit } from '@angular/core';
import { EasportService } from '../core/easport.service';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.css']
})
export class LazyLoadingComponent implements OnInit {

  items = [];
  totalItems = 1000;
  totalPages = 167;
  size = 6;
  column = {
    providerType: false,
    applicationType: false,
    multiExpandableRows: false,
    selectColumn: false,
    indexColumn: false
  };
  index = 1;

  constructor(private easportService: EasportService) {
  }


  ngOnInit(): void {
  }

  reloadItems(params) {
    this.easportService.getItems().subscribe(value => {
    });
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.caseNumber);
  }

  rowDoubleClick(rowEvent) {
    // alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) {
    return item.NPI;
  }

  cellColor(car) {
    return '#ffffff';
  }

  buttonalert(param: any) {
    alert(param);
  }

}