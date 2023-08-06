import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex:any;
  pages = [
    {
      title: 'Tareas Asignadas',
      url: '/asignadas-listado',
      icon: '/assets/imgs/icon_tareasasignadas.png'
    },
    {
      title: 'Tareas',
      url: '/listatareas',
      icon: '/assets/imgs/icon_tareas.png'
    },
    {
      title: 'Miembros del Hogar',
      url: '/miembros-listado',
      icon: '/assets/imgs/Miembros_icon.png'
    },
    {
      title: 'Acerca De',
      url: '/about',
      icon: '/assets/imgs/icon_about.png'
    },
    {
      title: 'Ajustes',
      url: '/ajustes',
      icon: '/assets/imgs/icon_ajustes.png'
    }
  ];
  constructor() {}
}
