import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-severity",
  templateUrl: "./severity.component.html",
})
export class SeverityComponent implements OnInit {

	@Input() level: string
	@Input() value: number

	constructor() {}

	ngOnInit(): void {}
}
