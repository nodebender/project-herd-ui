import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Check {
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
  	providedIn: 'root'
})
export class ApiService {

	constructor(private http: HttpClient) {}

	public fetchAll(): Observable<Check[]> {
		return this.http.get<Check[]>("/api/checks")
	}
}
