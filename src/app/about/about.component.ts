import { Component, OnInit} from '@angular/core';
import { faAngular, faCss3, faNodeJs, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { GlobalConstants } from "../global-constants";
import { AppComponent } from '../app.component'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faAngular = faAngular
  faCss3 = faCss3
  faNodeJs = faNodeJs
  faHtml5 = faHtml5
  faJsSquare = faJsSquare
  faReact = faReact
  faArrowsRotate = faArrowsRotate
  language = AppComponent.language
  text = GlobalConstants.aboutText

  constructor() {
   }

  ngOnInit(): void {
  }
}
