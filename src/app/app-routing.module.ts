import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Welcome
  {
    path: '',
    redirectTo: '/editor',
    pathMatch: 'full',
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('./editor/editor.module').then((x) => x.EditorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
