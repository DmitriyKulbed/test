import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  save(data: string): void {
    localStorage.setItem('data', data);
  }
}
