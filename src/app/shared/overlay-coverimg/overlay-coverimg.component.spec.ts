import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayCoverimgComponent } from './overlay-coverimg.component';

describe('OverlayCoverimgComponent', () => {
  let component: OverlayCoverimgComponent;
  let fixture: ComponentFixture<OverlayCoverimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayCoverimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayCoverimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
