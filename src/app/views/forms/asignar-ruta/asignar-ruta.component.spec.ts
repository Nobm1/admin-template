import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarRutaComponent } from './asignar-ruta.component';

describe('AsignarRutaComponent', () => {
  let component: AsignarRutaComponent;
  let fixture: ComponentFixture<AsignarRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarRutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
