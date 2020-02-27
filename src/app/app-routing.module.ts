import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {AddCardComponent} from './add-card/add-card.component';
// import {LoginComponent} from './pages/login/login.component';
// import {SignupComponent} from './pages/signup/signup.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'details/:city', component: DetailsComponent},
    {path: 'add', component: AddCardComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'signup', component: SignupComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}