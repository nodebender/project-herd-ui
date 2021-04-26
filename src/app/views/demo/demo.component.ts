import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

	instance: any = {
		name: "monbender-1",
		version: "1.0.1beta+1",
		status: true
	}

	constructor() {}

  	ngOnInit(): void {}

}
