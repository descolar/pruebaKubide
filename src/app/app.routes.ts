import { RouterModule, Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { InfoGroupComponent } from './components/info-group/info-group.component';
import { AddGroupComponent } from './components/add-group/add-group.component';

const APP_ROUTES: Routes = [

    {path: 'home', component: MainComponent },
    {path: 'details', component: InfoGroupComponent },
    {path: 'add', component: AddGroupComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home'},

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES , { useHash: true })