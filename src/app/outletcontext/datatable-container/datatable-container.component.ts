import { TemplateRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable-container',
  templateUrl: './datatable-container.component.html',
  styleUrls: ['./datatable-container.component.scss']
})
export class DatatableContainerComponent implements OnInit {

  constructor() { }


  //  input method for rowdata,colstemplate,headings
  @Input() rowData: any[] = [];
  @Input() colsTemplate: TemplateRef<any>[] = [];
  @Input() headings: string[] = [];

  
  ngOnInit(): void {
  }

}
