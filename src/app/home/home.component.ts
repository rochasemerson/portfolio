import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgSrc = 'assets/foto.png'
  backgroundSrc = 'assets/background.png'

  constructor() { }

  ngOnInit(): void {
  }

}
