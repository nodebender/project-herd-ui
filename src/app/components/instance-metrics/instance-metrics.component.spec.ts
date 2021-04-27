import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceMetricsComponent } from './instance-metrics.component';

describe('InstanceMetricsComponent', () => {
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
