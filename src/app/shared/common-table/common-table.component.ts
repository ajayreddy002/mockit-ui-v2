import { Component, Input } from '@angular/core';
import { TableColumn } from 'src/app/models/common.model';
import { DateComparisonService } from 'src/app/utils/date-comparison.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent {
  @Input() tableData!: any[]; // Input property for table data
  @Input() tableColumns!: TableColumn[]; // Input property for table columns
  @Input() compareDate!: boolean;
  constructor(
    private dateComparisonService: DateComparisonService
  ) { }
}
