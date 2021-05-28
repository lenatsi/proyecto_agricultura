import { DomSanitizer } from '@angular/platform-browser';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialesService } from './../services/tutoriales/tutoriales.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.component.html',
  styleUrls: ['./tutoriales.component.scss']
})
export class TutorialesComponent implements OnInit {
  filter = ""
  tutoriales: Array<any> = []

  images = [
    "../../assets/img/png/5a1ca35505ccc7.0100876715118262610238.png",
    "../../assets/img/png/5a28de3f7f1d69.0102490115126277755207.png",
    "../../assets/img/png/5a29d9e856a673.5162783515126922003549.png",
    "../../assets/img/png/kisspng-floating-island-download-computer-file-taobao-floating-island-5a9257630769b6.4198723615195400670304.png",
    "../../assets/img/png/kisspng-icon-suspended-island-5a81ec5a3727a8.0567606015184640902259.png",
    "../../assets/img/png/kisspng-island-computer-file-floating-island-5a8bcf955570e1.56373236151911208535.png"
  ]
  

  constructor( private activeRoute: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer,
    private tutorialService: TutorialesService) { }

  ngOnInit() {
    this.loadData()
    this.randomImg()
  }

  randomImg(){
    let num = Math.floor(Math.random() * ((this.images.length) - 0) + 0);
    console.log(num)
    return num
  }

  loadData() {
    this.tutorialService.getTutorials(this.filter).subscribe(
      (data: Tutorial[]) => {
        this.tutoriales = data
      },
      (error) => {
        console.log('Error:', error)
      },
    )
  }
}
