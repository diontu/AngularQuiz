import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { headerNavs } from './headerNavs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nav = headerNavs;
  activePath: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        let urlSplit: string[] = events.url.split('?');
        let paths: string[] = urlSplit[0].split(/(?=\/)/);
        this.activePath = paths[0];
      }
    });
  }

}
