import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-insert',
  templateUrl: './data-insert.component.html',
  styleUrls: ['./data-insert.component.scss'],
})
export class DataInsertComponent {
  JSONText = '';
  constructor(public dataService: DataService, private router: Router) {}

  saveData(): void {
    if (!this.JSONText) return;

    try {
      JSON.parse(this.JSONText);
      this.dataService.save(this.JSONText);
      this.router.navigate(['/projects']);
    } catch {
      alert('Невалидный формат данных');
    }
  }
}
