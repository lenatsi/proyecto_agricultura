import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { HomeConsejosComponent } from './consejos/home-consejos.component';
import { PlanificacionComponent } from './planificacion/planificacion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "consejos", component: HomeConsejosComponent},
  {path: "tutoriales", component: TutorialesComponent},
  {path: "planificacion", component: PlanificacionComponent},
  {path: "formulario", component:FormularioComponent},
  {path: "dashboard", component:DashboardComponent},


  {path: "404", component: NotFoundComponent},
  {path: "**", redirectTo: "/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
