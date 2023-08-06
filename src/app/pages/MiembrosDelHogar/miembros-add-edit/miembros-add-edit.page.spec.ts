import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiembrosAddEditPage } from './miembros-add-edit.page';

describe('MiembrosAddEditPage', () => {
  let component: MiembrosAddEditPage;
  let fixture: ComponentFixture<MiembrosAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiembrosAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
