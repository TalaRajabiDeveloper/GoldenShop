import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'user-edit',
    templateUrl: './user.edit.component.html',
    providers: [UserService]
})

export class UserEditComponent {
    public model: User;

    constructor(private userService: UserService,
        private router: Router,
        private route: ActivatedRoute) {

        this.model = new User();

        route.params.subscribe(params => {
            if (params['id']) {
                this.get(params['id']);
            }
        });
    }

    
    private get(id:number) {
        this.userService.getById(id).subscribe(result => {
            this.model = result;
        });
    }

    private save(form : any) {
        if (form.valid) {
          this.userService.update(this.model).subscribe(result => {
                console.log(result);
                this.back();
            });
        }
    }

    private back() {
        this.router.navigate(['/users']);
    }

}