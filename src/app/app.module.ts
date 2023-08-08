import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {ImageLibraryComponent} from './cards/image-library/image-library.component';
import {CodeLibraryComponent} from './cards/code-library/code-library.component';
import {RouteLibraryComponent} from './cards/route-library/route-library.component';
import {AuthorLibraryComponent} from './cards/author-library/author-library.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageLibraryComponent,
    CodeLibraryComponent,
    RouteLibraryComponent,
    AuthorLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
