import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `       


<app-header></app-header>
<alert></alert>
<navbar></navbar>
<router-outlet></router-outlet>
<app-footer></app-footer>
 `
})
export class AppComponent {
    
}