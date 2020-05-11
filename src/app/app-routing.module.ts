import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "form",
    pathMatch: "full",
  },
  {
    path: "ionic-grid",
    loadChildren: () =>
      import("./pages/ionic-grid/ionic-grid.module").then(
        (m) => m.IonicGridPageModule
      ),
  },
  {
    path: "form",
    loadChildren: () =>
      import("./pages/form/form.module").then((m) => m.FormPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
