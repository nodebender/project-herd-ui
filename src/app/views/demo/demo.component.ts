import { Component, OnInit } from '@angular/core';

interface Check {
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

	check: Check = {
		system: "testsys",
		label: "unit",
		status_code: "CPU_USAGE_EXCEEDED",
		description: "The cpu usage is currently 82%.Polling every 10 sec.",
		tags: [
			"demo",
			"testing",
			"something"
		],
		severity: 5,
		ttl: 10,
		network: [
			"unknown"
		],
		updated_at: 1618210814,
		changed_at: 1618210814,
	}

	comment: any = {
		author: "Username",
		message: "I am taking care of this problem at the moment. Just don’t touch anything...",
		created: 1618210814
	}

	constructor() {}

  	ngOnInit(): void {}

}
