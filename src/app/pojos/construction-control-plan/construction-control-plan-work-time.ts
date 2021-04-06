export class ConstructionControlPlanWorkTime {
  id: string;
  constructionControlPlanId: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  seq?: string;
  addTime?: string;
  updateTime?: string;
  constructor(id: string, constructionControlPlanId: string) {
    this.id = id;
    this.constructionControlPlanId = constructionControlPlanId;
  }
}

export interface ConstructionControlPlanWorkTimeEditable extends ConstructionControlPlanWorkTime {
  edit?: boolean
  persistent?: boolean; // 持久状态(已插入到数据库的)
}
