import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { Location } from '@angular/common';

import { JobService }  from '../job.service';
import { JobDefinition } from '../jobdefinition';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
    // private jobDefinition: Observable<JobDefinition>;
    private jobDefinition: JobDefinition;

    private jobOptions: NgxGalleryOptions[];
    private jobImages: NgxGalleryImage[];

    constructor(private jobService: JobService,
                private location: Location,
                private route: ActivatedRoute) {}

    ngOnInit(): void {

        this.jobOptions = [
            {
                "previewFullscreen": true,
                "previewCloseOnClick": true,
                "previewCloseOnEsc": true,
                "previewKeyboardNavigation": true,
                "thumbnailsColumns": 3,
                "thumbnailsRows": 2,
                "thumbnailsPercent": 60,
                "imagePercent": 100,
                "thumbnailMargin": 5,
                "thumbnailsMargin": 5,
                "height": "500px"
            },
            // max-width 500
            {
                "breakpoint": 500,
                "width": "300px",
                "height": "300px",
                "thumbnailsColumns": 3
            },
            // max-width 300
            {
                "breakpoint": 300,
                "width": "150px",
                "height": "300px",
                "thumbnailsColumns": 2
            }
        ];

        // Set job images
        this.route.params
                .switchMap((params: ParamMap) => this.jobService.getJobImages(+params['id']))
                .subscribe(ngxGalleryImageArray => this.jobImages = ngxGalleryImageArray.jobImageArray );
    }

    goBack(): void {
      this.location.back();
    }
}
