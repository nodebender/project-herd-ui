import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-instance-uptime",
  templateUrl: "./instance-uptime.component.html",
})
export class InstanceUptimeComponent implements OnInit {

	@Input() unix: number

  constructor() { }

  get uptime() {

	const seconds = this.unix / 1000

	const days = Math.floor((seconds % 31536000) / 86400); 
	const hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
	const minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);

	return `${days}D ${hours}H ${minutes}M`

  }

  ngOnInit(): void {
  }

}
