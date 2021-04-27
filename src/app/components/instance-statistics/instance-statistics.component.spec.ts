import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { InstanceStatisticsComponent } from "./instance-statistics.component";

describe("InstanceStatisticsComponent", () => {
  let component: InstanceStatisticsComponent;
  let fixture: ComponentFixture<InstanceStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstanceStatisticsComponent ],
	  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceStatisticsComponent);
    component = fixture.componentInstance;
	
	// inject data
	component.statistics = {
		emergency: 12,
		alert: 42,
		critical: 5,
		error: 22,
		warning: 67,
		notice: 178,
		informational: 99,
		debug: 9,
	}

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render 8 stat-severity components", () => {
    const compiled = fixture.nativeElement;
	let list = fixture.debugElement.queryAll(By.css('stat-severity'));
    expect(list.length).toBe(8);
  });


});
