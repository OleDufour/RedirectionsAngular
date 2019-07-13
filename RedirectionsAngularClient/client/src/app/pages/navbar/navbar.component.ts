import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  storedLang: string;
  constructor() { }


  ngOnInit() {
    this.storedLang = localStorage.getItem('locale') == 'fr' ? 'fr' : null;
  }

  changeLang(lang: string) {
    localStorage.setItem('locale', lang);
  }
}
