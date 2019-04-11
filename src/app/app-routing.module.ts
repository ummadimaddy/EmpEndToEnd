import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [

  {path: 'PostEmploye', component:PostComponent},
  {path: 'EmployeList', component:GetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
