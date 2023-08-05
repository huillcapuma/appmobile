import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/usuarios/login/login.page';
import { RegistrarusuarioPage } from './pages/usuarios/registrarusuario/registrarusuario.page';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  /*{
    path: 'login',
    component: LoginPage,
    ...canActivate(() => redirectUnauthorizedTo(['/registrarusuario']))
  },*/
  {
    path: 'clientes-add-edit',
    loadChildren: () => import('./pages/clientes/clientes-add-edit/clientes-add-edit.module').then(m => m.ClientesAddEditPageModule)
  },
  {
    path: 'clientes-listado',
    loadChildren: () => import('./pages/clientes/clientes-listado/clientes-listado.module').then(m => m.ClientesListadoPageModule)
  },
  {
    path: 'clientes-add-edit/:id',
    loadChildren: () => import('./pages/clientes/clientes-add-edit/clientes-add-edit.module').then(m => m.ClientesAddEditPageModule)
  },
  {
    path: 'ordenesdeservicio-add-edit',
    loadChildren: () => import('./pages/ordenesdeservicio/ordenesdeservicio-add-edit/ordenesdeservicio-add-edit.module').then(m => m.OrdenesDeServicioAddEditPageModule)
  },
  {
    path: 'ordenesdeservicio-add-edit/:id',
    loadChildren: () => import('./pages/ordenesdeservicio/ordenesdeservicio-add-edit/ordenesdeservicio-add-edit.module').then(m => m.OrdenesDeServicioAddEditPageModule)
  },
  {
    path: 'ordenesdeservicio-listado',
    loadChildren: () => import('./pages/ordenesdeservicio/ordenesdeservicio-listado/ordenesdeservicio-listado.module').then(m => m.OrdenesdeservicioListadoPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'clientes-search',
    loadChildren: () => import('./pages/clientes/clientes-search/clientes-search.module').then(m => m.ClientesSearchPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/usuarios/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarusuario',
    loadChildren: () => import('./pages/usuarios/registrarusuario/registrarusuario.module').then( m => m.RegistrarusuarioPageModule)
  },
  {
    path: 'listatareas',
    loadChildren: () => import('./pages/tareas/listatareas/listatareas.module').then( m => m.ListatareasPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/menuconfiguracion/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./pages/menuconfiguracion/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'recuperacontrasena',
    loadChildren: () => import('./pages/usuarios/recuperacontrasena/recuperacontrasena.module').then( m => m.RecuperacontrasenaPageModule)
  },
  {
    path: 'nuevatarea',
    loadChildren: () => import('./pages/tareas/nuevatarea/nuevatarea.module').then( m => m.NuevatareaPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
