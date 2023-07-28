import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'data',
    title: 'Данные',
    loadChildren: () =>
      import('./modules/data/data.module').then((m) => m.DataModule),
  },
  {
    path: 'projects',
    title: 'Проекты',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
