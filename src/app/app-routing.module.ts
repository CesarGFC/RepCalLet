import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard, CanDeActivateViaAuthGuard } from './guards/permissions';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [CanDeActivateViaAuthGuard]
  },
    {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [CanActivateViaAuthGuard]

  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'empleados',
    loadChildren: () => import('./pages/empleados/empleados.module').then( m => m.EmpleadosPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'entradas',
    loadChildren: () => import('./pages/entradas/entradas.module').then( m => m.EntradasPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./pages/movimientos/movimientos.module').then( m => m.MovimientosPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then( m => m.NotasPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'ventas',
    loadChildren: () => import('./pages/ventas/ventas.module').then( m => m.VentasPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'salidas',
    loadChildren: () => import('./pages/salidas/salidas.module').then( m => m.SalidasPageModule),
    canActivate: [CanActivateViaAuthGuard]
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
