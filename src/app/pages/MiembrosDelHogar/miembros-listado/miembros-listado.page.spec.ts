import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiembrosListadoPage } from './miembros-listado.page';

describe('MiembrosListadoPage', () => {
  let component: MiembrosListadoPage;
  let fixture: ComponentFixture<MiembrosListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiembrosListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
