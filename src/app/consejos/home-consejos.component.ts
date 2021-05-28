import { Tip } from './../models/tip.model'
import { TipsService } from './../services/tips/tips.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home-consejos',
  templateUrl: './home-consejos.component.html',
  styleUrls: ['./home-consejos.component.scss'],
})
export class HomeConsejosComponent implements OnInit {
  filter = ''
  page = Number
  consejos: Array<any> = []

  constructor(
    private httpClient: HttpClient,
    private tipService: TipsService,
  ) {}

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.tipService.getTips(this.filter).subscribe(
      (data: Tip[]) => {
        this.consejos = data
      },
      (error) => {
        console.log('Error:', error)
      },
    )
  }
}
