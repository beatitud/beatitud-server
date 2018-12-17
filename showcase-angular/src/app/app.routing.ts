import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./scenes/home/home.component";
import { ApiComponent } from "./scenes/api/api.component";
import { PageNotFoundComponent } from "./components/pageNotFound/page.not.found.component";
import { DataComponent } from "./scenes/data/data.component";

const appRoutes: Routes = [
  /*
  * Paths
  * */
  { path: 'home', component: HomeComponent, },
  { path: 'api', component: ApiComponent, },
  { path: 'data', component: DataComponent,},
  { path: "**", component: PageNotFoundComponent,},
  /*
  * Redirection
  * */
  // { path: '*', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

export const routingComponents = [ApiComponent, HomeComponent, PageNotFoundComponent, DataComponent, ]
