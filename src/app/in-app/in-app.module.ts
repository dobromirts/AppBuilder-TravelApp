import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InAppRoutingModule } from './in-app-routing.module';
import { InAppComponent } from './in-app.component';
import { ArticlesComponent } from './articles/articles.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxAvatarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InAppComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    InAppRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    FormsModule,
    IgxToggleModule,
    IgxAvatarModule,
    IgxNavigationDrawerModule
  ]
})
export class InAppModule {
}
