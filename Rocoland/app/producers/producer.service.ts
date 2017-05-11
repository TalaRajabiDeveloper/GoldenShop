import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Producer } from './Producer';


@Injectable()
export class ProducerService {
    constructor(private http: Http) { }
    getAll() {
        return this.http.get('api/Producer/GetAll').map((res: Response) => res.json());
    }

    get(id: number) {
        return this.http.get(`api/Producer/${id}`).map((res: Response) => res.json());
    }

    update(producer : Producer) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('api/Producer/', producer, headers).map((res: Response) => res);
    }

    delete(id: number) {
        return this.http.delete(`api/Producer/${id}`);
    }
}