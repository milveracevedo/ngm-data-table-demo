import {Component, OnInit} from '@angular/core';
import { DataTableResource } from 'ngm-data-table';
import persons from '../../resource/data-table-demo';

@Component({
  selector: 'app-template-expand',
  templateUrl: './template-expand.component.html',
  styleUrls: ['./template-expand.component.css']
})
export class TemplateExpandComponent implements OnInit {

  itemResource = new DataTableResource(persons);
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

  constructor() {
  }


  ngOnInit(): void {
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => {
      this.items = items;
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
