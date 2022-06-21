import { Component, OnInit } from '@angular/core';
import { faAngular, faCss3, faNodeJs, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { GlobalConstants } from "../global-constants";

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
  language = GlobalConstants.language
  text = GlobalConstants.aboutText

  constructor() {
   }

  ngOnInit(): void {
  }

}
