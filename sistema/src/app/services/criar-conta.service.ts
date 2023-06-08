import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CriarContaRequest } from "../models/requests/criar-conta.request.models";
import { Observable } from "rxjs";
import { CriarContaResponse } from "../models/responses/criar-conta.response";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class CriarContaService {
    constructor(
        private httpClient: HttpClient
    ) {

    }

    post(CriarContaRequest: CriarContaRequest) : Observable<CriarContaResponse> {
        return this.httpClient.post<CriarContaResponse>(
            environment.apiUrl + '/users',
            CriarContaRequest);
    }
}