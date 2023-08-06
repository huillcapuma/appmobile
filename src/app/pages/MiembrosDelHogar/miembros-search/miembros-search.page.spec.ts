import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiembrosSearchPage } from './miembros-search.page';

describe('MiembrosSearchPage', () => {
  let component: MiembrosSearchPage;
  let fixture: ComponentFixture<MiembrosSearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiembrosSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
