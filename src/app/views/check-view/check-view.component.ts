import { Component, OnInit } from "@angular/core";
import { StoreService, Check } from "@app/services/store.service"

@Component({
	selector: "app-check-view",
	templateUrl: "./check-view.component.html",
})
export class CheckViewComponent implements OnInit {

	checks: Check[]
	keyword: string

  	constructor(private store: StoreService) {}

	get filtered() {

		if (!this.keyword) {
			return this.checks
		}

		let list = this.checks.filter(check => {
			return check.label.startsWith(this.keyword)
		})

		if (list.length != 0) {
			return list
		}

		return this.checks.filter(check => {
			return check.system.startsWith(this.keyword)
		})
	}

	public search(event: KeyboardEvent) {
		let target: any = event.target

		if (event.key == "Escape") {
			target.value = ""
		}

		this.keyword = target.value
	}

	ngOnInit(): void {
		this.store.getChecks().subscribe(checks => {
			this.checks = checks
		})

	}

}
