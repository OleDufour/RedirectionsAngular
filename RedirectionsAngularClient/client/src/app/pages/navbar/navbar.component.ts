import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeLang(lang: string) {

    if (lang === 'fr') {
      localStorage.setItem('locale', 'fr');
    }

    if (lang === 'en') {
      localStorage.setItem('locale', 'en');
    }
  }

}
