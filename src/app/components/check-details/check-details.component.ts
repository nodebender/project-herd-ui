import { Component, OnInit, Input } from "@angular/core";

interface State {
	system: string
	label: string
	status_code: string
	description: string
	tags: string[]
	severity: number
	ttl: number
	network: string[]
	updated_at: number
	changed_at: number
}

@Component({
  selector: "check-details",
  templateUrl: "./check-details.component.html",
})
export class CheckDetailsComponent implements OnInit {

	@Input() state: State
	constructor() { }

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
	}

}
