import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: 'login',component:LoginComponent}, //so if the url path matches this, then the relevant component is injected.
    //Using Routes. router outlet tag is used.
    {path: 'account', component:AccountComponent},
    {path: 'profile', component:ProfileComponent}
];