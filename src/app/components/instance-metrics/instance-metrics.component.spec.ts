import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { InstanceMetricsComponent } from "./instance-metrics.component";

describe("InstanceMetricsComponent", () => {
  let component: InstanceMetricsComponent;
  let fixture: ComponentFixture<InstanceMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstanceMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceMetricsComponent);
    component = fixture.componentInstance;

	const metrics = [
		{
			key: "Reports per hour",
			value: 3242
		},
		{
			key: "Checks per hour",
			value: 111
		}
	]

	component.metrics = metrics
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });


  it("should render 2 list elements", () => {
    const compiled = fixture.nativeElement;

	// Get a list of all <li> elements
	const list = fixture.debugElement.queryAll(By.css("li"));

	// We injected 2 - so there should be 2
    expect(list.length).toBe(2);
  });

  it("should render the injected metrics", () => {
    const compiled = fixture.nativeElement;

	// Get a list of all <li> elements
	const list = fixture.debugElement.queryAll(By.css("li"));

	// Take 2nd element `Checks per hour`
	const report = list[1].nativeElement

	// Result should be the value of the <p> element
	const result = report.querySelector("p").textContent
	
    expect(result).toBe("111");
  });

});
