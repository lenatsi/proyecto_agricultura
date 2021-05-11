import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planificacion',
  templateUrl: './planificacion.component.html',
  styleUrls: ['./planificacion.component.scss']
})
export class PlanificacionComponent implements OnInit {

  loginVisible = true;
  registerVisible = false;
  loginActive = true;
  registerActive = false;

  login() {
    this.loginVisible = true;
    this.registerVisible = false
    this.loginActive = true;
    this.registerActive = false;
  }
  register(){
    this.loginVisible = false;
    this.registerVisible = true
    this.loginActive = false;
    this.registerActive = true;
  }
  ngOnInit(): void {
  }
}
