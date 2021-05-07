import { Component, OnInit } from "@angular/core";
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

	filterSystem: Set<string>
	filterTags: Set<string>

  	constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {
		this.filterSystem = new Set<string>()
		this.filterTags = new Set<string>()
	}

	get notclear() {
		return this.filterTags.size > 0 || this.filterSystem.size > 0
	}

	get active() {
		if (this.keyword.length == 0) {
			return false
		}

		return true
	}

	get filtered(): Check[] {

		let list = this.allChecks

		if (this.filterTags.size > 0) {
			list = list.filter(check => {
				return check.tags.some(tag => this.filterTags.has(tag))
			})
		}

		if (this.filterSystem.size > 0) {
			list = list.filter(check => {
				return this.filterSystem.has(check.system)
			})
		}


		return list
	}

	get systems() {		
		let list = new Set<string>()
		
		this.allChecks.map(check => {
			if (check.system.startsWith(this.keyword)) {
				list.add(check.system)
			}
		})

		return Array.from(list.values()).sort((a, b) => {
			return (a > b) ? 1 : -1
		})
	}

	get labels() {

		let list = this.allChecks.filter(check => {
			return check.label.startsWith(this.keyword)
		})

		return Array.from(list).sort((a, b) => {
			return (a.label > b.label) ? 1 : -1
		})
	}

	get tags() {
		let list = new Set<string>()

		this.allChecks.map(check => {
			check.tags.map(tag => {
				if (tag.startsWith(this.keyword)) {
					list.add(tag)
				}
			})
		})

		return Array.from(list).sort((a, b) => {
			return (a > b) ? 1 : -1
		})
	}

	private applyFilter() {
		this.keyword = ""
		let tags: (string | string[]) 
		let systems: (string | string[])
		
		if (this.filterTags.size == 1) {
			tags = Array.from(this.filterTags)[0]
		}

		if (this.filterTags.size > 1) {
			tags = Array.from(this.filterTags)
		}

		if (this.filterSystem.size == 1) {
			systems = Array.from(this.filterSystem)[0]
		}

		if (this.filterSystem.size > 1) {
			systems = Array.from(this.filterSystem)
		}

		let params = {
			tag: tags,
			system: systems
		}


		return this.router.navigate(["/checks"], {queryParams: params})
	}

	private clear() {
		this.keyword = ""
		this.filterTags.clear()
		this.filterSystem.clear()
		return this.router.navigate(["/checks"])
	}

	private tagSelected(tag: string) {
		return this.filterTags.has(tag)
	}

	private systemSelected(system: string) {
		return this.filterSystem.has(system)
	}

	private toggleTag(tag: string) {
		if (this.filterTags.has(tag)) {
			this.filterTags.delete(tag)
			return
		}

		this.filterTags.add(tag)
	}

	private toggleSystem(system: string) {
		if (this.filterSystem.has(system)) {
			this.filterSystem.delete(system)
			return
		}

		this.filterSystem.add(system)
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

			if (typeof query.tag == "string") {
				this.filterTags.add(query.tag)
			}

			if (Array.isArray(query.tag)) {
				query.tag.map(tag => this.filterTags.add(tag))
			}

			if (typeof query.system == "string") {
				this.filterSystem.add(query.system)
			}

			if (Array.isArray(query.tag)) {
				query.system.map(system =>this.filterSystem.add(system))
			}

		})

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
