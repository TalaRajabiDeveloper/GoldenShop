import {Component, OnInit, ElementRef, Renderer, Self} from '@angular/core';
import {NgClass} from '@angular/common';

import {Pagination} from './pagination.component';

const pagerConfig = {
    itemsPerPage: 10,
    previousText: '« Previous',
    nextText: 'Next »',
    align: true
};

const PAGER_TEMPLATE = `
    <ul class="pager">
      <li [class.disabled]="noPrevious()" [class.previous]="align" [ngClass]="{'pull-right': align}">
        <a href (click)="selectPage(page - 1, $event)">{{getText('previous')}}</a>
      </li>
      <li [class.disabled]="noNext()" [class.next]="align" [ngClass]="{'pull-right': align}">
        <a href (click)="selectPage(page + 1, $event)">{{getText('next')}}</a>
      </li>
  </ul>
`;

@Component({
    selector: 'pager[ngModel]',
    template: PAGER_TEMPLATE,
    inputs: [
        'align',
        'totalItems', 'itemsPerPage',
        'previousText', 'nextText',
    ]
})
export class Pager extends Pagination implements OnInit {
    public config = pagerConfig;

    constructor(@Self() cd:any, renderer:Renderer, elementRef:ElementRef) {
        super(cd, renderer, elementRef);
    }
}