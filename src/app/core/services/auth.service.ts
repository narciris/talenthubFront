import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import { STORAGE_CONST } from "../constants/auth-constants";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    

    private httpCLient = inject(HttpClient);
    private BASE_URL = `${environment.apiUrl}/auth`

    public login(request:any):Observable<any>{
        return this.httpCLient.post<any>(`${this.BASE_URL}/login`,request)
    }
    public register(request:any):Observable<any>{
        return this.httpCLient.post<any>(`${this.BASE_URL}/register`,request);
    }

    public getToken () {
        return localStorage.getItem(STORAGE_CONST.ACCESS_TOKEN);
    }

    public setToken(token:string):void{
        localStorage.setItem(STORAGE_CONST.ACCESS_TOKEN,token);
    }
    
}