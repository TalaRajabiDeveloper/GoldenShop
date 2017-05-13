import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './User';
import { Login } from './login';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll(userTypeId:number) {
        return this.http.get(`api/Account/GetAll/${userTypeId}`).map((res: Response) => res.json());
    }

    get(id:number) {
        return this.http.get(`api/Account/${id}`).map((res: Response) => res.json());
    }

    login(username: string, password: string) {
        return this.http
            .get(`api/Account/Login/${username}/${password}`)
            .map((res: Response) => res.json());
    }

    update(user:User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put('api/Account/', user, headers).map((res: Response) => res);
    }

    delete(id: number) {
        return this.http.delete(`api/Account/${id}`);
    }
}