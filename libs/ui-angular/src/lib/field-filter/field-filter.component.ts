import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ecommerce-field-filter',
  templateUrl: './field-filter.component.html',
  styleUrls: ['./field-filter.component.scss'],
})
export class FieldFilterComponent {
  @Input()
  filterTitle!: string;

  @Input()
  fieldNames!: string[];

  @Output() filterAdded: EventEmitter<string> = new EventEmitter();

  clickFilter(filter: string): void {
    this.filterAdded.emit(filter);
  }
}
