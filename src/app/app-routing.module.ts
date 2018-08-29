import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroComponent } from "./intro/intro.component";
import { HomePage } from "./home/home.page";
import { LoginPage } from "./login/login.page";

const routes: Routes = [
  { path: "", redirectTo: "Login", pathMatch: "full" },
  { path: "Home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "Intro", component: IntroComponent },
  { path: "Splash", loadChildren: "./splash/splash.module#SplashPageModule" },
  { path: "Login", loadChildren: "./login/login.module#LoginPageModule" },
  { path: "Login/:dontcheckintroflag", component: LoginPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
