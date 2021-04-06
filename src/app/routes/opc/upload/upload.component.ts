import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {filter} from 'rxjs/operators';
import {_HttpClient} from "@delon/theme";
import {Router} from "@angular/router";
import {LineNodePojo} from "../../../pojos/railway-line/railway-line";
import {Station} from "../../../pojos/station/station";
import {NzTreeNodeOptions} from "ng-zorro-antd/core/tree";
import {StringUtils} from "../../../shared/utils/string-utils";
import {TestService} from "../../../shared/service/test.service";


@Component({
  selector: 'app-opc-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class OpcUploadComponent implements OnInit {
  listOfData = [{id: 1}]; // 啥也不传的话，列表会显示emptyData
  lineSelectTreeNodes: Array<NzTreeNodeOptions> = [];
  organizationValues: string[] = [];
  lineStationValues: string[] = [];
  stationId?: string;
  @ViewChild("constructionControlPlanPreview") constructionControlPlanPreview: any;

  constructor(
    public http: _HttpClient,
    private msg: NzMessageService,
    public injector: Injector,
    public router: Router) {
  }

  updateOrganizationValues($event: any): void {

  }
  updatelineStationValues($event: any): void {
    if (($event as string[]).length > 1) {
      this.stationId = $event[1];
      setTimeout(() => {
        this.constructionControlPlanPreview.ngOnInit();
      }, 500);
    }
  }
  ngOnInit(): void {
  }
}
