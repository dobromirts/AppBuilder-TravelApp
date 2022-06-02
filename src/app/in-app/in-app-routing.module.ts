import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InAppComponent } from './in-app.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [{ path: '', component: InAppComponent, children: [{ path: '', redirectTo: 'articles', pathMatch: 'full' }, { path: 'articles', component: ArticlesComponent, data: { text: 'Articles' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InAppRoutingModule {
}
