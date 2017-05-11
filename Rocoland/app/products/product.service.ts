import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Product } from './Product';


@Injectable()
export class ProductService {
    constructor(private http: Http) { }

    getAll(productTypeId:number) {
        return this.http.get(`api/ProductAPI/GetAll/${productTypeId}`).map((res: Response) => res.json());
    }

    get(id:number) {
        return this.http.get(`api/ProductAPI/${id}`).map((res: Response) => res.json());
    }

    update(product:Product) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('api/ProductAPI/', product, headers).map((res: Response) => res);
    }

    delete(id: number) {
        return this.http.delete(`api/ProductAPI/${id}`);
    }
}