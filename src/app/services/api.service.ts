import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";

export interface Check {
	system: string
	label: string
	statusCode: string
	description: string
	tags: string[]
	severity: number
	ttl: number
	network: string[]
	updatedAt: number
	changedAt: number
}

@Injectable({
  	providedIn: "root"
})
export class ApiService {

	constructor(private http: HttpClient) {}

	public getById(id: string) {
		const params = new HttpParams().set("id", id)
		return this.http.get<Check>("/api/check", {params})
	}

	public fetchAll(): Observable<Check[]> {
		return this.http.get<Check[]>("/api/checks")
	}
}
