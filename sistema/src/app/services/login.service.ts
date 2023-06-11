import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginRequest } from "../models/requests/login.request.models";
import { Observable } from "rxjs";
import { LoginResponse } from "../models/responses/login.response.models";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(
        private httpClient: HttpClient
    ) {

    }

    post(LoginRequest: LoginRequest) : Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(
            environment.apiUrl + '/login',
            LoginRequest);
    }
}