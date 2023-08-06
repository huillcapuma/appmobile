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
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
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
    loadChildren: () => import('./pages/tareas/listatareas/listatareas.module').then( m => m.ListatareasPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/menuconfiguracion/about/about.module').then( m => m.AboutPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./pages/menuconfiguracion/ajustes/ajustes.module').then( m => m.AjustesPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'recuperacontrasena',
    loadChildren: () => import('./pages/usuarios/recuperacontrasena/recuperacontrasena.module').then( m => m.RecuperacontrasenaPageModule)
  },
  {
    path: 'nuevatarea',
    loadChildren: () => import('./pages/tareas/nuevatarea/nuevatarea.module').then( m => m.NuevatareaPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'miembros-add-edit',
    loadChildren: () => import('./pages/MiembrosDelHogar/miembros-add-edit/miembros-add-edit.module').then( m => m.MiembrosAddEditPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'miembros-listado',
    loadChildren: () => import('./pages/MiembrosDelHogar/miembros-listado/miembros-listado.module').then( m => m.MiembrosListadoPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'miembros-add-edit/:id',
    loadChildren: () => import('./pages/MiembrosDelHogar/miembros-add-edit/miembros-add-edit.module').then(m => m.MiembrosAddEditPageModule)
  },
  {
    path: 'miembros-search',
    loadChildren: () => import('./pages/MiembrosDelHogar/miembros-search/miembros-search.module').then( m => m.MiembrosSearchPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'asignadas-add-edit',
    loadChildren: () => import('./pages/TareasAsignadas/asignadas-add-edit/asignadas-add-edit.module').then( m => m.AsignadasAddEditPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'asignadas-add-edit/:id',
    loadChildren: () => import('./pages/TareasAsignadas/asignadas-add-edit/asignadas-add-edit.module').then(m => m.AsignadasAddEditPageModule)
  },
  {
    path: 'asignadas-listado',
    loadChildren: () => import('./pages/TareasAsignadas/asignadas-listado/asignadas-listado.module').then( m => m.AsignadasListadoPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
