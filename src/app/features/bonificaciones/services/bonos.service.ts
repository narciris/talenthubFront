import { inject, Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class BonosService {

    private BASE_URL = `${environment.apiUrl}/bonos`;
    private http = inject(HttpClient);

    public getBonos():Observable<any>{
        return this.http.get<any>(`${this.BASE_URL}`)
    }

    public blocks (userId:number, bonoId:number):Observable<any>{
        return this.http.post<any>(`${this.BASE_URL}/${userId}/bloquear/${bonoId}`,{});
    }


}