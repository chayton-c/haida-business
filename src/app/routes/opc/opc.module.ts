import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { OpcRoutingModule } from './opc-routing.module';
import { OpcListComponent } from './list/list.component';
import { OpcMap } from '../../shared/components/opc-map/opc-map';
import { OpcUploadComponent } from './upload/upload.component';
import { OpcDetailComponent } from './detail/detail.component';
import { OpcOpcStationComponent } from './opc-station/opc-station.component';
import { ConstructionCoordinatePlanModule } from '../construction-coordinate-plan/construction-coordinate-plan.module';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { LineStationCasecade } from '../../shared/components/casecade/line-station-casecade/line-station-casecade';
import { OrganizationCasecade } from '../../shared/components/casecade/organization-casecade/organization-casecade';

const COMPONENTS: Type<void>[] = [OpcListComponent, OpcUploadComponent, OpcDetailComponent, OpcOpcStationComponent];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [SharedModule, OpcRoutingModule, ConstructionCoordinatePlanModule, NzTreeSelectModule, NzCascaderModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, OpcMap, LineStationCasecade, OrganizationCasecade],
  exports: [OpcMap, OrganizationCasecade, LineStationCasecade],
})
export class OpcModule {}
