import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the HighlightDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[highlight]' // Attribute selector
})
export class HighlightDirective {

  constructor(el: ElementRef) {

    el.nativeElement.style.fontWeight = 'bold';
    el.nativeElement.style.color = 'red';



  }

}
