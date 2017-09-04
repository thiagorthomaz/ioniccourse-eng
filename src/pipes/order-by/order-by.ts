import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the OrderByPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(array: any[], field: string): any[] {
    if (!array) return [];
    if (!field) return array;

    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      }
      else if (a[field] > b[field]) {
        return 1;
      }
      else {
        return 0;
      }
    });

    return array;
  }
}
