import { Component } from "@angular/core";
import { ApiService } from "@app/services/api.service"
import { StoreService } from "@app/services/store.service"
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	message = "welcome herders!"

	constructor(private api: ApiService, private store: StoreService) {
	
		let req = api.fetchAll()
		
		let sub = req.subscribe(checks => {
			this.store.provision(checks)
			sub.unsubscribe()
		})
	}
}
