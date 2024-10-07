import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./jugadores/jugadores.module').then( m => m.JugadoresPageModule)
  },
  {
    path: 'jugadores2',
    loadChildren: () => import('./jugadores2/jugadores2.module').then( m => m.Jugadores2PageModule)
  },
  {
    path: 'jugadores3',
    loadChildren: () => import('./jugadores3/jugadores3.module').then( m => m.Jugadores3PageModule)
  },
  {
    path: 'jugadores4',
    loadChildren: () => import('./jugadores4/jugadores4.module').then( m => m.Jugadores4PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
