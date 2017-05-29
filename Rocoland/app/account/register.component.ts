import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../alert/alert.service';
import { UserService } from '../users/user.service';

@Component({
  templateUrl: './register.component.html',
  providers: [UserService, AlertService]
})

export class RegisterComponent {
  model: any = {};
  loading = false;
  userName :string = "";

  constructor(private router: Router,
    private userService: UserService,
    private alertService: AlertService) {
    
  }

  register() {
    this.loading = true;
    this.userName = localStorage.getItem("currentUset");

    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}