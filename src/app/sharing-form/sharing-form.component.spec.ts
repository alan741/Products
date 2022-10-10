import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingFormComponent } from './sharing-form.component';

describe('SharingFormComponent', () => {
  let component: SharingFormComponent;
  let fixture: ComponentFixture<SharingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
