import {Component, Input, OnInit} from '@angular/core';
import {UploadImageService} from './upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageToUpload?: File;

  @Input()
  userId?: number;   // dlaczego tutaj musi byc ?

  constructor(private uploadImageService: UploadImageService) { }

  ngOnInit(): void {

  }

  // handleFileInput(files: FileList): void{
  //   this.imageToUpload = files[0];
  //   this.uploadFile();
  // }

  handleFileInput(event: any): void{
    this.imageToUpload = event.target.files[0];
    if (this.imageToUpload){
      this.uploadFile();
    }
  }

  uploadFile(): void {
    if (this.imageToUpload != null && this.userId != null){
      this.uploadImageService.postFile(this.imageToUpload, this.userId);
    }
  }


}
