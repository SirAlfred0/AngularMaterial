import { AuthorizationComponent } from './components/authorization/authorization.component';
import { ApplicationComponent } from './components/application/application.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {component: AuthorizationComponent, path: ''},
  {component: ApplicationComponent, path: 'application'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
