import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "stat-severity",
  templateUrl: "./stat-severity.component.html",
})
export class StatSeverityComponent implements OnInit {

	@Input() level: string
	@Input() value: number

	constructor() {}

	ngOnInit(): void {}
}
