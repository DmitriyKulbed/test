import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from './interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[];
  selectedProject?: IProject;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.restoreProjectById(id);
    }

    this.projects = this.projectService.getAllProjects();
    this.projectService.allProjects.subscribe((p) => p && this.projects === p);
  }

  get selectedProjectId(): string | undefined {
    return this.selectedProject?.id;
  }

  selectProject($event: any) {
    this.router.navigate(['projects', $event.id]);
    this.selectedProject = $event;
  }

  restoreProjectById(id: string): void {
    const project = this.projectService.getProjectById(id);
    if (project) {
      this.selectedProject = project;
    }
  }
}
