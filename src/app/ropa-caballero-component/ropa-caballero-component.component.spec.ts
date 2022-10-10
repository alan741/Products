import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaCaballeroComponentComponent } from './ropa-caballero-component.component';

describe('RopaCaballeroComponentComponent', () => {
  let component: RopaCaballeroComponentComponent;
  let fixture: ComponentFixture<RopaCaballeroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaCaballeroComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaCaballeroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
