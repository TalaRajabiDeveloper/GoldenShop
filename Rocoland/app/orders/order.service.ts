import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from '../products/Product';


@Injectable()
export class OrderService {
    constructor(private http: Http) { }

    post(product: Product) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('api/OrderAPI/', product, headers).map((res: Response) => res);
    }
}