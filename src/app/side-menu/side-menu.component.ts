import { Component, OnInit } from '@angular/core';
import { faHome, faAddressCard, faAddressBook} from "@fortawesome/free-solid-svg-icons";
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
  imgSrc = 'assets/foto.png'

  constructor() { }

  ngOnInit(): void {
  }

  redirect(address:string) {
    window.location.href = `${address}`;
  }

}
