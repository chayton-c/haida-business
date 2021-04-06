import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { LineLocationDataRoutingModule } from './line-location-data-routing.module';
import { LineLocationDataListComponent } from './list/list.component';

const COMPONENTS: Type<void>[] = [
  LineLocationDataListComponent];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    LineLocationDataRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class LineLocationDataModule { }
