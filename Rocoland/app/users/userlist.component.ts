import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from './User';
import { UserService } from './user.service';
import { GridOptions } from "ag-grid";
import {CellComponent} from './cell.component';

@Component({
    selector: 'userlist',
    templateUrl: './userlist.component.html',
    providers: [UserService]
})
export class UserListComponent implements OnInit {
    errorMessage: string;
    fadeOut: boolean=false;
    users : User[];
    mode = 'Observable';
    isLoading: boolean = true;
    private gridOptions: GridOptions;

    constructor(private userService: UserService,
        private router: Router,
        private render: Renderer) {
      this.gridOptions = {};
      this.gridOptions.columnDefs = [
        {
          headerName: "ID",
          field: "id",
          width: 100
        },
        {
          headerName: "Value",
          field: "value",
          cellRendererFramework: CellComponent,
          width: 100
        },

      ];
      this.gridOptions.rowData = [
        { id: 5, value: 10 },
        { id: 10, value: 15 },
        { id: 15, value: 20 }
      ]
    }

    ngOnInit() {
        this.getAll();
    }


    getAll() {
        this.isLoading = true;
        this.userService.
          getAll()
          .subscribe(p => {
              this.users = p;
              this.isLoading = false;
        });
    }
  

    delete(user: any, e: any) {
            var target = e.currentTarget;

            this.userService.delete(user.Id).subscribe(p => {
                e.preventDefault();
                this.render.setElementClass(target.parentElement.parentElement, "step", true);
                //target.parentElement.parentElement.addClass('step');
                //this.fadeOut = true;
                //let exists = this.users.indexOf(user);
                //if (exists > -1) {
                //    this.users.splice(exists, 1);
                //}
            });
        }

    edit(id: number) {
        this.router.navigate(['/users/edit', id]);
    }
    
}




