import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

	uptime: number = 1618210814

	statistics: any = {
		emergency: 12,
		alert: 42,
		critical: 5,
		error: 22,
		warning: 67,
		notice: 178,
		informational: 99,
		debug: 9,
	}

	instance: any = {
		name: "monbender-1",
		version: "1.0.1beta+1",
		status: true
	}


	metrics: any[] = [
		{
			key: "Reports per hour",
			value: 234234,
		},
		{
			key: "Changes per hour",
			value: 2134,
		}
	]


	check = {
		system: "testsys",
		label: "unit",
		status_code: "CHECKING",
		updated_at: 1618210814,
		changed_at: 1618210814,
	}

	constructor() {}

  	ngOnInit(): void {}

}
