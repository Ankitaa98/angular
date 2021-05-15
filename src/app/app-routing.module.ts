import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { BlogComponent } from './Mycomponents/blog/blog.component';
import { HomeComponent } from './MyComponents/home/home.component';

const routes: Routes = [
  { path: "" ,component : HomeComponent },
  {path:"about", component : AboutComponent },
  { path: "blog", component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
