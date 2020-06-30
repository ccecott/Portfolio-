import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }

}
