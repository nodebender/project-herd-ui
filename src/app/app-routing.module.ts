import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "@app/views/demo/demo.component"
import { CheckViewComponent } from "@app/views/check-view/check-view.component"
const routes: Routes = [
	{
		path: "",
		component: DemoComponent
	},
	{
		path: "checks",
		component: CheckViewComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
