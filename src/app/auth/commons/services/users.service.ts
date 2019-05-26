import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UsersService {
    constructor(private http: HttpClient) { }

    getUserByEmail(email: string): Observable<User>{
        console.log(this.http.get(`http://localhost:3000/users?email=${email}`));
        return this.http.get(`http://localhost:3000/users?email=${email}`)
            .map((response: Response) => response.json())

    }
    createNewUser(user: User){
        return this.http.post(`http://localhost:3000/users`, user);
    }


}   