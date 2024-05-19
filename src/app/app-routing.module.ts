import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrikazComponent } from './components/prikaz/prikaz.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {path: '', component: PrikazComponent},
  {path: 'prikaz', component: PrikazComponent},
  {path: 'addedit', component: AddEditComponent},
  {path: 'addedit/:id', component: AddEditComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
