import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { TestViewComponent } from './test-view/test-view.component';
import { InAppComponent } from './in-app/in-app.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home/login', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'test-view', component: TestViewComponent, data: { text: 'Test View' } },
  { path: 'in-app', component: InAppComponent, data: { text: 'In-App' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
