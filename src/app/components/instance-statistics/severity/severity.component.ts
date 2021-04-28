import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "severity",
  templateUrl: "./severity.component.html",
})
export class SeverityComponent implements OnInit {

	@Input() level: string
	@Input() value: number

	constructor() {}

	ngOnInit(): void {}
}
