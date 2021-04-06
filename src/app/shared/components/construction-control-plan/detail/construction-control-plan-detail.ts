import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { Constant } from '../../../../pojos/common/constant';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

@Component({
  selector: 'construction-control-plan-detail',
  templateUrl: './construction-control-plan-detail.html',
  styleUrls: ['./construction-control-plan-detail.css'],
})
export class ConstructionControlPlanDetail {
  @Input() hideTitle = false;
  @Input() enableFields = false;
  @Input() constructionControlPlanId?: string;

  validateForm: FormGroup;
  constant: Constant = new Constant();
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
    workInfo: '',
    startTime: new Date()
  };
  constructionConstrolPlanConstant: ConstructionControlPlanConstant = new ConstructionControlPlanConstant();
  stations: Station[] = [];
  railwayLines: RailwayLine[] = [];
  users: User[] = [];
  workshops: Organization[] = [];
  loading = false;

  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;

  disabledStartDate = (startTime: Date): boolean => {
    if (differenceInCalendarDays(startTime, new Date()) < 0) return true;
    if (!startTime || !this.constructionControlPlan.endTime) return false;
    return startTime > this.constructionControlPlan.endTime;
  };

  disabledEndDate = (endTime: Date): boolean => {
    if (!endTime || !this.constructionControlPlan.startTime) {
      return false;
    }
    return endTime < this.constructionControlPlan.startTime;
  };

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endDatePicker.open();
    }
  }

  setConstructionControlPlanId(id: string) {
    this.constructionControlPlanId = id;
  }

  clearConstructionLevel() {
    this.constructionControlPlan.constructionLevel = undefined;
  }
  setKilometer() {
    ConstructionControlPlan.setKilometer(this.constructionControlPlan);
  }

  // 保存
  save(next?: (res: any) => void) {
    this.http
      .post('/api/backstage/constructionControlPlan/saveOrUpdate', null, HttpUtils.transform(this.constructionControlPlan))
      .subscribe((res) => {
        if (!res.success) return;

        this.constructionControlPlan = res.role;
        this.msg.success(res.msg);
        if (next) next(res);
      });
  }

  // 保存并提交
  execute(next?: (res: any) => void) {
    this.http
      .post('/api/backstage/constructionControlPlan/saveOrUpdateThenExecute', null, HttpUtils.transform(this.constructionControlPlan))
      .subscribe((res) => {
        if (!res.success) return;

        this.constructionControlPlan = res.role;
        this.msg.success(res.msg);
        if (next) next(res);
      });
  }

  loadDataFromServer(): void {
    this.http
      .post('/api/backstage/constructionControlPlan/info', null, {
        id: this.constructionControlPlanId,
      })
      .subscribe((res) => {
        this.constructionControlPlan = res.constructionControlPlan;
        ConstructionControlPlan.splitKilometer(this.constructionControlPlan);

        this.stations = res.stations;
        if (this.stations && this.stations.length > 0) this.constructionControlPlan.startStationId = this.stations[0].id;
        this.railwayLines = res.railwayLines;

        this.users = res.users;

        this.validateForm.controls.code.disable();

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

  setEditableOrNot(value: any) {
    if (value == this.constant.FALSE) {
      this.constructionControlPlan.cooperateLocationInfo = '';
      this.constructionControlPlan.protectiveMeasuresInfo = '';
      this.validateForm.controls.cooperateLocationInfo.disable();
      this.validateForm.controls.protectiveMeasuresInfo.disable();
    } else if (this.enableFields) {
      this.validateForm.controls.cooperateLocationInfo.enable();
      this.validateForm.controls.protectiveMeasuresInfo.enable();
    }
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
      startTime: ['', [Validators.required]],
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
  }
}
