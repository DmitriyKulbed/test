import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProject } from '../interface';

@Injectable()
export class ProjectService {
  allProjects = new BehaviorSubject<IProject[] | null>(null);

  getAllProjects(): IProject[] {
    if (this.allProjects.value) return this.allProjects.value;
    const res = JSON.parse(localStorage.getItem('data') || '');
    this.allProjects.next(res.Projects);
    return res?.Projects ? res.Projects : [];
  }

  updateProjectInfo(project: IProject): void {
    const allProjects = this.getAllProjects();
    const res = allProjects.map((obj) =>
      obj.id === project.id ? project : obj
    );
    localStorage.setItem('data', JSON.stringify({ Projects: res }));
    this.allProjects.next(res);
  }

  getProjectById(id: string): IProject | undefined {
    return this.getAllProjects().find((i) => i.id === id);
  }
}
