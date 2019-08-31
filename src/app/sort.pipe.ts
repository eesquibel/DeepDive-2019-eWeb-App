import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>, key: string): any {
    const sorted = value.sort((a, b) => {
      if (key === undefined) {
        return 0;
      }

      if (key in a && key in b) {
        return a[key] == b[key] ? 0 : a[key] > b[key] ? 1 : -1;
      }

      return 0;
    });

    value = null;

    return sorted;
  }
}
