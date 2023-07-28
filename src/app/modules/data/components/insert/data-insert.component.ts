import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-insert',
  templateUrl: './data-insert.component.html',
  styleUrls: ['./data-insert.component.scss'],
})
export class DataInsertComponent {
  JSONText = '';
  constructor(public dataService: DataService) {}

  saveData(): void {
    if (!this.JSONText) return;

    this.dataService.save(this.JSONText);
  }
}
