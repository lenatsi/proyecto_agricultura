import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatBadgeModule } from '@angular/material/badge'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatStepperModule } from '@angular/material/stepper'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import {
  MatNativeDateModule,
  MatRippleModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSliderModule } from '@angular/material/slider'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatTreeModule } from '@angular/material/tree'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeConsejosComponent } from './consejos/home-consejos.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TutorialesComponent } from './tutoriales/tutoriales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlanificacionComponent } from './planificacion/planificacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { TuHuertoComponent } from './dashboard/tu-huerto/tu-huerto.component';
import { TuCalendarioComponent } from './dashboard/tu-calendario/tu-calendario.component';
import { TusTareasComponent } from './dashboard/tus-tareas/tus-tareas.component';
import { TusAjustesComponent } from './dashboard/tus-ajustes/tus-ajustes.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeES from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { ConsejoComponent } from './consejo/consejo.component';
import { NotifierModule } from 'angular-notifier';

registerLocaleData(localeES, "es");

@NgModule({
  declarations: [
    AppComponent,
      TopMenuComponent,
      HomePageComponent,
      HomeConsejosComponent,
      FooterComponent,
      NotFoundComponent,
      TutorialesComponent,
      PlanificacionComponent,
      FormularioComponent,
      DashboardComponent,
      LateralMenuComponent,
      TuHuertoComponent,
      TuCalendarioComponent,
      TusTareasComponent,
      TusAjustesComponent,
      ConsejoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NotifierModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },{provide: LOCALE_ID, useValue: 'es-ES'},
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  },{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  JwtHelperService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
