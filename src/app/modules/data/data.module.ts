import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data.component';
import { DataInsertComponent } from './components/insert/data-insert.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';

const routes: Routes = [
    {path: '', component: DataComponent}
]

@NgModule({
  declarations: [DataComponent, DataInsertComponent],
  imports: [RouterModule.forChild(routes), FormsModule],
  providers: [DataService],
  exports: [RouterModule]
})
export class DataModule { }
