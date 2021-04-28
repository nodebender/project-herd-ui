import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "instance-uptime",
  templateUrl: "./instance-uptime.component.html",
})
export class InstanceUptimeComponent implements OnInit {

	@Input() unix: number

  constructor() { }

  get uptime() {

	let seconds = this.unix / 1000

	var days = Math.floor((seconds % 31536000) / 86400); 
	var hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
	var minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);

	return `${days}D ${hours}H ${minutes}M`

  }

  ngOnInit(): void {
  }

}
