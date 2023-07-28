import { Component, Input } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../interface';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent {
  @Input() project?: IProject;
  isEdit = false;
  changedProject: IProject;
  isValid = true;

  constructor(private projectService: ProjectService) {}

  changeEditMode(state: boolean): void {
    if (state && this.project) {
      this.changedProject = { ...this.project };
      this.changedProject.startDate =
        this.changedProject.startDate.split('T')[0];
      this.changedProject.endDate = this.changedProject.endDate.split('T')[0];
    }
    this.isEdit = state;
  }

  isDatesValid() {
    try {
      this.changedProject.startDate = new Date(
        this.changedProject.startDate
      ).toISOString();
      this.changedProject.endDate = new Date(
        this.changedProject.endDate
      ).toISOString();
      return true;
    } catch {
      alert('Даты указаны в неправильном формате');
      return false;
    }
  }

  save(): void {
    if (!this.isDatesValid()) {
      return;
    }

    this.projectService.updateProjectInfo(this.changedProject);
    this.project = this.changedProject;
    this.changeEditMode(false);
  }
}
