import { Injectable } from "@angular/core";
import { LoginResponse } from "../models/responses/login.response.models";
import { encryptData } from "../utils/crypto.util";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationHelper {
    singIn(data: LoginResponse): void {
        var auth = JSON.stringify(data);
        var content = encryptData(auth, environment.cryptoKey)
        localStorage.setItem('auth', content);
    }
}