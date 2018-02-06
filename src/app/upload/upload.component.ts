import {Component, OnInit} from '@angular/core';
import {Media} from '../models/media';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  file = new Media('');

  formData = new FormData();

  constructor(private http: HttpClient, private mediaService: MediaService) {
  }

  setFile(e) {
    console.log(e.target.files['0']);
    const file: File = e.target.files['0'];
    this.formData.append('file', file);
  }

  uploadFile() {

    const token = localStorage.getItem('loggedToken');
    this.formData.append('title', this.file.title);
    this.formData.append('description', this.file.description);

    this.mediaService.uploadFile(this.formData, token).subscribe(response => {
      console.log(response);
    });

  }

  ngOnInit() {
  }

}
