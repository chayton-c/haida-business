import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
import {
  ConstructionControlPlan,
  ConstructionControlPlanConstant,
} from '../../../../pojos/construction-control-plan/construction-control-plan';
import { Station } from '../../../../pojos/station/station';
import { User } from '../../../../pojos/user/user';
import { Organization } from '../../../../pojos/organization/organization';
import { HttpUtils } from '../../../utils/http-utils';
import { RailwayLine } from '../../../../pojos/railway-line/railway-line';
import { NzDescriptionsSize } from 'ng-zorro-antd/descriptions';
import {Equipment} from "../../../../pojos/equipment/equipment";

@Component({
  selector: 'construction-control-plan-preview-info',
  templateUrl: './construction-control-plan-preview-info.html',
})
export class ConstructionControlPlanPreviewInfo {
  @Input() hideTitle = false;
  @Input() enableFields = false;
  @Input() constructionControlPlanId?: string;
  @Input() hideshowPlanMapButton = false;


  equipments: Equipment[] = [];
  @Input() public equipmentId: string = '';
  @Output() public equipmentIdChange = new EventEmitter();
  onEquipmentIdChanges($event: any) {
    this.equipmentIdChange.emit($event);
  }

  validateForm: FormGroup;
  constructionControlPlan: ConstructionControlPlan = {
    endKilometer: 0, startKilometer: 0,
    id: '',
    approveStatus: 0,
    processStatus: 0,
    investigationProgressStatus: 0,
    code: '',
    executeUserId: '',
    finishStatus: 0,
    influenceArea: '',
    kilometerMark: 0,
    name: '',
    railwayLineStatus: 0,
    signInStationId: '',
    signInUserId: '',
    warnStatus: 0,
    workInfo: ''
  };
  startKilometerKilometerPart: number = 0;
  startKilometerMeterPart: number = 0;
  endKilometerKilometerPart: number = 0;
  endKilometerMeterPart: number = 0;
  constructionConstrolPlanConstant: ConstructionControlPlanConstant = new ConstructionControlPlanConstant();
  stations: Station[] = [];
  railwayLines: RailwayLine[] = [];
  users: User[] = [];
  workshops: Organization[] = [];
  loading = false;

  setConstructionControlPlanId(id: string) {
    this.constructionControlPlanId = id;
  }

  // 施工计划详情模态框部分
  showPlanMap = false;
  showPlanMapFunction() {
    this.showPlanMap = true;
  }

  setKilometer() {
    this.constructionControlPlan.startKilometer = 0;
    this.constructionControlPlan.endKilometer = 0;
    if (this.startKilometerKilometerPart) this.constructionControlPlan.startKilometer += this.startKilometerKilometerPart * 1000;
    if (this.startKilometerMeterPart) this.constructionControlPlan.startKilometer += this.startKilometerMeterPart;
    if (this.endKilometerKilometerPart) this.constructionControlPlan.endKilometer += this.endKilometerKilometerPart * 1000;
    if (this.endKilometerMeterPart) this.constructionControlPlan.endKilometer += this.endKilometerMeterPart;
  }

  // 提交岗位信息
  execute() {
    this.http
      .post('/api/backstage/constructionControlPlan/saveOrUpdate', null, HttpUtils.transform(this.constructionControlPlan))
      .subscribe((res) => {
        if (!res.success) return;

        this.constructionControlPlan = res.role;
        this.msg.success(res.msg);
        //方案提交添加弹窗，提交后默认路由到“方案提交”
        this.router.navigate(['/construction-coordinate-plan/submit-list']);
      });
  }

