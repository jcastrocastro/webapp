import { Component, HostListener, OnInit } from '@angular/core';

import { JobDefinition } from '../jobdefinition';
import { JobService } from '../job.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
    jobList: JobDefinition[];

    // Default number of columns
    numColumn: any = 3;
    widthTile: any;

    basicRowHeight = 80;
    fixedCols = 4;
    fixedRowHeight = 100;
    ratioGutter = 1;
    fitListHeight = '400px';
    ratio = '4:1';

    // Size according to boostrap grid
    extraLargeSize = 1200;
    largeSize = 992;
    mediumSize = 768;
    smallSize = 576;

    constructor(private jobService: JobService ) { }

    ngOnInit(): void {
      // While loading the page
      const widthScreen = window.innerWidth;
      if (widthScreen >= this.extraLargeSize) {
        this.numColumn = 3;
      } else if  (widthScreen >= this.mediumSize) {
        this.numColumn = 3;
      } else {
        this.numColumn = 1;
      }

      // get job list
      this.getJobList();
    }

    // Any time resize the page
    @HostListener('window:resize', ['$event'])
    onResize(event) {
      if (event){
        const element = event.target.innerWidth;

        if (element >= this.extraLargeSize) { // Extra large. Bootstrap grid info. 1200
          this.numColumn = 3;
        } else if (element >= this.largeSize) { // Large 992
          this.numColumn = 3;
        } else if (element >= this.mediumSize) { // Medium 768
          this.numColumn = 3;
        } else if (element >= this.smallSize) { // Small 576
          this.numColumn = 1;
        } else if (element < this.smallSize) { // Extra small
          this.numColumn = 1;
        }
      }
    }

    getJobList(): void {
      this.jobService
          .getJobDefinitionList()
          .then(joblist => this.jobList = joblist);
    }

}
