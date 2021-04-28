import { Component, OnInit, Input } from "@angular/core";

interface State {
	system: string
	label: string
	statusCode: string
	updatedAt: number
	changedAt: number
}

@Component({
  selector: "app-check-state",
  templateUrl: "./check-state.component.html",
})
export class CheckStateComponent implements OnInit {

	@Input() state: State
	constructor() { }

	ngOnInit(): void {
	}

}
