import {Component, Input, OnInit} from '@angular/core';
import {UploadImageService} from './upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements  OnInit {
  imageToUpload?: File;

  @Input()
  userId?: number;   // is it necessary ?
  @Input()
  avatarParamValue?: boolean;
  @Input()
  changeIcon?: boolean;
  iconName?: string;

  constructor(private uploadImageService: UploadImageService) { }

  ngOnInit(): void {
    if (this.changeIcon){
      this.iconName = 'change_circle';
    } else {
      this.iconName = 'add';
    }
  }


  handleFileInput(event: any): void{
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      throw new  Error('Only images are supported.');
    }

    this.imageToUpload = event.target.files[0];

    if (this.imageToUpload){
      this.uploadFile();
    }
  }

  uploadFile(): void {
    if (this.imageToUpload != null && this.userId != null && this.avatarParamValue != null){
      this.uploadImageService.postFile(this.imageToUpload, this.userId, `${this.avatarParamValue}`);
    }
  }



}
