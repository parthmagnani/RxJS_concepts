import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromisesComponent } from './Layout/Components/promises/promises.component';
import { TheoryObservableComponent } from './Layout/Components/Observables/theory-observable/theory-observable.component';

const routes: Routes = [
  {
    path: '',
    component: PromisesComponent
  },
  {
    path: 'observables',
    component: TheoryObservableComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
