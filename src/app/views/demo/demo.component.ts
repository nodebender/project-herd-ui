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

	constructor() {}

  	ngOnInit(): void {}

}
