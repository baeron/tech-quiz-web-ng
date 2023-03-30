import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizOptionsComponent } from './assessment/container/quiz-options/quiz-options.component';

const routes: Routes = [
  { path: '', component: QuizOptionsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
