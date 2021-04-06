export interface Station {
  id: string;
  name: string;
  code: string;
  railwayLineId: string;
  seq: number;
  bureauId: string;
  sectionId: string;
  workshopId: string;
  sectionName?: string;
  workshopName?: string;
  lineName?: string;
}
