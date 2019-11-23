import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTE_URLS } from './shared/constants/routes.constant';
import { ActiveCouponGuard } from './shared/guards/active-coupon.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTE_URLS.LOGIN,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTE_URLS.LOGIN,
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: APP_ROUTE_URLS.REGISTER,
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule),
  },
  {
    path: APP_ROUTE_URLS.INFO,
    loadChildren: () => import('./info/info.module').then(m => m.InfoPageModule),
  },
  {
    path: APP_ROUTE_URLS.PLAYER,
    loadChildren: () => import('./player/player.module').then(m => m.PlayerPageModule),
    canActivate: [
      ActiveCouponGuard,
    ],
  },
  {
    path: APP_ROUTE_URLS.COUPONS,
    loadChildren: () => import('./coupons/coupons.module').then(m => m.CouponsPageModule),
  },
  {
    path: APP_ROUTE_URLS.HISTORY,
    loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule),
  },
  {
    path: APP_ROUTE_URLS.UNSUB,
    loadChildren: () => import('./unsub/unsub.module').then(m => m.UnsubPageModule),
    canActivate: [
      ActiveCouponGuard,
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
