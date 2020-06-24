import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  { path: "main-page", component: MainPageComponent },
  { path: "contact-me", component: ContactMeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "about-me", component: AboutMeComponent },
  { path: "", redirectTo: "/main-page", pathMatch: "full" },
  { path: "**", redirectTo: "/main-page", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
