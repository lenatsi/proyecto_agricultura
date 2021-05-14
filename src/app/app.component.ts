import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoagricultura';
  // private matIconRegistry: MatIconRegistry,
  // private domSanitizer: DomSanitizer

  // this.matIconRegistry.addSvgIcon(

  //   "huerto",

  //   this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/huerto.svg")

  // );
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(

      "huerto",

      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/sun.svg")

    );
  }
}
