import { Component, OnInit } from "@angular/core";
import { StoreService, Check } from "@app/services/store.service"
import { Router, ActivatedRoute } from '@angular/router';
import { delay, share } from 'rxjs/operators';
import { Observable } from "rxjs"
@Component({
	selector: "app-check-view",
	templateUrl: "./check-view.component.html",
})
export class CheckViewComponent implements OnInit {

	allChecks: Check[]
	allTags: Set<string>
	checks$: Observable<Check[]>
	keyword: string

  	constructor(private store: StoreService, private router: Router, private route: ActivatedRoute) {
		  this.allTags = new Set<string>()
	  }

	get active() {

		if (this.keyword == "") {
			return false
		}

		return this.systems.length > 0 || this.labels.length > 0 || this.tags.length > 0
	}

	get systems() {
		let list = this.allChecks.filter(check => {
			return check.system.startsWith(this.keyword)
		})

		return list.sort((a, b) => {
			return (a.system > b.system) ? 1 : -1
		})
	}

	get labels() {
		let list = this.allChecks.filter(check => {
			return check.label.startsWith(this.keyword)
		})

		return list.sort((a, b) => {
			return (a.label > b.label) ? 1 : -1
		})
	}

	get tags() {
		return Array.from(this.allTags).filter(tag => {
			return tag.startsWith(this.keyword, 0)
		})
	}

	private clear() {
		this.keyword = ""
	}

	private addTags(checks: Check[]) {
		checks.map(check => {
			check.tags.map(tag => this.allTags.add(tag))
		})
	}

	public goTo(check: Check) {
		let identifier = `${check.system}-${check.label}`

		return this.router.navigate(["/check/", identifier])
	}

	public search(event: KeyboardEvent) {
		if (event.key == "Escape") {
			this.keyword = ""
		}
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(query => {
			console.log(query)
		})

		console.log(this.route.data)

		this.checks$ = this.store.getChecks()

		this.checks$.subscribe(checks => {
			this.allChecks = checks
			this.addTags(checks)
		})


	}

}
