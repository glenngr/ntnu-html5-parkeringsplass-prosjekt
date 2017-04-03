import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversearray'
})
export class ReverseArrayPipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
    if (value === undefined || value === null) {
      return [];
    }

    return value.reverse();
  }
}
