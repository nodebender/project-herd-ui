import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InstanceUptimeComponent } from "./instance-uptime.component";

describe("InstanceUptimeComponent", () => {
  let component: InstanceUptimeComponent;
  let fixture: ComponentFixture<InstanceUptimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstanceUptimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceUptimeComponent);
    component = fixture.componentInstance;

	// inject unix time 
	component.unix = 1618210814

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render name", () => {
    const compiled = fixture.nativeElement;
	let name = compiled.querySelector("div h1")
    expect(name.textContent).toContain("18D 17H 30M");
  });

});
