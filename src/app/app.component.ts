import { Component } from '@angular/core';
import { GlobalConstants } from "./global-constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  language = GlobalConstants.language
  
  displayLanguage($event: string) {
    this.language = $event
  }
}
