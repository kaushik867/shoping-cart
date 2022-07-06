import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minTextLength'
})
export class MinTextLengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let str = value;
    if(value && value.length > 160) {
        return value.slice(0,160) + '... more';
    }
    return str;
  }

}
