import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceStatusComponent } from './instance-status.component';

describe('InstanceStatusComponent', () => {
  let component: InstanceStatusComponent;
  let fixture: ComponentFixture<InstanceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstanceStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceStatusComponent);
    component = fixture.componentInstance;

	// inject data
	component.info = {
		name: "testinstance-1",
		version: "0.0.1beta+1",
		status: true
	}

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render name", () => {
    const compiled = fixture.nativeElement;
	let name = compiled.querySelector("div h2")
    expect(name.textContent).toContain("testinstance-1");
  });

  it("should render version", () => {
    const compiled = fixture.nativeElement;
	let version = compiled.querySelector("#version")
    expect(version.textContent).toContain("0.0.1beta+1");
  });

  it("should render connection status", () => {
    const compiled = fixture.nativeElement;
	let connection = compiled.querySelector("#connection")
    expect(connection.textContent).toBeTruthy();
  });

});
