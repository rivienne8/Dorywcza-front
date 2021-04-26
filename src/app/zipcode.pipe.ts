import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zipcode'
})
export class ZipcodePipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (value){
      const zipcode = value.toString();
      if (zipcode.length === 5){
        return zipcode.slice(0, 2) + '-' + zipcode.slice(2);
      } else {
        return zipcode;
      }
    }
    return '';
  }
}
