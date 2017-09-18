import { Injectable } from '@angular/core';
import { JOB_LIST, JOB_IMAGES } from './job.config';
import { JobDefinition } from './jobdefinition';
import { IJobImage } from './jobimage';

@Injectable()
export class JobService {

  constructor() { }

  getJobDefinitionList(): Promise<JobDefinition[]> {
    return  Promise.resolve(JOB_LIST);
  }

  getJobDefinition(id: number) : Promise<JobDefinition> {
 	  return this.getJobDefinitionList()
               .then(jobDefinitionList => jobDefinitionList.find(job => job.id === id));
  }

  getJobImageList(): Promise<IJobImage[]> {
    return  Promise.resolve(JOB_IMAGES);
  }

  getJobImages(id: number) : Promise<IJobImage> {
    return this.getJobImageList()
               .then(jobImages => jobImages.find(image => image.id === id));
  }
}
