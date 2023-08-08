import {NgModule} from '@angular/core';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import {RouteLibraryComponent} from "./cards/route-library/route-library.component";
import {CodeLibraryComponent} from "./cards/code-library/code-library.component";
import {ImageLibraryComponent} from "./cards/image-library/image-library.component";
import {AuthorLibraryComponent} from "./cards/author-library/author-library.component";

const routes: Routes = [
  {path: 'route-library', component: RouteLibraryComponent},
  {path: 'code-library', component: CodeLibraryComponent},
  {path: 'image-library', component: ImageLibraryComponent},
  {path: 'author-library', component: AuthorLibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
