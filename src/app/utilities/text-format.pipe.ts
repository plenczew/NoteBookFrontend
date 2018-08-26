import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

  transform(data: string, length: number): string {
    if (data.length < length) {
      return data;
    } else {
      return data.substring(0, length) + '...';
    }
  }
}

