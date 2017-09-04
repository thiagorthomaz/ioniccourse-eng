import { NgModule } from '@angular/core';
import { ToUppercasePipe } from './../pipes/to-uppercase/to-uppercase';
import { OrderByPipe } from './../pipes/order-by/order-by';
import { SearchPipe } from './../pipes/search/search';
@NgModule({
	declarations: [ToUppercasePipe,
    OrderByPipe,
    SearchPipe],
	imports: [],
	exports: [ToUppercasePipe,
    OrderByPipe,
    SearchPipe]
})
export class PipesModule {}
