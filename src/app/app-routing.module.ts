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
    redirectTo: "memory-game",
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
  {
    path: "imc",
    loadChildren: () =>
      import("./pages/imc/imc.module").then((m) => m.ImcPageModule),
  },
  {
    path: "animals",
    loadChildren: () =>
      import("./pages/animals/animals.module").then((m) => m.AnimalsPageModule),
  },
  {
    path: "typage",
    loadChildren: () =>
      import("./pages/typage/typage.module").then((m) => m.TypagePageModule),
  },
  {
    path: "todo-list",
    loadChildren: () =>
      import("./pages/todo-list/todo-list.module").then(
        (m) => m.TodoListPageModule
      ),
  },
  {
    path: "todo-form",
    loadChildren: () =>
      import("./pages/todo-form/todo-form.module").then(
        (m) => m.TodoFormPageModule
      ),
  },
  {
    path: "memory-game",
    loadChildren: () =>
      import("./pages/memory-game/memory-game.module").then(
        (m) => m.MemoryGamePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
