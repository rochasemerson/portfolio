import { Component, OnInit } from '@angular/core';
import { faHome, faAddressCard, faAddressBook, faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  imgSrc = 'assets/foto.png'
  dark: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  redirect(address:string) {
    window.location.href = `${address}`;
  }

  changeTheme(mode:string, event: any) {
    document.body.classList.toggle(`${mode}-theme`)
    event.target.parentNode.parentNode.classList.toggle('active')
    console.log(event.target);
    this.dark = !this.dark
  }
 }
