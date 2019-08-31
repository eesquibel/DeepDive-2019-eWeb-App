import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, key: string, match: string): any {
    return value.filter(item => {
      if (match === undefined) {
        return true;
      }

      if (key in item) {
        return (item[key] as string).toLowerCase().startsWith(match.toLowerCase());
      }

      return false;
    });
  }

}
