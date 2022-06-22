import { Component, OnInit } from '@angular/core';
import { faHome, faAddressCard, faAddressBook, faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GlobalConstants } from "../global-constants";

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
  language = GlobalConstants.language
  text = GlobalConstants.menuText

  constructor(
  ) { }

  ngOnInit(): void {
  }

  changeTheme(mode:string, event: any) {
    document.body.classList.toggle(`${mode}-theme`)
    event.target.parentNode.parentNode.classList.toggle('active')
    this.dark = !this.dark
  }

 }
