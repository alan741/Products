import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaDamaComponentComponent } from './ropa-dama-component.component';

describe('RopaDamaComponentComponent', () => {
  let component: RopaDamaComponentComponent;
  let fixture: ComponentFixture<RopaDamaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaDamaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaDamaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
