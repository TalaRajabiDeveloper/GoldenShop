import { Component, Input, Output , EventEmitter } from '@angular/core';

@Component({
    selector: 'heart',
    templateUrl: './heart.component.html'
  
})
export class HeartComponent {
    @Input() isFavourite: boolean = false;

    @Output() change = new EventEmitter();

    changefav() {
        this.isFavourite = !this.isFavourite;
        this.change.emit({newVal :this.isFavourite});
    }


}