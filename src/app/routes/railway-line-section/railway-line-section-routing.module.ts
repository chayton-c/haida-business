import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RailwayLineSectionLogComponent } from './log/log.component';

const routes: Routes = [

  { path: 'log', component: RailwayLineSectionLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RailwayLineSectionRoutingModule { }
