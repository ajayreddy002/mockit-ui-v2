import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent {
  @Input() tableData!: any[]; // Input property for table data
  @Input() tableColumns!: string[]; // Input property for table columns

}
