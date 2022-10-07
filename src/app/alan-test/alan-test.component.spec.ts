import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlanTestComponent } from './alan-test.component';

describe('AlanTestComponent', () => {
  let component: AlanTestComponent;
  let fixture: ComponentFixture<AlanTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlanTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlanTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
