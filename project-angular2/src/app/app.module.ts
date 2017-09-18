import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { AboutComponent } from './about/about.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

import { JobService } from './job.service';

// Imports for loading & configuring the in-memory web api
// import { InMemoryDataService } from './in-memory-data.service'; 

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    AboutComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxGalleryModule,
    MaterialModule,
    BootstrapGridModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    routes
  ],
  providers: [ JobService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
