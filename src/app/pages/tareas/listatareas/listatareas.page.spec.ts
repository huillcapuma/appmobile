import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListatareasPage } from './listatareas.page';

describe('ListatareasPage', () => {
  let component: ListatareasPage;
  let fixture: ComponentFixture<ListatareasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListatareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
