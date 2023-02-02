export interface DataModel {
  inspectionItem: number;
  lastInspectionTime: string;
  inspectionWarn: number;
  inspectionFault: number;
  inspectionError: number;
  inspectionNormal: number;
  underImplementation: number;
  successImplementation: number;
  errorImplementation: number;
  notStarted: number;
  inspectionItems: {
    xAxisArr: string[];
    errorData: number[];
    warnData: number[];
    faultData: number[];
  };
  inspectionTeam: {
    xAxisArr: string[];
    errorData: number[];
    warnData: number[];
    faultData: number[];
  };
}
