import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestViewComponent } from './test-view/test-view.component';
import { InAppComponent } from './in-app/in-app.component';
import { IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxAvatarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestViewComponent,
    InAppComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxNavigationDrawerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
