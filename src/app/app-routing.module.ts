import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'choice',
    pathMatch: 'full'
  },
  {
    path: 'choice',
    loadChildren: () => import ('./Modules/choice/choice.module').then(m => m.ChoiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
