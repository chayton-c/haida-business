import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import {_HttpClient, TitleService} from '@delon/theme';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Organization } from '../../../pojos/organization/organization';
import { User } from '../../../pojos/user/user';
import { ConstructionControlPlan, ConstructionControlPlanConstant, } from '../../../pojos/construction-control-plan/construction-control-plan';
import { Station } from '../../../pojos/station/station';
import { HttpUtils } from '../../../shared/utils/http-utils';
import { Constant } from '../../../pojos/common/constant';
import { RailwayLine } from '../../../pojos/railway-line/railway-line';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import {ConstructionControlPlanWorkTimeEditable} from "../../../pojos/construction-control-plan/construction-control-plan-work-time";
import {UtilComponent} from "../../delon/util/util.component";

@Component({
  selector: 'app-construction-control-plan-detail',
  templateUrl: './detail.component.html',
})
export class ConstructionControlPlanDetailComponent implements OnInit {
  editIndex = -1;
  editObj = {};

  validateForm: FormGroup;
  constant: Constant = new Constant();
  constructionControlPlan: ConstructionControlPlan = {
    startHour: new Date(),
    endHour: new Date(),
    endKilometer: 0,
    startKilometer: 0,
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
    startTime: new Date(),
    startDistanceFromRailway: 0,
    endDistanceFromRailway: 1,
  };
  constructionConstrolPlanConstant: ConstructionControlPlanConstant = new ConstructionControlPlanConstant();
  stations: Station[] = [];
  railwayLines: RailwayLine[] = [];
  users: User[] = [];
  workshops: Organization[] = [];
  loading = false;

  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;

  get items(): FormArray {
    return this.validateForm.controls.items as FormArray;
  }

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
  setKilometer() {
    ConstructionControlPlan.setKilometer(this.constructionControlPlan);
  }

  setStartHour(time: Date) {
    console.log(time);
    this.constructionControlPlan.startHour = time;
  }

  setEndHour(time: Date) {
    console.log(time);
    this.constructionControlPlan.endHour = time;
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
        this.router.navigate(['/construction-control-plan/list']);
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
    this.http.post('/api/backstage/constructionControlPlan/info', null, { id: this.constructionControlPlan.id }).subscribe((res) => {
      this.constructionControlPlan = res.constructionControlPlan;
      ConstructionControlPlan.splitKilometer(this.constructionControlPlan);

      this.stations = res.stations;
      // if (this.stations && this.stations.length > 0 && !this.constructionControlPlan.startStationId) this.constructionControlPlan.startStationId = this.stations[0].id;
      this.railwayLines = res.railwayLines;

      this.users = res.users;

      this.validateForm.controls.code.disable();

      // 必须先选线路
      console.log(this.constructionControlPlan.railwayLineId);
      if (!this.constructionControlPlan.railwayLineId) {
        this.validateForm.controls.signInStationId.disable();
        this.validateForm.controls.startStationId.disable();
        this.validateForm.controls.endStationId.disable();
      }

      this.loading = false;
    });
  }

  updateRailwayLine() {
    if (this.constructionControlPlan.railwayLineId) {
      this.validateForm.controls.signInStationId.enable();
      this.validateForm.controls.startStationId.enable();
      this.validateForm.controls.endStationId.enable();
      this.http
        .post('/api/client/station/getStationsByRailwayLineId', null, { railwayLineId: this.constructionControlPlan.railwayLineId })
        .subscribe((res) => {
          this.stations = res.obj;
        });
    }
  }

  constructor(
    public http: _HttpClient,
    private activatedRoute: ActivatedRoute,
    private msg: NzMessageService,
    private router: Router,
    private titleService: TitleService,
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
      startHour: [''],
      endHour: [''],
      warnStatus: [''],
      endDistanceFromRailway: [''],
      workInfo: [''],
      protectiveMeasuresInfo: [''],
      startKilometerKilometerPart: [''],
      startKilometerMeterPart: [''],
      endKilometerKilometerPart: [''],
      endKilometerMeterPart: [''],
      supervisionDepartmentAndPrincipalName: [''],
      equipmentMonitoringDepartmentAndPrincipalName: [''],
      remarks: [''],
      starRating: [''],
      auditDepartment: [''],
      constructionType: [''],
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('方案详情');
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams.constructionControlPlanId) {
        this.constructionControlPlan.id = queryParams.constructionControlPlanId;
        if (!this.constructionControlPlan.id) this.constructionControlPlan.id = UtilComponent.uuid();
      }
      // if (queryParams.constructionControlPlanId) {
      //   this.constructionControlPlanId = UtilComponent.uuid();
      // } else {
      //   this.constructionControlPlanId = queryParams.constructionControlPlanId;
      // }
    });
    this.loadDataFromServer();
  }

  // opcMark可编辑列表部分
  constructionControlPlanWorkTimeEditCache: { [key: string]: { edit: boolean; data: ConstructionControlPlanWorkTimeEditable } } = {};
  constructionControlPlanWorkTimes: ConstructionControlPlanWorkTimeEditable[] = [];
  constructionControlPlanWorkTimeLoading = false;

  startEdit(id: string): void {
    this.constructionControlPlanWorkTimeEditCache[id].edit = true;
  }

  saveEdit(id: string): void {
    let opcMark = this.constructionControlPlanWorkTimeEditCache[id].data;

    this.http.post('/api/backstage/opcMark/saveOrUpdate', null, {
      id: opcMark.id,
    })
      .subscribe((res) => {
        if (!res.success) return;
        this.constructionControlPlanWorkTimeLoading = false;
        this.constructionControlPlanWorkTimeEditCache[id].edit = false;
        if (res.opcMarks) this.constructionControlPlanWorkTimes = res.opcMarks;
        const index = this.constructionControlPlanWorkTimes.findIndex(item => item.id === id);
        opcMark.persistent = true;
        this.constructionControlPlanWorkTimes[index] = opcMark;

        this.updateEditCache();
      });
  }

  updateEditCache(): void {
    this.constructionControlPlanWorkTimes.forEach(item => {
      this.constructionControlPlanWorkTimeEditCache[item.id] = {
        edit: false,
        data: {...item}
      };
    });
  }

  cancelEdit(id: string): void {
    const index = this.constructionControlPlanWorkTimes.findIndex(item => item.id === id);
    let opcMark = this.constructionControlPlanWorkTimes[index];

    let persistent = opcMark.persistent;
    if (persistent) {
      this.constructionControlPlanWorkTimeEditCache[id] = {
        data: {...this.constructionControlPlanWorkTimes[index]},
        edit: false,
      };
    } else {
      this.constructionControlPlanWorkTimes = this.constructionControlPlanWorkTimes.filter(value => value.persistent);
      this.updateEditCache();
    }
  }
}
