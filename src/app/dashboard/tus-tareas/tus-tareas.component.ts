import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tus-tareas',
  templateUrl: './tus-tareas.component.html',
  styleUrls: ['./tus-tareas.component.scss'],
})
export class TusTareasComponent implements OnInit {

  isTareaEmpty = false
  nombre = ""
  finalizada = ""
  fecha = ""
  tareas: string[] = [
  ]

  addFilm(data: any) {

    if (data.value.trim() == "") {
      this.isTareaEmpty = true
      return
    } else {
      this.isTareaEmpty = false
    }

    this.tareas.push(data.value)
    data.value = ""
  }

  deleteFilm(pos: number) {
    this.tareas.splice(pos, 1)
  }

  ngOnInit(): void {
  }

}
