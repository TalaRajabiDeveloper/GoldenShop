import { Component } from "@angular/core";

@
Component({
  selector: 'cell-component',
  templateUrl: './cell.component.html'
})
export class CellComponent {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }
}