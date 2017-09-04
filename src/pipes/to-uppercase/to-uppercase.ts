import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ToUppercasePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'maiusculo',
})
export class ToUppercasePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    return value.toUpperCase();
  }
}
