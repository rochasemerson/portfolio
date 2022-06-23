import { Component, OnInit } from '@angular/core';
import { faHome, faAddressCard, faAddressBook, faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GlobalConstants } from "../global-constants";
import { AppComponent } from '../app.component'

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  faHome = faHome
  faAddressCard = faAddressCard
  faAddressBook = faAddressBook
  faGithub = faGithub
  faLinkedin = faLinkedin
  faSun = faSun
  faMoon = faMoon
  br = 'assets/br.svg'
  gb = 'assets/gb.svg'
  dark: boolean = false
  language = AppComponent.language
  changeLanguage = AppComponent.changeLanguage
  text = GlobalConstants.menuTextPt

  constructor(
  ) { }

  ngOnInit(): void {
  }

  changeTheme(mode:string, event: any) {
    document.body.classList.remove('light-theme', 'dark-theme')
    document.body.classList.add(`${mode}-theme`)
    this.dark = !this.dark
  }

  changeText() {
    this.changeLanguage(this.language)
    this.language === 'en' ? this.text = GlobalConstants.menuTextEn : this.text = GlobalConstants.menuTextPt
  }
 }
