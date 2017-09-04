import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoomCardComponent } from './room-card/room-card';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
	declarations: [RoomCardComponent],
	imports: [CommonModule, IonicModule, PipesModule ],
	exports: [RoomCardComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class ComponentsModule {}
