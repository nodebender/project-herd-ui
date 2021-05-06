import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CheckViewComponent } from "@app/views/check-view/check-view.component"
import { CheckDetailsComponent } from "@app/views/check-details/check-details.component"

const routes: Routes = [
	{
		path: "",
		redirectTo: '/checks',
		pathMatch: "full"
	},
	{
		path: "checks",
		component: CheckViewComponent
	},
	{
		path: "check/:id",
		component: CheckDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
