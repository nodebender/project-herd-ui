import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "@app/views/demo/demo.component"

const routes: Routes = [
	{
		path: "",
		component: DemoComponent

	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
