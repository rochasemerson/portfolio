import { Component, OnInit} from '@angular/core';
import { faWhatsapp, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faWhatsapp = faWhatsapp
  faGoogle = faGoogle
  faEnvelope = faEnvelope

  constructor() { }
  
  ngOnInit(): void {
  }
  
  sendEmail = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_uxkioe8',
        '.form',
        '6j2tEcpwIHa5XhWbJ'
      ).then(() => {
        alert('Message sent')
      })
  }
}
