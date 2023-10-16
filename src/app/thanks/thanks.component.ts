import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent {
  constructor(public router: Router) {

  }

  goHome() {
    this.router.navigateByUrl('/welcome')
  }
  goApplication() {
    this.router.navigateByUrl('/home')
  }
}
