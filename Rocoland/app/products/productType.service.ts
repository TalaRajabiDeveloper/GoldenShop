import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ProductType } from './ProductType';


@Injectable()
export class ProductTypeService {
    constructor(private http: Http) { }
    getAll() {
        return this.http.get('api/ProductType/GetAll').map((res: Response) => res.json());
    }

    get(id: number) {
        return this.http.get(`api/ProductType/${id}`).map((res: Response) => res.json());
    }

    update(productType: ProductType) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('api/ProductType/', productType, headers).map((res: Response) => res);
    }

    delete(id: number) {
        return this.http.delete(`api/ProductType/${id}`);
    }
}