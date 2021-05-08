import { Component, OnInit, ɵɵtrustConstantResourceUrl } from "@angular/core";
import { ApiService, Check } from "@app/services/api.service"
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs"

@Component({
	selector: "app-check-view",
	templateUrl: "./check-view.component.html",
})
export class CheckViewComponent implements OnInit {

	allChecks: Check[] = []
	checks$: Observable<Check[]>
	keyword: string = ""

	showFilter: boolean

	filterLabels: boolean = true
	filterSystems: boolean = true
	filterTags: boolean = true

  	constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {}

	get filtered(): Check[] {
		let list: Check[] = this.allChecks

		if (this.keyword.length != 0) {
			list = []
		}

		let search = this.keyword.toLowerCase()

		if (this.filterLabels) {
			list = this.allChecks.filter(check => {
				return check.label.startsWith(search)
			})
		}

		if (this.filterSystems) {
			console.log("HAS SYSTEMS")
			let systems = this.allChecks.filter(check => {
				return check.system.startsWith(search)
			})

			list = list.concat(systems)
		}

		if (this.filterTags) {
			let tags = this.allChecks.filter(check => {
				return check.tags.some(tag => tag == search)
			})

			list = list.concat(tags)
		}

		return list
	}

	public toggleFilter() {
		console.log(this.showFilter)
		this.showFilter = !this.showFilter
	}

	public toggleLabels() {
		this.filterLabels = !this.filterLabels
	}


	public toggleSystems() {
		this.filterSystems = !this.filterSystems
	}

	public toggleTags() {
		this.filterTags = !this.filterTags
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
		this.checks$ = this.api.fetchAll()

		this.checks$.subscribe({
			next: (checks) => {
				this.allChecks = checks
			},
			error: (err) => {
				alert(err.message)
			}
		})


	}

}
