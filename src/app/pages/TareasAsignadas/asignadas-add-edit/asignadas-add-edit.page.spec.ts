import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignadasAddEditPage } from './asignadas-add-edit.page';

describe('AsignadasAddEditPage', () => {
  let component: AsignadasAddEditPage;
  let fixture: ComponentFixture<AsignadasAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignadasAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
