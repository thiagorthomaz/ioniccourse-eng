import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], field: string, value: string) {
    if (!items) return [];
    if (!value || value.length == 0) return items;
    return items.filter(item => item[field].toLowerCase().indexOf(value.toLowerCase()) != -1);
  }
}
