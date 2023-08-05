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
      title: 'Atenciones',
      url: '/ordenesdeservicio-listado',
      icon: '/assets/imgs/icon_atenciones.png'
    },
    {
      title: 'Tareas',
      url: '/listatareas',
      icon: '/assets/imgs/icon_tareas.png'
    },
    {
      title: 'Clientes',
      url: '/clientes-listado',
      icon: '/assets/imgs/icon_clientes.png'
    },
    {
      title: 'Acerca De',
      url: '/about',
      icon: '/assets/imgs/icon_about.png'
    }
  ];
  constructor() {}
}
