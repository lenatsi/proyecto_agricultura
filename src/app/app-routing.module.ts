import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { HomeConsejosComponent } from './home-consejos/home-consejos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "consejos", component: HomeConsejosComponent},
  {path: "tutoriales", component: TutorialesComponent},

  {path: "404", component: NotFoundComponent},
  {path: "**", redirectTo: "/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