  loadDataFromServer(): void {
    this.http
      .post('/api/backstage/constructionControlPlan/info', null, {
        id: this.constructionControlPlanId,
      })
      .subscribe((res) => {
        this.constructionControlPlan = res.constructionControlPlan;
        this.equipments = res.equipments;
        let startKilometer = this.constructionControlPlan.startKilometer;
        if (startKilometer) {
          this.startKilometerKilometerPart = Number(Math.floor(startKilometer / 1000).toFixed(0));
          this.startKilometerMeterPart = Number(startKilometer % 1000);
        }
        let endKilometer = this.constructionControlPlan.endKilometer;
        if (endKilometer) {
          this.endKilometerKilometerPart = Number(Math.floor(endKilometer / 1000).toFixed(0));
          this.endKilometerMeterPart = endKilometer % 1000;
        }

        this.stations = res.stations;
        this.railwayLines = res.railwayLines;

        this.users = res.users;

        if (!this.enableFields) {
          this.validateForm.controls.name.disable();
          this.validateForm.controls.railwayLineId.disable();
          this.validateForm.controls.approveStatus.disable();
          this.validateForm.controls.executeUserId.disable();
          this.validateForm.controls.finishStatus.disable();
          this.validateForm.controls.constructionProjectInfo.disable();
          this.validateForm.controls.influenceArea.disable();
          this.validateForm.controls.startKilometer.disable();
          this.validateForm.controls.constructionContentAndInfluenceArea.disable();
          this.validateForm.controls.constructionDepartmentAndPrincipalName.disable();
          this.validateForm.controls.needCooperate.disable();
          this.validateForm.controls.cooperateLocationInfo.disable();
          this.validateForm.controls.constructDepartment.disable();
          this.validateForm.controls.endKilometer.disable();
          this.validateForm.controls.railwayLineStatus.disable();
          this.validateForm.controls.signInStationId.disable();
          this.validateForm.controls.signInUserId.disable();
          this.validateForm.controls.startTime.disable();
          this.validateForm.controls.startStationId.disable();
          this.validateForm.controls.endStationId.disable();
          this.validateForm.controls.endTime.disable();
          this.validateForm.controls.warnStatus.disable();
          this.validateForm.controls.startDistanceFromRailway.disable();
          this.validateForm.controls.endDistanceFromRailway.disable();
          this.validateForm.controls.constructionPeriod.disable();
          this.validateForm.controls.workInfo.disable();
          this.validateForm.controls.protectiveMeasuresInfo.disable();
          this.validateForm.controls.constructionStatus.disable();
          this.validateForm.controls.constructionLevel.disable();
          this.validateForm.controls.startKilometerKilometerPart.disable();
          this.validateForm.controls.startKilometerMeterPart.disable();
          this.validateForm.controls.endKilometerKilometerPart.disable();
          this.validateForm.controls.endKilometerMeterPart.disable();
        }

        this.loading = false;
      });
  }

  constructor(
    public http: _HttpClient,
    private activatedRoute: ActivatedRoute,
    private msg: NzMessageService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.validateForm = this.fb.group({
      code: ['', [Validators.required]],
      name: [''],
      railwayLineId: ['', [Validators.required]],
      approveStatus: [''],
      executeUserId: [''],
      finishStatus: [''],
      constructionStatus: [''],
      constructionProjectInfo: [''],
      influenceArea: [''],
      startKilometer: [''],
      constructionContentAndInfluenceArea: [''],
      constructionDepartmentAndPrincipalName: [''],
      constructionPeriod: [''],
      needCooperate: [''],
      cooperateLocationInfo: [''],
      constructDepartment: [''],
      endKilometer: [''],
      railwayLineStatus: [''],
      signInStationId: [''],
      signInUserId: [''],
      startTime: [''],
      startStationId: [''],
      endStationId: [''],
      endTime: [''],
      warnStatus: [''],
      startDistanceFromRailway: [''],
      endDistanceFromRailway: [''],
      workInfo: [''],
      protectiveMeasuresInfo: [''],
      constructionLevel: [''],
      startKilometerKilometerPart: [''],
      startKilometerMeterPart: [''],
      endKilometerKilometerPart: [''],
      endKilometerMeterPart: [''],
    });
  }

  ngOnInit(): void {
    this.loadDataFromServer();
    this.showPlanDetailFunction();
  }

  // 施工范围预览模态框部分
  showPlanDetail = false;
  showPlanDetailFunction() {
    this.showPlanDetail = true;
  }
}
