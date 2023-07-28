import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProjectService {
  allProjects = new BehaviorSubject<any>(null);

  getAllProjects(): any[] {
    if (this.allProjects.value) this.allProjects.value;
    const res = JSON.parse(localStorage.getItem('data') || '');
    this.allProjects.next(res.Projects);
    return res?.Projects ? res.Projects : [];
  }

  updateProjectInfo(project: any): void {
    const allProjects = this.getAllProjects();
    const res = allProjects.map((obj) =>
      obj.id === project.id ? project : obj
    );
    localStorage.setItem('data', JSON.stringify({ Projects: res }));
    this.allProjects.next(res);
  }

  getProjectById(id: string) {
    return this.getAllProjects().find(i => i.id === id);
  }
}
