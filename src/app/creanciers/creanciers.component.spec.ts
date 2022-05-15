import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreanciersComponent } from './creanciers.component';

describe('CreanciersComponent', () => {
  let component: CreanciersComponent;
  let fixture: ComponentFixture<CreanciersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreanciersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreanciersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
