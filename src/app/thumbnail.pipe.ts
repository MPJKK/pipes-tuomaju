import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let size = '320';

    if (args === 'small') {
      size = '160';
    } else if (args === 'medium') {
      size = '320';
    } else if (args === 'large') {
      size = '640';
    }

    return value.substring(0, value.lastIndexOf('.')) + '-tn' + size + '.png';
  }
}
