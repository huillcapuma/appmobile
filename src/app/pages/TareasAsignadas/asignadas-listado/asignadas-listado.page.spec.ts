import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignadasListadoPage } from './asignadas-listado.page';

describe('AsignadasListadoPage', () => {
  let component: AsignadasListadoPage;
  let fixture: ComponentFixture<AsignadasListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignadasListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
