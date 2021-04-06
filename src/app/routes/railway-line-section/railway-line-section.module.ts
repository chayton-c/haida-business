import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { RailwayLineSectionRoutingModule } from './railway-line-section-routing.module';
import { RailwayLineSectionLogComponent } from './log/log.component';

const COMPONENTS: Type<void>[] = [
  RailwayLineSectionLogComponent];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    RailwayLineSectionRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class RailwayLineSectionModule { }
