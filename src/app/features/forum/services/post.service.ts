import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class PostService {

    private http  = inject(HttpClient);
}