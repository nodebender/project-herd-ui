import { Component, OnInit, Input } from "@angular/core";

interface Instance {
	name: string
	version: string
	status: boolean
}

@Component({
  selector: "app-instance-status",
  templateUrl: "./instance-status.component.html",
})
export class InstanceStatusComponent implements OnInit {

	@Input() info: Instance
	constructor() {}

	get connection() {
		if (this.info.status) {
			return "Online"
		}

		return "Offline"
	}

	ngOnInit(): void {}

}
