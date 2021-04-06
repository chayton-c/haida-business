import { Component, Injector, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Router } from '@angular/router';
import {NzMessageService} from "ng-zorro-antd/message";
import {User} from "../../../pojos/user/user";

interface FormParams {
  displayName: string;
  roleName: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
})
export class UserListComponent implements OnInit {
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<string>();
  formParams: FormParams = {
    displayName: '',
    roleName: '',
  };
  users: User[] = [];
  loading = true;
  total = 1;
  pageSize = 5;
  pageIndex = 1;

  loadDataFromServer(pageIndex: number, pageSize: number, formParams: FormParams): void {
    this.loading = true;

    const params = {
      pageSize: pageSize,
      currentPage: pageIndex,
      displayName: formParams.displayName,
      roleName: formParams.roleName,
    };

    this.http.post('/api/backstage/user', null, params).subscribe((res) => {
      this.loading = false;
      this.users = res.users;
      this.total = res.page.dataTotal;
    });
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) this.setOfCheckedId.add(id);
    else this.setOfCheckedId.delete(id);
  }

  onAllChecked(checked: boolean): void {
    this.users.forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.users;
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  deleteUser(): void {
    let userIds: string[] = [];
    this.setOfCheckedId.forEach((value) => userIds.push(value));
    if (userIds.length == 0) {
      this.msg.error('请选择要删除的用户');
      return;
    }

    this.http.post('/api/backstage/user/deleteUser', null, {userIds: userIds.toString()}).subscribe((res) => {
      if (!res.success) return;

      this.msg.info('删除成功');
      this.loadDataFromServer(this.pageIndex, this.pageSize, this.formParams);
    });
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.loadDataFromServer(pageIndex, pageSize, this.formParams);
  }

  constructor(public http: _HttpClient, public injector: Injector, public router: Router, public msg: NzMessageService) {}

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, this.formParams);
  }
}
