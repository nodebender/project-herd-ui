import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "@app/services/api.service"

interface State {
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

@Component({
  selector: "app-check-details",
  templateUrl: "./check-details.component.html",
})
export class CheckDetailsComponent implements OnInit {

	identifier: string
	ready: boolean
	state: State

	constructor(private route: ActivatedRoute, private api: ApiService) {}

	get severity() {
		switch(this.state.severity) {
			case 0: {
				return "EMERGENCY"
			}
			case 1: {
				return "ALERT"
			}
			case 2: {
				return "CRITICAL"
			}
			case 3: {
				return "ERROR"
			}
			case 4: {
				return "WARNING"
			}
			case 5: {
				return "NOTICE"
			}
			case 6: {
				return "INFORMATIONAL"
			}
			case 7: {
				return "DEBUG"
			}

		}
	}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.api.getById(params.id).subscribe(state => {
				this.state = state
				this.ready = true
			})
		})


	}

}
