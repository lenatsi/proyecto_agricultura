import { DomSanitizer } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import { TutorialesService } from './../services/tutoriales/tutoriales.service'
import { Component, OnInit } from '@angular/core'
import { Tutorial } from '../models/tutorial.model'

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {
  id = ''
  title = ''
  description = ''
  embed = ''
  tags = ''
  filter = ''
  tutoriales: Array<any> = []

  constructor(
    public sanitizer: DomSanitizer,
    private tutorialService: TutorialesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((parm) => {
      this.id = parm.id
    })
    this.loadData()
  }
  loadData() {
    const id = this.id
    this.tutorialService.getTutorial(id).subscribe(
      (data) => {
        this.title = data.title
        this.description = data.description
        this.embed = data.link
        this.tags = data.tags
      },
      (error) => {
        this.router.navigate(['/404'])
      },
    )

  }

}
