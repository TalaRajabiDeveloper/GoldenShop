import { Component, OnInit } from '@angular/core';

import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html'
})

export class AlertComponent implements  OnInit{
  message: any;

  constructor(private alertService: AlertService) {
    this.alertService.
      getMessage().
      subscribe(
        message => { this.message = message; }
      );
  }

  ngOnInit() {
    this.alertService.
      getMessage().
      subscribe(
        message => { this.message = message; }
      );
  }
}