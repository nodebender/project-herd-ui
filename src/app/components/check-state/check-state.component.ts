import { Component, OnInit, Input } from '@angular/core';

interface State {
	system: string
	label: string
	status_code: string
	updated_at: number
	changed_at: number
}

@Component({
  selector: 'check-state',
  templateUrl: './check-state.component.html',
})
export class CheckStateComponent implements OnInit {

	@Input() state: State
	constructor() { }

	ngOnInit(): void {
	}

}
