import { Component, OnInit } from '@angular/core';
import { HOME_IMAGE } from '../../data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public images: any = HOME_IMAGE;
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < 5; i++) {
      this.images[i].url_selected = this.images[i].url;
    }
  }

  changeNav(data: any) {

  }

}
