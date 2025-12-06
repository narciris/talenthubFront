import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class BlockService
 {

    BASE_URL = `${environment.apiUrl}/users`;
    private http = inject(HttpClient)


    public getUsers():Observable<any>{
        return this.http.get<any>(`${this.BASE_URL}`);
    }


}