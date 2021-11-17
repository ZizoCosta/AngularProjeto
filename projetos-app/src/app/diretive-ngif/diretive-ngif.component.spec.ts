import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveNgifComponent } from './diretive-ngif.component';

describe('DiretiveNgifComponent', () => {
  let component: DiretiveNgifComponent;
  let fixture: ComponentFixture<DiretiveNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretiveNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretiveNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
