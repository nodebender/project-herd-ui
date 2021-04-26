import { ComponentFixture, TestBed } from "@angular/core/testing";

import { StatSeverityComponent } from "./stat-severity.component";

describe("StatSeverityComponent", () => {
  let component: StatSeverityComponent;
  let fixture: ComponentFixture<StatSeverityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatSeverityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatSeverityComponent);
    component = fixture.componentInstance;

	// Inject input values
	component.level = "emergency"
	component.value = 1111

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render level", () => {
    const compiled = fixture.nativeElement;
	let div = compiled.querySelector(".stat-key h5")
    expect(div.textContent).toContain("emergency");
  });

  it("should render value", () => {
    const compiled = fixture.nativeElement;
	let div = compiled.querySelector(".stat-value h2")
    expect(div.textContent).toContain("1111");
  });

});
