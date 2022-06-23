import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  public static language: string = 'pt'
  
  public static changeLanguage(language: string) {
      this.language === 'pt' ? this.language = 'en' : this.language = 'pt'
  }

}
