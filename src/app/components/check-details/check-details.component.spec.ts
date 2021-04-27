import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { fakeAsync, tick } from "@angular/core/testing"
import { CheckDetailsComponent } from "./check-details.component";

describe("CheckDetailsComponent", () => {
  let component: CheckDetailsComponent;
  let fixture: ComponentFixture<CheckDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDetailsComponent);
    component = fixture.componentInstance;

	component.state = {
		system: "testsys",
		label: "unit",
		status_code: "CPU_USAGE_EXCEEDED",
		description: "The cpu usage is currently 82%.Polling every 10 sec.",
		tags: [
			"demo",
			"testing",
			"something"
		],
		severity: 5,
		ttl: 10,
		network: [
			"unknown"
		],
		updated_at: 1618210814,
		changed_at: 1618210814,
	}

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render system", () => {
    const compiled = fixture.nativeElement;
	let h2 = compiled.querySelector(".details-title .system")
    expect(h2.textContent).toBe("testsys");
  });

  it("should render label", () => {
    const compiled = fixture.nativeElement;
	let h2 = compiled.querySelector(".details-title .label")
    expect(h2.textContent).toBe("unit");
  });

  it("should render status code", () => {
    const compiled = fixture.nativeElement;
	let p = compiled.querySelector("#status")

    expect(p.textContent).toBe("CPU_USAGE_EXCEEDED");
  });

  it("should render (translated) severity", () => {
    const compiled = fixture.nativeElement;
	let p = compiled.querySelector("#severity")

    expect(p.textContent).toBe("NOTICE");
  });

  it("should render description", () => {
    const compiled = fixture.nativeElement;
	let p = compiled.querySelector("#description")

    expect(p.textContent).toBe("The cpu usage is currently 82%.Polling every 10 sec.");
  });

  it("should render 3 tags", fakeAsync(() => {
	const tags = fixture.debugElement.queryAll(By.css('.details-tags li'));
    expect(tags.length).toBe(3)
  }));
});
