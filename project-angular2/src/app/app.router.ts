import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { AboutComponent } from './about/about.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

export const router: Routes = [
    { path: '', redirectTo: 'work-experience', pathMatch: 'full' },    
    { path: 'work-experience', component: WorkExperienceComponent },
    { path: 'about', component: AboutComponent },
    { path: 'job/:id', component: JobComponent }    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

