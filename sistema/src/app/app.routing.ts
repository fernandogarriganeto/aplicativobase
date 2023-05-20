import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/home/login/login.component";
import { RegisterComponent } from "./components/home/register/register.component";
import { PasswordComponent } from "./components/home/password/password.component";

const routes : Routes = [
    { path : '', component: LoginComponent },
    { path : 'acessar-conta', component: LoginComponent },
    { path : 'criar-conta', component: RegisterComponent },
    { path : 'esqueci-minha-senha', component: PasswordComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }