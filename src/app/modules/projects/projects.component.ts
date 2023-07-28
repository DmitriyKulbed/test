import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: any;
  selectedProject: any;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.selectedProject = this.projectService.getProjectById(id);
    }

    this.projects = this.projectService.getAllProjects();
    this.projectService.allProjects.subscribe((p) => (this.projects = p));
  }

  selectProject($event: any) {
    this.router.navigate(['projects', $event.id])
    this.selectedProject = $event;
  }
}
