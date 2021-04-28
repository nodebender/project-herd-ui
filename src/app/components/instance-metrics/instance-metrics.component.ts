import { Component, OnInit, Input } from '@angular/core';

interface Metric {
	key: string
	value: any
}

@Component({
  selector: 'instance-metrics',
  templateUrl: './instance-metrics.component.html',
})
export class InstanceMetricsComponent implements OnInit {

	@Input() metrics: Metric[]
	constructor() { }

	ngOnInit(): void {
	}

}
