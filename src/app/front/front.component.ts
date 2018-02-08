import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  mediaArray: any;

  constructor(public mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getSomeMedia('10').subscribe(data => {
      console.log(data);
      this.mediaArray = data;

      console.log(this.mediaArray);
    });
  }

}
