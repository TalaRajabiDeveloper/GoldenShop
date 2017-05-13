import { Component, Input } from '@angular/core';

@Component({
    selector: 'validation-error',
    template: `
        <div *ngIf="fieldName.errors && (fieldName.dirty || fieldName.touched)"
             class="alert alert-danger">
            <div *ngIf ="fieldName.errors.required">
                {{fieldTitle}} is required.
            </div>
            <div *ngIf ="fieldName.errors.minlength">
                {{fieldTitle}} must be at least {{fieldName.errors.minlength.requiredLength}} characters long.
            </div>
            <div *ngIf ="fieldName.errors.maxlength">
                {{fieldTitle}} cannot be more than {{fieldName.errors.maxlength.requiredLength}} characters long.
            </div>
        </div>
`
})

export class ValidationErrorComponent {
    @Input() fieldName: string;
    @Input() fieldTitle: string;

}