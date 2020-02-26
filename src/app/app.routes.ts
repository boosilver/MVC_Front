import { Routes } from '@angular/router';
import { InputdataComponent } from './inputdata/inputdata.component';
import { OutputComponent } from './output/output.component';
import { JoinComponent } from './join/join.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const AppRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'inputdata', component: InputdataComponent},
    { path: 'output', component: OutputComponent},
    { path: 'join', component: JoinComponent},
    { path: 'dashboard', component: DashboardComponent},

    
];
