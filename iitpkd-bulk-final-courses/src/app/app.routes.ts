import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { PersonalinfoComponent } from './components/page/personalinfo/personalinfo.component';
import { UploadComponent } from './components/page/upload/upload.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'home/courses', component: PersonalinfoComponent},
    {path: 'home/courses/upload', component: UploadComponent}
];
