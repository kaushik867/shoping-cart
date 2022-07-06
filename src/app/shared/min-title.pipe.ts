import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minTitle'
})
export class MinTitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const title = value;

    if(value && value.length > 40) {
      return value.slice(0, 40) + '...';
    }
    return title;
  }

}
