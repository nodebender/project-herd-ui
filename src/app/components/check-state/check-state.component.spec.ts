import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Timer } from "@app/pipes/human-date.pipe";

import { CheckStateComponent } from "./check-state.component";

describe("CheckStateComponent", () => {
  let component: CheckStateComponent;
  let fixture: ComponentFixture<CheckStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckStateComponent, Timer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStateComponent);
    component = fixture.componentInstance;

	component.state = {
		system: "testsys",
		label: "unit",
		statusCode: "CHECKING",
		updatedAt: 1618210814,
		changedAt: 1618210814,
	}

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render system", () => {
    const compiled = fixture.nativeElement;
	const connection = compiled.querySelector(".quick-title h4")
    expect(connection.textContent).toBe("testsys");
  });

  it("should render label", () => {
    const compiled = fixture.nativeElement;
	const connection = compiled.querySelector(".quick-title label")
    expect(connection.textContent).toBe("unit");
  });

  it("should render status code", () => {
    const compiled = fixture.nativeElement;
	const connection = compiled.querySelector(".info h2")
    expect(connection.textContent).toBe("CHECKING");
  });

  	// TODO: HERD-61 find a better way to test this!
	//   it("should render timestamp", () => {
	//     const compiled = fixture.nativeElement;
	// 	let connection = compiled.querySelector(".time h4")
	//     expect(connection.textContent).toBe("1618210814");
	//   });
});
