import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('../pages/productos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/tab3/tab3.module').then(m => m.Tab3PageModule)
      },  
      {
        path: 'tab4',
        loadChildren: () => import('../pages/tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
