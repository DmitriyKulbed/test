import { Component, Input } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent {
  @Input() project:any;
  isEdit = false;
  changedProject: any;

  constructor(private projectService: ProjectService) {}

  changeEditMode(state: boolean): void {
    if (state) {
      this.changedProject = {...this.project};
    };
    this.isEdit = state;
  }

  save():void {
    this.projectService.updateProjectInfo(this.changedProject);
    this.project = this.changedProject;
    this.changeEditMode(false);
  }

}
