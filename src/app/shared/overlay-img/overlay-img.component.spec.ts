import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayImgComponent } from './overlay-img.component';

describe('OverlayImgComponent', () => {
  let component: OverlayImgComponent;
  let fixture: ComponentFixture<OverlayImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
