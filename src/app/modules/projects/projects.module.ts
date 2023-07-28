import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './components/list/projects-list.component';
import { ProjectInfoComponent } from './components/info/project-info.component';
import { ProjectService } from './services/project.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: ':id', component: ProjectsComponent },
];

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectInfoComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  providers: [ProjectService],
  exports: [RouterModule],
})
export class ProjectsModule {}
