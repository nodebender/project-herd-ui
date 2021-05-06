import { Component, OnInit } from "@angular/core";
import { ApiService, Check } from "@app/services/api.service"
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs"

interface Item {
	name: string
	selected: boolean
}

@Component({
	selector: "app-check-view",
	templateUrl: "./check-view.component.html",
})
export class CheckViewComponent implements OnInit {

	allChecks: Check[] = []
	allTags: Item[] = []
	allSystems: Item[] = []
	checks$: Observable<Check[]>
	keyword: string

  	constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) {
	  }

	get active() {

		if (this.keyword == "") {
			return false
		}

		return this.systems.length > 0 || this.labels.length > 0 || this.tags.length > 0
	}

	get systems() {		
		let list = this.allSystems.filter(system => {
			return system.name.startsWith(this.keyword)
		})

		return list.sort((a, b) => {
			return (a.name > b.name) ? 1 : -1
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
		return this.allTags.filter(tag => {
			return tag.name.startsWith(this.keyword, 0)
		})
	}

	private clear() {
		this.keyword = ""
	}

	private fetchData(checks: Check[]) {

		let systems = new Set<string>()
		let tags = new Set<string>()

		checks.map(check => {
			
			systems.add(check.system)

			check.tags.map(tag => {
					tags.add(tag)
			})
		})

		Array.from(tags).map(tag => {
			let item: Item = {
				name: tag,
				selected: false
			}

			this.allTags.push(item)
		})
		
		Array.from(systems).map(system => {
			let item: Item = {
				name: system,
				selected: false
			}

			this.allSystems.push(item)
		})
	}

	private toggleItem(item: Item) {
		item.selected = !item.selected
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

		this.checks$ = this.api.fetchAll()

		this.checks$.subscribe({
			next: (checks) => {
				this.allChecks = checks
				this.fetchData(checks)
			},
			error: (err) => {
				alert(err.message)
			}
		})


	}

}
