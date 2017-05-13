import { Component, Input } from '@angular/core';

@Component({
    selector: 'loading',
    template: `
<i class="fa fa-spinner fa-pulse fa-3x fa-fw" *ngIf="isLoading"></i>
<span class="sr-only">Loading...</span>
`
})

export class LoadingComponent {
    @Input() isLoading: boolean = true;

}