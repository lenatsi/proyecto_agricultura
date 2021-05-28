import { StepFourComponent } from './formulario/stepFour/stepFour.component';
import { StepThreeComponent } from './formulario/stepThree/stepThree.component';
import { StepTwoComponent } from './formulario/stepTwo/stepTwo.component';
import { StepOneComponent } from './formulario/stepOne/stepOne.component';
import { ConsejoComponent } from './consejo/consejo.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TusTareasComponent } from './dashboard/tus-tareas/tus-tareas.component';
import { TuHuertoComponent } from './dashboard/tu-huerto/tu-huerto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { HomeConsejosComponent } from './consejos/home-consejos.component';
import { PlanificacionComponent } from './planificacion/planificacion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuCalendarioComponent } from './dashboard/tu-calendario/tu-calendario.component';
import { TusAjustesComponent } from './dashboard/tus-ajustes/tus-ajustes.component';

const routes: Routes = [
  { path: "", component: HomePageComponent, pathMatch:"full"},
  { path: "consejos", component: HomeConsejosComponent },
  { path: "tutoriales", component: TutorialesComponent },
  { path: "planificacion", component: PlanificacionComponent },
  { path: "formulario", component: FormularioComponent,
children: [
  {path: "", component: StepOneComponent, pathMatch:"full"},
  {path: "second", component: StepTwoComponent},
  {path: "third", component: StepThreeComponent},
  {path: "final", component: StepFourComponent}
] },
  {path: "tutorial/:id", component: TutorialComponent},
  {path: "consejo/:id", component: ConsejoComponent},
  {path: "dashboard", component: DashboardComponent,
    children: [
      { path: 'tuhuerto', component: TuHuertoComponent },
      { path: 'tucalendario', component: TuCalendarioComponent },
      { path: 'tustareas', component: TusTareasComponent },
      { path: 'tusajustes', component: TusAjustesComponent },
    ]
  },

  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
