import { Component, OnInit, Input } from "@angular/core";

interface Statistics {
	emergency: number
	alert: number
	critical: number
	error: number
	warning: number
	notice: number
	informational: number
	debug: number
}

@Component({
  selector: "app-instance-statistics",
  templateUrl: "./instance-statistics.component.html",
})
export class InstanceStatisticsComponent implements OnInit {

	@Input() statistics: Statistics
	constructor() { }

	ngOnInit(): void {}

}
