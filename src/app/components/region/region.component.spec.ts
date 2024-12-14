import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionComponent } from './region.component';
import { beforeEach, describe } from 'node:test';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
