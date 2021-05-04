import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
  	providedIn: 'root'
})
export class StoreService {

	checks: Subject<Check[]>
	storage: Map<string, Check>

	constructor() {
		this.storage = new Map<string, Check>()
		this.checks = new Subject<Check[]>()
	}

	provision(checks: Check[]) {
		checks.map(check => {
			let id: string = `${check.system}-${check.label}`
			this.storage.set(id, check)
		})

		let list = Array.from(this.storage.values())
		this.checks.next(list)
	}

	getById(id: string): Check {
		return this.storage.get(id)
	}

	getChecks(): Observable<Check[]> {
		return this.checks.asObservable()
	}


}
