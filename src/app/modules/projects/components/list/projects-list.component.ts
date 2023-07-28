import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProject } from '../../interface';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent {
  @Input() projects: IProject[] = [];
  @Input() selectedProjectId: string | undefined = '';
  @Output() selectProject = new EventEmitter<IProject>();

  constructor() {}

  select(project: IProject) {
    this.selectProject.emit(project);
    this.selectedProjectId = project.id;
  }
}
