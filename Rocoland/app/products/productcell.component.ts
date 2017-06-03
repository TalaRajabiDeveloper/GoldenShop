import { Component } from "@angular/core";

@Component({
  selector: 'productcell.component',
  templateUrl: './productcell.component.html'
})
export class ProductCellComponent {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }
}