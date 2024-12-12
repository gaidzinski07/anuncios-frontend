import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @ViewChild('drawer')
  sidenav!: MatSidenav; 

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.sidenav.toggle()
  }

}
