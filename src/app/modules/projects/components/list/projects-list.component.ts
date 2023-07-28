import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() projects: any = [];
  @Input() selectedProjectId = '';
  @Output() selectProject = new EventEmitter<any>();

  constructor() {}

  select(project: any) {
    this.selectProject.emit(project);
    this.selectedProjectId = project.id;
  }
}
